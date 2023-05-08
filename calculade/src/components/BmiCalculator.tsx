import React, { Dispatch, ReactHTMLElement, useEffect, useRef } from "react";
import { isFunctionDeclaration } from "typescript";
import Progressbar from "./Progressbar";
import { type } from "os";

type IProps = {
  BMI: boolean;
  setBMI: React.Dispatch<React.SetStateAction<boolean>>;
};

type IPropsProgress = {
  weight: number;
  height: number;
};

let height = {} as number;
let weight = {} as number;

const bmiEntered = (event: React.ChangeEvent<HTMLInputElement>) => {
  // console.log(event.target);
  if (
    event.target.id == "enterweightid" &&
    event.target.valueAsNumber > 40 &&
    event.target.valueAsNumber < 300
  ) {
    weight = event.target.valueAsNumber;
  } else if (
    event.target.id == "enterheightid" &&
    event.target.valueAsNumber > 100 &&
    event.target.valueAsNumber < 250
  ) {
    height = event.target.valueAsNumber;
  }
  if (weight > 40 && weight < 300 && height > 100 && height < 250) {
    console.log("height: ", height, "weight: ", weight);
  } else {
    //   console.log("else");
  }
};

const BmiCalculator: React.FC<IProps> = ({ setBMI, BMI }) => {
  useEffect(() => {
    height = (document.getElementById("enterheightid") as HTMLInputElement)
      .valueAsNumber;

    weight = (document.getElementById("enterweightid") as HTMLInputElement)
      .valueAsNumber;
    //    console.log("useeffect onetime calisti");
  }, []);

  useEffect(() => {
    console.log("weight hooks update calisti");
  }, [weight, height]);

  return (
    <div className="container text-center">
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-6">
          <input
            className="form-control"
            id="enterweightid"
            placeholder="Enter Your Weight"
            type="number"
            onChange={bmiEntered}
          ></input>
        </div>
        <div className="col-6">
          <input
            className="form-control"
            id="enterheightid"
            type="number"
            placeholder="Enter Your Height"
            onChange={bmiEntered}
          ></input>
        </div>
      </div>
      <Progressbar height={height} weight={weight} />
    </div>
  );
};

export default BmiCalculator;
