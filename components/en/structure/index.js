import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrraper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>Course Structure</h2>
          <ul className={styles.structureList}>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week One, September 15th
              </span>{" "}
              Introduction and Orientation (in-person in Erbil)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Two, September 22nd
              </span>{" "}
              Ethics in Journalism I&II (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Three, September 29th
              </span>{" "}
              Ethics in Journalism II (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Week Four, October 6th</span>{" "}
              The Art of Storytelling I (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Five, October 13th
              </span>{" "}
              The Art of Storytelling II (CNN Academy Hub course + virtual live
              seminars)
            </li>
            {/* <li>
              <span style={{ fontWeight: "bold" }}>Week of October 3rd:</span>{" "}
              Study Break
            </li> */}
            <li>
              <span style={{ fontWeight: "bold" }}>Week Six, October 20th</span>{" "}
              When News Breaks I (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Seven, October 27th
              </span>{" "}
              When News Breaks II (CNN Academy Hub course + virtual live
              seminars)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Eight, November 3rd
              </span>{" "}
              Multiplatform Storytelling (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Nine, November 10th
              </span>{" "}
              Reporting from the Field (CNN Academy Hub course + virtual live
              seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Ten, November 17th
              </span>{" "}
              Writing for TV News & Scriptwriting (CNN Academy Hub course +
              virtual live seminar)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                Week Eleven, November 28th
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
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Week Twelve, December 5th - 9th
          </span>{" "}
          CNN Academy Newsroom Simulation (in-person in Abu Dhabi)
        </i>
      </div>
    </section>
  );
};

export default Structure;
