import { AppBar, Toolbar, Typography, Grid, Link } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: "#24292f" }}>
        <Toolbar>
          <GitHubIcon />

          <Grid container justifyContent="center">
            <Typography variant="h6" textAlign="center">
              GitHub Users Search
            </Typography>
          </Grid>

          <Link
            width="7%"
            href="https://github.com/about"
            textAlign="right"
            sx={{ textDecoration: "none", color: "white", fontSize: "14px" }}
          >
            About GitHub
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
