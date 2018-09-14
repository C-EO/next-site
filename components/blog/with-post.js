import { PureComponent } from 'react'
import { MDXProvider } from '@mdx-js/tag'

import Header from '../header'
import Footer from '../footer'
import Navbar from '../navbar'
import Page from '../page'
import Container from '../container'
import Button from '../button'
import { MediaQueryConsumer } from '../media-query'
import { components } from './post-components'

export default (meta) => ({ children }) => {
  return <MDXProvider components={components}>
    <Page title={meta.title + ' - Next.js Blog'}>
      <MediaQueryConsumer>{({isMobile}) => 
        <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
          <Navbar/>
        </Header>
      }</MediaQueryConsumer>
      <Container padding>
        <h1 className='title fw6 f0'>{ meta.title }</h1>
        <div className='date mute f5'>{ meta.date }</div>
        {children}
        <hr/>
        <Button href='/blog' prefetch>Back to Blog</Button>
        <style jsx>{`
          .title {
            text-align: center;
            margin-bottom: 2rem;
          }
          hr {
            margin: 6rem 0 2rem;
            border: none;
            border-bottom: 1px solid #efefef;
          }
          .date {
            text-align: center;
          }
        `}</style>
      </Container>
      <Footer/>
    </Page>
  </MDXProvider>
}
