import classNames from 'classnames'
import Link from 'next/link'

import Container from '../container'
import Button from '../button'
import { MediaQueryConsumer } from '../media-query'

export default ({ caseStudy, card, detail, wide }) => {
  let content = null

  if (caseStudy) {
    content = <div className={classNames('case-study', { card })}>
      <style jsx>{`
        .case-study {
          display: flex;
          align-items: center;
          min-height: ${wide ? '20rem' : '200px'};
          text-align: left;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) ${card ? '1100px' : '110%'}), url(/static/images/showcases/marvel.png);
          background-size: cover;
          background-position: center top;
          overflow: hidden;
          ${wide ? `box-shadow: 0 -10px 30px rgba(0, 0, 0, .12) inset;` : ''}
        }
        .case-study.card {
          box-shadow: 0 10px 20px 0 rgba(0, 0, 0, .12);
          border-radius: 7px;
        }
        .wrapper {
          color: white;
          height: 100%;
          max-width: 560px;
          padding: 2rem 1rem 2rem ${wide ? 0 : 1}rem;
          text-shadow: 0 2px 1rem rgba(0, 0, 0, 0.8);
        }
        .wrapper h2 {
          margin-bottom: 1rem;
        }
        .wrapper p {
          margin-top: 0;
          margin-bottom: 2rem;
        }
      `}</style>
      <Container>
        <div className="wrapper">
          {wide && <h3 className='f-reset'>Case Study</h3>}
          {wide ? <h2 className='f1 fw6'>Marvel</h2> : <h2 className='f2 fw6'>Case study: Marvel</h2>}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae neque quis augue congue rutrum non in leo. Praesent eu orci convallis nisl eleifend sollicitudin. Aliquam laoreet ac ex sed gravida. Proin et ex in elit luctus gravida non quis turpis.</p>
          <Button href="/blog">Read More</Button>
        </div>
      </Container>
    </div>
  } else {
    content = <div>
      <style jsx>{`
        div {
          padding: 1.5rem 0;
          transition: all .5s ease;
        }
        div:hover {
          background-color: rgba(0, 0, 0, .03);
        }
        .title {
          cursor: pointer;
        }
        .content {
          max-width: 560px;
        }
        .date {
          margin-top: .25rem;
          margin-bottom: 0;
        }
      `}</style>
      <Container>
        <Link href={{ pathname: '/blog/posts', query: { post: 'example' }, asPath: '/blog/example' }}><h3 className='f3 title'>Next.js on ReactConf</h3></Link>
        <p className='f6 date mute'>Thursday, June 28th 2018 (2 months ago)</p>
        {detail && <p className='content'>
          {`We're excited to announce that nextjs.org is now open source so that it can serve as a reference Nextjs implementation and issues/improvements can be filed directly on the project.`}
        </p>}
        {detail && <Button href="/blog">Read More</Button>}
      </Container>
    </div>
  }

  return <div>
    {content}
  </div>
}
