"use client";

export default function Projects() {
  return (
    <div>
      <section className="projects" id="projects">
        <div className="projects-box">
          <h2 className="heading">Projects</h2>

          <div className="wrapper">
            <div className="projects-item">
              <img src="/images/1.jpeg" alt="Preview of link" />
              <div className="overlay">
                <h2>Resume Builder</h2>
                <button
                  onClick={() =>
                    window.open(
                      "https://resume-builder-woad-nine.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  View
                </button>
              </div>
            </div>

            <div className="projects-item">
              <img src="/images/2.jpeg" alt="Preview of link" />
              <div className="overlay">
                <h2>Responsive E-Commerce Website</h2>
                <button
                  onClick={() =>
                    window.open(
                      "https://uiux-hackathon-ten.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  View
                </button>
              </div>
            </div>

            <div className="projects-item">
              <img src="/images/3.jpeg" alt="Preview of link" />
              <div className="overlay">
                <h2>Personal Resume (Non-Responsive)</h2>
                <button
                  onClick={() =>
                    window.open(
                      "https://statistic-focused-resume.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
