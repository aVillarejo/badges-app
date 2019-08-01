import React, { useState } from "react";

//Components
import api from "../api";
import BadgeNew from "../pages/BadgeNew";

const BadgeNewContainer = props => {
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
    <BadgeNew
      data={state}
      isLoading={isLoading}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleError={handleError}
    />
  );
};

export default BadgeNewContainer;
