import { englishStructure } from "../../../constants";
import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrraper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>Course Structure</h2>
          <ul className={styles.structureList}>
            {englishStructure.map((structure, index) => (
              <li key={index}>
                <span style={{ fontWeight: "bold" }}>{structure.date}</span>{" "}
                {structure.content}
              </li>
            ))}
          </ul>
        </div>
        {/* <i className={styles.italic}>
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Week Twelve, December 5th - 9th
          </span>{" "}
          CNN Academy Newsroom Simulation (in-person in Abu Dhabi)
        </i> */}
      </div>
    </section>
  );
};

export default Structure;
