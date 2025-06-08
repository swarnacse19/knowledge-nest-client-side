import React, { use } from "react";
import { GiSpellBook } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import { toast, ToastContainer } from "react-toastify";

function Navbar() {
  const { user, logOut } = use(AuthContext);

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">All Articles</NavLink>
      <NavLink to="/myArticles">My Articles</NavLink>
      <NavLink to="/postArticle">Post Article</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 px-12 py-4 shadow-md flex justify-between items-center">
        <div className="flex items-center gap-2">
          <GiSpellBook size={40} color="indigo" />
          <h2 className="hidden md:flex text-2xl font-semibold text-purple-900">
            KnowledgeNest
          </h2>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <ul className="menu menu-horizontal px-1 gap-5 text-[14px] font-medium">
            {links}
          </ul>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="">
                    <img
                      data-tooltip-id="user-tooltip"
                      data-tooltip-content={user.displayName}
                      className="w-12 rounded-full border cursor-pointer"
                      src={user.photoURL}
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                      className="btn btn-sm bg-white border-2 border-purple-700 font-semibold text-purple-800"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <Link
                to="/login"
                className="btn bg-purple-800 text-white font-semibold"
              >
                Login
              </Link>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-[16px]"
            >
              {links}
              {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="">
                    <img
                      data-tooltip-id="user-tooltip"
                      data-tooltip-content={user.displayName}
                      className="w-12 rounded-full border cursor-pointer"
                      src={user.photoURL}
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
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                      className="btn btn-sm bg-white border-2 border-purple-700 font-semibold text-purple-800"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <Link
                to="/login"
                className="btn bg-purple-800 text-white font-semibold"
              >
                Login
              </Link>
            </div>
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
