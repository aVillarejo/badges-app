import React, { Fragment } from "react";

//Components
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import ErrorBanner from "../components/ErrorBanner";
import PageLoading from "../components/Loading";

//Styles & Assets
import conf_logo from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";

const BadgeNew = props => {
  const {
    data,
    isLoading,
    error,
    handleChange,
    handleSubmit,
    handleError
  } = props;

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
                firstName={data.firstName || "NAME"}
                lastName={data.lastName || "LASTNAME"}
                jobTitle={data.jobTitle || "JOB TITLE"}
                twitter={data.twitter || "twitter"}
                email={data.email}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                data={data}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BadgeNew;
