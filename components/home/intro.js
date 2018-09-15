import classNames from 'classnames'

import Logo from '../logo'
import Container from '../container'
import Button from '../button'

import Campaign from '../campaign'
import { MediaQueryConsumer } from '../media-query'

export default ({}) => {
  return <Container wide center>
    <Container>
      <div className='intro-container'>
        <style jsx>{`
          .intro-container {
            margin: 2rem 0;
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
            overflow: hidden;
            pointer-events: none;
            cursor: default;
            z-index: -1;
          }
          .f-extra {
            font-size: 2.566rem; /* 2.281rem; */
          }
        `}</style>
        <MediaQueryConsumer>{({ isMobile }) => {
          return <>
            {
              // isMobile ? null : <Logo size={90}/>
            }
            {
              <div className='campaign no-drag no-tap-highlight' style={{
                margin: isMobile ? '0 0 2rem' : '4rem 0 2.2rem'
              }}>
                <span className={classNames('fw6', isMobile ? 'f1' : 'f0')}>React for</span>
                <h2 className={classNames(isMobile ? 'f0' : 'f-extra', 'campaign', 'fw7')} style={{
                  marginTop: isMobile ? '-2rem' : '-3.2rem',
                  marginBottom: 0
                }}>
                  <Campaign/>
                </h2>
              </div>
            }
            {
              // isMobile ?
              //   <h2 className="f2 fw3">
              //     a lightweight framework for
              //     <br/>
              //     <strong className="fw6">static</strong> and <strong className="fw6">server‑rendered</strong> Apps
              //   </h2> : 
              //   <h2 className="f0 fw3">
              //     a lightweight framework
              //     <br/>
              //     for <strong className="fw6">static</strong> and <strong className="fw6">server‑rendered</strong> applications
              //   </h2>
            }
          </>
        }}</MediaQueryConsumer>
        <div>
          <div className="main-button">
            <Button href="#showcases" invert>See Showcases</Button>
          </div>
          <div className="links">
            <span className="mute">v7.0.0 canary</span>
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