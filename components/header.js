import React, { Component } from 'react'
import Link from 'next/link'

import NextLogo from './logo'

export default class extends Component {
  state = {
    scrolled: false
  }
  onScroll = () => {
    let scroll = window.scrollY || document.body.scrollTop
    let scrolled = scroll > 30
    this.setState({ scrolled })
  }
  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.onScroll()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }
  render () {
    const { scrolled } = this.state
    return <header>
      <style jsx>{`
        header {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
          height: 120px;
        }
        .fixed-container {
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          left: 0;
          z-index: 100;
          background-color: rgba(255, 255, 255, 0.96);
        }
        .scrolled {
          position: fixed;
          height: 60px;
          box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
          transition: box-shadow .5s ease;
        }
        nav {
          flex: 1;
          padding: 0 1rem;
          height: 100%;
          max-width: 1000px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          overflow: hidden;
        }
        nav .links {
          flex: 0 0 200px;
          display: flex;
          align-items: center;
        }
        nav .links a {
          margin-right: 2rem;
          color: black;
          text-decoration: none;
          font-weight: 300;
          font-size: 14px;
        }
        nav .logo {
          flex: 1;
          justify-content: space-between;
          text-align: center;
          padding-left: 24px;
          opacity: 0;
          transform: translateY(60px);
          transition: opacity .2s ease, transform .1s ease .25s;
        }
        .scrolled nav .logo {
          transform: translateY(0);
          opacity: 1;
          transition: all .5s ease;
        }
        nav .links .icons {
          display: flex;
          align-items: center;
        }
        nav .links .icons a {
          width: 16px;
          margin-right: 1rem;
        }
        nav .links .icons a:last-of-type {
          margin-right: 0;
        }
      `}</style>
        <div className={`fixed-container ${scrolled && 'scrolled'}`}>
        <nav>
          <div className="links">
            <Link href="/docs"><a>Docs</a></Link>
            <Link href="/learn"><a>Learn</a></Link>
            <Link href="/showcase"><a>Showcase</a></Link>
          </div>
          <div className="logo">
            <Link href="/">
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
              <Link href="https://github.com/zeit"><a><img src="/static/icons/spectrum.svg"/></a></Link>
              <Link href="https://github.com/zeit"><a><img src="/static/icons/zeit.svg"/></a></Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  }
}