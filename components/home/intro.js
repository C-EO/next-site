import Logo from '../logo'
import Container from '../container'
import Button from '../button'
import Slogan from './slogan'

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
        `}</style>
        <MediaQueryConsumer>{({ isMobile }) => {
          return <>
            {
              isMobile ? null : <Logo size={90}/>
            }
            {
              // <Slogan/>
            }
            {
              isMobile ?
                <h2 className="f2 fw3">
                  a lightweight framework for
                  <br/>
                  <strong className="fw6">static</strong> and <strong className="fw6">server‑rendered</strong> Apps
                </h2> : 
                <h2 className="f0 fw3">
                  a lightweight framework
                  <br/>
                  for <strong className="fw6">static</strong> and <strong className="fw6">server‑rendered</strong> applications
                </h2>
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