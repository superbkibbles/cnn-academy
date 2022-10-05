import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__container}>
        <h2 className="heading-2" style={{ fontSize: 20 }}>
          Pricing
        </h2>
        <div className={styles.pricing__prices}>
          <h2 className={styles.heading__border}>
            <span style={{ fontWeight: "normal" }}>
              Students /<span style={{ float: "left" }}> Fresh graduates</span>
            </span>{" "}
            <span>US $800</span>
          </h2>
          <h2 className={styles.heading}>
            <span style={{ fontWeight: "normal" }}>Other Applicants</span>
            <span>US $1500</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
