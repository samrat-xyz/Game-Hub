import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc"; // <-- Import Google Icon
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const { loginUser,googleLogin } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        alert("login successfully");
      })
      .catch((error) => {
        alert(error.code);
      });
  };
  
  const handleGoogleLogin = () => {
    googleLogin()
    .then((result)=>{
      alert("google login success");
      navigate(`${location.state ? location.state : "/"}`);
    })
    .catch((error)=>{
      alert(error.message)
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
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
            Login
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
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
