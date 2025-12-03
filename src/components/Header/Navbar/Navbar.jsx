import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import logoImg from "../../../assets/logo.jpeg";
import { FaSpinner } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const { user, logoutUser, loading } = useContext(AuthContext);

  const [games, setGames] = useState([]);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/games.json")
      .then(res => res.json())
      .then(data => setGames(data));
  }, []);

  const filteredGames = games.filter(game =>
  game.title.toLowerCase().startsWith(searchText.toLowerCase())
);


  const logoutHandler = () => {
    logoutUser();
  };

  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-70">
      <div className="navbar w-11/12 mx-auto flex justify-between">

     
        <Link to="/" className="flex items-center gap-2">
          <img src={logoImg} alt="logo" className="w-12 rounded-full" />
          <span className="text-2xl font-bold text-primary">GameHub</span>
        </Link>

       
        <div className="hidden lg:flex w-1/3 relative">
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search games..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="input input-bordered w-full pl-10 bg-black text-white rounded-full"
          />

          
          {searchText && (
            <div className="absolute top-12 left-0 w-full bg-black rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
              {filteredGames.length > 0 ? (
                filteredGames.slice(0, 6).map(game => (
                  <div
                    key={game.id}
                    onClick={() => {
                      setSearchText("");
                      navigate(`/game-details/${game.id}`);
                    }}
                    className="px-4 py-2 hover:bg-primary cursor-pointer text-sm border-b border-gray-700"
                  >
                    {game.title}
                  </div>
                ))
              ) : (
                <p className="text-center py-3 text-gray-400">
                  No game found
                </p>
              )}
            </div>
          )}
        </div>

       
        {loading ? (
          <FaSpinner className="animate-spin text-xl text-blue-500" />
        ) : user ? (
          <button
            onClick={logoutHandler}
            className="btn btn-sm bg-secondary text-black"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth" className="btn btn-sm bg-primary">
            Login
          </Link>
        )}
      </div>

      
      <div className="lg:hidden px-4 pb-3 relative mt-2">
        <FiSearch className="absolute left-6 top-6 text-gray-500" />
        <input
          type="text"
          placeholder="Search games..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full pl-10 bg-black text-white rounded-full"
        />

        
        {searchText && (
          <div className="bg-black rounded-xl shadow-lg mt-2 max-h-60 overflow-y-auto">
            {filteredGames.length > 0 ? (
              filteredGames.slice(0, 6).map(game => (
                <div
                  key={game.id}
                  onClick={() => {
                    setSearchText("");
                    navigate(`/games/${game.id}`);
                  }}
                  className="px-4 py-2 hover:bg-primary cursor-pointer text-sm border-b border-gray-700"
                >
                  {game.title}
                </div>
              ))
            ) : (
              <p className="text-center py-3 text-gray-400">
                No game found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
