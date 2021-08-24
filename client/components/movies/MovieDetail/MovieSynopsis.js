const MovieSynopsis = ({movie}) => {
  return (
    <div className="section-line">
      <div className="section-head">
        <h2 className="section-title text-uppercase">Synopsis</h2>
      </div>
      <div className="section-description">
        <p className="lead">
          Lead text. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <h6 className="text-dark">Why do we use it?</h6>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <h6 className="text-dark">Where does it come from?</h6>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
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
  );
};

export default MovieSynopsis;
