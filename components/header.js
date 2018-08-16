import Link from 'next/link'
import NextLogo from './logo'

export default () =>
  <header>
    <style jsx>{`
      header {
        margin: 50px 0;
      }
      nav {
        display: flex;
        justify-content: space-between;
        item-align: center;
      }
    `}</style>
    <nav>
      <Link href="/docs">Docs</Link>
      <Link href="/showcase">Showcase</Link>
      <Link href="/">
        <div>
          <NextLogo/>
        </div>
      </Link>
      <Link href="/learn">Learn (community?)</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/enterprise">Enterprise</Link>
    </nav>
  </header>