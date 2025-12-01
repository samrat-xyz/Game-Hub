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
      className="flex items-center justify-center min-h-screen  px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="card w-96 bg-primary/5 shadow-2xl rounded-2xl p-8 border border-primary/30"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Reset Password
        </h2>

        <form onSubmit={handleReset} className="space-y-5">
          <motion.input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full bg-black border-primary/50 focus:border-primary focus:ring-primary/40"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.button
            type="submit"
            className="btn w-full bg-primary text-white font-semibold hover:bg-primaryDark shadow-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Send Reset Email
          </motion.button>
        </form>

        <motion.p
          className="text-center mt-4 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Remember your password?{" "}
          <a
            href="/auth"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default ForgetPassword;
