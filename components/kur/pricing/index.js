import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__container}>
        <h2 className="heading-2" style={{ fontSize: 20 }}>
          نرخ
        </h2>
        <div className={styles.pricing__prices}>
          <h2 className={styles.heading__border}>
            قوتابی / <span>دەرچووانی نوێ </span> ٨٠٠$
          </h2>
          <h2 className={styles.heading}>کەسانی تر ١٥٠٠$</h2>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
