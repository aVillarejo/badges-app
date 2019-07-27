import React from "react";

import twitter_logo from "../images/twitter.svg";
//styles
import "./styles/BadgesList.css";

const BadgesList = ({ badges }) => {
  return (
    <div className="BadgesList">
      <ul className="list-unstyled ">
        {badges.map(badge => {
          return (
            <li key={badge.id}>
              <BadgeListitem badge={badge} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const BadgeListitem = ({ badge }) => {
  const { firstName, lastName, avatarUrl, twitter, jobTitle } = badge;
  return (
    <div className="BadgesListItem">
      <img
        className="BadgesListItem__avatar"
        src={avatarUrl}
        alt={`${firstName}${lastName}_avatar`}
      />
      <div className="Badges__data">
        <strong>
          {firstName} {lastName}
        </strong>

        <span className="Badges__twitter">
          <img
            className="Badges_twitter_logo"
            src={twitter_logo}
            alt="twitter_logo"
          />
          @{twitter}
        </span>
        <span>{jobTitle}</span>
      </div>
    </div>
  );
};

export default BadgesList;
