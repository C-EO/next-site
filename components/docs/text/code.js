export const Code = ({ children, syntax }) => (
  <pre className={(syntax ? ` ${syntax}` : '')}>
    <code>{children}</code>
    <style jsx>
      {`
        pre {
          padding: 1.25rem;
          margin: 40px 0;
          border: 1px solid #eaeaea;
          white-space: pre;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }

        code {
          color: #313131;
          font-size: 14px;
          line-height: 20px;
        }
      `}
    </style>
  </pre>
)

export const InlineCode = ({ children, noWrap }) => (
  <code className={noWrap && 'no-wrap'}>
    {children}
    <style jsx>
      {`
        code {
          color: #313131;
          font-size: .875em;
          white-space: pre-wrap;
        }

        code.no-wrap {
          white-space: nowrap;
        }

        code::before {
          content: '\`';
        }

        code::after {
          content: '\`';
        }
      `}
    </style>
  </code>
)
