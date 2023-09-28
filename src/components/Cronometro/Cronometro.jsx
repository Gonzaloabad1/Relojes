import React, { useEffect, useState } from "react";
import "./Cronometro.css";

const Cronometro = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [timerOn]);

  return (
    <div className="Cronometro">
    <h2>{time}</h2>
    <div id="buttons">
{!timerOn && time === 0 && (
<button onClick={() => setTimerOn(true)}>Start</button>
)}
{timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
{!timerOn && time > 0 && (
<button onClick={() => setTime(0)}>Reset</button>
)}
{!timerOn && time > 0 && (
<button onClick={() => setTimerOn(true)}>Resume</button>
)}
</div>
    <button onClick={() => setTimerOn(true)}>Start</button>
    <button onClick={() => setTimerOn(false)}>Stop</button>
    <button onClick={() => setTimerOn(true)}>Resume</button>
    <button onClick={() => setTime(0)}>Reset</button>
    </div>
    );
    };

export default Cronometro;