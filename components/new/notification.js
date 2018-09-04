import Link from 'next/link'
import { ellipsis } from 'polished'

import Container from './container'

export default ({title, children}) => {
  return <div className='notification' title={title}>
    <style jsx>{`
      .notification {
        width: 100%;
        height: 32px;
        text-align: center;
        color: #6A6A6A;
        background: #F3F3F3;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
    `}</style>
    <Container style={ellipsis()}>
      {children}
    </Container>
  </div>
}