import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
    </>
  );
};

export default App;
