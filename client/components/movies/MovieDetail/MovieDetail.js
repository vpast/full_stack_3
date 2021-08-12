import MovieInfo from "./MovieInfo";

const MovieDetail = () => {
  return (
    <div className="container">
      <div className="sidebar-container">
        <div className="content">
          <section className="section-long">
            <movieinfo>
              <div className="section-line">
                <div className="section-head">
                  <h2 className="section-title text-uppercase">Synopsis</h2>
                </div>
                <div className="section-description">
                  <p className="lead">
                    Lead text. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.
                  </p>
                  <h6 className="text-dark">Why do we use it?</h6>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <h6 className="text-dark">Where does it come from?</h6>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites of the word in classical literature, discovered
                    the undoubtable source. Lorem Ipsum comes from sections
                    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                    Extremes of Good and Evil) by Cicero, written in 45 BC. This
                    book is a treatise on the theory of ethics, very popular
                    during the Renaissance. The first line of Lorem Ipsum,
                    "Lorem ipsum dolor sit amet..", comes from a line in section
                    1.10.32.
                  </p>
                  <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by
                    English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
                <div className="section-bottom">
                  <div className="row">
                    <div className="mr-auto col-auto">
                      <div className="entity-links">
                        <div className="entity-list-title">Share:</div>
                        <a className="content-link entity-share-link" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="content-link entity-share-link" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="content-link entity-share-link" href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                        <a className="content-link entity-share-link" href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                        <a className="content-link entity-share-link" href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="entity-links">
                        <div className="entity-list-title">Tags:</div>
                        <a className="content-link" href="#">
                          family
                        </a>
                        ,&nbsp;
                        <a className="content-link" href="#">
                          gaming
                        </a>
                        ,&nbsp;
                        <a className="content-link" href="#">
                          historical
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-line">
                <div className="section-head">
                  <h2 className="section-title text-uppercase">
                    Photos &amp; videos
                  </h2>
                </div>
                <div className="grid row">
                  <div className="col-sm-6 col-xl-4">
                    <div className="gallery-card-entity">
                      <div className="entity-preview" data-role="hover-wrap">
                        <div className="embed-responsive embed-responsive-16by9">
                          <img
                            className="embed-responsive-item"
                            src="http://via.placeholder.com/1920x1080"
                            alt
                          />
                        </div>
                        <div
                          className="d-over bg-black-40 collapse animated faster"
                          data-show-class="fadeIn show"
                          data-hide-class="fadeOut show"
                        >
                          <div className="entity-view-popup">
                            <a
                              className="content-link action-icon-bordered rounded-circle"
                              href="http://via.placeholder.com/1920x1080"
                              data-magnific-popup="image"
                            >
                              <span className="icon-content">
                                <i className="fas fa-search" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="entity-content">
                        <h4 className="entity-title">Work hard image</h4>
                        <p className="entity-subtext">12 may 2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="gallery-card-entity">
                      <div className="entity-preview" data-role="hover-wrap">
                        <div className="embed-responsive embed-responsive-16by9">
                          <img
                            className="embed-responsive-item"
                            src="http://via.placeholder.com/1920x1080"
                            alt
                          />
                        </div>
                        <div
                          className="bg-theme-lighted d-over collapse animated faster"
                          data-show-class="fadeIn show"
                          data-hide-class="fadeOut show"
                        >
                          <div className="entity-view-popup">
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
                        <h4 className="entity-title">May video review</h4>
                        <p className="entity-subtext">11 may 2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="gallery-card-entity">
                      <div className="entity-preview" data-role="hover-wrap">
                        <div className="embed-responsive embed-responsive-16by9">
                          <img
                            className="embed-responsive-item"
                            src="http://via.placeholder.com/1920x1080"
                            alt
                          />
                        </div>
                        <div
                          className="d-over bg-black-40 collapse animated faster"
                          data-show-class="fadeIn show"
                          data-hide-class="fadeOut show"
                        >
                          <div className="entity-view-popup">
                            <a
                              className="content-link action-icon-bordered rounded-circle"
                              href="http://via.placeholder.com/1920x1080"
                              data-magnific-popup="image"
                            >
                              <span className="icon-content">
                                <i className="fas fa-search" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="entity-content">
                        <h4 className="entity-title">Virtual image title</h4>
                        <p className="entity-subtext">31 february 2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="gallery-card-entity">
                      <div className="entity-preview" data-role="hover-wrap">
                        <div className="embed-responsive embed-responsive-16by9">
                          <img
                            className="embed-responsive-item"
                            src="http://via.placeholder.com/1920x1080"
                            alt
                          />
                        </div>
                        <div
                          className="d-over bg-black-40 collapse animated faster"
                          data-show-class="fadeIn show"
                          data-hide-class="fadeOut show"
                        >
                          <div className="entity-view-popup">
                            <a
                              className="content-link action-icon-bordered rounded-circle"
                              href="http://via.placeholder.com/1920x1080"
                              data-magnific-popup="image"
                            >
                              <span className="icon-content">
                                <i className="fas fa-search" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="entity-content">
                        <h4 className="entity-title">Lost image title</h4>
                        <p className="entity-subtext">30 february 2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="gallery-card-entity">
                      <div className="entity-preview" data-role="hover-wrap">
                        <div className="embed-responsive embed-responsive-16by9">
                          <img
                            className="embed-responsive-item"
                            src="http://via.placeholder.com/1920x1080"
                            alt
                          />
                        </div>
                        <div
                          className="d-over bg-black-40 collapse animated faster"
                          data-show-class="fadeIn show"
                          data-hide-class="fadeOut show"
                        >
                          <div className="entity-view-popup">
                            <a
                              className="content-link action-icon-bordered rounded-circle"
                              href="http://via.placeholder.com/1920x1080"
                              data-magnific-popup="image"
                            >
                              <span className="icon-content">
                                <i className="fas fa-search" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="entity-content">
                        <h4 className="entity-title">My image title</h4>
                        <p className="entity-subtext">21 january 2019</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="gallery-card-entity">
                      <div className="entity-preview" data-role="hover-wrap">
                        <div className="embed-responsive embed-responsive-16by9">
                          <img
                            className="embed-responsive-item"
                            src="http://via.placeholder.com/1920x1080"
                            alt
                          />
                        </div>
                        <div
                          className="bg-theme-lighted d-over collapse animated faster"
                          data-show-class="fadeIn show"
                          data-hide-class="fadeOut show"
                        >
                          <div className="entity-view-popup">
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
                        <h4 className="entity-title">Movie trailer</h4>
                        <p className="entity-subtext">12 january 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="section-bottom">
                  <a className="btn btn-theme" href="gallery.html">
                    View All
                  </a>
                </div>
              </div>
              <div className="section-line">
                <div className="section-head">
                  <h2 className="section-title text-uppercase">Comments</h2>
                </div>
                <div className="comment-entity">
                  <div className="entity-inner">
                    <div className="entity-content">
                      <h4 className="entity-title">Lie Stone</h4>
                      <p className="entity-subtext">07.08.2018, 14:33</p>
                      <p className="entity-text">
                        Comment example here. Nulla risus lacus, vehicula id mi
                        vitae, auctor accumsan nulla. Sed a mi quam. In euismod
                        urna ac massa adipiscing interdum.
                      </p>
                    </div>
                    <div className="entity-extra">
                      <div className="grid-md row">
                        <div className="col-12 col-sm-auto">
                          <div className="entity-rating">
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon">
                              <i className="fas fa-star" />
                            </span>
                          </div>
                        </div>
                        <div className="ml-sm-auto col-auto">
                          <a className="content-link" href="#">
                            <i className="fas fa-reply" />
                            &nbsp;&nbsp;reply
                          </a>
                        </div>
                        <div className="col-auto">
                          <a className="content-link" href="#">
                            <i className="fas fa-quote-left" />
                            &nbsp;&nbsp;quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-entity">
                    <div className="entity-inner">
                      <div className="entity-content">
                        <h4 className="entity-title">Gabriel Norris</h4>
                        <p className="entity-subtext">09.08.2018, 11:33</p>
                        <p className="entity-text">
                          Comment example here. Nulla risus lacus, vehicula id
                          mi vitae, auctor accumsan nulla. Sed a mi quam. In
                          euismod urna ac massa adipiscing interdum.
                        </p>
                      </div>
                      <div className="entity-extra">
                        <div className="grid-md row">
                          <div className="ml-sm-auto col-auto">
                            <a className="content-link" href="#">
                              <i className="fas fa-reply" />
                              &nbsp;&nbsp;reply
                            </a>
                          </div>
                          <div className="col-auto">
                            <a className="content-link" href="#">
                              <i className="fas fa-quote-left" />
                              &nbsp;&nbsp;quote
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-entity">
                  <div className="entity-inner">
                    <div className="entity-content">
                      <h4 className="entity-title">Keith Earlee</h4>
                      <p className="entity-subtext">11.05.2018, 07:23</p>
                      <p className="entity-text">
                        Comment example here. Nulla risus lacus, vehicula id mi
                        vitae, auctor accumsan nulla. Sed a mi quam. In euismod
                        urna ac massa adipiscing interdum.
                      </p>
                    </div>
                    <div className="entity-extra">
                      <div className="grid-md row">
                        <div className="col-12 col-sm-auto">
                          <div className="entity-rating">
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon text-theme">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="entity-rating-icon">
                              <i className="fas fa-star" />
                            </span>
                          </div>
                        </div>
                        <div className="ml-sm-auto col-auto">
                          <a className="content-link" href="#">
                            <i className="fas fa-reply" />
                            &nbsp;&nbsp;reply
                          </a>
                        </div>
                        <div className="col-auto">
                          <a className="content-link" href="#">
                            <i className="fas fa-quote-left" />
                            &nbsp;&nbsp;quote
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-line">
                <div className="section-head">
                  <h2 className="section-title text-uppercase">Add comment</h2>
                </div>
                <form autoComplete="off">
                  <div className="row form-grid">
                    <div className="col-12 col-sm-6">
                      <div className="input-view-flat input-group">
                        <input
                          className="form-control"
                          name="name"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="input-view-flat input-group">
                        <input
                          className="form-control"
                          name="email"
                          type="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="input-view-flat input-group">
                        <textarea
                          className="form-control"
                          name="review"
                          placeholder="Add your review"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="rating-line">
                        <label>Rating:</label>
                        <div className="form-rating" name="rating">
                          <input
                            type="radio"
                            id="rating-10"
                            name="rating"
                            defaultValue={10}
                          />
                          <label htmlFor="rating-10">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-9"
                            name="rating"
                            defaultValue={9}
                          />
                          <label htmlFor="rating-9">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-8"
                            name="rating"
                            defaultValue={8}
                          />
                          <label htmlFor="rating-8">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-7"
                            name="rating"
                            defaultValue={7}
                          />
                          <label htmlFor="rating-7">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-6"
                            name="rating"
                            defaultValue={6}
                          />
                          <label htmlFor="rating-6">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-5"
                            name="rating"
                            defaultValue={5}
                          />
                          <label htmlFor="rating-5">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-4"
                            name="rating"
                            defaultValue={4}
                          />
                          <label htmlFor="rating-4">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-3"
                            name="rating"
                            defaultValue={3}
                          />
                          <label htmlFor="rating-3">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-2"
                            name="rating"
                            defaultValue={2}
                          />
                          <label htmlFor="rating-2">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                          <input
                            type="radio"
                            id="rating-1"
                            name="rating"
                            defaultValue={1}
                          />
                          <label htmlFor="rating-1">
                            <span className="rating-active-icon">
                              <i className="fas fa-star" />
                            </span>
                            <span className="rating-icon">
                              <i className="far fa-star" />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="px-5 btn btn-theme" type="submit">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </movieinfo>
          </section>
        </div>
        <div className="sidebar section-long order-lg-last">
          <section className="section-sidebar">
            <div className="section-head">
              <h2 className="section-title text-uppercase">Latest movies</h2>
            </div>
            <div className="movie-short-line-entity">
              <a
                className="entity-preview"
                href="movie-info-sidebar-right.html"
              >
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
                  <a
                    className="content-link"
                    href="movie-info-sidebar-right.html"
                  >
                    Deadman skull
                  </a>
                </h4>
                <p className="entity-subtext">11 nov 2018</p>
              </div>
            </div>
            <div className="movie-short-line-entity">
              <a
                className="entity-preview"
                href="movie-info-sidebar-right.html"
              >
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
                  <a
                    className="content-link"
                    href="movie-info-sidebar-right.html"
                  >
                    Dream forest
                  </a>
                </h4>
                <p className="entity-subtext">29 oct 2018</p>
              </div>
            </div>
            <div className="movie-short-line-entity">
              <a
                className="entity-preview"
                href="movie-info-sidebar-right.html"
              >
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
                  <a
                    className="content-link"
                    href="movie-info-sidebar-right.html"
                  >
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
              <img
                className="w-100"
                src="http://via.placeholder.com/350x197"
                alt
              />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
