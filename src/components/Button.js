import React, { useState } from "react";

export default function Button({ number, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick(number);
  };
  return (
    <button
      onClick={() => handleClick()}
      className={`bt ${clicked ? "clicked" : ""}`}
    >
      {number}
    </button>
  );
}
