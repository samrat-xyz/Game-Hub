import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function GameDetailsCard({ detail }) {
  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl 
                 border border-white/20 overflow-hidden w-11/12 mx-auto my-12
                 flex flex-col gap-6 p-6 hover:shadow-purple-400/40 transition-all"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* ---------- Image Section On Top ---------- */}
      <motion.div
        className=""
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <figure className="w-[300px] h-[300px] rounded-xl overflow-hidden ">
          <img
            src={detail.coverPhoto}
            alt={detail.title}
            className="object-contain w-full h-full hover:scale-105 duration-300"
          />
        </figure>
      </motion.div>


      {/* ---------- Details Below Image ---------- */}
      <motion.div
        className="flex flex-col text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2 
                       bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
          {detail.title}
        </h2>

        {/* Ratings */}
        <div className="flex items-center gap-2 text-gray-200 mb-3">
          <FaStar className="text-yellow-400" />
          <span>{detail.ratings} / 5 Ratings</span>
        </div>

        {/* Category / Developer */}
        <div className="grid grid-cols-2 gap-3 text-gray-300 mb-4">
          <p><span className="font-semibold">Category:</span> {detail.category}</p>
          <p><span className="font-semibold">Developer:</span> {detail.developer}</p>
        </div>

        {/* Description */}
        <p className="text-gray-200 mb-4 leading-relaxed">{detail.description}</p>

        {/* Stock Notice */}
        <p className="text-green-400 font-semibold mb-4">
          In Stock (Only {detail.stock} pcs left)
        </p>

        {/* Action Button */}
        <Link
          to={detail.downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 w-fit rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 
                     text-white font-semibold shadow-lg hover:shadow-purple-400/50 transition-all"
        >
          Install Now →
        </Link>

      </motion.div>
    </motion.div>
  );
}

export default GameDetailsCard;
