const MovieNavigator = () => {
  return(
    <section className="after-head d-flex section-text-white position-relative">
      <div
        className="d-background"
        data-image-src="http://via.placeholder.com/1920x1080"
        data-parallax="scroll"
      />
      <div className="d-background bg-black-80" />
      <div className="top-block top-inner container">
        <div className="top-block-content">
          <h1 className="section-title">Movies list</h1>
          <div className="page-breadcrumbs">
            <a className="content-link" href="#">
              Home
            </a>
            <span className="text-theme mx-2">
              <i className="fas fa-chevron-right" />
            </span>
            <span>Movies</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovieNavigator