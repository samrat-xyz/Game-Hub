import React, { use, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function ForgetPassword() {
  const { forgetPassword } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your Gmail.");
        navigate("/auth");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-base-200 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card w-96 bg-base-100 shadow-xl p-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <motion.div
            className="form-control"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="btn border border-gray-400 bg-blue-700 w-full text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Reset Password
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default ForgetPassword;
