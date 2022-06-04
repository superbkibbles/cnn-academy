import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>پێکهاتەی کۆرس</h2>

          <ul className={styles.structureList}>
            <li>
              <span style={{ fontWeight: "bold" }}>ھەفتەی یەکەم، ٢٩ی ئاب </span>{" "}
              ناساندن و ئاڕاستەکردن (ڕووبەڕوو لە هەولێر)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی دووەم، ٥ی ئەیلول
              </span>{" "}
              رەوشتی رۆژنامەوانی I&II (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                حەفتەی سێیەم، ١٢ی ئەیلول
              </span>{" "}
              رەوشتی رۆژنامەوانی II (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی چوارەم، ١٩ی ئەیلول
              </span>{" "}
              هونەری گێرانەوەی چیڕۆک I (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی پپنجەم،٢٦ی ئەیلول
              </span>{" "}
              هونەری گێرانەوەی چیڕۆک II (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی سێیەمی تشرینی یەکەم
              </span>{" "}
              پشووی خوێندن
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی شەشەم، ١٠ی تشرینی یەکەم
              </span>{" "}
              کاتی هەواڵی بەپەلە I (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی حەوتەم: ١٧ی تشرینی یەکەم
              </span>{" "}
              کاتی هەواڵی بەپەلەII (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+
              سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی هەشتەم، ٢٤ی تشرینی یەکەم
              </span>{" "}
              پلاتفۆرمی هەمەجۆری گێرانەوەی چیڕۆک (کۆرسی تەوەرەی ئەکادیمیای سی
              ئێن ئێن+ سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی نۆیەم، ٣١ی تشرینی یەکەم
              </span>{" "}
              ڕاپۆرتی مەیدانی (کۆرسی تەوەرەی ئەکادیمیای سی ئێن ئێن+ سیمیناری
              لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی نۆیەم، ٧ی تشرینی دووەم
              </span>{" "}
              نووسین بۆ هەواڵی تەلەفزیۆن و نووسینی دەق (کۆرسی تەوەرەی ئەکادیمیای
              سی ئێن ئێن+ سیمیناری لایڤی ئۆنلاین)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                ھەفتەی دەیەم، ١٤ی تشرینی دووەم
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
            ھەفتەی دوازدەیەم، ٥ی کانونی یەکەم
          </span>
          نمونەی ھاوشێوەی ژووری هەواڵی ئەکادیمیای سی ئێن (ڕووبەڕوو لە ئەبوزەبی)
        </i>
      </div>
    </section>
  );
};

export default Structure;
