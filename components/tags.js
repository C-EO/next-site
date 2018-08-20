import React, {Component} from 'react'
import anime from 'animejs'

const tags = [
  'HMR',
  'automatic code splitting',
  'server rendering',
  'styled-jsx',
  'zones',
  'prefetching pages',
  'static export',
  'custom server & routing',
  'built-in error page',
  'dynamic routes',
  'production ready',
  'zero-config Babel & Webpack',
  'dynamic importing',
  'built-in <head> solution',
  'plugins',
  'islands',
  'microfrontends',
  'easy data fetching',
]

const randomPos = index => {
  // angle, counter clockwise (0-2)
  let a = (Math.sin(((index + 1) / tags.length - .5) * Math.PI) * .9 + 1) / 2
  if (index % 2) a *= 2
  // a *= Math.PI

  // random length
  let h = window.innerHeight / 4
  let w = window.innerWidth / 4

  let x = Math.random() * 50 + w
  let y = Math.random() * 50 + h

  return { x, y, a }
}

export default class extends Component {
  state = {
    renderTags: false
  }
  componentDidMount() {
    this.setState({ renderTags: true })

    let time = 100000

    setTimeout(() => {
      this.animations = []
      ;[].forEach.call(document.querySelectorAll('.feature-tag'), el => {
        let a = el.getAttribute('data-a')
        let x = el.getAttribute('data-x')
        let y = el.getAttribute('data-y')
        let animation = anime({
          targets: el,
          translateX: [
            { value: x, duration: 0 },
            { value: -x, duration: time },
            { value: x, duration: time },
          ],
          translateY: [
            { value: 0, duration: 0 },
            { value: -y, duration: time / 2, easing: 'easeOutSine' },
            { value: y, duration: time },
            { value: 0, duration: time / 2, easing: 'easeInSine' },
          ],
          easing: 'easeInOutSine',
          loop: true,
          elasticity: 0,
          autoplay: false
        })
        // el.style.opacity = 1;
        animation.seek(time * a)
        animation.play()

        this.animations.push(animation)
      })
    })
  }
  componentWillReceiveProps({ focus }) {
    // if (!this.props.focus && focus) {
    //   this.animations.forEach(a => a.pause())
    // } else if (this.props.focus && !focus) {
    //   this.animations.forEach(a => a.play())
    // }
  }
  render() {
    const { children, focus } = this.props
    const { renderTags } = this.state

    return <div className="tags">
      <style jsx>{`
        .tags {
          position: relative;
          width: 100%;
          height: 100%;
          margin-top: -2vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
        .feature-tag {
          position: absolute;
          color: #ececec;
          font-weight: 100;
          cursor: default;
          opacity: ${focus ? '1' : '0'};
          font-size: 16px;
          transition: opacity 1s ease, color .3s ease;
        }
        .feature-tag:hover {
          color: #999;
          z-index: 1;
        }
        .feature-tag::selection {
          background-color: transparent;
        }
      `}</style>
      {renderTags && tags.map((tag, i) => {
        let { x, y, a } = randomPos(i)
        return <div
          className="feature-tag" 
          key={`tag-${i}`}
          data-a={a}
          data-x={x}
          data-y={y}
        >{tag}</div>
      })}
    </div>
  }
}