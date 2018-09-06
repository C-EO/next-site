export default ({title, description}) => <div>
  <style jsx>{`
    h2, h3 {
      text-align: center;
    }
    div {
      margin-bottom: 3rem;
    }
  `}</style>
  <h2 className="f2 fw5">{title}</h2>
  <h3 className="f4 subtitle">{description}</h3>
</div>
