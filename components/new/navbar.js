import Link from 'next/link'

import NextLogo from './logo'
import Container from './container'
import Popover from './popover'

export default () => {
  return <Container center>
    <nav>
      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 64px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav .links {
          display: flex;
          align-items: center;
          z-index: 1;
        }
        nav .links a {
          display: inline-block;
          // enlarge the clickable area
          padding: 5px;
          margin-left: -5px;
          margin-right: 2rem;
          color: black;
          text-decoration: none;
          font-weight: 300;
          font-size: 14px;
        }
        nav .logo {
          position: absolute;
          width: 100%;
          font-size: 0;
          text-align: center;
          overflow: hidden;
          transform: translateY(30%);
          opacity: 0;
          transition: all .2s ease;
        }
        :global(.active) nav .logo {
          transform: translateY(0);
          opacity: 1;
        }
        nav .logo a {
          display: inline-block;
        }
        nav .links .icons {
          display: flex;
          align-items: center;
        }
        nav .links .icons a {
          position: relative;
          line-height: 1;
          margin-right: 1rem;
        }
        nav .links .icons a .badge {
          position: absolute;
          display: inline-block;
          right: 0px;
          bottom: 4px;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #2BDB66;
          pointer-events: none;
        }
        nav .links .icons a.no-margin {
          margin-right: 0;
        }
      `}</style>
      <div className="links">
        <Link href="/docs"><a>Docs</a></Link>
        <Link href="/learn"><a>Learn</a></Link>
        <Link href="/newshowcase"><a>Showcase</a></Link>
      </div>
      <div className="logo">
        <Link href="/home">
          <a>
            <NextLogo/>
          </a>
        </Link>
      </div>
      <div className="links">
        <Link href="/blog"><a>Blog</a></Link>
        <Link href="/enterprise"><a>Enterprise</a></Link>
        <div className="icons">
          <Link href="https://github.com/zeit"><a><img src="/static/icons/logo-github.svg"/></a></Link>
          <Popover content={<div style={{ whiteSpace: 'nowrap' }}>Join <strong>Next.js</strong> on <strong>Spectrum</strong></div>}>
            <Link href="https://github.com/zeit"><a className="no-margin"><img src="/static/icons/spectrum.svg"/><span className="badge"/></a></Link>
          </Popover>
        </div>
      </div>
    </nav>
  </Container>
}