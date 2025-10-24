import React, { use, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

function ForgetPassword() {
  const { forgetPassword } = use(AuthContext)
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
        navigate('/auth')
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>

        <form onSubmit={handleReset} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn border border-gray-400 bg-blue-700 w-full text-white"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPassword;
