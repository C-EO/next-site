import React from 'react'
import { Spring } from 'react-spring'

const ANIMATION_STAGES = [
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0 },
  { opacity: 0, y: 100 },
]

export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    this.children = React.Children.toArray(props.children)
    this.state = {
      count: React.Children.count(props.children),
      currentIndex: 0,
      stage: 0
    }
  }
  componentWillReceiveProps (newProps) {
    this.children = React.Children.toArray(newProps.children)
    let count = React.Children.count(newProps.children)
    this.setState({
      count,
      currentIndex: Math.min(this.state.currentIndex, count - 1)
    })
  }
  componentDidMount() {
    this.startAnimation()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  startAnimation () {
    this.interval = setInterval(() => this.setState({
      stage: (this.state.stage + 1) % 3,
      currentIndex: (this.state.currentIndex + 1) % this.state.count,
    }), this.props.duration || 1500)
  }
  render () {
    const { prefix } = this.props
    const { currentIndex, count, stage } = this.state

    const prev = currentIndex > 0 ? this.children[currentIndex - 1] : this.children[count - 1]
    const current = this.children[currentIndex]
    const next = currentIndex + 1 < count ? this.children[currentIndex + 1] : this.children[0]

    // a loop of 3 keyframes:
    //
    // stage      0          1          2
    //
    // next      [A]        [C]        [B]
    // current   [B]   =>   [A]   =>   [C]    =>   ...
    // prev      [C]        [B]        [A]
    
    return <div>
      {prefix}
      <Spring from={ANIMATION_STAGES[0]} to={ANIMATION_STAGES[stage]}>{
        ({ opacity, y }) => <div className='slug' style={{ transform: `translateY(${y}%)`, opacity }}>
          {stage === 0 ? next : stage === 1 ? current : prev}
        </div>
      }</Spring>
      <Spring from={ANIMATION_STAGES[1]} to={ANIMATION_STAGES[(stage + 1) % 3]}>{
        ({ opacity, y }) => <div className='slug' style={{ transform: `translateY(${y}%)`, opacity }}>
          {stage === 0 ? current : stage === 1 ? prev : next}
        </div>
      }</Spring>
      <Spring from={ANIMATION_STAGES[2]} to={ANIMATION_STAGES[(stage + 2) % 3]}>{
        ({ opacity, y }) => <div className='slug' style={{ transform: `translateY(${y}%)`, opacity }}>
          {stage === 0 ? prev : stage === 1 ? next : current}
        </div>
      }</Spring>
      <style jsx>{`
        .slug {
          display: inline-block;
          position: absolute;
        }
      `}</style>
    </div>
  }
}
