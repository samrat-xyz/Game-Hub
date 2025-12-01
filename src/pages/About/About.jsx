import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="w-11/12 mx-auto py-16">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About GameHub
      </motion.h1>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <motion.div
          className="text-gray-200 text-lg space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Welcome to <span className="font-bold text-primary">GameHub</span>, your
            ultimate destination for discovering the best games. Whether you're
            looking for the latest releases or hidden gems, we've got you covered.
          </p>
          <p>
            Our mission is to provide gamers with a seamless experience, from
            browsing popular games to detailed reviews and direct downloads. Join
            our community and stay updated with the latest gaming trends!
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://cms-assets.xboxservices.com/assets/be/10/be10aae2-852a-41bc-b345-804b52cfbe94.jpg?n=Games-Hub_Hero-Image-768_Fallout-4-Annv-Edt_1920x1080.jpg"
            alt="About GameHub"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Full Width Section */}
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-xl text-gray-200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
          Our Vision
        </h2>
        <p className="text-lg">
          We aim to create a platform where gamers can find everything they need
          in one place: popular games, detailed reviews, and easy access to
          downloads. Our focus is on delivering high-quality content, intuitive
          navigation, and a visually engaging experience for all users.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
