import React, { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { motion } from "framer-motion"; 

function EditProfile() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();
  const { updateUserProfile } = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile Updated Successfully!");
        navigate("/profile-page");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-base-200 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="card w-96 bg-base-100 shadow-xl p-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          Edit Your Profile
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name */}
          <motion.div
            className="form-control"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>

          {/* Photo */}
          <motion.div
            className="form-control"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
          </motion.div>

          <motion.button
            type="submit"
            className="btn w-full border border-gray-400 bg-blue-600 text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 6px 15px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            Save
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default EditProfile;
