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
    <section className="w-11/12 mx-auto my-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 
        bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
        Popular Games
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {games.map((game, index) => (
          <Link key={game.id} to={`/game-details/${game.id}`}>
            <motion.div
              className="p-4 rounded-2xl shadow-xl h-[330px]
                bg-white/10 backdrop-blur-md border border-white/20
                hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 90,
              }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 25px rgba(80,70,255,0.4)",
              }}
            >
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover rounded-xl mb-4 shadow-lg"
              />

              <h3 className="text-lg font-bold text-white tracking-wide line-clamp-1">
                {game.title}
              </h3>

              <div className="flex justify-between items-center mt-4">
                <p className="flex items-center gap-2 text-yellow-300 font-semibold text-base">
                  <FaStar className="text-yellow-400" />
                  {game.ratings}
                </p>

                <p className="text-gray-300 text-sm italic">
                  {game.developer}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PopularGames;
