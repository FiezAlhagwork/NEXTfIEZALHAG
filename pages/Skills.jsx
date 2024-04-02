import React from "react";
import styles from "@/styles/Home.module.css";
import Skil from "./Skil";

const Skills = () => {
  const skillsArray = [
    { id: 1, name: "Html", class: styles.html },
    { id: 2, name: "REACT JS", class: styles.react },
    { id: 3, name: "javascript", class: styles.javascript },
    { id: 4, name: "python", class: styles.python },
    { id: 5, name: "CSS", class: styles.css },
  ];

  return (
    <div className={styles.skills__bar}>
      {skillsArray.map((items) => {
        return (
            <Skil item={items}/>
        );
      })}
      </div>


   
  );
};

export default Skills;
