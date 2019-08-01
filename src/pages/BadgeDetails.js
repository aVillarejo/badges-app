import React from "react";
import { Link } from "react-router-dom";

//Components
import Badge from "../components/Badge";
import ErrorBanner from "../components/ErrorBanner";
import PageLoading from "../components/Loading";

//Styles & Assets
import conflogo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";

const BadgeDetails_Layout = props => {
  const { badge, error, isLoading, handleError } = props;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={conflogo} alt="conflogo" />
            </div>

            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h3>
                {badge.firstName} {badge.lastName}
              </h3>
            </div>
          </div>
        </div>
      </div>
      {error && <ErrorBanner error={error} onClick={handleError} />}

      {isLoading ? (
        <PageLoading />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badge.firstName || "NAME"}
                lastName={badge.lastName || "LASTNAME"}
                jobTitle={badge.jobTitle || "JOB TITLE"}
                twitter={badge.twitter || "twitter"}
                email={badge.email || ""}
              />
            </div>

            <div className="col">
              <h2>Action</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/edit/${badge.id}`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => console.log("eliminar badge")}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeDetails_Layout;
