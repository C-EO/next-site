import Container from '../container'

export default ({ height }) => <Container center>
  <div className="showcase-title">
    <style jsx>{`
      .showcase-title {
        display: flex;
        height: ${height}px;
        padding-bottom: 50px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }
    `}</style>
    <h1 className="f1">Showcases</h1>
    <h2 className="subtitle">Meet hundreds of beautiful websites powered by Next.js</h2>
  </div>
</Container>
