import styles from "./pricing.module.css";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__container}>
        <h2 className="heading-2" style={{ fontSize: 20 }}>
          رسم التسجيل
        </h2>
        <div className={styles.pricing__prices}>
          <h2 className={styles.heading__border}>
            الطلاب / الخریجین الجدد 800 دولار أمريكي
          </h2>
          <h2 className={styles.heading}>
            المتقدمون الآخرون 1500 دولار أمريكي
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
