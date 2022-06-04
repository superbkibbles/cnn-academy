import styles from "./applyDate.module.css";

const ApplyDate = () => {
  return (
    <section className={styles.applyDate}>
      <div className={styles.container}>
        <div className={styles.applyDateContainer}>
          <h2
            className={styles.applyDate__heading}
            style={{ marginBottom: 60, fontSize: 32, marginTop: 0 }}
          >
            When to Apply?
          </h2>
          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            Applications open:
          </h2>
          <h2
            style={{ marginTop: 0, marginBottom: 30 }}
            className={styles.applyDate__heading}
          >
            1 <span style={{ fontWeight: "normal" }}>June</span> 2022 – 15{" "}
            <span style={{ fontWeight: "normal" }}>July </span>
            2022
          </h2>

          <h2 style={{ marginBottom: 0 }} className={styles.applyDate__heading}>
            Selection:
          </h2>
          <h2 style={{ marginTop: 0 }} className={styles.applyDate__heading}>
            15 <span style={{ fontWeight: "normal" }}>July</span> 2022 – 15{" "}
            <span style={{ fontWeight: "normal" }}>August </span>
            2022
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ApplyDate;
