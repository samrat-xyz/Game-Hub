import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";
import logoImg from '../../assets/logo.jpeg'
function Footer() {
  return (
    <footer className="bg-black mt-10 border-t text-white">
      <div className="w-11/12 mx-auto py-10 grid md:grid-cols-3 gap-6">
        
        
        <div className="space-y-3">
          <img src={logoImg} alt="" className="w-16 rounded-full"/>
          <p className="text-sm text-gray-500">
            Discover and download the best games around the world. 
            Join our growing community of gamers today!
          </p>
        </div>

        
        <div className="flex flex-col space-y-2">
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <Link  className="text-sm hover:text-primary">Home</Link>
          <Link className="text-sm hover:text-primary">Games</Link>
          <Link  className="text-sm hover:text-primary">About</Link>
          <Link  className="text-sm hover:text-primary">Contact</Link>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <Link className="hover:text-blue-600"><FaFacebook /></Link>
            <Link className="hover:text-sky-400"><FaTwitter /></Link>
            <Link className="hover:text-pink-500"><FaInstagram /></Link>
            <Link className="hover:text-red-600"><FaYoutube /></Link>
          </div>
        </div>
      </div>

      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} GameHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
