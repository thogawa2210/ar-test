import React from "react";
import Webcam from "react-webcam";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Camera Hacked</h1>
      <Webcam videoConstraints={{facingMode: "user"}}/>
    </div>
  );
};

export default App;
