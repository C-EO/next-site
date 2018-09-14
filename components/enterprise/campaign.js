import Container from '../container'
import WordSlider from '../word-slider'

// idea: add a background image to this

export default () => <Container padding>
  <h2 className='f0 fw6'>
    <div className='slider-container'>
      <WordSlider prefix={<span className='fw3 slider-prefix'>React for</span>} duration={2000}>
        <span>Static Websites</span>
        <span>Server-Rendered Apps</span>
        <span>Production</span>
        <span>the Enterprise</span>
        <span>the Desktop</span>
        <span>the Mobile Web</span>
      </WordSlider>
    </div>
  </h2>
  <style jsx>{`
    h1 {
      text-align: center;
    }
    .slider-prefix {
      margin-right: .5rem;
    }
    .slider-container {
      margin: auto;
      white-space: nowrap;
      max-width: 250px;
    }
  `}</style>
</Container>
