import React, { useEffect } from "react";

type IPropsProgress = {
  height: number;
  weight: number;
};

const recolourbar = function (value: number) {
  if (value < 18.5) {
  } else if (value > 18.5 && value < 24.99999) {
  } else if (value > 25 && value < 29.9999) {
  } else if (value > 30 && value < 39.9999) {
  } else if (value > 40) {
  } else {
  }
};

const Progressbar: React.FC<IPropsProgress> = ({ height, weight }) => {
  useEffect(() => {
    console.log("weight ", weight.toString(), "height ", height.toString());
  }, [height, weight]);

  console.log("degisti");
  return (
    <div className="row" style={{ marginTop: "20px" }}>
      <div className="col-12">
        <div
          className="progress"
          id="progressbar"
          role="progressbar"
          aria-label="success"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="progress-bar text-dark"
            id="progressvalue"
            style={{ width: "50%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
