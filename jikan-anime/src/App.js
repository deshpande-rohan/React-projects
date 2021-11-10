import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Main from "./components/Main";

const App = () => {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getTopAnime = async () => {
    const data = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((response) => response.json());

    setTopAnime(data.top.slice(0, 5));
  };

  const fetchAnime = async (anime) => {
    const data = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=10`
    ).then((response) => response.json());

    setAnimeList(data.results);
    setSearchTerm("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(searchTerm);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div>
      <Header />
      <Topbar topAnime={topAnime} />
      <Main
        handleSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        animeList={animeList}
      />
    </div>
  );
};

export default App;
