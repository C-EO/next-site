import Container from '../container'
import Button from '../button'

export default () => <Container center padding>
  <h2 className="f1">Why Next.js?</h2>
  <h3 className="subtitle">The world’s leading companies use and love Next.js</h3>
  <div className="row">
    <div className="column">
      <h3 className="f2">Zero Setup</h3>
      <p>Automatic code splitting, routing, hot code reloading and universal rendering.</p>
      <Button href="/learn">Learn Next.js</Button>
    </div>
    <div className="column">
      <h3 className="f2">Fully Extensible</h3>
      <p>Complete control over Babel and Webpack. Customizable server, routing and next-plugins.</p>
      <Button href="/docs">View Full Documentation</Button>
    </div>
    <div className="column">
      <h3 className="f2">Ready for Production</h3>
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
