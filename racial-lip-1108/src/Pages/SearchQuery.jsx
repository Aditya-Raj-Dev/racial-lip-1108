import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import Searchbar from "../Components/Searchbar";
import {Fundrisers} from "../Utils/Fundrisers";
const SearchQuery = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const queryHandler = useCallback((val) => {
    setQuery(val);
  }, []);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListOfSuggestions = Fundrisers.filter((item) => {
        const queryName = query.trim().toLocaleLowerCase();
        return item.name.toLowerCase().indexOf(query) !== -1
          ? true
          : false;
      })
      .map((item) => item.name);
      console.log(newListOfSuggestions);
      setSuggestions(newListOfSuggestions);
    }
  }, [query]);

  return (
    <div>
      <h2>Search Bar</h2>
      <h4>The search query is "{query}"</h4>
      <Searchbar setQuery={queryHandler} />
    </div>
  );
};

export default SearchQuery;
