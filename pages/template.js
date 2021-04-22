import MainLayout from "../components/layouts/Main";
import PostCard from "../components/cards/Post"
import ArticleCard from "../components/cards/Article"
import AboutCard from "../components/cards/About";

const Template = () => {
  return (
    <MainLayout>
      <div className="row mb-2">
        <div className="col-md-6">
          <PostCard />
        </div>
        <div className="col-md-6">
          <PostCard />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
            <ArticleCard />
          {/* /.blog-post */}
          <nav className="blog-pagination" aria-label="Pagination">
            <a className="btn btn-outline-primary" href="#">
              Older
            </a>
            <a
              className="btn btn-outline-secondary disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Newer
            </a>
          </nav>
        </div>
        <div className="col-md-4">
          <AboutCard />
        </div>
      </div>
      {/* /.row */}
    </MainLayout>
  );
};

export default Template;
