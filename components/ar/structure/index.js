import { arabicStructure } from "../../../constants";
import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrraper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>هيكل الدورة</h2>

          <ul className={styles.structureList}>
            {arabicStructure.map((structure, i) => (
              <li key={i}>
                <span style={{ fontWeight: "bold" }}>{structure.date}</span>{" "}
                {structure.content}
              </li>
            ))}
          </ul>
        </div>
        {/* <i className={styles.italic}>
          <span style={{ fontWeight: "bold" }}>
            الأسبوع الثاني عشر، 5 - 9 ديسمبر
          </span>
          محاكاة غرفة الأخبار في أكاديمية CNN (شخصيًا في أبو ظبي)
        </i> */}
      </div>
    </section>
  );
};

export default Structure;
