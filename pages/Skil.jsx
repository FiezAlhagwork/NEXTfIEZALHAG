import React from "react";

const Skil = ({item}) => {
  return (
    <div className={styles.bar}>
      <div className={styles.info}>
        <span>{item.name}</span>
      </div>
      <div className={`${styles.progress__line} ${item.class}`}>
        <span></span>
      </div>
    </div>
  );
};

export default Skil;
