import React, { Component } from 'react'
import Link from 'next/link'

import NextLogo from './logo'

export default class extends Component {
  state = {
    scrolled: false
  }
  onScroll = () => {
    let scroll = window.scrollY || document.body.scrollTop
    let scrolled = scroll > (this.props.distance || 0)
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
    const { isHome, height, offset, shadow, children } = this.props

    return <header>
      <style jsx>{`
        header {
          height: ${height}px;
        }
        .fixed-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          left: 0;
          z-index: 100;
          background-color: rgba(255, 255, 255, 0.96);
          transition: box-shadow .5s ease;
        }
        .scrolled {
          position: fixed;
          top: ${offset || 0}px;
          ${shadow ? `box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);` : ''}
        }
      `}</style>
      <div className={`fixed-container ${scrolled ? 'scrolled' : ''}`}>
        {children}
      </div>
    </header>
  }
}