import React, { Fragment } from "react";

//Components
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import ErrorBanner from "../components/ErrorBanner";
import PageLoading from "../components/Loading";

//Styles & Assets
import conf_logo from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";

const BadgeEdit = props => {
  const {
    data,
    error,
    isLoading,
    handleChange,
    handleSubmit,
    handleError
  } = props;

  if (error) {
    return props.history.push("/badges");
  }

  return (
    <Fragment>
      <div className="BadgeEdit__hero">
        <img
          className="BadgeEdit__hero-image img-fluid "
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
                email={data.email || ""}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                edit
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

export default BadgeEdit;
