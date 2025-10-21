import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/gamecategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-5 p-4">
      <h2 className="text-2xl font-semibold mb-4 text-center">Game Categories</h2>
      <div className="flex gap-4 flex-wrap justify-center  p-4">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            className={({ isActive }) =>
              `text-center px-6 py-2 rounded-lg border border-blue-300
               hover:bg-blue-500 hover:text-white 
               ${isActive ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800"}`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Categories;
