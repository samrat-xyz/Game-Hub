import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import errorImg from "../../assets/error-404.png";

function ErrorPage() {
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <motion.div
        className="mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={errorImg} alt="404 Error" className="w-64 md:w-80" />
      </motion.div>

     
      <motion.div
        className="flex flex-col items-center space-y-3"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h3
          className="text-4xl font-bold text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Oops, page not found!
        </motion.h3>

        <motion.p
          className="text-md text-[#627382] text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you are looking for is not available.
        </motion.p>

       
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-lg text-white font-semibold mt-2"
          >
            Go Back
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ErrorPage;
