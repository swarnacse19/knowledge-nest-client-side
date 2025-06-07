import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold mb-2">KnowledgeNest</h2>
          <p className="text-gray-400 text-sm">
            Empowering learners through shared knowledge.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © 2025 KnowledgeNest. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
