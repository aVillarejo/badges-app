import React from "react";
import { Link } from "react-router-dom";

import Gravatar from "./Gravatar";
//styles and Assets
import twitter_logo from "../images/twitter.svg";
import "./styles/BadgesList.css";

const BadgesList = ({ badges }) => {
  if (badges.length === 0)
    return (
      <div className="card">
        <div className="card-header" />
        <div className="card-body">
          <h5 className="card-title">No Badges were found</h5>
          <p className="card-text">Why do not you create one?</p>
          <Link to="/badges/new" className="btn btn-primary">
            Create a new badge
          </Link>
        </div>
      </div>
      // <div
      //   style={{ width: "auto" }}
      //   className="card d-flex justify-content-center align-items-center"
      // >
      //   <div className="card-content">
      //     <h3>
      //       No Badges were found,
      //       <br /> create a new one
      //     </h3>
      //   </div>
      // </div>
    );
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
  const { firstName, lastName, twitter, jobTitle, email } = badge;
  return (
    <div className="BadgesListItem">
      <Gravatar
        className="BadgesListItem__avatar"
        email={email}
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
