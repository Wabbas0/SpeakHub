// @flow
import React from "react";
import "./logo.css";

const Logo = ({ url }: { url: string }) => (
  <div id="logo-container" className="logo-container">
    <img className="logo-container__image" src={url} alt="application logo" />
    <h1 className="logo-container__text">
      Speak<span>Hub</span>
    </h1>
  </div>
);

export default Logo;
