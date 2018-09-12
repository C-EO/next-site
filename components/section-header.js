import withPure from './pure'

export default withPure(({id, title, description}) => <div>
  <style jsx>{`
    h2 {
      margin-bottom: 1rem;
    }
    div {
      position: relative;
      text-align: center;
      margin-bottom: 3rem;
    }
    .anchor {
      position: absolute;
      top: -9rem;
    }
  `}</style>
  { id && <span id={id} className='anchor'/>}
  <h2 className="f0 fw6">{title}</h2>
  <h3 className="f-reset subtitle fw4">{description}</h3>
</div>)
