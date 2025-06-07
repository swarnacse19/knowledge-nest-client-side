import React from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { Link, NavLink } from 'react-router';

function Navbar() {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/articles">All Articles</NavLink>
      <NavLink to="/myArticles">My Articles</NavLink>
      <NavLink to="/postArticles">Post Articles</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-8 py-2 shadow-md flex justify-between items-center">
      <div className="flex items-center gap-2">
        <GiSpellBook size={40} color='indigo'/>
        <h2 className="hidden md:flex text-2xl font-semibold">KnowledgeNest</h2>
      </div>

      <div className="hidden lg:flex items-center gap-6">
        <ul className="menu menu-horizontal px-1 gap-5 text-lg font-medium">
          {links}
        </ul>
        <Link to="/login" className="btn bg-purple-600 text-white">
          Login
        </Link>
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
            <li>
              <Link to="/login" className="btn btn-sm mt-2">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
