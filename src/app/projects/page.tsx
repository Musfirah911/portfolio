"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-box">
        <h2 className="heading">Projects</h2>

        <div className="wrapper">
          <div className="projects-item">
            <Image src="/images/1.jpeg" alt="Resume Builder Preview" width={300} height={200} />
            <div className="overlay">
              <h2>Resume Builder</h2>
              <Link href="https://resume-builder-woad-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button>View</button>
              </Link>
            </div>
          </div>

          <div className="projects-item">
            <Image src="/images/2.jpeg" alt="E-Commerce Website Preview" width={300} height={200} />
            <div className="overlay">
              <h2>Responsive E-Commerce Website</h2>
              <Link href="https://uiux-hackathon-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button>View</button>
              </Link>
            </div>
          </div>

          <div className="projects-item">
            <Image src="/images/3.jpeg" alt="Personal Resume Preview" width={300} height={200} />
            <div className="overlay">
              <h2>Personal Resume (Non-Responsive)</h2>
              <Link href="https://statistic-focused-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
                <button>View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
