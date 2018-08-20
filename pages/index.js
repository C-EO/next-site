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

export default () =>
  <Page>
    <style jsx>{`
      h2 {
        text-align: center;
        font-size: 16px;
        font-weight: 300;
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
        font-weight: 300;
        font-size: 15px;
      }
      .demo-container {
        max-width: 1000px;
        width: 100%;
      }
      .post-container {
        width: 100%;
      }
      .caption {
        color: #aaa;
        font-size: 12px;
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
      </Center>
    </section>
    <section>
      <Center>
        <h3>People love #nextjs</h3>
        <div className="post-container">
          <Post content="Tweets"/>
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
  </Page>