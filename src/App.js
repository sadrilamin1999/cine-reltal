import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { MovieContext, ThemeContext } from "./contex";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ movieData, setMovieData }}>
          <div className={`h-full w-full ${darkMode && "dark"}`}>
            <Header />
            <main>
              <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                <Sidebar />
                <MovieList />
              </div>
            </main>
            <Footer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
