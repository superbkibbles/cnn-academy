import styles from "./structure.module.css";

const Structure = () => {
  return (
    <section className={styles.applyDate} id="structure">
      <div className={styles.wrraper}>
        <div className={styles.container}>
          <h2 className={styles.applyDate__heading}>هيكل الدورة</h2>

          <ul className={styles.structureList}>
            <li>
              <span style={{ fontWeight: "bold" }}>الأسبوع الأول، 29 آب</span>{" "}
              مقدمة وتوجيه (شخصيًا في أربيل)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع الثاني، 5 سبتمبر
              </span>{" "}
              أخلاقيات الصحافة الأول والثاني (دورة أكاديمية CNN + ندوة حية
              افتراضية)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع الثالث، 12 سبتمبر
              </span>{" "}
              أخلاقيات الصحافة 2 (دورة أكاديمية CNN + ندوة افتراضية مباشرة)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع الرابع، 19 سبتمبر
              </span>{" "}
              فن رواية القصص 1 (دورة أكاديمية CNN + ندوات افتراضية مباشرة)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع الخامس، 26 سبتمبر
              </span>{" "}
              فن رواية القصص 2 (دورة أكاديمية CNN + ندوات افتراضية حية)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>أسبوع 3 أكتوبر</span> استراحة
              دراسية
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع السادس، 10 أكتوبر
              </span>{" "}
              الأخبار العاجلة 1 (دورة أكاديمية CNN + ندوات افتراضية مباشرة)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع السابع، 17 تشرين الأول (أكتوبر)
              </span>{" "}
              الأخبار العاجلة 2 (دورة أكاديمية CNN + ندوات افتراضية مباشرة)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع الثامن، 24 أكتوبر
              </span>{" "}
              رواية القصص متعددة المنصات (دورة CNN Academy Hub + ندوة حية
              افتراضية)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع التاسع، 31 أكتوبر
              </span>{" "}
              إعداد التقارير من الميدان (دورة أكاديمية CNN + ندوة افتراضية
              مباشرة)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع العاشر، 7 نوفمبر
              </span>{" "}
              الكتابة للأخبار التلفزيونية وكتابة السيناريو (دورة أكاديمية CNN +
              ندوة افتراضية مباشرة)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>
                الأسبوع الحادي عشر، 14 تشرين الثاني (نوفمبر)
              </span>{" "}
              رواية القصص على الهاتف المحمول وتحريرها (دورة CNN Academy Hub +
              ندوة حية افتراضية)
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>أسبوع 21 نوفمبر</span>{" "}
              استراحة دراسية
            </li>
          </ul>
        </div>
        <i className={styles.italic}>
          <span style={{ fontWeight: "bold" }}>
            الأسبوع الثاني عشر، 5 ديسمبر
          </span>
          محاكاة غرفة الأخبار في أكاديمية CNN (شخصيًا في أبو ظبي)
        </i>
      </div>
    </section>
  );
};

export default Structure;
