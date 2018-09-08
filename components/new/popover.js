import React, { Component } from 'react'
import classNames from 'classnames'

export default class Popover extends Component {
  state = {
    show: false,
    top: true,
    left: false
  }
  onMouseEnter = () => {
    let top = Infinity
    let right = Infinity
    if (this.containerEl) {
      const bounding = this.containerEl.getBoundingClientRect()
      top = bounding.top
      right = window.innerWidth - bounding.right
    }

    this.setState({ show: true, top: top > 100, left: right < 80 })
  }
  onMouseLeave = () => {
    this.setState({ show: false })
  }
  render() {
    const { content, children } = this.props
    const { show, top, left } = this.state

    return <div 
      className='container'
      ref={el => this.containerEl = el}
      onMouseEnter={this.onMouseEnter} 
      onMouseLeave={this.onMouseLeave}>
      <style jsx>{`
        .container {
          position: relative;
        }
        .popover {
          position: absolute;
          left: 50%;
          padding: .5rem 1rem;
          border-radius: 7px;
          background: white;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08), 0 0 8px rgba(0, 0, 0, 0.1);
          transition: opacity .2s ease;
          transform: translateX(-50%);
          opacity: 0;
          visibility: hidden;
        }
        .popover.top {
          bottom: 100%;
          margin-bottom: 10px;
        }
        .popover.bottom {
          top: 100%;
          margin-top: 10px;
        }
        .popover:after {
          content: '';
          position: absolute;
          width: 8px;
          height: 8px;
          background: white;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }
        .popover.top:after {
          top: 100%;
          left: 50%;
        }
        .popover.bottom:after {
          top: 0;
          left: 50%;
        }
        .popover.left {
          left: calc(50% + 17px);
          transform: translateX(-100%);
        }
        .popover.left:after {
          right: 10px;
          left: unset;
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }
        .popover.show {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      {children}
      <div className={classNames('popover', 'f6', {
        show,
        top,
        bottom: !top,
        left
      })}>{content}</div>
    </div>
  }
}
