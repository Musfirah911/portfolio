'use client'; // Add this directive to mark the component as a client component

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuIcon = document.querySelector('#menu-icon');
      const navbar = document.querySelector('.navbar');
      
      if (menuIcon && navbar) {
        if (!menuIcon.contains(event.target as Node) && !navbar.contains(event.target as Node)) {
          setMenuActive(false); // Close the menu if clicked outside
        }
      }
    };

    // Adding event listener to document to detect clicks outside
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <Link href="#home" className="logo">
        Musfirah <span>Tabassum</span>
      </Link>

      <img
        src="/images/9.png"
        id="menu-icon"
        onClick={toggleMenu}
        className={menuActive ? 'bx-x' : ''}
        alt="Menu Icon"
      />

      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <Link href="#home" className="active">Home</Link>
        <Link href="#education">Education</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
}
