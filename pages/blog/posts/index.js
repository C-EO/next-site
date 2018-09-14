import { PureComponent } from 'react'
import dynamic from 'next/dynamic'

import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import Page from '../../../components/page'
import Container from '../../../components/container'
import { MediaQueryConsumer } from '../../../components/media-query'

import { components } from '../../../components/blog/post'

let Example = dynamic(import('./example.mdx'))
let Hello = dynamic(import('./hello.mdx'))
const Post = ({name}) => {
  switch (name) {
    case 'hello': return <Hello components={components}/>
    case 'example': return <Example components={components}/>
    default: return <Example components={components}/>
  }
}

export default class extends PureComponent {
  static async getInitialProps ({ query }) {
    return { name: query.post }
  }
  render() {
    let { name } = this.props
    
    return <Page>
      <MediaQueryConsumer>{({isMobile}) => 
        <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
          <Navbar/>
        </Header>
      }</MediaQueryConsumer>
      <Container padding>
        <Post name={name}/>
      </Container>
      <Footer/>
    </Page>
  }
}

// export default () =>
//   <Page>
//     <MediaQueryConsumer>{({isMobile}) => 
//       <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
//         <Navbar/>
//       </Header>
//     }</MediaQueryConsumer>
//     <Container padding>
//       <Markdown components={components}/>
//     </Container>
//     <Footer/>
//   </Page>
