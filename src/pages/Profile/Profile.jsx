import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { motion } from "framer-motion";

function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      className="w-11/12 mx-auto h-screen flex items-center justify-center px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="p-10 rounded-2xl shadow-xl text-center max-w-sm w-full border border-gray-200"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-5"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={user?.photoURL}
            alt="User"
            className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-primary shadow-md"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-2xl font-semibold text-gray-800">
            {user?.displayName || "Unknown User"}
          </p>
          <p className="text-gray-500">{user?.email}</p>
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/profile-page/edit-profile"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-200"
          >
            Edit Profile
          </Link>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-200"
          >
            <IoHome className="text-lg" />
            Go to Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Profile;
