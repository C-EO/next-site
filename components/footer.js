import Link from 'next/link'

import Container from './container'
import withPure from './hoc/pure'

import { links } from '../site-manifest'

export default withPure(() => <Container wide dark padding>
  <Container>
    <footer>
      <style jsx>{`
        a, p {
          color: #8c8c8c;
        }
        a:hover {
          color: #efefef;
        }
        .external-links {
          margin-top: 4rem;
        }
        .external-links a {
          display: inline-block;
          margin-right: 2rem;
          margin-bottom: .5rem;
        }
        .row {
          align-items: flex-start;
        }
        h4 {
          margin-bottom: .75rem;
        }
        p {
          margin-top: 0;
          margin-bottom: .25rem;
        }
        * + h4 {
          margin-top: 2rem;
        }
        :global(.is-mobile) footer .row {
          flex-direction: row;
          flex-wrap: wrap;
        }
        :global(.is-mobile) footer .column {
          flex: 1 1 120px;
        }
        footer {
          min-height: 320px;
        }
      `}</style>
      <div className="row f5">
        <div className="column">
          <h4 className="fw5">Docs</h4>
          <p><Link href="/docs#setup"><a>Setup</a></Link></p>
          <p><Link href="/docs#custom-configuration"><a>Configuration</a></Link></p>
          <p><Link href="/docs#static-html-export"><a>Static Export</a></Link></p>
          <p><Link href="/docs#recipes"><a>Recipes</a></Link></p>
          <p><Link href="/docs#faq"><a>FAQ</a></Link></p>
          <p><Link href="/docs#contributing"><a>Contributing</a></Link></p>
        </div>
        <div className="column">
          <h4 className="fw5">Learn</h4>
          <p><Link href='/learn/basics/getting-started'><a>Basics</a></Link></p>
          <p><Link href='/learn/excel/static-html-export'><a>Excel</a></Link></p>
          <h4 className="fw5">Showcase</h4>
          <p><Link href='/showcase'><a>Gallery</a></Link></p>
        </div>
        <div className="column">
          <h4 className="fw5">Blog</h4>
          <p><Link href='/blog'><a>News</a></Link></p>
          {
            // <p>Case Studies</p>
            // <h4 className="fw5">Enterprise</h4>
            // <p>Plans</p>
          }
          <h4 className="fw5">More</h4>
          <p><Link href="https://github.com/zeit/next.js/blob/canary/license.md"><a target='_blank'>MIT Licensed</a></Link></p>
          <p><Link href="/design"><a>Design</a></Link></p>
          <p><Link href="#"><a>Contact</a></Link></p>
        </div>
        <div className="column">
        </div>
      </div>
      <div className='external-links f6'>
        <Link href="https://zeit.co/oss"><a rel="noreferrer" target='_blank'>ZEIT OSS</a></Link>
        <Link href="https://github.com/zeit/next.js"><a rel="noreferrer" target='_blank'>GitHub</a></Link>
        <Link href="https://github.com/zeit/next.js/releases"><a rel="noreferrer" target='_blank'>Releases</a></Link>
        <Link href="https://twitter.com/zeithq"><a rel="noreferrer" target='_blank'>Twitter</a></Link>
        <Link href={links.spectrum}><a rel="noreferrer" target='_blank'>Spectrum</a></Link>
      </div>
    </footer>
  </Container>
</Container>)
