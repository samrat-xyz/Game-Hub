import React, { useContext, useState } from "react";
import {  FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";
import Navbar from "../../components/Header/Navbar/Navbar";

export default function Profile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user)
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setModalOpen(false);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <>
    <Navbar></Navbar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col max-w-6xl mx-auto p-6 md:flex-row gap-10 h-screen mt-8"
      >
        {/* LEFT — Profile Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full md:w-1/3 bg-primary/10 shadow-lg rounded-2xl overflow-hidden border border-primary/30 relative"
        >
          <img
            src={user?.photoURL || "https://via.placeholder.com/500x300.png"}
            alt="profile"
            className="w-full h-52 object-cover"
          />

          <div className="p-5 text-center">
            <h2 className="text-2xl font-semibold text-primary">{user?.displayName || "No Name"}</h2>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full py-2 rounded-xl bg-primary text-black cursor-pointer font-medium hover:bg-primary/90 transition-all duration-200 shadow-md"
              onClick={() => setModalOpen(true)}
            >
              Edit Profile
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT — Details Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full md:w-2/3 bg-secondary/10 shadow-lg rounded-2xl p-6 border border-secondary/30"
        >
          {/* Workplaces */}
          <h3 className="text-xl font-semibold text-primary">Workplaces</h3>
          <div className="mt-3 space-y-4">
            {user?.work?.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="border-b border-secondary/30 pb-2"
              >
                <h4 className="font-semibold text-secondary">{item.company}</h4>
                <p className="text-gray-500 text-sm">{item.address}</p>
              </motion.div>
            ))}
          </div>


          {/* Contact Information */}
          <h3 className="text-xl font-semibold mt-6 text-primary">Contact Information</h3>
          <div className="mt-3 space-y-2 text-secondary text-sm">
            <p className="flex gap-2 items-center"><FaPhone /> {user?.phone || "N/A"}</p>
            <p className="flex gap-2 items-center"><FaMapMarkerAlt /> {user?.address || "N/A"}</p>
            <p className="flex gap-2 items-center"><FaEnvelope /> {user?.email || "N/A"}</p>
            <p className="flex gap-2 items-center"><FaGlobe /> {user?.website || "N/A"}</p>
          </div>

          
        </motion.div>
      </motion.div>

      {/* Modal for Edit Profile */}
      {modalOpen && (
        <div className="modal modal-open ">
          <div className="modal-box relative max-w-md border bg-primary">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setModalOpen(false)}
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-4 text-primary">Edit Your Profile</h3>

            <form onSubmit={handleUpdate} className="space-y-4 ">
              <div className="form-control">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered w-full bg-secondary text-black "
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  className="input input-bordered w-full bg-secondary text-black"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn w-full text-secondary"
              >
                Save Changes
              </motion.button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
