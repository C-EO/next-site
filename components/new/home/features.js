import Container from '../container'
import Button from '../button'

export default () => <Container center>
  <h2>Why Next.js?</h2>
  <p>The world’s leading companies use and love Next.js</p>
  <div className="row">
    <div className="column">
      <h3>Zero Setup</h3>
      <p>Automatic code splitting, routing, hot code reloading and universal rendering.</p>
      <Button href="/docs">Learn Next.js</Button>
    </div>
    <div className="column">
      <h3>Zero Setup</h3>
      <p>Automatic code splitting, routing, hot code reloading and universal rendering.</p>
      <Button href="/docs">Learn Next.js</Button>
    </div>
    <div className="column">
      <h3>Zero Setup</h3>
      <p>Automatic code splitting, routing, hot code reloading and universal rendering.</p>
      <Button href="/docs">Learn Next.js</Button>
    </div>
  </div>
  <style jsx>{`
    .row {
      display: flex;
    }
    .column {
      text-align: left;
    }
  `}</style>
</Container>
