import Image from "next/image";
import Link from "next/link";
import Footer from "../../../../components/ar/footer";
import Header from "../../../../components/ar/header";

import styles from "./pressrelease.module.css";

const PressRelease = () => (
  <div style={{ direction: "rtl", fontFamily: "Dubai-Regular" }}>
    <Header title="بيان صحفي" />
    <div className={styles.pressRelease}>
      <h2 className="heading-2">
        أكاديمية سي إن إن أربيل تفتح أبوابها للتسجيل اليوم
      </h2>
      <div id="overview">
        <p className="paragraph">
          أربيل، العراق - بهدف تعزيز مهارات الصِّحفيين وعملاً على دعم وتعزيز
          الصَّحافة المهنيَّة في إقليم كردستان وكلِّ أنحاء العراق، يَسرُّ مدينة
          أربيل الإعلاميَّة (Erbil Media City) وبالتَّعاون مع سي إن إن، أن تعلن
          عن فتح باب التَّقدم للدَّورة الأولى التي ستعقد في أكاديميَّة سي إن إن
          أربيل.
        </p>
        <p className="paragraph">
          أكاديميَّة سي إن إن أربيل ستكون رابع أكبر مبادرة حتى الآن، بعد إطلاق
          أكاديميَّة سي إن إن أبو ظبي، وإنشاء ماجستير أكاديميَّة سي إن إن
          المشترك مع جامعة لويولا (إسبانيا)، وكليَّة دبلن الجامعيَّة (إيرلندا).
        </p>
        <p className="paragraph">
          من خلال وُرَش العمل وجلسات النَّدوات عبر الإنترنت مع كبار صحفيي سي إن
          إن، سيتعلم المشاركون في أكاديميَّة سي إن إن في أربيل كيفيَّة جمع
          المعلومات والتَّحقق من المصادر وإنتاج محتوى لمنصَّات متعددة. ستجمع هذه
          الدَّورات بين العمل الدِّراسيَّ في مركز أكاديميَّة سي إن إن ووُرَش
          العمل الحيَّة مع مدربي وصحفيي أكاديميَّة سي إن إن .
        </p>
        <p className="paragraph">
          مكن لأيّ فرد يعمل في وكالة إعلاميَّة أو يدرس في مجال الإعلام أو قسم ذي
          صلة، مقيم في العراق ويبلغ من العمر 21 عامًا أو أكثر، التَّقدم للانضمام
          إلى الدَّورة الأولى، والتي ستستمر من أيلول حتى كانون الأول 2022.
        </p>
        <p className="paragraph">
          التقديم مفتوح من اليوم وحتَّى تاريخ 20 آب، مع إمكانيَّة معرفة المزيد
          وتسجيل اهتمامات الطُّلاب المحتملين
          <Link href="/cnn-academy/ar#apply">
            <a style={{ color: "#df2127" }}> هنا </a>
          </Link>
          .
        </p>
        <div className={styles.skills__imageContainer}>
          <Image
            src={"/images/building.jpg"}
            alt="Tunisia"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className="paragraph">
          سانجاي راينا المدير العام لمدينة أربيل الإعلاميَّة يقول: “تفخر مدينة
          أربيل الإعلاميَّة بالشَّراكة مع أكاديميَّة سي إن إن؛ حيث أنَّ هذه
          التَّجربة ستوفر فرصةً متساويةً للصِّحفيين والطُّلاب للتَّقدم للدَّورات
          والحصول على تدريب احترافي وفقاً لمعايير سي إن إن. إنَّ مدينة أربيل
          الإعلاميَّة على استعداد لتوفير ودعم الأرضيَّة للشَّركات الدَّولية
          لتتمكن من العمل في أربيل - إقليم كردستان.
        </p>
        <p className="paragraph">
          مشروع أكاديمية سي إن إن في أربيل سَيَعقد دورتين سنوياً مع الاهتمام
          بمجموعةٍ متنوعةٍ من الموضوعات التي تُعتَبر ضروريَّة لتعزيز مهارات
          إعداد التَّقارير والصَّحافة في كردستان وفي جميع أنحاء العراق ”.
        </p>
        <p className="paragraph">
          سامسون ديستا نائب رئيس العمليَّات الإخباريَّة في سي إن إن أضاف:
          ”ارتبطت سي إن إن ارتباطاً وثيقاً بقصَّة العراق من خلال تاريخنا
          كمؤسَّسة إخباريَّة، وفهمنا للدَّور المهم والقوي للصِّحفيين هناك.
          بالنِّسبة لنا، فإنَّ فرصة احتضان المواهب المحليَّة والمساعدة في
          تعزيزها وفي بناء الجيل القادم من الصِّحفيين المحترفين والمستقلِّين في
          المنطقة هو أمرٌ نحن شغوفون به للغاية. أكاديميَّة سي إن إن في أربيل
          ستشكِّل فرصة مهمة لمنح المهارات والمعرفة والخبرة لروات المُستقبل في
          هذا الجزء الاستثنائي من العالم ”.
        </p>
        <ul>
          <li>
            مدينة أربيل الإعلامية هي مشروع متعدد الاستخدامات يتكوَّن من منازل
            ومبانٍ للمكاتب الإعلاميَّة ومبانٍ سكنيَّة وفيلات وأبراج مكاتب،
            بالإضافة إلى مبانٍ تجاريَّة وثقافيَّة تقع في ضواحي أربيل.
          </li>
        </ul>
        <div className={styles.btnContainer}>
          <Link href="/cnn-academy/application">
            <a className={styles.apply_btn}>قدم الان</a>
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default PressRelease;