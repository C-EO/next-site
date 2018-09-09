import Link from 'next/link'
import Router, { withRouter } from 'next/router'

import { format, parse } from 'url'
import { Component, PureComponent } from 'react'
import { List, WindowScroller, defaultCellRangeRenderer } from 'react-virtualized'
import { directionalProperty } from 'polished'
import { Spring, Transition } from 'react-spring'
import Measure from 'react-measure'

import Button from '../button'
import Container from '../container'
import Fade from '../fade'
import { MediaQueryConsumer } from '../media-query'
import ArrowUpIcon from '../icons/arrow-up'
import HeartIcon from '../icons/heart'

import { sortOrder, mapping } from '../../showcase-manifest'

const SUBMIT_URL = `https://spectrum.chat/thread/e425a8b6-c9cb-4cd1-90bb-740fb3bd7541`

const COLUMN_COUNT = 3
const GAP_X = 48
const GAP_Y = 48
const ROW_HEIGHT = 250 + GAP_Y

function getData(category) {
  return sortOrder.filter(id => {
    return category === 'all' || (mapping[id].tags && mapping[id].tags.indexOf(category) !== -1)
  })
}

let dataSource = getData('all')

function changeRoute(item) {
  Router.router.push('/showcase?item=' + item, '/showcase/' + item, { shallow: true })
}

const getRowHeight = ({index}, isTablet) => {
  if (isTablet) {
    let height = 0, startIndex = index * COLUMN_COUNT
    for (let i = 0; i < COLUMN_COUNT; ++i) {
      if (dataSource[startIndex + i]) {
        height++
      }
    }
    return height
  }
  let height = 1, startIndex = index * COLUMN_COUNT
  for (let i = 0; i < COLUMN_COUNT; ++i) {
    if (dataSource[startIndex + i] && mapping[dataSource[startIndex + i]].highlighted) {
      height *= (COLUMN_COUNT - 1)
    }
  }
  return height
}

const SitePreviewPlaceholder = () => <div style={{
  flex: 1,
  height: '100%'
}} />

const SitePreview = withRouter(class extends PureComponent {
  state = {
    open: false,
    // width: -1,
    // height: -1,
    // outerWidth: -1,
    // outerHeight: -1,
    // top: -1,
    // left: -1
  }
  loadDetail = () => {
    changeRoute(this.props.siteData.internalUrl)
  }
  // resizeInner = (props) => {
  //   this.setState({
  //     width: props.bounds.width,
  //     height: props.bounds.height,
  //     top: props.bounds.top,
  //     left: props.bounds.left,
  //     outerWidth: window.innerWidth,
  //     outerHeight: window.innerHeight,
  //   })
  // }
  componentWillReceiveProps(newProps) {
    let open = newProps.router.query.item === this.props.siteData.internalUrl
    if (open !== this.state.oepn) {
      this.setState({ open })
    }
  }
  render () {
    const { siteData, flex, isVisible, isTablet } = this.props
    const { open } = this.state
    // const { height, width, top, left, outerWidth, outerHeight } = this.state

    let src = siteData.src.replace('/showcases/', '/showcase-thumbnails/')

    return <div className={`site-container${siteData.highlighted && !isTablet ? ' highlighed' : ''}`} key={`site-${siteData.internalUrl}`}>
      <style jsx>{`
        .site-container {
          flex: ${flex || 1};
          height: ${isTablet ? 'unset' : '100%'};
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

        .preview.open {
          position: fixed;
          // left: 0;
          // right: 0;
          // top: 0;
          // bottom: 0;
          z-index: 1009;
        }
        .preview.hide {
          opacity: 0;
        }
      `}</style>
      {
      // {
      //   <Transition
      //     delay={200}
      //     from={{
      //       width, height, top, left
      //     }}
      //     update={{
      //       width: outerWidth, height: outerHeight, top: 0, left: 0
      //     }}
      //     leave={{
      //       width, height, top, left
      //     }}
      //     open={open}>{
      //     style => {
      //       if (open) {
      //         return <div className='preview open' style={style}/>
      //       } else {
      //         return null
      //       }
      //     }
      //   }</Transition>
      // }
        // !open && <div className='content'>
        //   <Fade show={isVisible}>
        //     <div className='preview'  onClick={this.loadDetail}>
        //       <div className='shadow'>
        //         <div className='info'>
        //           <h3 className={siteData.highlighted ? 'f2' : 'f4'}>{siteData.title}</h3>
        //           <Link href={siteData.link}><a className='f5'>{siteData.link}</a></Link>
        //         </div>
        //       </div>
        //     </div>
        //   </Fade>
        // </div>
        // <Measure
        //   bounds
        //   innerRef={r => (this.innerRef = r)}
        //   onResize={this.resizeInner}>{
        //   ({ measureRef }) =>
        // }</Measure>
      }
    
        <div className='content'>
          <Fade show={isVisible}>
            <div className={`preview`} onClick={this.loadDetail}>
              <div className='shadow'>
                <div className='info'>
                  <h3 className={siteData.highlighted && !isTablet ? 'f2' : 'f4'}>{siteData.title}</h3>
                  <Link href={siteData.link}><a className='f5'>{siteData.link}</a></Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        
      </div>
  }
})

const getRowRender = isTablet => ({
  index,
  isScrolling,
  isVisible,
  key,
  parent,
  style
}) => {
  let height = getRowHeight({index})
  let content = []
  let highlighted = null

  let startIndex = index * COLUMN_COUNT
  for (let i = 0; i < COLUMN_COUNT; ++i) {
    let siteData = mapping[dataSource[startIndex + i]]
    if (!siteData) {
      if (!isTablet) {
        // push placeholder
        content.push(<SitePreviewPlaceholder key={`site-${startIndex + i}`} />)
      }
      continue
    }
    if (siteData.highlighted && !isTablet) {
      highlighted = <SitePreview siteData={siteData} flex={COLUMN_COUNT - 1} isVisible={isVisible} isTablet={isTablet} key={`site-${siteData.internalUrl}`}/>
    } else {
      content.push(<SitePreview siteData={siteData} isVisible={isVisible} isTablet={isTablet} key={`site-${siteData.internalUrl}`}/>)
    }
  }

  return <div key={`row-${index}`} style={{
    display: 'flex',
    flexDirection: isTablet ? 'column' : 'row',
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
const Row = getRowRender(false)

// render 1 image per row
const TabletRow = getRowRender(true)

export default class extends Component {
  state = {
    width: 0
  }
  stopCachedIndex = 0
  startCachedIndex = Infinity
  lastTabletStatus = false
  
  resize = () => {
    this.setState({
      width: window.innerWidth
    })
  }
  componentDidMount () {
    window.addEventListener('resize', this.resize)
    this.resize()
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
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
  componentWillReceiveProps(newProps) {
    if (newProps.category !== this.props.category) {
      dataSource = getData(newProps.category.toLowerCase())
    }
  }
  render() {
    return <Container wide gray center><MediaQueryConsumer>{({isMobile, isTablet}) =>
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
              rowCount={Math.ceil(dataSource.length / COLUMN_COUNT)}
              estimatedRowSize={500}
              rowHeight={args => getRowHeight(args, isTablet) * ROW_HEIGHT}
              rowRenderer={isTablet ? TabletRow : Row}
              overscanRowCount={5}
              overscanIndicesGetter={(args) => this.overscanIndicesGetter(args, isTablet)}
              style={{
                willChange: ''
              }}
              ref={list => {
                if (isTablet !== this.lastTabletStatus) {
                  // reset row height for responsive width
                  this.lastTabletStatus = isTablet
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
