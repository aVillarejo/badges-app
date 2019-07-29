import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import api from "../api";

//Components
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/Loading";
import PageError from "../components/Error";

//Styles & Assets
import confLogo from "../images/platziconf-logo.svg";
import "./styles/Badges.css";

const Badges = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    setisLoading(true);
    setError(null);
    try {
      const fetchData = await api.badges.list();
      setData(fetchData);
      setisLoading(false);
    } catch (err) {
      setisLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    fetchApi();
    return () => {
      //limpiar la subscripcion al API
    };
  }, []);

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
        {isLoading ? (
          <PageLoading />
        ) : (
          <Fragment>
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>
            <BadgesList error={error} badges={data} />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Badges;
