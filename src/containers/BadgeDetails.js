import React, { useState, useEffect } from "react";

//Components
import api from "../api";
import BadgeDetails from "../pages/BadgeDetails";

const BadgeDetailsContainer = props => {
  const { badgeId } = props.match.params;
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [badge, setBadge] = useState({
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
        setBadge(fetchData);
        setisLoading(false);
      } catch (err) {
        setisLoading(false);
        setError(err);
      }
    };
    fetchApi();
  }, [badgeId]);

  return (
    <BadgeDetails
      badge={badge}
      errro={error}
      handleError={() => setError(null)}
      isLoading={isLoading}
    />
  );
};

export default BadgeDetailsContainer;
