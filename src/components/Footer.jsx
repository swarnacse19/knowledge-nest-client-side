import React from 'react';
import { FaTwitter, FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { GiSpellBook } from 'react-icons/gi';
import { IoLogoFacebook } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-[#fea38c] text-[14px] mx-auto px-4 lg:px-14 py-16 text-[#773d30]">
      <div className="flex flex-col gap-8 md:flex-row justify-between">
        
        <div>
          <div className='flex items-center gap-2 mb-4'>
          <GiSpellBook size={40} />
          <h2 className="text-2xl font-bold">KnowledgeNest</h2>
          </div>
          <div className='flex gap-2 items-center mb-4'>
            <FaPhoneAlt/>
            <p>Cell/WhatsApp: +880 18243-11959</p>
          </div>
          <div className='flex gap-2 items-center'>
            <MdEmail />
            <p>Email: swarna.bu11@gmail.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Important Links</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="#" className="hover:underline">Contact Us</Link></li>
            <li><Link to="#" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-white"><IoLogoFacebook size={24} /></a>
            <a href="#" className="hover:text-white"><FaGithub size={24} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-600 text-sm">
        © 2025 KnowledgeNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
