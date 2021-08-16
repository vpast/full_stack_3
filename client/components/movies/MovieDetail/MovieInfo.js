const MovieInfo = ({movie}) => {
  return (
    <div className="section-line">
      <div className="movie-info-entity">
        <div className="entity-poster" data-role="hover-wrap">
          <div className="embed-responsive embed-responsive-poster">
            <img
              className="embed-responsive-item"
              src={movie.poster}
              alt
            />
          </div>
          <div
            className="d-over bg-theme-lighted collapse animated faster"
            data-show-class="fadeIn show"
            data-hide-class="fadeOut show"
          >
            <div className="entity-play">
              <a
                className="action-icon-theme action-icon-bordered rounded-circle"
                href="https://www.youtube.com/watch?v=d96cjJhvlMA"
                data-magnific-popup="iframe"
              >
                <span className="icon-content">
                  <i className="fas fa-play" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="entity-content">
          <h2 className="entity-title">{movie.title}</h2>
          <div className="entity-category">
            <a className="content-link" href="movies-blocks.html">
              {movie.genres}
            </a>
          </div>
          <div className="entity-info">
            <div className="info-lines">
              <div className="info info-short">
                <span className="text-theme info-icon">
                  <i className="fas fa-star" />
                </span>
                {!!movie && !!movie.imdb &&<span className="info-text">{movie.imdb.rating}</span>}
                <span className="info-rest">/10</span>
              </div>
              <div className="info info-short">
                <span className="text-theme info-icon">
                  <i className="fas fa-clock" />
                </span>
                <span className="info-text">{movie.runtime}</span>
                <span className="info-rest">&nbsp;min</span>
              </div>
            </div>
          </div>
          <ul className="entity-list">
            <li>
              {console.log(movie)}
              <span className="entity-list-title">Release:</span>July 21, 2014
              (Dolby Theatre), August 1, 2014 (United States)
            </li>
            <li>
              <span className="entity-list-title">Directed:</span>
              <a className="content-link" href="#">
                {movie.directors}
              </a>
            </li>
            <li>
              <span className="entity-list-title">Starring:</span>
              <a className="content-link" href="#">
                {movie.cast}
              </a>
            </li>
            <li>
              <span className="entity-list-title">Production company:</span>
              {!!movie && !!movie.tomatoes &&<a className="content-link" href="#">
                {movie.tomatoes.production}
              </a>}
            </li>
            <li>
              <span className="entity-list-title">Country:</span>
              <a className="content-link" href="#">
                {movie.countries}
              </a>
            </li>
            <li>
              <span className="entity-list-title">Language:</span>{movie.languages}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
