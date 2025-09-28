import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router"; 
import Footer from "../components/Footer";

function Root() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.className = darkMode ? "dark" : "light"; 
  }, [darkMode]);

  return (
    <div className="transition-all min-h-screen">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default Root;