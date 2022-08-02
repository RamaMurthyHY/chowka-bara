import React from "react";
// import { arrow } from "constants/index";
import styles from "./gotta.module.scss";

interface iProps {
  className?: string;
}

function Gotta(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`${styles.gotta} ${className}`}>
      <hr className={styles.left} />
      <hr className={styles.right} />
      {/* <img src={arrow} alt="" /> */}
    </div>
  );
}

Gotta.defaultProps = {
  className: "",
};

export default Gotta;
