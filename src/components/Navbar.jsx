import React, { useContext } from "react";
import { GiSpellBook } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { toast, ToastContainer } from "react-toastify";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully!");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">All Articles</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </>
  );

  const userDropdown = (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div>
          <img
            data-tooltip-id="user-tooltip"
            data-tooltip-content={user?.displayName}
            className="w-12 rounded-full border cursor-pointer"
            src={user?.photoURL}
            alt="User"
          />
          <Tooltip
            id="user-tooltip"
            place="bottom"
            className="text-sm font-medium"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow text-black`}
      >
        <li>
          <Link to="/myArticles">My Articles</Link>
        </li>
        <li>
          <Link to="/postArticle">Post Article</Link>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            className="btn btn-sm bg-black text-white"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      {/* Navbar */}
      <div
        className={`navbar px-14 py-5 shadow-md flex justify-between items-center fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <GiSpellBook size={40} />
          <h2 className="hidden md:flex text-2xl font-semibold">
            KnowledgeNest
          </h2>
        </div>

        {/* Large screen menu */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal px-1 gap-5 text-[14px] font-medium">
            {links}
          </ul>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {user ? (
            userDropdown
          ) : (
            <Link
              to="/login"
              className="btn bg-black text-white font-semibold"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content mt-3 p-3 shadow rounded-box w-52 text-[16px] ${
                darkMode ? "bg-black text-white" : "bg-base-100 text-black"
              }`}
            >
              {links}
              <li>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-2"
                >
                  {darkMode ? <FaSun /> : <FaMoon />}{" "}
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
              {user ? (
                userDropdown
              ) : (
                <Link
                  to="/login"
                  className="btn bg-black text-white font-semibold"
                >
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Navbar;
