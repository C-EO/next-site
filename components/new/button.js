import Link from 'next/link'

export default ({children, invert, href, className}) => (
  <Link href={href}>
    <a className={invert ? `invert` : ''}>
      <style jsx>{`
        a {
          justify-content: center;
          align-content: center;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          font-size: 16px;
          font-weight: 300;
          display: inline-block;
          color: var(--theme-color);
        }
        a.invert {
          padding: 0 30px;
          height: 40px;
          line-height: 40px;
          border-radius: 7px;
          background: var(--theme-color);
          box-shadow: 0 4px 14px 0 var(--theme-color-transparent);
          color: white;
        }
      `}</style>
      {children}
    </a>
  </Link>
)