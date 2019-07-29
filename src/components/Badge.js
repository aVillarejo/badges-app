import React from "react";
import Gravatar from "./Gravatar";

//Styles & Assets
import "./styles/Badge.css";
import headerLogo from "../images/badge-header.svg";

const Badge = props => {
  const { email, firstName, lastName, jobTitle, twitter } = props;
  return (
    <div className="Badge">
      {/* Header */}
      <div className="Badge__header">
        <img alt="Header Logo" src={headerLogo} />
      </div>

      {/* Content */}
      <div className="Badge__section-name">
        <Gravatar email={email} className="Badge__avatar" />
        <h1>
          {firstName} <br />
          {lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3> {jobTitle}</h3>
        <div>@{twitter}</div>
      </div>

      {/* Footer */}
      <div className="Badge__footer">#platziconf</div>
    </div>
  );
};

export default Badge;
