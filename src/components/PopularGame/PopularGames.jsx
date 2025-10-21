import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function PopularGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/data/games.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.ratings - a.ratings).slice(0, 6);
        setGames(sorted);
      });
  }, []);

  return (
    <section className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-6 text-center ">Popular Games</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className=" p-4 rounded-2xl shadow-lg h-[400px]"
          >
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

            <Link
              to={game.downloadLink}
              target="_blank"
              className="block mt-4 text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium"
            >
              Install Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularGames;
