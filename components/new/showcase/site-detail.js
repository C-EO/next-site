import Link from 'next/link'
import Router from 'next/router'

import { PureComponent } from 'react'

import Fade from '../fade'

function clearRoute() {
  Router.router.push('/showcase', '/showcase', { shallow: true })
}

export default class extends PureComponent {
  clickOuter = (ev) => {
    // console.log(ev.target)
  }

  render () {
    const { siteData } = this.props
    if (!siteData) {
      return null
    }

    let src = siteData.src

    return <Fade>
      <div className="lightbox" onClick={this.clickOuter}>
        <style jsx>{`
          .lightbox {
            position: fixed;
            z-index: 1010;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 3rem 3rem 7rem 3rem;
            // background-color: rgba(255, 255, 255, 0.95);
            background-color: rgba(0, 0, 0, 0.85);
            // visibility: hidden;
          }
          .preview {
            width: 100%;
            height: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .info {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 1rem 2rem 2rem;
            // background: rgba(0, 0, 0, 0.5);
            text-align: center;
            color: white;
            text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
            // opacity: 0;
          }
          .close {
            position: absolute;
            background: red;
          }
          img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 7px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
        `}</style>
          <div className={`preview`}>
            <img src={src}/>
          <div className='close' onClick={clearRoute}>close</div>
          <div className='info'>
            <h3 className={siteData.highlighted ? 'f2' : 'f4'}>{siteData.title}</h3>
            <Link href={siteData.link}><a className='f5'>{siteData.link}</a></Link>
          </div>
        </div>
      </div>
    </Fade>
  }
}
