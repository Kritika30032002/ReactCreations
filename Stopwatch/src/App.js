import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const getH = (ms) => ("0" + ((ms / 10) % 100)).slice(-2);

  const getS = (ms) => ("0" + Math.floor((ms / 1000) % 60)).slice(-2);

  const getM = (ms) => ("0" + Math.floor((ms / 60000) % 60)).slice(-2);

  const formatTime = (ms) => `${getM(ms)}:${getS(ms)}:${getH(ms)}`;

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 10), 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  useEffect(() => {
    if (time) {
      const rest = laps.slice(0, laps.length - 1);
      const last =
        time - rest.reduce((accumulator, value) => accumulator + value, 0);
      setLaps([...rest, last]);
    } else {
      setLaps([]);
    }
  }, [time, laps]);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <div className="box m-3 d-flex justify-content-center align-items-center">
        <h2 className="display-2">STOPWATCH</h2>
        <div className="alert alert-dark mt-5">{formatTime(time)}</div>
        <div className="mb-3 mt-5 d-flex mx-3 justify-content-between">
          {!isRunning && !time ? (
            <button
              className="btn btn-success btn-lg"
              onClick={() => setIsRunning(true)}
            >
              Start
            </button>
          ) : null}

          {isRunning ? (
            <button
              className="btn btn-danger btn-lg"
              onClick={() => setIsRunning(false)}
            >
              Stop
            </button>
          ) : null}

          {isRunning ? (
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                setLaps([...laps, 0]);
              }}
            >
              Lap
            </button>
          ) : null}

          {!isRunning && time ? (
            <button
              className="btn btn-success btn-lg"
              onClick={() => setIsRunning(true)}
            >
              Resume
            </button>
          ) : null}

          {!isRunning && time ? (
            <button className="btn btn-dark btn-lg" onClick={() => setTime(0)}>
              Reset
            </button>
          ) : null}
        </div>
        <div className="laps">
          {laps.map((lap, i) => (
            <div key={i}>
              Lap {i + 1}: {formatTime(lap)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
