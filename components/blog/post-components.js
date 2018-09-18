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

const Ul = ({ children }) => (
  <ul>
    { children }
    <style jsx>{`
      list-style: none;
    `}</style>
  </ul>
)

const Li = ({ children }) => (
  <li>
    { children }
    <style jsx>{`
      :before {
        content: "-";
        display: inline-block;
        color: #6d6d6d;
        position: absolute;
        margin-left: -25px;
      }
    `}</style>
  </li>
)

export const components = {
  ...docsComponents,
  h1: H1,
  li: Li,
  ul: Ul
}
