// @flow
import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

const Logo = ({ url }: { url: string }) => (
  <div>
    <Link id="logo-container" className="logo-container" to="/">
      <img className="logo-container__image" src={url} alt="application logo" />
      <h1 className="logo-container__text">
        Speak<span>Hub</span>
      </h1>
    </Link>
  </div>
);

export default Logo;
