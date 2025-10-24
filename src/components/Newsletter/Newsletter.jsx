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
      className="py-16 my-8 w-11/12 mx-auto rounded-lg shadow-xl bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-11/12 md:w-8/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Join Our GameHub Newsletter
        </h2>

        <p className="mb-8">
          Stay updated with the latest games, developer news, and exclusive
          offers!
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
            className="w-full sm:w-2/3 px-4 py-3 rounded-full text-black outline"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </form>

        {message && (
          <motion.p
            className="mt-4 text-lg font-medium text-amber-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {message}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default Newsletter;
