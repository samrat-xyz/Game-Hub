import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

function GamesCard({ game }) {
  return (
    <Link to={`/game-details/${game.id}`}>
      <motion.div
        className="p-4 rounded-2xl shadow-xl h-80 bg-white/10 backdrop-blur-md 
          border border-white/20 hover:border-gradient-to-r hover:from-purple-500 hover:to-blue-400
          transition-all duration-300 hover:shadow-purple-400/40"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="overflow-hidden rounded-xl mb-3">
          <motion.img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-48 object-cover rounded-xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <h3 className="text-xl font-semibold text-white">{game.title}</h3>

        <div className="flex justify-between items-center mt-3">
          <p className="text-yellow-400 font-bold flex items-center gap-2">
            <FaStar /> {game.ratings}
          </p>
          <p className="text-sm text-gray-300">{game.developer}</p>
        </div>
      </motion.div>
    </Link>
  );
}

export default GamesCard;
