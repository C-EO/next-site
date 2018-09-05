import React, { Component } from 'react'

export default class Popover extends Component {
  state = {
    show: false
  }
  onMouseEnter = () => {
    this.setState({ show: true })
  }
  onMouseLeave = () => {
    this.setState({ show: false })
  }
  render() {
    const { content, children } = this.props
    const { show } = this.state

    return <div className='container' onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
      <style jsx>{`
        .container {
          position: relative;
        }
        .popover {
          position: absolute;
          left: 50%;
          padding: .5rem;
          border-radius: 5px;
          background: white;
          box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.2);
          transition: opacity .2s ease;
          transform: translateX(-50%);
          opacity: 0;
          visibility: hidden;
          z-index: 3;
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
        .popover.show {
          opacity: 1;
          visibility: visible;
        }
      `}</style>
      {children}
      <div className={`popover${show ? ' show' : ''} bottom`}>{content}</div>
    </div>
  }
}
