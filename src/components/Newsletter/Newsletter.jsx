import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email address!");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className=" py-16 my-8 w-11/12 mx-auto rounded-lg shadow-xl">
      <div className="w-11/12 md:w-8/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
         Join Our GameHub Newsletter
        </h2>

        <p className=" mb-8">
          Stay updated with the latest games, developer news, and exclusive
          offers!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 rounded-full text-black outline "
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-semibold shadow-lg text-white"
          >
            Subscribe
          </button>
        </form>

        {message && (
          <p className="mt-4 text-lg font-medium text-amber-500">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Newsletter;
