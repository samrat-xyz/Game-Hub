import React from "react";
import { Link } from "react-router";

function GamesCard({ game }) {
  return (
    <Link to={`/game-details/${game.id}`}>
      <div className=" p-4 rounded-2xl shadow-lg h-[320px]">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-48 object-cover rounded-xl mb-3 "
        />
        <h3 className="text-xl font-semibold">{game.title}</h3>

        <div className="flex justify-between items-center mt-3">
          <p className="text-yellow-400 font-bold">⭐ {game.ratings}</p>
          <p className="text-sm ">{game.developer}</p>
        </div>
      </div>
    </Link>
  );
}

export default GamesCard;
