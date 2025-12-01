import React, { useState } from "react";
import { motion } from "framer-motion";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address!");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <motion.div
      className="py-16 my-12 w-11/12 mx-auto rounded-3xl 
      bg-gradient-to-br from-[#1a1f3c] to-[#0c0f1f] 
      shadow-2xl border border-white/10 backdrop-blur-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="w-11/12 md:w-7/12 mx-auto text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
        bg-gradient-to-r from-primary to-purple-400 
        text-transparent bg-clip-text tracking-wide">
          Join Our GameHub Newsletter
        </h2>

        <p className="text-gray-300 mb-10 text-lg">
          Stay updated with the newest games, developer insights, and exclusive offers!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-5 py-3 rounded-full text-white 
            bg-white/10 backdrop-blur-md border border-white/20 
            focus:ring-2 focus:ring-primary/50 outline-none
            placeholder-gray-300 transition"
            whileFocus={{ scale: 1.03 }}
          />

          <motion.button
            type="submit"
            className="px-8 py-3 rounded-full font-semibold text-white 
            bg-gradient-to-r from-primary to-purple-600
            shadow-xl hover:shadow-purple-500/40 transition-all"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
          >
            Subscribe
          </motion.button>
        </form>

        {message && (
          <motion.p
            className="mt-5 text-lg font-semibold text-amber-400 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default Newsletter;
