import { useState } from "react";

import { Button, Grid, TextField } from "@mui/material";

import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async (username) => {
    setIsLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUserData(data);
    setIsLoading(false);
  };

  const handleClick = () => {
    fetchUsers(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <TextField
        id="standard-helperText"
        placeholder="Search"
        label="Enter Username"
        variant="standard"
        onChange={handleInputChange}
        sx={{ marginTop: "100px", width: "60%" }}
      />
      <Button
        type="button"
        onClick={handleClick}
        sx={{ marginTop: "120px", marginLeft: "10px", color: "#24292f" }}
      >
        Search
      </Button>
      <Grid>
        {isLoading ? (
          <Loading />
        ) : userData && userData.login ? (
          <Card
            login={userData.login}
            avatar_url={userData.avatar_url}
            repos_url={userData.repos_url}
          />
        ) : (
          <div>No user found</div>
        )}
      </Grid>
    </>
  );
};

export default Search;
