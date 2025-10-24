import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion"; 

function GamesCard({ game }) {
  return (
    <Link to={`/game-details/${game.id}`}>
      <motion.div
        className="p-4 rounded-2xl shadow-lg h-80 bg-white"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        }}
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
  );
}

export default GamesCard;
