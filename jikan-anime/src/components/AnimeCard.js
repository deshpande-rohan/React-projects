import React from "react";

const AnimeCard = ({ anime }) => {
  return (
    <div className="card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <div className="card-image">
          <img src={anime.image_url} alt="Anime Poster" />
        </div>
        <div className="card-details">
          <h3>{anime.title}</h3>
        </div>
      </a>
    </div>
    // <article>
    //   <a href={anime.url}>
    //     <figure>
    //       <img src={anime.image_url} alt="anime image" />
    //     </figure>
    //     <h3>{anime.title}</h3>
    //   </a>
    // </article>
  );
};

export default AnimeCard;
