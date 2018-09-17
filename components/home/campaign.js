import Container from '../container'
import WordSlider from '../word-slider'

export default () =>
  <div className='slider-container'>
    <WordSlider duration={1800}>
      <span>Static Websites</span>
      <span>Server-Rendered Apps</span>
      <span>Production</span>
      <span>the Enterprise</span>
      <span>the Desktop</span>
      <span>the Mobile Web</span>
      <span>Lightweight Apps</span>
      <span>SEO-Friendly Sites</span>
      <span>PWAs</span>
      <span>Electron</span>
    </WordSlider>
    <style jsx>{`
      .slider-container {
        margin: auto;
        line-height: 1.4em;
        white-space: nowrap;
      }
    `}</style>
  </div>
