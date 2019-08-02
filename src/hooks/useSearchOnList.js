/*
 * Custom Hook
 */
import { useState, useMemo } from "react";

const useSearchOnList = badges => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(badges);

  useMemo(() => {
    let result;
    if (badges) {
      result = badges.filter(badge => {
        //* values to sesrch on data
        return `${badge.firstName} ${badge.lastName}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
    }

    setFilteredData(result);
  }, [badges, query]);

  return { query, setQuery, filteredData };
};

export default useSearchOnList;
