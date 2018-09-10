import Container from '../container'
import WordSlider from '../word-slider'

export default () => <Container padding>
  <h1 className='f2 fw6'>
    <WordSlider prefix={<span className='fw3 slider-prefix'>a lightweight <strong className="fw4">React</strong> framework for</span>} duration={2000}>
      <span>static websites</span>
      <span>server-rendered Apps</span>
      <span>production</span>
      <span>the enterprise</span>
    </WordSlider>
  </h1>
  <style jsx>{`
    h1 {
      text-align: center;
      padding-right: 10rem;
    }
    .slider-prefix {
      margin-right: .5rem;
    }
  `}</style>
</Container>
