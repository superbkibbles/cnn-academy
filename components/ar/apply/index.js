import Image from "next/image";

import styles from "./apply.module.css";

const Apply = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <h2 className="heading-2">من يمكنه التقدم بطلب؟</h2>
        <p className="paragraph">
          تستهدف دورة أكاديمية CNN في أربيل الأفراد في بداية رحلتهم في الصحافة
          المهنية. يمكن أن يكون المشاركون في السنة الأخيرة من الجامعة أو في
          سنوات عملهم الأولى في مؤسسة إعلامية.
        </p>

        <ul className={styles.skills__list_container}>
          <li>يجب أن يكون المشاركون من المقيمين في العراق</li>
          <li>يجب ألا يقل عمر المشاركين عن 21 عامًا</li>
          <li>
            يجب أن يتحدث المشاركون اللغة العربية أو الكردية أو الإنجليزية. تُلقى
            معظم المحاضرات باللغة الإنجليزية (مع توفر ترجمات) لذلك يُفضل إتقان
            جيد ل اللغة الإنكليزية
          </li>
          <li>
            يجب على المشاركين أن يكونوا جاهزين لعقد جلسات شخصية من حين لآخر في
            أربيل. يجب أن يتوفر لديهم أيضًا اتصال بالإنترنت يسمح لهم بالوصول إلى
            الموارد الرقمية
          </li>
        </ul>
      </div>
      <div className={styles.skills__imageContainer}>
        <Image
          src={"/images/Tunisia-2.jpg"}
          alt="Tunisia"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Apply;
