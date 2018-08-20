import React, {Component} from 'react'

import Tags from './tags'

export default class extends Component {
  state = {
    hover: false
  }
  hover = (val) => {
    this.setState({
      hover: val
    })
  }
  render () {
    const { children } = this.props
    const { hover } = this.state

    return <div
      className="hero"
      onMouseEnter={() => this.hover(true)}
      onMouseLeave={() => this.hover(false)}
    >
      <style jsx>{`
        .hero {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: calc(100vh - 280px);
          min-height: 240px;
          flex-direction: column;
        }
        .hero-background {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .hero-content {
          z-index: 1;
        }
      `}</style>
      <div className="hero-background">
        <Tags focus={hover}/>
      </div>
      <div className="hero-content">
        {children}
      </div>
    </div>
  }
}
