import { useRef } from "react";

import { Button, TextField } from "@mui/material";

const Search = () => {
  const inputEl = useRef(null);

  const handleClick = () => {
    const inputValue = inputEl.current.value;

    console.log(inputValue);
  };

  return (
    <>
      <TextField
        id="standard-helperText"
        placeholder="Search"
        label="Enter Username"
        variant="standard"
        ref={inputEl}
        sx={{ marginTop: "100px", width: "60%" }}
      />
      <Button
        type="button"
        onClick={handleClick}
        sx={{ marginTop: "120px", marginLeft: "10px", color: "#24292f" }}
      >
        Search
      </Button>
    </>
  );
};

export default Search;
