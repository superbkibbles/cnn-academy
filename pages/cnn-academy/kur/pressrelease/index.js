import Image from "next/image";
import Link from "next/link";
import Footer from "../../../../components/kur/footer";
import Header from "../../../../components/kur/header";

import styles from "./pressrelease.module.css";

const PressRelease = () => (
  <div style={{ direction: "rtl" }}>
    <Header title="بەیاننامەی ڕۆژنامەوانی" />
    <div className={styles.pressRelease}>
      <h2 className="heading-2">
        ئەکادیمیای سى ئێن ئێن لە هەولێر دەرگای وەرگرتن دەکاتەوە{" "}
      </h2>
      <div id="overview">
        <p className="paragraph">
          هەولێر، عێراق – بە مەبەستی بەهێزکردنى تواناكانى رۆژنامەنوسان و كاركردن
          بۆ پێشخستنى رۆژنامەوانیی پیشەییی لە سەرانسەری هەرێمی کوردستان و عێراق،
          شاری میدیایی هەولێر (Erbil Media City) بە هاوکاری لەگەڵ تۆڕی هەواڵی سى
          ئێن ئێن (CNN) بە خۆشحاڵییەوە دەرگای ناو تۆمارکردن دەکاتەوە بۆ یەکەمین
          خول کە لەلایەن ئەکادیمیای سى ئێن ئێن لە هەولێر ئەنجام دەدرێت.
        </p>
        <p className="paragraph">
          ئەکادیمیای سى ئێن ئێن لە هەولێر دەبێتە چوارەم گەورەترین دەستپێشخەریی
          ئەکادیمیای سى ئێن ئێن تاوه‌كو ئێستا، لە دوای كردنه‌وه‌ى ئەکادیمیای سى
          ئێن ئێن لە ئەبوزەبی و پێكهێنانی ماستەری هاوبراندی ئەکادیمیای سى ئێن
          ئێن لەگەڵ زانکۆی لۆیۆلا (ئیسپانیا) و زانکۆی کۆلێژی دوبلین (ئیرلەندا).
          لە رێگەی ۆرکشۆپی ئۆنلاین و وێبینار لەگەڵ گەورە رۆژنامەنوسانی تۆڕی
          هەواڵی سى ئێن ئێن، بەشداربووانی ئەکادیمیای سى ئێن ئێن لە هەولێر
          فێردەبن چۆن زانیاری کۆبکەنەوە، سەرچاوەکان پشتڕاست بکەنەوە و ناوەڕۆکی
          هەواڵ بۆ پلاتفۆرمه‌ هه‌مه‌جۆره‌كان بەرهەمبهێنن. ئەم خولانە پێكدێن له‌
          راهێنان له‌ بنكه‌ى سەرەکیی ئەکادیمیای سى ئێن ئێن و ۆرکشۆپی راستەوخۆ
          لەگەڵ راهێنەران و رۆژنامەنوسانی ئەکادیمیای سى ئێن ئێن.
        </p>
        <p className="paragraph">
          هەر کەسێك کە لە دامەزراوەیەکی میدیایی کار بكات، لە به‌شى راگەیاندن یان
          لە بەشێكى پەیوەندیدارى دیکە بخوێنێت، دانیشتووی عێراقبێت و تەمەنی ٢١
          ساڵ یان زیاتربێت دەتوانێت داواکاری پێشکەش بکات تاوه‌كو به‌شدارى خولی
          یەکەم بكات، کە لە مانگی ئەیلول بۆ کانونی یەکەمی ٢٠٢٢ ئەنجامدەدرێت.
          پێشکەشکردنی داواکاری لە ئەمڕۆوە دەکرێتەوە تا رۆژی 20 ی مانگی ئاب،
          فێرخوازەکان دەتوانن{" "}
          <Link href="/cnn-academy/ar#apply">
            <a style={{ color: "#df2127" }}> لێرە </a>
          </Link>{" "}
          زانیاری زیاتریان دەست بکەوێت و خۆیان تۆماربکەن.
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
          سه‌نجای راینا، بەڕێوبەری گشتیی شاری میدیایی هەولێر دەڵێت: ”شاری
          میدیایی هەولێر شانازی دەکات به‌م هاوبەشیه‌ى لەگەڵ ئەکادیمیای سى ئێن
          ئێن چونکە ئەم ئەزموونە دەرفەتێکی یەکسان بۆ رۆژنامەنوسان و خوێندکاران
          دەڕەخسێنێت تاوه‌كو داواکاریی پێشکەشبكه‌ن بۆ خوله‌كان و راهێنانێکی
          پیشەیی و پرۆفێشناڵ وه‌ربگرن به‌پێى پێوەرەکانی سى ئێن ئێن. شاری میدیایی
          هەولێر دەیەوێت زەمینەیەکی فراوانتر بۆ پرۆژە نێودەوڵەتییەکان بڕەخسێنێت
          تاوه‌كو لە هەولێر و هەرێمی کوردستان کاربکەن. پرۆژەی ئەکادیمیای سى ئێن
          ئێن لە هەولێر لە هەر ساڵێکدا دوو خول ئەنجامدەدات و جەختدەخاتە سەر ئەو
          بابەتە جۆربەجۆرانەی کە بنچینەیین بۆ پێشخستنی تواناکانی ئامادەکردنی
          هەواڵ و راپۆرت و کاری رۆژنامەوانەی لە کوردستان و تەواوی عێراق.”
        </p>
        <p className="paragraph">
          سامسۆن دێستا، جێگری سەرۆکی ئۆپه‌ره‌يشن له‌ سى ئێن ئێنيش گوتى: ” ئيمه‌
          له‌ سى ئێن ئێن وەك رێکخراوێکی هەواڵيى، بە درێژایی مێژوومان لە نزیکەوە
          بە چیرۆکی عێراقه‌وه‌ پەیوەستبووين و لە رۆڵی ئێجگار گرنگ و بەهێزی
          رۆژنامەنوسانی ئەو وڵاتە تێدەگەین. بۆ ئێمە، دەرفەتی ياره‌مه‌تيدانى
          هاندانى بەهرە خۆجێییەکان و هاوكاريكردن لە پێگەیاندنی نەوەی داهاتووى
          رۆژنامەنوسانی سەربەخۆ و پرۆفێشناڵ لە ناوچه‌كه‌دا شتێکە كه‌ زۆر به‌
          په‌رۆشه‌وه‌ين بۆى. ئەکادیمیای سى ئێن ئێن لە هەولێر هەلێكی گەورە دەبێت
          بۆ بەخشینی توانا، شارەزایی، زانیاری و ئەزموون به‌ پەیامنێران و
          چیرۆکخوانانی داهاتوو لە ئەم بەشە ناوازه‌يه‌ى جیهاندا.”
        </p>
        <ul>
          <li>
            • شاری میدیایی هەولێر (EMC) کۆمەڵگەیەکی فرەمەبەستە کە لە خانوو،
            باڵه‌خانه‌ى نوسینگەی میدیایی، بینای نیشتەجێبوون، ڤیلا و تاوەری
            نوسینگەى كار و باڵه‌خانه‌ى بازرگانی و کەلتوری پێكدێت و دەکەوێتە پەڕی
            شاری هەولێر.
          </li>
        </ul>
        <div className={styles.btnContainer}>
          <Link href="/cnn-academy/application">
            <a className={styles.apply_btn}>جێبەجێ بکە</a>
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default PressRelease;
