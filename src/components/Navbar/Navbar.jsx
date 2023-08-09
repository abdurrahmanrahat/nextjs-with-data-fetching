"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import { useState } from "react";

const Navbar = () => {
  //   const [navToggle, setNavToggle] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/stock",
      title: "Stock",
    },
    {
      path: "/profile",
      title: "Profile",
    },
    {
      path: "/products",
      title: "Products",
    },
    {
      path: "/blogs",
      title: "Blogs",
    },
    {
      path: "/dashboard",
      title: "Dashboard",
    },
  ];

  return (
    <nav className="container mx-auto flex justify-evenly navbar sticky top-0 z-10 bg-slate-200 shadow-lg dark:bg-slate-900 lg:pr-3">
      {/* Logo / Name here */}
      <div>
        <Link href="/" className="text-3xl font-semibold">
          JobLinker
        </Link>
      </div>

      {/* List Items */}
      <div
        className={`absolute ${
          navToggle ? "left-0" : "left-[-120%]"
        } top-[4.5rem] flex w-full flex-col bg-slate-200 pb-3 pt-2 transition-all duration-300 dark:bg-slate-900 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 dark:lg:bg-transparent`}
      >
        <ul className="md:flex md:mt-2 gap-3 mx-2">
          {navLinks.map(({ path, title }) => (
            <li key={path} className="text-lg font-medium">
              <NavLink
                href={path}
                activeClassName="text-[#2596be]"
                exact={path == "/"}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <div>
        <Link href="/login">
          <button className="py-2 px-4 bg-black text-white rounded">
            Login
          </button>
        </Link>
      </div>

      {/* Nav Toggle */}
      <div
        className="swap-rotate swap btn-ghost btn-circle btn ml-2 bg-white dark:bg-slate-800 lg:hidden"
        onClick={() => setNavToggle(!navToggle)}
      >
        {navToggle ? (
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        ) : (
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
