// prototype

import Link from 'next/link'

import Page from '../components/page'
import NextLogo from '../components/logo'
import Center from '../components/center'
import Hero from '../components/hero'
import { Steps, Step } from '../components/step'
import Demo from '../components/demo'
import Post from '../components/post'
import Showcases from '../components/showcases'
import Spacer from '../components/spacer'
import Tweet from '../components/tweet'

export default () =>
  <Page>
    <style jsx>{`
      h2 {
        text-align: center;
        font-size: 17px;
        font-weight: 300;
        line-height: 1.5rem;
      }
      h2 strong {
        font-weight: 500;
      }
      .logo-adjust {
        margin-top: -8vh;
        margin-left: 20px;
      }
      section {
        margin-bottom: 200px;
        // padding: 0 1rem;
      }
      h3 {
        font-size: 18px;
        font-weight: 500;
        margin: 1rem 0 3rem;
      }
      h4 {
        margin: 0;
      }
      h4 a {
        font-weight: 400;
        font-size: 16px;
      }
      .demo-container {
        max-width: 1000px;
        width: 100%;
      }
      .tweet-container {
        white-space: nowrap;
        overflow-x: auto;
      }
      .post-container {
        width: 100%;
      }
      .caption {
        color: #aaa;
        font-size: 12px;
      }
      .narrow {
        max-width: 1000px;
        margin: 0 auto;
      }
      .dark {
        margin: -1rem;
        padding: 1rem;
        color: white;
        font-weight: 400;
        background: radial-gradient(circle at 50% 110%, #343434, #000000);
      }
      .gray {
        margin: -1rem;
        padding: 1rem;
        color: #999999;
        background: #fafafa;
        border-top: 1px solid #eaeaea;
      }
      a {
        font-weight: 400;
        color: #fc2222;
        transition: color .2s ease;
      }
      a:hover {
        color: #ff8585;
      }
      .dark a {
        font-size: 15px;
        color: #ff4b4b;        
      }
    `}</style>
    <Hero>
      <Center>
        <div className="logo-adjust">
          <NextLogo size={90}/>
        </div>
        <h2>
          a lightweight framework<br/>
          for <strong>static</strong> and <strong>server-rendered</strong> applications
        </h2>
      </Center>
    </Hero>
    <section>
      <Center>
        <h3>Get Started</h3>
      </Center>
      <div className="dark">
        <div className="narrow">
          <Center>
            <Spacer size={0.5}/>
            <Steps>
              <Step>Setup</Step>
              <Step active>Routing<br/>Built-in CSS support</Step>
              <Step>Server-rendering<br/>Code splitting</Step>
              <Step>Custom server<br/>Zones</Step>
              <Step>Learn more</Step>
            </Steps>
            <Spacer size={2}/>
            <div className="demo-container">
              <Demo/>
            </div>
            <Spacer size={0.5}/>
            <span className="caption">`pages` based routing</span>
            <Spacer size={2}/>
            <h4>
              <Link href="/docs"><a>Full Documentation</a></Link>
              <Spacer dib v={0}/>
              <Link href="/learn"><a>Step-by-step Tutorial</a></Link>
            </h4>
            <Spacer size={0.5}/>
          </Center>
        </div>
      </div>
    </section>
    <section>
      <Center>
        <h3>People love #nextjs</h3>
        <div className="narrow">
          <div className="tweet-container">
            <Tweet id="1030918747576356864"/>
            <Tweet id="940928783451852800"/>
          </div>
        </div>
        <Spacer size={1.5}/>
        <h4>
          <Link href="/showcase"><a>View Showcase</a></Link>
        </h4>
        <Spacer size={.5}/>
        <div className="showcase-container">
          <Showcases/>
        </div>
        <span className="caption">We’re honored some of the most talented creatives out there built with Next.js</span>
        <Spacer size={1}/>
        <Spacer size={1.5}/>
        <div className="post-container">
          <Post content="Logos"/>
        </div>
      </Center>
    </section>
    <section>
      <Center>
        <h3>News</h3>
        <div className="post-container">
          <Post/>
        </div>
        <Spacer size={1.5}/>
        <h4>
          <Link href="/blog"><a>Read more updates on our blog</a></Link>
        </h4>
      </Center>
    </section>
    <div className="gray">
      <Spacer size={1}/>
      <div className="narrow">
        <p>Made with &lt;3 by ZEIT</p>
        <p>MIT licensed</p>
      </div>
      <Spacer size={6}/>
    </div>
  </Page>