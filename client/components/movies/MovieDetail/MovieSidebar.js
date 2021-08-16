const MovieSidebar = () => {
  return (
    <div className="sidebar section-long order-lg-last">
      <section className="section-sidebar">
        <div className="section-head">
          <h2 className="section-title text-uppercase">Latest movies</h2>
        </div>
        <div className="movie-short-line-entity">
          <a className="entity-preview" href="movie-info-sidebar-right.html">
            <span className="embed-responsive embed-responsive-16by9">
              <img
                className="embed-responsive-item"
                src="http://via.placeholder.com/1920x1080"
                alt
              />
            </span>
          </a>
          <div className="entity-content">
            <h4 className="entity-title">
              <a className="content-link" href="movie-info-sidebar-right.html">
                Deadman skull
              </a>
            </h4>
            <p className="entity-subtext">11 nov 2018</p>
          </div>
        </div>
        <div className="movie-short-line-entity">
          <a className="entity-preview" href="movie-info-sidebar-right.html">
            <span className="embed-responsive embed-responsive-16by9">
              <img
                className="embed-responsive-item"
                src="http://via.placeholder.com/1920x1080"
                alt
              />
            </span>
          </a>
          <div className="entity-content">
            <h4 className="entity-title">
              <a className="content-link" href="movie-info-sidebar-right.html">
                Dream forest
              </a>
            </h4>
            <p className="entity-subtext">29 oct 2018</p>
          </div>
        </div>
        <div className="movie-short-line-entity">
          <a className="entity-preview" href="movie-info-sidebar-right.html">
            <span className="embed-responsive embed-responsive-16by9">
              <img
                className="embed-responsive-item"
                src="http://via.placeholder.com/1920x1080"
                alt
              />
            </span>
          </a>
          <div className="entity-content">
            <h4 className="entity-title">
              <a className="content-link" href="movie-info-sidebar-right.html">
                Fall
              </a>
            </h4>
            <p className="entity-subtext">29 oct 2018</p>
          </div>
        </div>
      </section>
      <section className="section-sidebar">
        <div className="section-head">
          <h2 className="section-title text-uppercase">Archive</h2>
        </div>
        <ul className="list-unstyled list-wider list-categories">
          <li>
            <a className="content-link text-uppercase" href="#">
              July 2018
            </a>
          </li>
          <li>
            <a className="content-link text-uppercase" href="#">
              June 2018
            </a>
          </li>
          <li>
            <a className="content-link text-uppercase" href="#">
              May 2018
            </a>
          </li>
          <li>
            <a className="content-link text-uppercase" href="#">
              April 2018
            </a>
          </li>
        </ul>
      </section>
      <section className="section-sidebar">
        <a className="d-block" href="#">
          <img className="w-100" src="http://via.placeholder.com/350x197" alt />
        </a>
      </section>
    </div>
  );
};

export default MovieSidebar;
