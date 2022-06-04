import AboutCnn from "../../components/kur/aboutCnn";
import Apply from "../../components/kur/apply";
import ApplyArea from "../../components/kur/applyArea";
import ApplyDate from "../../components/kur/applyDate";
import Footer from "../../components/kur/footer";
import Header from "../../components/kur/header";
import Overview from "../../components/kur/overview";
import Pricing from "../../components/kur/pricing";
import Skills from "../../components/kur/skills";
import Structure from "../../components/kur/structure";

const CnnKurdish = () => {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* <!-- SECOND --> */}
      <Overview />

      {/* About CNN */}
      <AboutCnn />

      {/* Skills */}
      <Skills />

      <Apply />

      <ApplyDate />

      <Structure />

      <Pricing />

      <ApplyArea />

      <Footer />
    </div>
  );
};

export default CnnKurdish;
