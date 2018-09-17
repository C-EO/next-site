import Container from '../container'
import SectionHeader from '../section-header'

import Preview from './preview'

export default () => (
  <Container padding wide>
    <SectionHeader title='Blog' />
    <Preview detail/>
    <Preview/>
    <Preview/>
    <Preview/>
    <Preview/>
  </Container>
)
