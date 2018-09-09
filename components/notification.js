import Link from 'next/link'
import { ellipsis } from 'polished'

import { MediaQueryConsumer } from './media-query'
import Container from './container'

export default ({title, titleMobile, children}) => {
  return <MediaQueryConsumer>{({isMobile}) => {
    return <div className='notification f6' title={title}>
      <style jsx>{`
        .notification {
          width: 100%;
          height: 32px;
          text-align: center;
          color: #6A6A6A;
          background: rgba(0, 0, 0, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      `}</style>
      <Container style={ellipsis()}>
        {(isMobile && titleMobile) ? titleMobile : children}
      </Container>
    </div>
  }}</MediaQueryConsumer>
}
