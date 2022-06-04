import Image from "next/image";

import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <h2 className="heading-2">طبق مهاراتك</h2>
        <p className="paragraph">
          أثناء محاكاة غرفة الأخبار بأكاديمية CNN، ستقوم بما يلي:
        </p>

        <ul className={styles.skills__list_container}>
          <li>فهم سير عمل غرفة الأخبار أثناء تغطية الأخبار العاجلة</li>
          <li>
            تجربة الأدوار المتنوعة لفريق التغطية الإخبارية (منتج، مراسل، مصور
            صحفي، محرر، مدير تحرير)
          </li>
          <li>تطبيق أدوات التحقق من الحقائق وطرق التحقق الاجتماعي</li>
          <li>
            تعزيز مهارات إجراء المقابلات وإعداد التقارير الاستقصائية واتخاذ
            القرار
          </li>
          <li>تحسين المهارات التقنية لإنتاج محتوى متعدد المنصات</li>
          <li>تعلم كيفية العمل في ظل قيود الوقت وبموارد محدودة</li>
        </ul>
      </div>
      <div className={styles.skills__imageContainer}>
        <Image
          src={"/images/Tunisia-1.png"}
          alt="Tunisia"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Skills;
