import React, { Children, useState } from "react";
import { useEffect } from "react";
import { Box, Input } from "@chakra-ui/react";
import { $CombinedState } from "redux";
const Searchbar = ({ setQuery, suggestions }) => {
  const [inputText, setInputText] = useState("");
  const [activeOption, setActiveOption] = useState(0);

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
        w={"800px"}
        outline={"none"}
        fontSize={"20px"}
        flex={"1"}
      />
      {!!suggestions.length && (
        <Box
          border={"1px solid black"}
          display="flex"
          width={"800px"}
          flexDirection={"column"}
          maxHeight= {"${({limit}) => `${limit * 38.8}px`}"}
          margin={"auto"}
          overflow={"auto"}
          textAlign="left"
          padding={"10px"}
          lineHeight={"9"}
          paddingLeft="50px"
          limit={5}
          flex={1}
          active={activeOption}
          background={"${({active}) => active}"}
          cursor={"pointer"}
          
        >
          {suggestions.map((item, index) => {
            return (
              <div
                key={index}
                onMouseOver={() => {
                  setActiveOption(index + 1);
                }}
              >
                {item}
              </div>
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default Searchbar;
