import styles from "./certificate.module.css";

const Certificate = () => {
  return (
    <div className={styles.certificate}>
      <div className={styles.left}>
        <h2 className={"heading-2"}>شهادة الدورة</h2>
        <p className="paragraph">
          عند الانتهاء من الدورة، سيحصل المشاركون على شهادة حضور رسمية مخصصة لكل
          مشارك وموقعة من CNN. ستكون الشهادة متاحة كنسخة رقمية وورقية.
        </p>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Certificate;
