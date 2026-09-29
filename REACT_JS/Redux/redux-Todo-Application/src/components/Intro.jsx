import React from "react";

const Intro = () => {
  return (
    <div className="intro-screen">
      <div className="intro-content">

        <div className="intro-icon">
          ✓
        </div>

        <h1 className="intro-title">
          Todo Application
        </h1>

        <p className="intro-subtitle">
          Organize your tasks. Stay productive.
        </p>

        <div className="intro-loader">
          <div className="intro-loader-bar"></div>
        </div>

      </div>
    </div>
  );
};

export default Intro;