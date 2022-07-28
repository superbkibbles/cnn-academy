import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>پێکهاتەی کۆرس</h2>

          <ul className={styles.structureList}>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی یەکەم، ١٥ی ئەیلول{" "}
              </span>{" "}
              ناساندن و ئاڕاستەکردن (ڕووبەڕوو لە هەولێر)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی دووەم، ٢٢ی ئەیلول
              </span>{" "}
              رەوشتی رۆژنامەوانی I&II (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی سێیەم، ٢٩ی ئەیلول
              </span>{" "}
              رەوشتی رۆژنامەوانی II (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی چوارەم، ٦ی تشرینی یەکەم
              </span>{" "}
              هونەری گێرانەوەی چیڕۆک I (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی پپنجەم،١٣ی تشرینی یەکەم
              </span>{" "}
              هونەری گێرانەوەی چیڕۆک II (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            {/* <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی سێیەمی تشرینی یەکەم
              </span>{" "}
              پشووی خوێندن
            </li> */}
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی شەشەم، ٢٠ی تشرینی یەکەم
              </span>{" "}
              کاتی هەواڵی بەپەلە I (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی حەوتەم: ٢٧ی تشرینی یەکەم
              </span>{" "}
              کاتی هەواڵی بەپەلەII (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی هەشتەم، ٧ی تشرینی دووەم
              </span>{" "}
              پلاتفۆرمی هەمەجۆری گێرانەوەی چیڕۆک (کۆرسی تەوەرەی ئەکادیمیای سی
              ئێن ئێن+ سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی نۆیەم، ١٠ی تشرینی یەکەم
              </span>{" "}
              ڕاپۆرتی مەیدانی (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+ سیمیناری
              لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی دەیەم، ١٧ی تشرینی دووەم
              </span>{" "}
              نووسین بۆ هەواڵی تەلەفزیۆن و نووسینی دەق (کۆرسی تەوەرەی ئەکادیمیای
              سی ئێن ئێن+ سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی يازدەیەم، ٢٨ی تشرینی دووەم
              </span>{" "}
              گێرانەوەی چیڕۆک لە ڕێگەی مۆبایلەوە و مۆنتاژکردن (کۆرسی تەوەرەی
              ئەکادیمیای سی ئێن ئێن+ سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی ٢١ی تشرینی دووەم
              </span>{" "}
              پشووی خوێندن
            </li>
          </ul>
        </div>
        <i className={styles.italic}>
          <span style={{ fontWeight: "bold" }}>
            ھەفتەی دوازدەیەم، ٥ - ٩ کانونی یەکەم
          </span>
          نمونەی ھاوشێوەی ژووری هەواڵی ئەکادیمیای سی ئێن (ڕووبەڕوو لە ئەبوزەبی)
        </i>
      </div>
    </section>
  );
};

export default Structure;
