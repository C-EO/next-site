import Container from '../container'
import SectionHeader from '../section-header'

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
    <SectionHeader title='Showcase' description='Meet hundreds of beautiful websites powered by Next.js' />
  </div>
</Container>
