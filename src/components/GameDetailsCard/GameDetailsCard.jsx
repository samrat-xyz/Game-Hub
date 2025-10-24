import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function GameDetailsCard({ detail }) {
  return (
    <motion.div
      className="card lg:card-side bg-base-100 shadow-md w-11/12 mx-auto my-12"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
     
      <motion.figure
        className="lg:w-1/3"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={detail.coverPhoto}
          alt={detail.title}
          className="object-cover h-full w-full"
        />
      </motion.figure>

     
      <motion.div
        className="card-body lg:w-2/3"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="card-title text-2xl">{detail.title}</h2>

        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Category:</span> {detail.category}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Developer:</span> {detail.developer}
        </p>
        <p className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
          <FaStar />
          {detail.ratings} / 5
        </p>

        <p className="text-gray-700 mb-4">{detail.description}</p>

        {/* Install Button */}
        <motion.div
          className="card-actions justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to={detail.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Install
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default GameDetailsCard;
