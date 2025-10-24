import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

function Register() {
  const { createUser, googleLogin, setUser, updateUserProfile } = use(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(""); // <-- Error State
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
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Register Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
         
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

          {error && (
            <p className="text-red-500 text-sm font-medium mt-1">{error}</p>
          )}

          <button
            type="submit"
            className="btn border border-gray-400 bg-blue-700 w-full text-white"
          >
            Register
          </button>
        </form>

        <div className="divider">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="btn border border-gray-400 w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} /> Login with Google
        </button>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/auth" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
