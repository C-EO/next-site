import Container from '../container'
import SectionHeader from '../section-header'

export default ({ height }) => <Container center>
  <div className="showcase-title">
    <style jsx>{`
      .showcase-title {
        display: flex;
        height: ${height}px;
        padding-top: 48px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
      }
    `}</style>
    <SectionHeader title='Showcase' description={<span>Meet hundreds of beautiful websites <br className="display-mobile"/>powered by Next.js</span>} />
  </div>
</Container>
