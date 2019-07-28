import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";

//Styles
import "./styles/Badges.css";
import BadgesList from "../components/BadgesList";

const default_data = [
  {
    id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
    firstName: "Alberto",
    lastName: "Villarejo",
    email: "a.villarejo19@gmail.com",
    jobTitle: "Legacy Brand Director",
    twitter: "aVillarejo",
    avatarUrl:
      "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
  },
  {
    id: "2de30c42-9deb-40fc-a41f-05e62b593979",
    firstName: "Alfredo",
    lastName: "Medina",
    email: "medina8911@gmail.com",
    jobTitle: "Product manager",
    twitter: "medina8911",
    avatarUrl:
      "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dwff40b?d=identicon"
  },
  {
    id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
    firstName: "Major",
    lastName: "Rodriguez",
    email: "Ilene66@hotmail.com",
    jobTitle: "Human Research Architect",
    twitter: "MajorRodriguez61",
    avatarUrl:
      "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
  },
  {
    id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
    firstName: "Daphney",
    lastName: "Torphy",
    email: "Ron61@hotmail.com",
    jobTitle: "National Markets Officer",
    twitter: "DaphneyTorphy96",
    avatarUrl:
      "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
  }
];

const Badges = () => {
  const [data, setData] = useState(() => {
    console.log("constructor ");
    return [];
  });

  useEffect(() => {
    console.log("didMount/didUpdate");
    const timeoutId = setTimeout(() => {
      setData(default_data);
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
      console.log("willUnmount");
    };
  }, [data]);

  console.log("render");

  return (
    <Fragment>
      <div className="Badges">
        <div className="Badges__hero">
          <div className="Badges__container">
            <img className="Badges_conf-logo" alt="confLogo" src={confLogo} />
          </div>
        </div>
      </div>
      <div className="Badges__container">
        <div className="Badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        <BadgesList badges={data} />
      </div>
    </Fragment>
  );
};

export default Badges;
