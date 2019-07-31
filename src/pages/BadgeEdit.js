import React, { Fragment, useState, useEffect } from "react";

//Components
import api from "../api";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import ErrorBanner from "../components/ErrorBanner";
import PageLoading from "../components/Loading";

//Styles & Assets
import conf_logo from "../images/platziconf-logo.svg";
import "./styles/BadgeEdit.css";

const BadgeEdit = props => {
  const { badgeId } = props.match.params;
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    twitter: ""
  });

  useEffect(() => {
    const fetchApi = async () => {
      setisLoading(true);
      setError(null);
      try {
        const fetchData = await api.badges.read(badgeId);
        setState(fetchData);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        setError(err);
      }
    };
    fetchApi();
  }, [badgeId]);

  const handleChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setisLoading(true);
    setError(null);
    try {
      await api.badges.update(state.id, state);
      setisLoading(false);
      props.history.push("/badges");
    } catch (err) {
      setError(err);
      console.log({ error: error });
      setisLoading(false);
    }
  };
  const handleError = () => {
    setError(null);
  };

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
                firstName={state.firstName || "NAME"}
                lastName={state.lastName || "LASTNAME"}
                jobTitle={state.jobTitle || "JOB TITLE"}
                twitter={state.twitter || "twitter"}
                email={state.email || ""}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                edit
                data={state}
                onChange={handleChange}
                onSubmit={handleSubmit}
                isLoading={isLoading}
                handlerData={setState}
              />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default BadgeEdit;
