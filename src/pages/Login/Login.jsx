import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Login() {
  const { loginUser, googleLogin } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 
    loginUser(email, password)
      .then(() => {
        toast.success("Login successful");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else if (error.code === "auth/user-not-found") {
          setError("No user found with this email.");
        } else if (error.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else {
          setError("Login failed. Please check your credentials.");
        }
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login success");
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
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
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <motion.div
            className="form-control"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full border-primary/50 focus:border-primary focus:ring-primary/40 bg-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="form-control"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full border-primary/50 focus:border-primary focus:ring-primary/40 bg-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link
              to="/auth/forget-password"
              state={{ email }} 
              className="text-sm text-primary mt-2 hover:underline inline-block"
            >
              Forgot password?
            </Link>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
          </motion.div>

          <motion.button
            type="submit"
            className="btn w-full bg-primary text-white font-semibold hover:bg-primaryDark shadow-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <motion.div
          className="divider text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          OR
        </motion.div>

        <motion.button
          onClick={handleGoogleLogin}
          className="btn w-full bg-secondary/20 border border-primary/50 flex items-center justify-center gap-2 text-primary hover:bg-secondary/30 shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FcGoogle size={22} /> Login with Google
        </motion.button>

        <motion.p
          className="text-center mt-4 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-primary hover:underline font-semibold">
            Register
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Login;
