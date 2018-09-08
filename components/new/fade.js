import { Component, PureComponent } from 'react'
import { Transition, Trail, animated, interpolate, config } from 'react-spring'

const wrap = (child, styles) => {
  styles = { willChange: Object.keys(styles).join(','), ...styles }
  if (!animated[child.type]) {
    // Wrap components into animated divs
    return <animated.div style={{ ...styles }}>{child}</animated.div>
  } else {
    // Otherwise inject styles into existing component-props
    const Component = animated[child.type]
    const props = {
      ...child.props,
      style: {
        ...child.props.style,
        ...styles,
      },
    }
    return <Component {...props} />
  }
}

export default class extends PureComponent {
  render() {
    const {
      children,
      show = true,
      from = { opacity: 0 },
      enter = { opacity: 1 },
      leave = { opacity: 0 },
      ...rest
    } = this.props
    const result = styles => wrap(children, styles)
    return (
      <Transition
        config={config.fast}
        native
        keys={show.toString()}
        {...rest}
        from={from}
        enter={enter}
        leave={leave}
        children={show ? result : undefined}
      />
    )
  }
}