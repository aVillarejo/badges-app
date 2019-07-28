import React, { Fragment, useState } from "react";

//Components
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

//Styles
import "./styles/BadgeNew.css";

const BadgeNew = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      msg: "Form was submitted",
      state
    });
  };

  return (
    <Fragment>
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={header} alt="Logo" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={state.firstName}
              lastName={state.lastName}
              jobTitle={state.jobTitle}
              twitter={state.twitter}
            />
          </div>
          <div className="col-6">
            <BadgeForm
              data={state}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BadgeNew;
