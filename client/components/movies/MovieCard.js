const MovieCard = (props) => {
  const item = props.item
  const {title, poster, _id} = item
  return(
    <article className="movie-line-entity">
        <div className="entity-poster" data-role="hover-wrap">
          <div className="embed-responsive embed-responsive-poster">
            {!!poster &&<img
              className="embed-responsive-item"
              src={poster}
              alt
            />}
          </div>
        </div>
        <div className="entity-content">
          <h4 className="entity-title">
            <a className="content-link" href={`${_id}`}>
              {title}
            </a>
          </h4>
          <div className="entity-category">
            <a className="content-link" href="movies-blocks.html">
              comedy
            </a>
            ,
            <a className="content-link" href="movies-blocks.html">
              detective
            </a>
          </div>
          <div className="entity-info">
            <div className="info-lines">
              <div className="info info-short">
                <span className="text-theme info-icon">
                  <i className="fas fa-star" />
                </span>
                <span className="info-text">8,7</span>
                <span className="info-rest">/10</span>
              </div>
              <div className="info info-short">
                <span className="text-theme info-icon">
                  <i className="fas fa-clock" />
                </span>
                <span className="info-text">130</span>
                <span className="info-rest">&nbsp;min</span>
              </div>
            </div>
          </div>
          <p className="text-short entity-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consectetur ultrices justo a pellentesque. Praesent venenatis dolor
            nec tempus lacinia. Donec ac condimentum dolor. Nullam sit amet nisl
            hendrerit, pharetra nulla convallis, malesuada diam. Donec ornare
            nisl eu lectus rhoncus, at malesuada metus rutrum. Aliquam a nisl
            vulputate, sodales ipsum aliquam, tempus purus. Suspendisse
            convallis, lectus nec vehicula sollicitudin, lorem sapien rhoncus
            dolor, vel lacinia urna velit ullamcorper nisi. Phasellus
            pellentesque, magna nec gravida feugiat, est magna suscipit ligula,
            vel porttitor nunc enim at nibh. Sed varius sit amet leo vitae
            consequat.
          </p>
        </div>
        <div className="entity-extra">
          <div className="text-uppercase entity-extra-title">Showtime</div>
          <div className="entity-showtime">
            <div className="showtime-wrap">
              <div className="showtime-item">
                <span className="disabled btn-time btn" aria-disabled="true">
                  11 : 30
                </span>
              </div>
              <div className="showtime-item">
                <a className="btn-time btn" aria-disabled="false" href="#">
                  13 : 25
                </a>
              </div>
              <div className="showtime-item">
                <a className="btn-time btn" aria-disabled="false" href="#">
                  16 : 07
                </a>
              </div>
              <div className="showtime-item">
                <a className="btn-time btn" aria-disabled="false" href="#">
                  19 : 45
                </a>
              </div>
              <div className="showtime-item">
                <a className="btn-time btn" aria-disabled="false" href="#">
                  21 : 30
                </a>
              </div>
              <div className="showtime-item">
                <a className="btn-time btn" aria-disabled="false" href="#">
                  23 : 10
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
  )
}

export default MovieCard