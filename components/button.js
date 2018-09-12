import Link from 'next/link'

import withPure from './pure'

export default withPure(({children, invert, href, className, ...props }) => (
  <Link href={href}>
    <a className={`${invert ? `invert` : ''} fw4`} {...props}>
      {children}
      <style jsx>{`
        a {
          display: inline-block;
          cursor: pointer;
          text-decoration: none;
          padding: .25rem .5rem;
          margin: -.25rem -.5rem;
          border-radius: 7px;
          color: var(--theme-color);
          transition: all .2s ease;
        }
        a:hover {
          background: var(--theme-color-transparent-near-white);
        }
        a.invert {
          padding: 0 2rem;
          height: 2.5rem;
          line-height: 2.5rem;
          border-radius: 7px;
          background: var(--theme-color);
          box-shadow: 0 4px 14px 0 var(--theme-color-transparent);
          color: white;
        }
      `}</style>
    </a>
  </Link>
))
