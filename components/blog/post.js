const H1 = ({ children, ...props }) => (
  <h1 {...props}>
    { children }

    <style jsx>{`
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      margin-top: 0;
    `}</style>
  </h1>
)

export const components = {
  h1: H1
}
