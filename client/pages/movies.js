import Head from "next/head"
import { useState, useEffect } from "react";
import MovieCard from "../components/movies/MovieCard"
import MovieFilter from "../components/movies/MovieFilter";
import MovieFooter from "../components/movies/MovieFooter";
import MovieHeader from "../components/movies/MovieHeader";
import MovieNavigator from "../components/movies/MovieNavigator";
import MoviePagination from "../components/movies/MoviePagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.items);
      });
  }, []);
  return(
  <>
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Memico - Cinema Bootstrap HTML5 Template</title>
      {/* Animate.css */}
      <link href="/memico/animate.css/animate.css" rel="stylesheet" type="text/css" />
      {/* Font Awesome iconic font */}
      <link
        href="/memico/fontawesome/css/fontawesome-all.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Magnific Popup */}
      <link
        href="/memico/magnific-popup/magnific-popup.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* Slick carousel */}
      <link href="/memico/slick/slick.css" rel="stylesheet" type="text/css" />
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
        type="text/css"
      />
      {/* Theme styles */}
      <link href="/memico/css/dot-icons.css" rel="stylesheet" type="text/css" />
      <link href="/memico/css/theme.css" rel="stylesheet" type="text/css" />
    </Head>
    <MovieHeader />
    <MovieNavigator />
    <section className="section-long">
      <div className="container">
        <MovieFilter />
        {movies.map((item) => {
          return <MovieCard item={item} key={item._id} />
        })}
        <MoviePagination />
      </div>
    </section>
    <a className="scroll-top disabled" href="#">
      <i className="fas fa-angle-up" aria-hidden="true" />
    </a>
    <MovieFooter />
    {/* jQuery library */}
    {/* Bootstrap */}
    {/* Paralax.js */}
    {/* Waypoints */}
    {/* Slick carousel */}
    {/* Magnific Popup */}
    {/* Inits product scripts */}
</>

  )
}

export default Movies