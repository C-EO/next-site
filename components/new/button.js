import Link from 'next/link'

export default ({children, invert, href, className}) => (
  <Link href={href}>
    <a className={invert ? `invert` : ''}>
      <style jsx>{`
        a {
          justify-content: center;
          align-content: center;
          align-items: center;
          height: 40px;
          border-radius: 7px;
          cursor: pointer;
          text-decoration: none;
          font-size: 16px;
          padding: 10px 20px;
          display: inline-block;
          color: var(--theme-color);
        }
        a.invert {
          background: var(--theme-color);
          box-shadow: 0 4px 14px 0 var(--theme-color-transparent);
          color: white;
        }
      `}</style>
      {children}
    </a>
  </Link>
)