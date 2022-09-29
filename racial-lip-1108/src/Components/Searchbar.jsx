import React, { useState } from "react";
import { useEffect } from "react";
import { Input } from "@chakra-ui/react";
const Searchbar = ({ setQuery }) => {
  const [inputText, setInputText] = useState("");

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    setQuery(inputText);
  }, [inputText, setQuery]);

  return (
    <div>
      <Input
        type={"text"}
        value={inputText}
        onChange={handleInputTextChange}
        w={"300px"}
        // border={"none"}
        outline={"none"}
        fontSize={"20px"}
        flex={"1"}
        
      />
    </div>
  );
};

export default Searchbar;
