import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

function FeaturedGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/data/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data.slice(0, 10)));
  }, []);

  if (!games.length) return null;

  // Duplicate the array for seamless infinite loop
  const loopedGames = [...games, ...games];

  return (
    <section className="w-11/12 mx-auto my-16">
      <h2
        className="text-4xl font-extrabold mb-8
        bg-gradient-to-r from-primary to-purple-400
        text-transparent bg-clip-text"
      >
        Featured Games
      </h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }} // slide to -50% (half of duplicated array)
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40, // slower speed
            ease: "linear",
          }}
        >
          {loopedGames.map((game, index) => (
            <Link key={index} to={`/game-details/${game.id}`}>
              <motion.div
                className="min-w-[260px] bg-white/10 backdrop-blur-md 
                border border-white/20 rounded-2xl shadow-xl p-3
                hover:bg-white/20 hover:shadow-purple-400/40 transition"
                whileHover={{ scale: 1.07 }}
              >
                <img
                  src={game.coverPhoto}
                  alt={game.title}
                  className="w-full h-40 object-cover rounded-xl mb-3"
                />
                <h3 className="text-lg font-bold text-white">{game.title}</h3>
                <p className="text-gray-300 text-sm">{game.genre}</p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedGames;
