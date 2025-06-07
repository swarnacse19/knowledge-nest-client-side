import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

function Root() {
  return (
    <div>
      <div className='max-w-11/12 mx-auto'><Navbar></Navbar></div>
      <div className='max-w-11/12 mx-auto'><Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
}

export default Root;