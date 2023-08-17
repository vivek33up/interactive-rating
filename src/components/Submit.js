import React from "react";

export default function Submit({ number, onClick }) {
  return (
    <button onClick={(number) => onClick(number)} className="submit">
      SUBMIT
    </button>
  );
}
