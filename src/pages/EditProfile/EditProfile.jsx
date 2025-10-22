import React from "react";

function EditProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Edit Your Profile
        </h2>

        <form className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Write your name"
              className="input input-bordered w-full"
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
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn border border-gray-400 bg-blue-700 w-full"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
