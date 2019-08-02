import React, { Fragment } from "react";
import { Link } from "react-router-dom";

//Components
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/Loading";
import PageError from "../components/Error";
import MiniLoader from "../components/MiniLoader";

//Styles & Assets
import confLogo from "../images/platziconf-logo.svg";
import "./styles/Badges.css";

const Badges = props => {
  const { data, isLoading, error, query, onSearch } = props;

  if (error) {
    return <PageError error={error} />;
  }

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
        {isLoading & !data ? (
          <PageLoading />
        ) : (
          <Fragment>
            {isLoading && <MiniLoader />}
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>

            <div className="form-group">
              <label>Filter Badges</label>
              <input
                className="form-control"
                value={query}
                onChange={onSearch}
              />
            </div>
            <BadgesList error={error} badges={data} />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Badges;
