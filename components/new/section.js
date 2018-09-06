export default ({title, description, children}) => <div>
  <style jsx>{`
    h2, h3 {
      text-align: center;
    }
  `}</style>
  <h2 className="f2 fw5">{title}</h2>
  <h3 className="f4 subtitle">{description}</h3>
  {children}
</div>
