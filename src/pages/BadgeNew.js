import React, { Fragment, useState } from "react";

//Components
import api from "../api";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import ErrorBanner from "../components/ErrorBanner";
import PageLoading from "../components/Loading";

//Styles & Assets
import conf_logo from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";

const BadgeNew = props => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);
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

  const handleSubmit = async e => {
    e.preventDefault();
    setisLoading(true);
    setError(null);
    try {
      await api.badges.create(state);
      setisLoading(false);
      props.history.push("/badges");
    } catch (err) {
      setError(err);
      setisLoading(false);
    }
  };
  const handleError = () => {
    setError(null);
  };

  return (
    <Fragment>
      <div className="BadgeNew__hero">
        <img
          className="BadgeNew__hero-image img-fluid "
          src={conf_logo}
          alt={`${conf_logo}`}
        />
      </div>

      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="container">
          {error && <ErrorBanner error={error} onClick={handleError} />}
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={state.firstName || "NAME"}
                lastName={state.lastName || "LASTNAME"}
                jobTitle={state.jobTitle || "JOB TITLE"}
                twitter={state.twitter || "twitter"}
                email={state.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                data={state}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BadgeNew;
