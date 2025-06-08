import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

function Root() {
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div className='min-h-screen'><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
}

export default Root;