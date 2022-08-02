import React from "react";
// import Cross from "components/svg-icons/cross";
import Gotta from "components/gotta/gotta";
import styles from "./board.module.scss";

interface iProps {
  className?: string;
}

const squares = Array.from(Array(25).keys());
const gottas = [3, 11, 13, 15, 23];

function Board(props: iProps): JSX.Element {
  const { className } = props;

  console.log("squares", squares);

  return (
    <div className={`${styles.board} ${className}`}>
      {squares.map((i) => (
        <div className={styles.square}>{gottas.includes(i + 1) && <Gotta />}</div>
      ))}
    </div>
  );
}

Board.defaultProps = {
  className: "",
};

export default Board;
