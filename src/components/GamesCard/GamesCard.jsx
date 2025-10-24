import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

function GamesCard({ game }) {
  return (
    <Link to={`/game-details/${game.id}`}>
      <div className=" p-4 rounded-2xl shadow-lg h-80 ">
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-48 object-cover rounded-xl mb-3 "
        />
        <h3 className="text-xl font-semibold">{game.title}</h3>

        <div className="flex justify-between items-center mt-3">
          <p className="text-yellow-400 font-bold flex items-center gap-3">
            <FaStar />
            {game.ratings}
          </p>
          <p className="text-sm ">{game.developer}</p>
        </div>
      </div>
    </Link>
  );
}

export default GamesCard;
