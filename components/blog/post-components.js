import { components as docsComponents } from '../docs/documentation'

const H1 = ({ children }) => (
  <h1 className='fw6'>
    { children }

    <style jsx>{`
      text-align: center;
      margin-top: 0;
      font-size: 2rem;
    `}</style>
  </h1>
)

export const components = {
  ...docsComponents,
  h1: H1
}
