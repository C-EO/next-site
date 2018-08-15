import Link from 'next/link'

export default () =>
  <div>
    <header>
      here we have to use a navbar including <br/>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-around;
          item-align: center;
        }
      `}</style>
      <nav>
      <Link href="/docs">Docs</Link>
        <Link href="/showcase">Showcase</Link>
        <Link href="/learn">Learn (community?)</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/enterprise">Enterprise</Link>
      </nav>
    </header>
  </div>