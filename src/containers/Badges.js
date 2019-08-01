import React, { useState, useEffect } from "react";

import api from "../api";
import Badges from "../pages/Badges";

const Badges_Container = () => {
  const [data, setData] = useState(undefined);
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
  }, []);

  useEffect(() => {
    const autoUpdate = setInterval(() => {
      fetchApi();
    }, 5000);
    return () => {
      clearInterval(autoUpdate);
    };
  }, []);

  return <Badges data={data} isLoading={isLoading} error={error} />;
};

export default Badges_Container;
