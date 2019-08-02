import React, { useState, useEffect } from "react";

//Components
import api from "../api";
import BadgeDetails from "../pages/BadgeDetails";

const BadgeDetailsContainer = props => {
  const { badgeId } = props.match.params;
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
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

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleError = () => {
    setError(null);
  };
  const handleDeleteBadge = async () => {
    setisLoading(true);
    setError(null);
    try {
      const fetchData = await api.badges.remove(badgeId);
      setBadge(fetchData);
      setisLoading(false);
      props.history.push("/badges");
      setModal(false);
    } catch (err) {
      setisLoading(false);
      setError(err);
    }
  };
  return (
    <BadgeDetails
      badge={badge}
      errro={error}
      handleError={handleError}
      isLoading={isLoading}
      onOpenModal={handleOpenModal}
      onCloseModal={handleCloseModal}
      isOpenModal={modal}
      onDelete={handleDeleteBadge}
    />
  );
};

export default BadgeDetailsContainer;
