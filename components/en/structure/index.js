import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrraper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>Course Structure</h2>
          <ul className={styles.structureList}>
            <li>
              <span style={{ fontWeight: "bold" }}>Week One, August 29th</span>{" "}
              Introduction and Orientation (in-person in Erbil)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Two, September 5th
              </span>{" "}
              Ethics in Journalism I&II (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Three, September 12th
              </span>{" "}
              Ethics in Journalism II (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Four, September 19th
              </span>{" "}
              The Art of Storytelling I (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Five, September 26th
              </span>{" "}
              The Art of Storytelling II (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Week of October 3rd:</span>{" "}
              Study Break
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Week Six, October 10th</span>{" "}
              When News Breaks I (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Seven, October 17th
              </span>{" "}
              When News Breaks II (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Eight, October 24th
              </span>{" "}
              Multiplatform Storytelling (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Nine, October 31st
              </span>{" "}
              Reporting from the Field (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Nine, November 7th
              </span>{" "}
              Writing for TV News & Scriptwriting (CNN Academy Hub course +
              virtual live seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Ten, November 14th
              </span>{" "}
              Mobile Storytelling & Editing (CNN Academy Hub course + virtual
              live seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Week of November 21st</span>{" "}
              Study Break
            </li>
          </ul>
        </div>
        <i className={styles.italic}>
          <span style={{ fontWeight: "bold" }}> Week Twelve, December 5th</span>{" "}
          CNN Academy Newsroom Simulation (in-person in Abu Dhabi)
        </i>
      </div>
    </section>
  );
};

export default Structure;
