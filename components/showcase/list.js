import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import classNames from 'classnames'

import { format, parse } from 'url'
import { Component, PureComponent } from 'react'
import { List, WindowScroller, defaultCellRangeRenderer } from 'react-virtualized'
import { directionalProperty } from 'polished'
import { Spring, animated, Transition, config } from 'react-spring'
import Measure from 'react-measure'
import ImageZoom from 'react-medium-image-zoom'

import Button from '../button'
import Container from '../container'
import Fade from '../fade'
import { MediaQueryConsumer } from '../media-query'
import ArrowUpIcon from '../icons/arrow-up'
import HeartIcon from '../icons/heart'

import { sortOrder, mapping } from '../../showcase-manifest'

const SUBMIT_URL = `https://spectrum.chat/thread/e425a8b6-c9cb-4cd1-90bb-740fb3bd7541`

const GAP_X = 48
const GAP_Y = 48
const ROW_HEIGHT = 250 + GAP_Y

function getData(category) {
  return sortOrder.filter(id => {
    return category === 'all' || (mapping[id].tags && mapping[id].tags.indexOf(category) !== -1)
  })
}

let dataCategory = 'All'
let dataSource = getData('all')

function changeRoute(item) {
  if (!item) {
    Router.router.push('/showcase', '/showcase', { shallow: true })
  } else {
    Router.router.push('/showcase?item=' + item, '/showcase/' + item, { shallow: true })
  }
}

const getRowHeight = ({index}, columnCount) => {
  if (columnCount < 3) {
    // no highlighted
    return 1
  }
  let height = 1, startIndex = index * columnCount
  for (let i = 0; i < columnCount; ++i) {
    if (dataSource[startIndex + i] && mapping[dataSource[startIndex + i]].highlighted) {
      height *= (columnCount - 1)
    }
  }
  return height
}

const SitePreviewPlaceholder = () => <div style={{
  flex: 1,
  height: '100%'
}} />

const SitePreview = withRouter(class extends PureComponent {
  state = { open: false }
  loadDetail = () => {
    changeRoute(this.props.siteData.internalUrl)
    this.setState({ open: true })
  }  
  closeDetail = () => {
    changeRoute()
    this.setState({ open: false })
  }
  getSlugPosition = () => {
    if (!this.previewEl) {
      return {}
    }
    if (this.state.open) {
      let { top, left, bottom, right } = this.previewEl.getBoundingClientRect()
      let margin = 32
      return { 
        opacity: 1,
        top: -top + margin,
        left: -left + margin, 
        right: right - window.innerWidth + margin, 
        bottom: bottom - window.innerHeight + margin 
      }
    } else {
      return {}
    }
  }
  componentWillReceiveProps(newProps) {
    let open = newProps.router.query.item === this.props.siteData.internalUrl
    if (open !== this.state.open) {
      this.setState({ open })
    }
  }
  render () {
    const { siteData, flex, isVisible, isScrolling, isTablet } = this.props
    let { open } = this.state

    if (isScrolling && open) {
      open = false
      this.closeDetail()
    }
    // const { height, width, top, left, outerWidth, outerHeight } = this.state

    let src = siteData.src.replace('/showcases/', '/showcase-thumbnails/')

    return <div className={`site-container${siteData.highlighted && !isTablet ? ' highlighed' : ''}`} key={`site-${siteData.internalUrl}`}>
        <Spring native from={{
          opacity: 1,
          top: 24,
          left: 24,
          right: 24,
          bottom: 24,
        }}
        to={this.getSlugPosition()}
        config={{ ...config.default, restSpeedThreshold: 1, restDisplacementThreshold: 0.1 }}>
          {styles => <animated.div className={classNames('slug', { open })} style={{
            ...styles,
            position: 'absolute',
            backgroundColor: '#ccc',
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            zIndex: open ? 1001 : 0,
            pointerEvents: 'none',
            borderRadius: 7,
            boxShadow: `0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02)`
            // border: '1px solid'
            // boxShadow: `rgba(0, 0, 0, 0.15) 0px 10px 40px 10px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px`
          }}/>}
        </Spring>
        <div className='content' ref={el => this.previewEl = el}>
          <Fade show={isVisible}>
            <div className={classNames('preview', { open })} onClick={this.loadDetail}>
              <div className='shadow'>
                <div className='info'>
                  <h3 className={siteData.highlighted && !isTablet ? 'f2' : 'f4'}>{siteData.title}</h3>
                  <Link href={siteData.link}><a className='f5'>{siteData.link}</a></Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <style jsx>{`
        .site-container {
          position: relative;
          flex: ${flex || 1};
          height: ${isTablet ? 'unset' : '100%'};

          -webkit-user-select: none;
          -moz-user-select: none;
            -ms-user-select: none;
                user-select: none;
    
          -webkit-touch-callout: none;
          -khtml-user-select: none;
          -ms-touch-action: pan-y;
              touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
        }
        .content {
          position: relative;
          width: 100%;
          height: 100%;
          // padding: ${GAP_Y / 2}px ${GAP_X / 2}px ${GAP_Y / 2} ${GAP_X / 2}px;
        }
        .preview {
          position: absolute;
          // width: 100%;
          // height: 100%;
          top: ${GAP_Y / 2}px;
          bottom: ${GAP_Y / 2}px;
          left: ${GAP_X / 2}px;
          right: ${GAP_X / 2}px;
          background-image: url(${src});
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02);
          border-radius: 7px;
          text-align: center;
          overflow: hidden;
          background-color: #FFFFFF;
          // transition: all .2s ease;
          cursor: zoom-in;
        }
        .preview .shadow {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          height: 100%;
          color: white;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3));
          transition: opacity .2s ease;
          opacity: 0;
        }
        .info {
          width: 100%;
          padding: 1.5rem;
          background: rgba(0, 0, 0, 0.8);
          text-align: center;
          transition: opacity .6s ease;
          opacity: 0;
        }
        .preview:hover {
          // transform: translateY(-5px);
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
        }
        .preview:hover .shadow {
          opacity: 1;
        }
        .preview:hover .info {
          opacity: 1;
        }
        .preview {
          transition: all 10ms ease 1s;
        }
        .preview.open {
          visibility: hidden;
          transition: none;
        }
        .slug {
          position: absolute;
          left: 24px;
          top: 24px;
          right: 24px;
          bottom: 24px;
          background: #ccc;
          z-index: 1;
          pointer-events: none;
          background-image: url(${src});
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }
        .slug.open {
          z-index: 1001;
        }
      `}</style>
      </div>
  }
})

const getRowRender = columnCount => ({
  index,
  isScrolling,
  isVisible,
  key,
  parent,
  style
}) => {
  let height = getRowHeight({index}, columnCount)
  let content = []
  let highlighted = null

  let startIndex = index * columnCount
  for (let i = 0; i < columnCount; ++i) {
    let siteData = mapping[dataSource[startIndex + i]]
    if (!siteData) {
      if (columnCount > 1) {
        // push placeholder
        content.push(<SitePreviewPlaceholder key={`site-${startIndex + i}`} />)
      }
      continue
    }
    if (siteData.highlighted && columnCount === 3) {
      highlighted = <SitePreview siteData={siteData} flex={columnCount - 1} isVisible={isVisible} isScrolling={isScrolling} isTablet={columnCount < 3} key={`site-${siteData.internalUrl}`}/>
    } else {
      content.push(<SitePreview siteData={siteData} isVisible={isVisible} isScrolling={isScrolling} isTablet={columnCount < 3} key={`site-${siteData.internalUrl}`}/>)
    }
  }

  return <div key={`row-${index}`} style={{
    display: 'flex',
    flexDirection: columnCount === 1 ? 'column' : 'row',
    ...directionalProperty('padding', 0, GAP_X / 2),
    ...style
  }}>
    {
      highlighted ? [highlighted, <div key={`column-normal`} style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        {content}
      </div>] : content
    }
  </div>
}

// render 3 images per row
const Row = getRowRender(3)

// render 2 images per row
const TabletRow = getRowRender(2)

// render 1 image per row
const MobileRow = getRowRender(1)

export default class extends Component {
  state = {
    width: 0
  }
  stopCachedIndex = 0
  startCachedIndex = Infinity
  lastColumnCount = 3
  
  resize = () => {
    this.setState({
      width: Math.min(window.innerWidth, 1440)
    })
  }
  updateCategory(category) {
    if (category !== dataCategory) {
      dataCategory = category
      dataSource = getData(category.toLowerCase())
    }
  }
  componentDidMount () {
    this.updateCategory(this.props.category)
    window.addEventListener('resize', this.resize)
    this.resize()
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }
  componentWillReceiveProps(newProps) {
    this.updateCategory(newProps.category)
  }
  overscanIndicesGetter = ({
    cellCount,
    overscanCellsCount,
    startIndex,
    stopIndex
  }, isTablet) => {
    // preload +- 5 rows
    // cache += 50 rows
    let overscanStartIndex = Math.max(0, Math.min(startIndex - overscanCellsCount, this.startCachedIndex))
    this.startCachedIndex = Math.max(startIndex - 50, Math.min(this.startCachedIndex, overscanStartIndex))

    let overscanStopIndex = Math.min(cellCount - 1, Math.max(stopIndex + overscanCellsCount, this.stopCachedIndex))
    this.stopCachedIndex = Math.min(stopIndex + 50, Math.max(this.stopCachedIndex, overscanStopIndex))

    return {
      overscanStartIndex,
      overscanStopIndex
    }
  }
  render() {
    return <Container wide gray center overflow><MediaQueryConsumer>{({isMobile, isTablet}) =>
      <div className='container'>
        <style jsx>{`
          .container {
            margin: 1rem 0 6rem;
          }
          div {
            margin: 2rem 0;
          }
          .icon-label {
            // vertical-align: middle;
            margin-right: .625rem;
          }
          :global(.ReactVirtualized__Grid__innerScrollContainer) {
            overflow: visible !important;
          }
        `}</style>
        <WindowScroller>
          {({ height, isScrolling, onChildScroll, scrollTop }) => (
            <List
              autoHeight
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              scrollTop={scrollTop}
              width={this.state.width}
              rowCount={Math.ceil(dataSource.length / (isMobile ? 1 : isTablet ? 2 : 3))}
              estimatedRowSize={500}
              rowHeight={args => getRowHeight(args, (isMobile ? 1 : isTablet ? 2 : 3)) * ROW_HEIGHT}
              rowRenderer={isMobile ? MobileRow : isTablet ? TabletRow : Row}
              overscanRowCount={5}
              overscanIndicesGetter={(args) => this.overscanIndicesGetter(args, isTablet)}
              style={{
                willChange: '',
                margin: 'auto',
                overflow: 'visible'
              }}
              ref={list => {
                let columnCount = (isMobile ? 1 : isTablet ? 2 : 3)
                if (columnCount !== this.lastColumnCount) {
                  // reset row height for responsive width
                  this.lastColumnCount = columnCount
                  list.recomputeRowHeights()
                }
              }}
            />
          )}
        </WindowScroller>
        <div>
          <Button href="#" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}><span className='icon-label'>Back to Top</span><ArrowUpIcon color='#FD3B47' /></Button>
        </div>
        <Button href={SUBMIT_URL} invert><span className='icon-label'>Share Your Website</span><HeartIcon color="white" /></Button>
      </div>
    }</MediaQueryConsumer></Container>  
  }
}
