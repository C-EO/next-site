import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'

export default () => <Container center padding>
  <SectionHeader title='Learn Next.js'/>
  <div>
    <p>Tutorials, examples and quizzes. Learn Next.js step-by-step and get points ✨.</p>
    <p>image here</p>
  </div>
  <div>
    <style jsx>{`
      div {
        z-index: 1;
        position: relative;
      }
    `}</style>
    <Button href="/learn" invert>Get Started</Button>
  </div>
</Container>
