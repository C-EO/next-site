import Link from 'next/link'

import Container from './container'

export default () => <Container wide dark padding>
  <Container>
    <footer>
      <style jsx>{`
        a, p {
          color: #8c8c8c;
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
      `}</style>
      <div className="row f-reset">
        <div className="column">
          <h4 className="fw5">Docs</h4>
          <p>Setup</p>
          <p>Examples</p>
          <p>API</p>
          <p>Configuration</p>
          <p>FAQ</p>
          <p>Contributing</p>
        </div>
        <div className="column">
          <h4 className="fw5">Learn</h4>
          <p>Get Started</p>
          <p>Basics</p>
          <p>Excel</p>
          <h4 className="fw5">Showcase</h4>
          <p>Gallery</p>
        </div>
        <div className="column">
          <h4 className="fw5">Blog</h4>
          <p>Case Studies</p>
          <p>News</p>
          <h4 className="fw5">Enterprise</h4>
          <p>Plans</p>
        </div>
        <div className="column">
          <h4 className="fw5">More</h4>
          <p><Link href="#"><a>Acknowledgement</a></Link></p>
          <p><Link href="/design"><a>Design</a></Link></p>
          <p><Link href="#"><a>Concat</a></Link></p>
        </div>
      </div>
      <div className='external-links f6'>
        <Link href="https://zeit.co/oss"><a>ZEIT OSS</a></Link>
        <Link href="https://github.com/zeit/next.js"><a>GitHub</a></Link>
        <Link href="https://github.com/zeit/next.js"><a>Changelog</a></Link>
        <Link href="https://github.com/zeit/next.js"><a>Releases</a></Link>
        <Link href="https://spectrum.chat/next-js"><a>Spectrum</a></Link>
      </div>
    </footer>
  </Container>
</Container>