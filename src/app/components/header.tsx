"use client"; // Mark the component as a client component

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menuIcon = document.querySelector("#menu-icon");
      const navbar = document.querySelector(".navbar");

      if (menuIcon && navbar) {
        if (!menuIcon.contains(event.target as Node) && !navbar.contains(event.target as Node)) {
          setMenuActive(false); // Close the menu if clicked outside
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
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
        className={menuActive ? "bx bx-x" : "bx bx-menu"}
        alt="Menu Icon"
        aria-expanded={menuActive}
      />

      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        {["Home", "Education", "Skills", "Projects", "Contact"].map((item) => (
          <Link key={item} href={`#${item.toLowerCase()}`} className={menuActive ? "active" : ""}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
