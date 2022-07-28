import Image from "next/image";
import Link from "next/link";
import Footer from "../../../components/en/footer";
import Header from "../../../components/en/header";

import styles from "./pressrelease.module.css";

const PressRelease = () => (
  <>
    <Header title="Press Release" />
    <div className={styles.pressRelease}>
      <h2 className="heading-2">
        CNN Academy Erbil Opens for Applications Today
      </h2>
      <div id="overview">
        <p className="paragraph">
          Erbil, Iraq – With the aim of enhancing journalists’ skills and
          working to further advance professional journalism across the
          Kurdistan Region and Iraq, Erbil Media City, in collaboration with
          CNN, is glad to announce the opening of applications for the first
          course taking place at CNN Academy Erbil.
        </p>
        <p className="paragraph">
          CNN Academy Erbil will be the fourth major CNN Academy initiative to
          date following the launch of CNN Academy Abu Dhabi and the creation of
          co-branded CNN Academy masters with Universidad Loyola (Spain) and
          University College Dublin (Ireland). Through online workshops and
          webinar sessions with senior CNN journalists, participants at CNN
          Academy Erbil will learn how to gather information, verify sources,
          and produce content for multiple platforms. These courses will combine
          with coursework on the CNN Academy Hub and live workshops with CNN
          Academy trainers and journalists.
        </p>
        <p className="paragraph">
          Any individual who works in a media agency, studies in a media
          department or a related department, is a resident of Iraq and is aged
          21 years or older can apply to join the first course, which will run
          from September until December 2022. Applications are open from today
          until 20 August, with prospective students able to find out more and
          register their interest{" "}
          <Link href="/cnn-academy#apply">
            <a style={{ color: "#df2127" }}>here</a>
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
          Sanjay Raina, Erbil Media City General Manager said: “Erbil Media City
          is proud to partner with the CNN Academy as this experience provides
          an equal opportunity for journalists and students to apply for the
          courses and acquire professional training with CNN standards. Erbil
          Media City is willing to further the grounds for international
          enterprises for them to work in Erbil - Kurdistan Region. CNN Academy
          Erbil project will be conducting two courses per year focusing on a
          variety of topics that are essential to advance reporting and
          journalism skills in Kurdistan and across Iraq.”
        </p>
        <p className="paragraph">
          Samson Desta, Vice President of CNN News Operations, added: “CNN has
          been intimately connected to the story of Iraq throughout our history
          as a news organization, and we understand the incredibly important and
          powerful role of journalists there. For us the opportunity to help
          foster local talent and help forge the next generation of independent,
          professional journalists in the region is something about which we are
          extremely passionate. CNN Academy Erbil will be a great chance to give
          the skills, knowledge, and experience to the storytellers of the
          future in this extraordinary part of the world.”
        </p>
        <ul>
          <li>
            Erbil Media City (EMC) is a mixed-use development comprised of
            houses, media office buildings, residential buildings, villas and
            office towers, in addition to commercial and cultural buildings
            located on the outskirts of Erbil.
          </li>
        </ul>
        <div className={styles.btnContainer}>
          <Link href="/cnn-academy/application">
            <a className={styles.apply_btn}>Apply Now</a>
          </Link>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default PressRelease;
