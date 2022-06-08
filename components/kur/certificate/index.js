import styles from "./certificate.module.css";

const Certificate = () => {
  return (
    <div className={styles.certificate}>
      <div className={styles.left}>
        <h2 className={"heading-2"}>بڕوانامەی خول</h2>
        <p className="paragraph">
          لەگەڵ تەواوکردنی خولەکە، بەشداربوان بڕوانامەیەکی فەرمی وەردەگرن کە
          تایبەتکراوە بۆ هەر بەشداربویەک و واژوو کراوە لەلایەن سی ئێن ئێن. وە
          بەردەست دەبێت بە سۆفت کۆپی و هارد کۆپی(لەسەر پەڕ).
        </p>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default Certificate;
