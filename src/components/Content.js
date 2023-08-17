import React, { useState } from "react";
import Button from "./Button";
import Submit from "./Submit";

export default function Content() {
  const [num, setNum] = useState(null);
  function saveNumber(number) {
    setNum(number);
  }
  const [show, setShow] = useState(null);
  function sub(number) {
    setShow(`You selected ${number} out of 5`);
  }

  return (
    <>
      {show === null ? (
        <>
          <div div class="circle">
            <img src="icon-star.svg" alt="" />
          </div>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div class="rating">
            <Button onClick={() => saveNumber(1)} number={1} />
            <Button onClick={() => saveNumber(2)} number={2} />
            <Button onClick={() => saveNumber(3)} number={3} />
            <Button onClick={() => saveNumber(4)} number={4} />
            <Button onClick={() => saveNumber(5)} number={5} />
          </div>
          <Submit onClick={(number) => sub(number)} />
        </>
      ) : (
        <>
          {" "}
          <img className="thanks" src="illustration-thank-you.svg" alt="" />
          <p className="rates">You selected {num} out of 5</p>
          <h1 className="thx">Thankyou!</h1>
          <p className="thaks">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </>
      )}
    </>
  );
}
