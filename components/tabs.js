import React, { Component } from 'react'

export default class Tabs extends Component {
  constructor(props) {
    super()
    this.state = {
      selected: props.data[0]
    }
  }
  onSelect = id => {
    if (this.props.data.indexOf(id) === -1) {
      return
    }
    if (this.state.selected === id) {
      return
    }
    this.setState({
      selected: id
    })
  }
  render () {
    const { data, children } = this.props
    const { selected } = this.state

    if (typeof children !== 'function') {
      return null
    }
    return children(this.onSelect, selected, data.indexOf(selected))
  }
}

export const Indicator = ({selected, onClick}) => 
  <div onClick={onClick}>
    <style jsx>{`
      {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border-radius: 50%;
        background: ${selected ? `#EEEEEE` : `#909090`};
        cursor: pointer;
      }
      div:hover {
        background: ${selected ? `#EEEEEE` : `#AAAAAA`};
      }
    `}</style>
  </div>
