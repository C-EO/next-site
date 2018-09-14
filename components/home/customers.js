import Container from '../container'
import Button from '../button'
import SectionHeader from '../section-header'
import ShowcasePreview from '../showcase-preview'

import Preview from '../blog/preview'

export default () => <Container gray wide center padding>
  <Container center>
    <SectionHeader id="showcases" title='Who’s Using Next.js?' description='We’re honored some of the most talented creatives out there build with Next.js'/>
    <div>
      <style jsx>{`
        div {
          margin-bottom: 2rem;
        }
      `}</style>
      <Preview post='marvel' caseStudy card />
    </div>
    <Button href="/blog">More Articles</Button>
  </Container>
  <div>
    <style jsx>{`
      div {
        margin-top: 4rem;
      }
    `}</style>
    <h3 className="f-reset subtitle fw4">Meet hundreds of beautiful websites <br className="display-mobile"/>powered by Next.js</h3>
  </div>
  <ShowcasePreview/>
  <div>
    <style jsx>{`
      div {
        z-index: 1;
        position: relative;
      }
    `}</style>
    <Button href="/showcase">View Gallery</Button>
  </div>
</Container>
