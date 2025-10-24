import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"; 
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
      <h2 className="text-3xl font-bold mb-6 text-center">Popular Games</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {games.map((game, index) => (
          <Link key={game.id} to={`/game-details/${game.id}`}>
            <motion.div
              className="p-4 rounded-2xl shadow-lg h-[300px] bg-white"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            >
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover rounded-xl mb-3"
              />
              <h3 className="text-xl font-semibold">{game.title}</h3>

              <div className="flex justify-between items-center mt-3">
                <p className="text-yellow-400 font-bold flex items-center gap-3">
                  <FaStar />
                  {game.ratings}
                </p>
                <p className="text-sm">{game.developer}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularGames;
