import { PureComponent } from 'react'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/tag'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import formatDate from 'date-fns/format'

import Header from '../header'
import Footer from '../footer'
import Navbar from '../navbar'
import Page from '../page'
import Container from '../container'
import Button from '../button'
import { MediaQueryConsumer } from '../media-query'
import { components } from './post-components'

const Author = meta => <div className='author'>
  <img src={meta.avatar} alt={meta.name}/>
  <span className='name f5'>
    {meta.name} (<Link href={`https://twitter.com/${meta.twitter}`}>
      <a className='twitter' target='_blank'>@{meta.twitter}</a>
    </Link>)
  </span>
  <style jsx>{`
    .author {
      display: inline-flex;
      align-items: center;
      padding: 0 1rem;
    }
    img {
      width: 2rem;
      height: 2rem;
      margin-right: .5rem;
      border-radius: 50%;
      background: #efefef;
    }
  `}</style>
</div>

export default meta => ({ children }) => {
  const date = meta.date ? new Date(meta.date) : new Date()

  return <MDXProvider components={components}>
    <Page title={meta.title + ' - Next.js Blog'}>
      <MediaQueryConsumer>{({isMobile}) => 
        <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
          <Navbar/>
        </Header>
      }</MediaQueryConsumer>
      <Container padding>
        <h1 className='title fw6 f0'>{ meta.title }</h1>
        <div className='date mute f6'>
          <time dateTime={meta.date}>
            {formatDate(date, 'dddd, MMMM Do YYYY')} ({distanceInWordsToNow(date, {
              addSuffix: true
            })})
          </time>
        </div>
        <div className='authors'>
          {meta.authors.map(data => <Author key={data.name} {...data} />)}
        </div>
        <content>
          {children}
        </content>
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
          .authors {
            margin: 1rem 0 4rem;
            text-align: center;
          }
        `}</style>
      </Container>
      <Footer/>
    </Page>
  </MDXProvider>
}
