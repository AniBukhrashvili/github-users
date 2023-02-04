import { Grid, Link, Typography } from "@mui/material";
import "./Card.css";

const Card = (props) => {
  const { login, avatar_url, repos_url } = props;

  return (
    <>
      <Grid className="card-div">
        <Grid>
          <img src={avatar_url} />
        </Grid>
        <Grid>
          <Typography>Name: {login}</Typography>
          <Link
            href={repos_url}
            sx={{ textDecoration: "none", color: "white", cursor: "pointer" }}
          >
            Repositories: {repos_url}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
