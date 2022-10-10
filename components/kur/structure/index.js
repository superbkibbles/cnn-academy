import { kurdishStrcuture } from "../../../constants";
import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>پێکهاتەی کۆرس</h2>

          <ul className={styles.structureList}>
            {kurdishStrcuture.map((structure, i) => (
              <li key={i}>
                <span style={{ fontWeight: "bold" }}>{structure.date} </span>{" "}
                {structure.content}
              </li>
            ))}
          </ul>
        </div>
        {/* <i className={styles.italic}>
          <span style={{ fontWeight: "bold" }}>
            ھەفتەی دوازدەیەم، ٥ - ٩ کانونی یەکەم
          </span>
          نمونەی ھاوشێوەی ژووری هەواڵی ئەکادیمیای سی ئێن (ڕووبەڕوو لە ئەبوزەبی)
        </i> */}
      </div>
    </section>
  );
};

export default Structure;
