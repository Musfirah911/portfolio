"use client";

import { useEffect } from "react";
import Footer from "./components/footer";
import Contact from "./contact/page";
import Education from "./education/page";
import Home from "./home/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function MainPage() {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon') as HTMLElement;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height && id) {
          navLinks.forEach((link) => {
            link.classList.remove('active');
            const activeLink = document.querySelector(
              `header nav a[href*=${id}]`
            ) as HTMLElement;
            if (activeLink) {
              activeLink.classList.add('active');
            }
          });
        }
      });
    };

    const handleMenuClick = () => {
      menuIcon?.classList.toggle('bx-x');
      navbar?.classList.toggle('active');
    };

    menuIcon?.addEventListener('click', handleMenuClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      menuIcon?.removeEventListener('click', handleMenuClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Home />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
