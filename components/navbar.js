import Link from 'next/link'
import { withRouter } from 'next/router'
import classNames from 'classnames'

import { MediaQueryConsumer } from './media-query'
import NextLogo from './logo'
import Container from './container'
import Popover from './popover'

// TODO: manage urls in config
const SPECTRUM = `https://spectrum.chat/next-js`

export default withRouter(({ isMobile, router }) => {
  let { route } = router

  return <MediaQueryConsumer>{media => {
    if (media.isMobile) {
      return <Container center>
        <nav className='expand'>
          <style jsx>{`
            nav {
              position: relative;
              flex: 1;
              height: 96px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-wrap: wrap;
            }
            nav .links {
              display: flex;
              align-items: center;
              z-index: 1;
            }
            nav .dropdown {
              flex: 1 0 100%;
              display: flex;
              margin: 0 -5px;
              text-align: left;
              // justify-content: flex-end;
              justify-content: space-between;
            }
            nav .links a {
              display: inline-block;
              // enlarge the clickable area
              padding: 5px 8px;
              color: inherit;
              text-decoration: none;
            }
            nav .links a.selected {
              color: var(--theme-color);
              font-weight: 600;
            }
            nav .logo {
              font-size: 0;
              text-align: center;
              overflow: hidden;
            }
            nav .logo a {
              display: inline-block;
            }
            nav .links .icons {
              display: flex;
              position: relative;
              align-items: center;
            }
            nav .links .icons a {
              position: relative;
              padding: 5px;
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
          <div className="logo">
            <Link href="/">
              <a>
                <NextLogo/>
              </a>
            </Link>
          </div>
          <div className="links">
            <div className="icons">
              <Link href="https://github.com/zeit"><a><img src="/static/icons/github.svg"/></a></Link>
              <Link href={SPECTRUM}><a className="no-margin"><img src="/static/icons/spectrum.svg"/><span className="badge"/></a></Link>
            </div>
          </div>
          <div className="links dropdown">
            <Link href="/docs"><a className={classNames('f5', { selected: route === '/docs' })} title='Documentation'>Docs</a></Link>
            <Link href="/learn"><a className={classNames('f5', { selected: route === '/learn' })} title='Learn'>Learn</a></Link>
            <Link href="/showcase"><a className={classNames('f5', { selected: route === '/showcase' })} title='Showcase'>Showcase</a></Link>
            <Link href="/blog"><a className={classNames('f5', { selected: route === '/blog' })}>Blog</a></Link>
            <Link href="/enterprise"><a className='f5'>Enterprise</a></Link>
          </div>
        </nav>
      </Container>
    }

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
            color: inherit;
            text-decoration: none;
          }
          nav .links a.selected {
            color: var(--theme-color);
            font-weight: 600;
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
          <Link href="/docs"><a className={classNames('f5', { selected: route === '/docs' })} title='Documentation'>Docs</a></Link>
          <Link href="/learn"><a className={classNames('f5', { selected: route === '/learn' })} title='Learn'>Learn</a></Link>
          <Link href="/showcase"><a className={classNames('f5', { selected: route === '/showcase' })} title='Showcase'>Showcase</a></Link>
        </div>
        <div className="logo">
          <Link href="/">
            <a>
              <NextLogo/>
            </a>
          </Link>
        </div>
        <div className="links">
          <Link href="/blog"><a className={classNames('f5', { selected: route === '/blog' })}>Blog</a></Link>
          <Link href="/enterprise"><a className='f5'>Enterprise</a></Link>
          <div className="icons">
            <Link href="https://github.com/zeit"><a><img src="/static/icons/github.svg"/></a></Link>
            <Popover content={<div style={{ whiteSpace: 'nowrap' }}>Join <strong>Next.js</strong> on <strong>Spectrum</strong></div>}>
              <Link href={SPECTRUM}><a className="no-margin"><img src="/static/icons/spectrum.svg"/><span className="badge"/></a></Link>
            </Popover>
          </div>
        </div>
      </nav>
    </Container>
  }}</MediaQueryConsumer>
})
