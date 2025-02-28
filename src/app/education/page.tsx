export default function Education() {
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>

      <div className="timeline-items">
        {/* Matriculation */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020</div>
          <div className="timeline-content">
            <h3>Matriculation</h3>
            <p>
              <strong>Board:</strong> Board of Secondary Education Karachi <br />
              <strong>School:</strong> Sherwood Govt. Girls Secondary School <br />
              <strong>Field:</strong> Medical Science
            </p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Intermediate</h3>
            <p>
              <strong>Board:</strong> Board of Intermediate Education Karachi <br />
              <strong>College:</strong> Bibi Asfa Bhutto Govt. Girls College <br />
              <strong>Field:</strong> Medical Science
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
