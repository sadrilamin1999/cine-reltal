import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { MovieContext } from "./contex";

const App = () => {
  const [movieData, setMovieData] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ movieData, setMovieData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
};

export default App;
