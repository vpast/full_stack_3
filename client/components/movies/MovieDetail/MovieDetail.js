import MovieComments from "./MovieComments";
import MovieGallery from "./MovieGallery";
import MovieInfo from "./MovieInfo";
import MovieSidebar from "./MovieSidebar";
import MovieSynopsis from "./MovieSynopsis";

const MovieDetail = () => {
  return (
    <div className="container">
      <div className="sidebar-container">
        <div className="content">
          <section className="section-long">
            <MovieInfo />
            <MovieSynopsis />
            <MovieGallery />
            <MovieComments />
          </section>
        </div>
        <MovieSidebar />
      </div>
    </div>
  );
};

export default MovieDetail;
