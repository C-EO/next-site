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

export const InlineCode = ({ children, wrap = false }) => (
  <code className={wrap && 'wrap'}>
    {children}
    <style jsx>
      {`
        code {
          color: #2195ff;
          font-size: .875em;
          white-space: nowrap;
        }

        code.no-wrap {
          white-space: pre-wrap;
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
