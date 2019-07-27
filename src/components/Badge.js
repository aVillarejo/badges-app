import React from "react";

import "./styles/Badge.css";
import headerLogo from "../images/badge-header.svg";
const DEFAULT_avatarURL = "https://www.gravatar.com/avatar?d=identicon";

const Badge = props => {
  const {
    avatarURL = DEFAULT_avatarURL,
    firstName,
    lastName,
    jobTitle,
    twitter
  } = props;
  return (
    <div className="Badge">
      {/* Header */}
      <div className="Badge__header">
        <img alt="Header Logo" src={headerLogo} />
      </div>

      {/* Content */}
      <div className="Badge__section-name">
        <img className="Badge__avatar" alt="Avatar" src={avatarURL} />
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
