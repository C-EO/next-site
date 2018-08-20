const fallback = (...args) => {
  for (let i = 0; i < args.length; ++i) if (typeof args[i] !== 'undefined') return args[i]
}

export default ({ size, dib, v, h }) =>
  <div><style jsx>{`
    { 
      margin: ${fallback(v, size, 1)}rem ${fallback(h, size, 1)}rem;
      display: ${dib ? 'inline-block' : 'block'};
    }
  `}</style></div>