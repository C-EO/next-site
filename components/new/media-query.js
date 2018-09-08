import React, { Component } from 'react'

const { Provider: MediaQueryProvider, Consumer: MediaQueryConsumer } = React.createContext({
  isMobile: false
})

const withMediaQuery = Comp => class extends Component {
  state = {
    isMobile: false
  }
  onResize = () => {
    let isMobile = window.innerWidth < 640
    if (isMobile !== this.state.isMobile) {
      this.setState({ isMobile })
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }
  render() {
    const { isMobile } = this.state

    return <MediaQueryProvider value={{ isMobile }}>
      <Comp {...this.props} />
    </MediaQueryProvider>
  }
}

export { MediaQueryProvider, MediaQueryConsumer, withMediaQuery }
