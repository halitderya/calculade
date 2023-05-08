import React from "react";
import { createLogicalAnd } from "typescript";

type IProps = {
  Mile: boolean;
  setMile: React.Dispatch<React.SetStateAction<boolean>>;
};
const updt = (val: number) => {
  console.log(val);
  (document.getElementById("result") as HTMLInputElement).value =
    val.toString() +
    " Km is " +
    (val * 1.60934).toString() +
    " Miles " +
    " | " +
    val.toString() +
    " Miles is " +
    (val * 0.621371).toString() +
    " Km";
};
const updated = (event: React.ChangeEvent<HTMLInputElement>) => {
  updt(event.target.valueAsNumber);
};

const MileCalculator: React.FC<IProps> = ({ Mile, setMile }) => {
  if (Mile === true) {
    return (
      <div className="container-md" style={{ margin: "2px", padding: "10px" }}>
        <label htmlFor="valueform" className="my-1 mr-2">
          Enter Mile or KM
        </label>

        <input
          id="valueform"
          className="form-control"
          type="number"
          onChange={updated}
          placeholder="Enter Value"
        ></input>
        <label htmlFor="result">Result</label>

        <input
          className="form-control"
          id="result"
          disabled
          placeholder="Result"
        ></input>
      </div>
    );
  } else {
    return <></>;
  }
};

export default MileCalculator;
