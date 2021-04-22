import HeaderSection from "../sections/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderSection />
      <main className="container">{children}</main>
      {/* /.container */}
      <footer className="blog-footer">
        <p>
          Blog template built for{" "}
          <a href="https://getbootstrap.com/">Bootstrap</a> by{" "}
          <a href="https://twitter.com/mdo">@mdo</a>.
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );
};

export default MainLayout;
