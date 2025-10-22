import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function EditProfile() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");

  const { updateUserProfile } = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({
      displayName: name,
      photoURL: photo,
      email: email,
    })
      .then(() => {
        alert("Profile Updated Successfully!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Edit Your Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Write your name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Write your photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn w-full border border-gray-400">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
