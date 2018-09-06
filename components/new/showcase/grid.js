import Container from '../container'
import Button from '../button'

import { Grid } from '../mauerwerk'
import { OscillatorAnimation } from 'react-spring/dist/addons.cjs'

import { sortOrder, mapping } from '../../../showcase-manifest'

const data = sortOrder.map(name => mapping[name])

const Box = ({data, maximized, toggle}) => (
  <div
    className='tile'
    onClick={!maximized ? toggle : undefined}>
    <style jsx>{`
      .tile {
        box-shadow: 0 10px 20px 0 rgba(0,0,0,0.12);
        border-radius: ${maximized ? '0' : '7px'};
        text-align: center;
        overflow: hidden;
        background-color: #FFFFFF;
        background-image: url(${data.src});
        background-size: cover;
        background-position: center top;
        height: 100%;
        cursor: ${maximized ? 'auto' : 'pointer'};
        transition: border-radius .2s ease;
      }
    `}</style>
  </div>
)

export default () => <Container wide gray center>
  <div>
    <Grid
      className="grid"
      data={data}
      keys={d => d.internalUrl}
      heights={300}
      columns={3}
      margin={50}
      lockScroll={false}
      closeDelay={400}
      impl={OscillatorAnimation}
      config={{
        mass: 15,
        tension: 300,
        friction: 86,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01
      }}
      style={{
      }}
    >
      {(data, maximized, toggle) => {
        return <Box {...{ data, maximized, toggle }}/>
      }}
    </Grid>
  </div>
  <div>
    <Button href="#">Back to Top</Button>
    <Button invert href="#">Share Your Website</Button>
  </div>
</Container>
