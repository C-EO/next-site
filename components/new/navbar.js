import Link from 'next/link'

import NextLogo from './logo'
import Container from './container'

export default () => {
  return <Container>
    <nav>
      <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 64px;
          max-width: 1000px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
        }
        nav .links {
          display: flex;
          align-items: center;
          z-index: 1;
        }
        nav .links a {
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
          text-align: center;
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
          right: 0;
          bottom: 4px;
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background-color: #2BDB66;
          pointer-events: none;
        }
        nav .links .icons a:last-of-type {
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
          <Link href="https://github.com/zeit"><a><img src="/static/icons/spectrum.svg"/><span className="badge"/></a></Link>
        </div>
      </div>
    </nav>
  </Container>
}