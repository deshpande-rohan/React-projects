import React from "react";
import AnimeCard from "./AnimeCard";

const Topbar = ({ topAnime }) => {
  return (
    <div className="topbar">
      <h2>
        Top Animes: <span>(By Popularity)</span>
      </h2>
      <nav className="list">
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            key={anime.mal_id}
            target="_blank"
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Topbar;
