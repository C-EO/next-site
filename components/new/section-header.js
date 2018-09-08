export default ({title, description}) => <div>
  <style jsx>{`
    h2 {
      margin-bottom: 1rem;
    }
    div {
      text-align: center;
      margin-bottom: 3rem;
    }
  `}</style>
  <h2 className="f0 fw6">{title}</h2>
  <h3 className="f-reset subtitle fw4">{description}</h3>
</div>
