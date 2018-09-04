import Logo from '../logo'
import Container from '../container'
import Button from '../button'

export default () => {
  return <div className="full">
    <style jsx>{`
      .full {
        width: 100%;
      }
    `}</style>
    <Container center>
      <Logo size={90}/>
      <h2>
        a lightweight framework
        <br/>
        for <strong>static</strong> and <strong>server‑rendered</strong> applications
      </h2>
      <Button href="#showcases" invert>See Showcases</Button>
      <div>
        <span className="mute">v7.0.0 canary</span>
        <Button href="#">View Docs</Button>
        <Button href="#">GitHub</Button>
      </div>
    </Container>
  </div>
}