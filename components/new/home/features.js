import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'

export default () => <Container center padding>
  <SectionHeader title='Why Next.js' description='The world’s leading companies use and love Next.js'/>
  <div className="row">
    <div className="column">
      <h3 className="f3">Zero Setup</h3>
      <p>Automatic code splitting, routing, hot code reloading and universal rendering.</p>
      <Button href="/learn">Learn Next.js</Button>
    </div>
    <div className="column">
      <h3 className="f3">Fully Extensible</h3>
      <p>Complete control over Babel and Webpack. Customizable server, routing and next-plugins.</p>
      <Button href="/docs">View Full Documentation</Button>
    </div>
    <div className="column">
      <h3 className="f3">Ready for Production</h3>
      <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
      <Button href="/showcase">View Showcase</Button>
    </div>
  </div>
  <style jsx>{`
    .row {
      display: flex;
      margin: 0 -1rem;
    }
    .column {
      text-align: left;
      padding: 0 1rem;
    }
  `}</style>
</Container>
