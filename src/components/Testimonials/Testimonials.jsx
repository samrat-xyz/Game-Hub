import React from "react";
import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    {
      name: "Alice",
      role: "Pro Gamer",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      comment: "GameHub is amazing! Best place to discover new games.",
    },
    {
      name: "Bob",
      role: "Streamer",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      comment: "I love the UI and smooth animations! Highly recommended.",
    },
    {
      name: "Charlie",
      role: "Casual Gamer",
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      comment: "Great experience finding the latest games quickly.",
    },
    {
      name: "Diana",
      role: "Esports Player",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      comment: "The layout is amazing, and the hover effects feel premium.",
    },
    {
      name: "Ethan",
      role: "Game Developer",
      photo: "https://randomuser.me/api/portraits/men/12.jpg",
      comment: "GameHub is perfect to showcase my games to the world!",
    },
    {
      name: "Fiona",
      role: "Casual Gamer",
      photo: "https://randomuser.me/api/portraits/women/25.jpg",
      comment: "Love the newsletter and featured games section!",
    },
  ];

  return (
    <section className="w-11/12 mx-auto my-20">
      <h2 className="text-4xl font-extrabold text-center mb-10 
        bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
        What Gamers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 backdrop-blur-lg border border-white/20 
            rounded-2xl shadow-xl hover:shadow-purple-400/40 transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.photo}
                className="w-14 h-14 rounded-full border border-white/30"
                alt={review.name}
              />
              <div>
                <h4 className="text-white font-bold">{review.name}</h4>
                <p className="text-gray-300 text-sm">{review.role}</p>
              </div>
            </div>

            <p className="text-gray-200 italic leading-relaxed">
              "{review.comment}"
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
