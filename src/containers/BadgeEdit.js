import React, { useState, useEffect } from 'react';

//Components
import api from '../api';
import BadgeEdit from '../pages/BadgeEdit';

const BadgeEdit_Container = props => {
  const { badgeId } = props.match.params;
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
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
      await api.badges.update(state._id, state);
      setisLoading(false);
      props.history.push('/badges');
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
    return props.history.push('/badges');
  }

  return (
    <BadgeEdit
      data={state}
      isLoading={isLoading}
      error={error}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleError={handleError}
    />
  );
};

export default BadgeEdit_Container;
