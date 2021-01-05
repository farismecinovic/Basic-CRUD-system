import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textTransform: "uppercase",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            App name
          </Typography>
          <NavLink
            to="/"
            activeStyle={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          >
            <Button color="inherit">Home</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
