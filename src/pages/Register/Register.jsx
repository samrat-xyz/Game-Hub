import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function Register() {
  const { createUser, googleLogin, setUser, updateUserProfile } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError(""); 

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((res) => {
        toast.success("User Created Successfully");
        updateUserProfile({ displayName: name, photoURL: photo });
        setUser(res.user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Google login success");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
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
          Register
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <motion.input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input input-bordered bg-black w-full border-primary/50 focus:border-primary focus:ring-primary/40"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          <motion.input
            type="text"
            placeholder="Photo URL"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            required
            className="input input-bordered w-full bg-black border-primary/50 focus:border-primary focus:ring-primary/40"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />

          <motion.input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full bg-black border-primary/50 focus:border-primary focus:ring-primary/40"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <motion.input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input input-bordered bg-black w-full border-primary/50 focus:border-primary focus:ring-primary/40"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />

          {error && (
            <motion.p
              className="text-red-500 text-sm font-medium mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {error}
            </motion.p>
          )}

          <motion.button
            type="submit"
            className="btn w-full bg-primary text-white font-semibold hover:bg-primaryDark shadow-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
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
          <FcGoogle size={22} /> Register with Google
        </motion.button>

        <motion.p
          className="text-center mt-4 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Already have an account?{" "}
          <Link to="/auth" className="text-primary hover:underline font-semibold">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default Register;
