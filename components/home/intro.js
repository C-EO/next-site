import classNames from 'classnames'
import Link from 'next/link'

import Logo from '../logo'
import Container from '../container'
import Button from '../button'
import Popover from '../popover'

import Campaign from './campaign'
import { MediaQueryConsumer } from '../media-query'

export default ({}) => {
  return <Container wide center minHeight={564} overflow dotBackground role='main' style={{
    display: 'flex',
    alignItems: 'flex-end'
  }}>
    <Container>
      <div className='intro-container'>
        <style jsx>{`
          .intro-container {
            margin: 0 0 2rem 0;
            overflow: visible;
          }
          h2 {
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
          .main-button {
            margin-bottom: 2rem;
          }
          .links {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .links > * {
            padding: 0 .5rem;
          }
          .campaign {
            width: 100%;
            letter-spacing: -.02rem;
            overflow: hidden;
            pointer-events: none;
            cursor: default;
            z-index: -1;
          }
          .f-xs-0 {
            font-size: 2.887rem; /* 2.566rem; /* 2.281rem; */
          }
          .f-xs-1 {
            font-size: 2.027rem; //.566rem;
          }
          .title {
            display: flex;
            justify-content: center;
            color: var(--theme-color);
          }
          .title .version {
            margin-left: -0.2rem;
            margin-top: .4rem;
            cursor: pointer;
          }
          .version .tip {
            color: #111;
            white-space: nowrap;
          }
        `}</style>
        <MediaQueryConsumer>{({ isMobile }) => {
          return <>
            {
              isMobile ? null : <div className='title f4 fw6'><Logo size={80}/>
                <span className='version no-tap-highlight no-drag'>
                  <Popover content={<span className='f5 fw4 tip'>What’s new in <strong className='fw7'>7</strong>?</span>} top={65}>7</Popover>
                </span>
              </div>
            }
            {
              <div className='campaign no-drag no-tap-highlight' style={{
                margin: isMobile ? '0 0 5rem' : '1rem 0 1.6rem'
              }}>
                <h1 className={classNames('fw6', isMobile ? 'f2' : 'f0')}>The React Framework for</h1>
                <h2 className={classNames(isMobile ? 'f0' : 'f-xs-0', 'campaign', 'fw7')} style={{
                  marginTop: isMobile ? '-2.4rem' : '-4.2rem',
                  marginBottom: 0,
                }}>
                  <Campaign/>
                </h2>
              </div>
            }
          </>
        }}</MediaQueryConsumer>
        <div>
          <div className="main-button">
            <Button href="#showcases" invert>See Showcases</Button>
          </div>
          <div className="links">
            <Link href='https://github.com/zeit/next.js/blob/canary/license.md'>
              <a target='_blank'><span className="mute">License: MIT</span></a>
            </Link>
            <div>
              <Button href="/docs">View Docs</Button>
            </div>
            <div>
              <Button href="https://github.com/zeit/next.js">GitHub</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}