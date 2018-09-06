import Container from '../container'
import Button from '../button'
import Section from '../section'

export default () => <Container gray wide center padding>
  <Container center>
    <Section title='Who’s using Next.js?' description='We’re honored some of the most talented creatives out there build with Next.js'>
      <Button href="/blog">More Articles</Button>
      <div>
        hi
      </div>
      <Button href="/blog">View Gallery</Button>
      <style jsx>{`
      `}</style>
    </Section>
  </Container>
</Container>
