import Image from "next/image";

import styles from "./skills.module.css";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__container}>
        <h2 className="heading-2">Apply Your Skills</h2>
        <p className="paragraph">
          During the CNN Academy Newsroom Simulation, you will:
        </p>

        <ul className={styles.skills__list_container}>
          <li>Understand newsroom workflows during breaking news coverage</li>
          <li>
            Experience the diverse roles of a news coverage team (producer,
            reporter, photojournalist, editor, editorial director)
          </li>
          <li>Apply fact-checking tools and social verification methods</li>
          <li>
            Enhance interviewing, investigative reporting and decision-making
            skills
          </li>
          <li>Improve technical skills for multiplatform content production</li>
          <li>
            Learn how to work under time constraints and with limited resources
          </li>
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
