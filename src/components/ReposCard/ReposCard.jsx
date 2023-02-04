import { Grid, Link, Typography } from "@mui/material";
import "./ReposCard.css";

const ReposCard = (props) => {
  const { name, html_url } = props;

  return (
    <>
      <Grid className="repos-div">
        <Grid container justifyContent="center">
          <Typography sx={{ color: "#24292f" }}>
            Repository Name: {name}
          </Typography>
          <hr />
          <Link
            href={html_url}
            sx={{ textDecoration: "none", color: "black", cursor: "pointer" }}
          >
            Link: {html_url}
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default ReposCard;
