import React, { use, useState } from "react";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
function Register() {
  const { createUser, googleLogin } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    createUser(email, password)
      .then((res) => {
        alert("User Created Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        alert("google login success");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Register Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Write your name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* photo */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Write your photoURL"
              className="input input-bordered w-full"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>
          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Write your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn border border-gray-400 bg-blue-700 w-full"
          >
            Register
          </button>
        </form>

        {/* Google Login */}
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn border border-gray-400 w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} /> Login with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-3">
          Alredy have an account?{" "}
          <Link to="/auth" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
