import { ButtonHTMLAttributes, EventHandler } from "react";
import React, { useEffect, useState } from "react";
import BmiCalculator from "./components/BmiCalculator";
import MileCalculator from "./components/MileCalculator";

const App: React.FC = () => {
  const buttonClicked = (event: string) => {
    switch (event) {
      case "BMI":
        setBMI(!BMI);
        setMile(false);
        break;
      case "Mile":
        setMile(!Mile);
        setBMI(false);
        break;
    }
  };

  const [BMI, setBMI] = useState<boolean>(false);
  const [Mile, setMile] = useState<boolean>(false);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-success"
            value="BMI"
            onClick={(e) =>
              buttonClicked((e.target as HTMLButtonElement).value)
            }
          >
            BMI Calculator
          </button>
        </div>
        <div className="col-6">
          <button
            className="btn btn-success"
            value="Mile"
            onClick={(e) =>
              buttonClicked((e.target as HTMLButtonElement).value)
            }
          >
            Mile Converter
          </button>
        </div>

        <br />
        <br />
        <div className="row">
          <BmiCalculator BMI={BMI} setBMI={setBMI} />
          <MileCalculator Mile={Mile} setMile={setMile} />
        </div>
      </div>
    </div>
  );
};

export default App;
