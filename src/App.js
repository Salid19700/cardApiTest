import React from "react";
import { PaginationPoster } from "./components/pagination";
import Layout from "./components/layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PosterItem } from "./components/pageScond/posterItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Layout} />
        <Route exact path="/:id" Component={PosterItem} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
