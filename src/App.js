import React from "react";
import ForcastOne from "./Forcast-v1";
import ForcastTwo from "./Forcast-v2";
import ForcastThree from "./Forcast-v3";

export default function App() {
  return (
    <div>
      <h2 className="title">Class Component 1</h2>
      <ForcastOne />
      <h2 className="title">Class Component 2</h2>
      <ForcastTwo />
      <h2 className="title">Function Component</h2>
      <ForcastThree />
    </div>
  );
}
