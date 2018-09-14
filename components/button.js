import Link from 'next/link'

import withPure from './pure'

export default withPure(({children, invert, href, as, className, ...props }) => {
  let a = 
    <a className={(className || '') + `${invert ? `invert` : ''} fw4`} role='button' {...props}>
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
          transition: background .2s ease, color .2s ease, box-shadow .2s ease;
        }
        a:hover {
          color: var(--theme-color);
          background: var(--theme-color-transparent-near-white);
        }
        a.invert {
          margin: 0;
          padding: 0 2rem;
          height: 2.5rem;
          line-height: 2.5rem;
          border-radius: 7px;
          background: var(--theme-color);
          box-shadow: 0 4px 14px 0 var(--theme-color-transparent);
          color: white;
        }
        a.invert:hover {
          background: var(--theme-color-hover);
          box-shadow: 0 6px 20px var(--theme-color-transparent-light);
        }
      `}</style>
    </a>

  if (href) {
    return <Link href={href} as={as}>{a}</Link>
  }
  return a
})
