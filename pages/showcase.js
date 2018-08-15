import Page from '../components/page'
import React from 'react'
import Grid from 'mauerwerk'
import { OscillatorAnimation } from 'react-spring/dist/addons.cjs'

const data = [{
  name: '1',
  height: 100
}, {
  name: '2',
  height: 200
}]

const Box = (props) => (
  <div>
    <style jsx>{`
      {
        position: relative;
        width: 100%;
        height: 100%;
      }
    `}</style>
    <img src={`/static/showcase/showcases-00.png`} />
  </div>
)

export default () =>
  <Page>
    <div>
      Share your wonderful website built on Next.js! (Tweet!)
    </div>
    <div>
      <style jsx>{`
        {
          background: #f5f5f5;
          min-height: 50vh;
        }
      `}</style>
      grid
      <Grid
        className="grid"
        data={data}
        keys={d => d.name}
        heights={d => d.height}
        columns={2}
        margin={10}
        lockScroll={false}
        closeDelay={400}
        {...({
          impl: OscillatorAnimation,
          config: {
            mass: 15,
            tension: 300,
            friction: 86,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01
          }
        })}>
        {(data, maximized, toggle) => (
          <Box/>
        )}
      </Grid>
    </div>
  </Page>