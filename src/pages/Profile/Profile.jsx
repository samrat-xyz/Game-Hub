import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

function Profile() {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="w-11/12 mx-auto h-screen flex items-center justify-center  ">
      <div className="p-10 rounded-2xl shadow-xl text-center max-w-sm w-full border border-gray-200">
        <div className="mb-5">
          <img
            src={user?.photoURL}
            alt="User"
            className="rounded-full w-32 h-32 mx-auto border-4 border-primary shadow-md"
          />
        </div>

        <div className="space-y-2">
          <p className="text-2xl font-semibold text-gray-800">
            {user?.displayName || "Unknown User"}
          </p>
          <p className="text-gray-500">{user?.email}</p>
        </div>

        <div className="mt-6">
          <Link
            to="/profile-page/edit-profile"
            className="px-5 py-2 rounded-full bg-primary border font-medium hover:bg-primary/80 transition-all duration-200"
          >
            Edit Profile
          </Link>
        </div>
        <div className="my-6">
        </div>
      </div>
    </div>
  );
}

export default Profile;
