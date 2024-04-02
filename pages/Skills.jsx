import React from "react";
import styles from "@/styles/Home.module.css";


const Skills = () => {
  const skillsArray = [
    { id: 1, name: "Html", class: styles.html },
    { id: 2, name: "React", class: styles.react },
    { id: 3, name: "javascript", class: styles.javascript },
    { id: 4, name: "python", class: styles.python },
    { id: 5, name: "CSS", class: styles.css },
  ];

  return (
    <div className={styles.skills__bar}>
      {skillsArray.map((items) => {
        return (
          <div className={styles.bar}>
            <div className={styles.info}>
              <span>{items.name}</span>
            </div>
            <div className={`${styles.progress__line} ${items.class}`}>
              <span></span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
