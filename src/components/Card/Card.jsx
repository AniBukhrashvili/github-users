import { Grid, Link, Typography } from "@mui/material";
import "./Card.css";

const Card = (props) => {
  const { login, avatar_url, html_url } = props;

  return (
    <>
      <Grid className="card-div">
        <Grid>
          <img src={avatar_url} />
        </Grid>
        <Grid container justifyContent="center">
          <Typography sx={{ marginRight: "50px" }}>
            UserName: {login}
          </Typography>
          <Link
            href={html_url}
            sx={{
              textDecoration: "none",
              cursor: "pointer",
              color: "#848094",
            }}
          >
            Visit GitHub
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
