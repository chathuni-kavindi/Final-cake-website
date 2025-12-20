import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-300  p-8 flex justify-between">
      <h1 className="font-bold text-xl">🍰 Cake Shop</h1>
      <div className="space-x-16">
        <NavLink to="/" 
        
        className={({isActive}) => isActive ? "underline text-pink-900 text-xl" : "text-white hover:pink-600 text-xl"}>Home</NavLink>
        <NavLink to="/about"
         className={({isActive}) => isActive ? "underline text-pink-900 text-xl" : "text-white hover:pink-600 text-xl"}>About</NavLink>
        <NavLink to="/cakes"
         className={({isActive}) => isActive ? "underline text-pink-900 text-xl" : "text-white hover:pink-600 text-xl"}>Cakes</NavLink>
        <NavLink to="/contact"
         className={({isActive}) => isActive ? "underline text-pink-900 text-xl" : "text-white hover:pink-600 text-xl"}>Contact</NavLink>
      </div>
    </nav>
  );
}
