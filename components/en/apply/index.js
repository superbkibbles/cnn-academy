import Image from "next/image";

import styles from "./apply.module.css";

const Apply = () => {
  return (
    <section className={styles.skills} id="apply">
      <div className={styles.skills__container}>
        <h2 className="heading-2">Who Can Apply? </h2>
        <p className="paragraph">
          The CNN Academy Erbil course is aimed at individuals at the beginning
          of their journey in professional journalism. Participants can be in
          their last year of university or in their first years of employment at
          a media organisation.
        </p>

        <ul className={styles.skills__list_container}>
          <li>Participants must be resident in Iraq</li>
          <li>Participants must be 21 or older</li>
          <li>
            Participants must speak Arabic, Kurdish or English. Most lectures
            will be delivered in English (with translations available) so a good
            proficiency is preferred
          </li>
          <li>
            Participants must make themselves available for occasional in-person
            sessions to be held in Erbil. They should also have access to an
            internet connection that will allow them to access the digital
            resources
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
