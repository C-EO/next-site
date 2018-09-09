import Highlight from 'react-highlight'

export default ({children}) => <div className='f5 editor' style={{ padding: '1rem' }}>
  <style jsx global>{`
    pre {
      margin: 0;
    }
    .editor .hljs {
      color: #c3c3c3;
    }
    .editor .hljs .hljs-keyword, .editor .hljs .hljs-tag {
      color: #f1f1f1;
      font-weight: 600;
    }
    .editor .hljs .hljs-comment {
      color: #525252;
    }
    .editor .hljs-string {
      color: #c3c3c3;
      font-weight: 400;
    }
  `}</style>
  <Highlight className='javascript'>{children}</Highlight>
</div>
