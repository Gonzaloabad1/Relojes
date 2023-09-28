import React, { useEffect, useState } from "react";
import "./Cuentaatras.css";

const Cuentaatras = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
  let Cuentaatras = new Date("September 28, 2023 8:35:00").getTime();
  let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = Cuentaatras - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  if (distance < 0) {
  clearInterval(x);
  setTime("September 28, 2023");
  }
  }, 1000);
  }, []);
  return (
  <div className="Cuentaatras">
  <h2>{time}</h2>
  </div>
  );
  };
  export default Cuentaatras;