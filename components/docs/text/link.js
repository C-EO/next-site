import NativeLink from 'next/link'

export const GenericLink = props => {
  if (props.href.startsWith('/') && !props.href.startsWith('/docs')) {
    return <InternalLink {...props} />
  }

  if (props.href.includes('@') || props.href.startsWith('#')) {
    return <AnchorLink {...props} />
  }

  return <ExternalLink {...props} />
}

export const InternalLink = (
  { href, as, children, error = false }
) => (
  <NativeLink prefetch href={href} as={as}>
    <a>
      {children}

      <style jsx>{`
        a {
          text-decoration: ${error ? 'underline' : 'none'};
          font-size: inherit;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </a>
  </NativeLink>
)

export const AnchorLink = ({ href, onClick, children }) => (
  <a href={href} onClick={onClick}>
    {children}

    <style jsx>
      {`
        a {
          font-size: inherit;
        }

        a:hover {
          color: unset;
          text-decoration: underline;
        }
      `}
    </style>
  </a>
)

export const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}

    <style jsx>
      {`
        a {
          text-decoration: none;
          font-size: inherit;
        }
      `}
    </style>
  </a>
)
