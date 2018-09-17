import { PureComponent } from 'react'
import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import classNames from 'classnames'

const GAP_X = 48
const GAP_Y = 48
const ROW_HEIGHT = 250 + GAP_Y

export default withRouter(class extends PureComponent {
  loadDetail = (ev) => {
    if (ev.target.nodeName === 'A') {
      return
    }
    let item = this.props.siteData.internalUrl
    Router.router.push('/showcase?from=click&item=' + item, '/showcase/' + item, { shallow: true })
  }
  render () {
    const { siteData, flex, isVisible, isTablet } = this.props

    let useLargeThumbnail = siteData.highlighted && !isTablet
    let src = siteData.src.replace('/showcases/', '/showcase-thumbnails/')

    if (useLargeThumbnail) {
      src = src.replace(/\.jpg/, '@2x.jpg')
    }

    return <div className={`no-tap-callout site-container${siteData.highlighted && !isTablet ? ' highlighed' : ''}`} key={`site-${siteData.internalUrl}`}>
      <div className='content' ref={el => this.previewEl = el}>
        <div className='preview' onClick={this.loadDetail}>
          <div className='shadow'>
            <div className='info'>
              <h3 className={siteData.highlighted && !isTablet ? 'f2' : 'f4'}>{siteData.title}</h3>
              <Link href={siteData.link}><a className='f5' target='_blank'>{siteData.link}</a></Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      .site-container {
        position: relative;
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
    `}</style>
    </div>
  }
})
