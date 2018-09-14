import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'

export default () => <Container center padding>
  <SectionHeader title='Learn Next.js'/>
  <div className='learn-intro'>
    <p>Tutorials, examples and quizzes. <br className='display-mobile'/>Learn Next.js step-by-step and earn points ✨.</p>
    <div className="overlay"></div>
    <style jsx>{`
      .learn-intro {
        position: relative;
        height: 450px;
        background: url(/static/images/learn-2.png);
        background-size: 100% auto;
        background-position: 0 2rem;
        background-repeat: no-repeat;
      }
      :global(.is-mobile) .learn-intro {
        background-position: 0 3.5rem;
        background-size: 160% auto;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 90%);
        pointer-events: none;
      }
    `}</style>
  </div>
  <div>
    <Button href="/learn" invert>Get Started</Button>
  </div>
</Container>
