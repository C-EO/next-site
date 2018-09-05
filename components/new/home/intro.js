import Logo from '../logo'
import Container from '../container'
import Button from '../button'

export default () => {
  return <Container wide center>
    <Container>
      <style jsx>{`
        h2 {
          margin: 1rem 0;
        }
        .info {
          margin-top: 1rem;
        }
      `}</style>
      <Logo size={90}/>
      <h2 className="f2">
        a lightweight framework
        <br/>
        for <strong>static</strong> and <strong>server‑rendered</strong> applications
      </h2>
      <Button href="#showcases" invert>See Showcases</Button>
      <div className="info">
        <span className="mute">v7.0.0 canary</span>
        <Button href="#">View Docs</Button>
        <Button href="#">GitHub</Button>
      </div>
    </Container>
  </Container>
}