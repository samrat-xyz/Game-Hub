import React from "react";
import { Link } from "react-router";
import errorImg from "../../assets/error-404.png"
function ErrorPage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="">
        <img src={errorImg} alt="" />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-4xl font-bold">Oops, page not found!</h3>
        <p className="text-md text-[#627382]">The page you are looking for is not available.</p>
        <Link
          to="/"
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 py-2 rounded-lg text-white font-semibold"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;