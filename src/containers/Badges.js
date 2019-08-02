import React, { useState, useEffect } from "react";

import api from "../api";
import Badges from "../pages/Badges";
import useSearchOnList from "../hooks/useSearchOnList";

const Badges_Container = () => {
  const [data, setData] = useState(undefined);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  //* Custom Hook to search
  const { query, setQuery, filteredData } = useSearchOnList(data);

  const onSearch = e => setQuery(e.target.value);

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

  return (
    <Badges
      query={query}
      data={filteredData}
      isLoading={isLoading}
      error={error}
      onSearch={onSearch}
    />
  );
};

export default Badges_Container;
