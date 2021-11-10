import React from "react";
import AnimeCard from "./AnimeCard";

const Main = ({ searchTerm, setSearchTerm, handleSearch, animeList }) => {
  return (
    <main>
      <div className="main-header">
        <form onSubmit={handleSearch}>
          <input
            className="search"
            type="text"
            placeholder="Search for an Anime..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            required
          />
        </form>
        <div className="anime-list">
          {animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
