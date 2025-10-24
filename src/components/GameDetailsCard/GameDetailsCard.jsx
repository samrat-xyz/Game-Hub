import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

function GameDetailsCard({ detail }) {
  return (
    <div className="card lg:card-side bg-base-100 shadow-md w-11/12 mx-auto my-12">
      {/* Cover Image */}
      <figure className="lg:w-1/3">
        <img
          src={detail.coverPhoto}
          alt={detail.title}
          className="object-cover h-full w-full"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body lg:w-2/3">
        <h2 className="card-title text-2xl">{detail.title}</h2>

        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Category:</span> {detail.category}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Developer:</span> {detail.developer}
        </p>
        <p className="text-yellow-500 font-semibold mb-2 flex items-center gap-2">
          <FaStar />
 {detail.ratings} / 5
        </p>

        <p className="text-gray-700 mb-4">{detail.description}</p>

        <div className="card-actions justify-end">
          <Link
            to={detail.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Install
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameDetailsCard;
