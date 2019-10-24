import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import KebabMenu from "atoms/KebabMenu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <KebabMenu />
        <Typography className={classes.title} variant="h6" noWrap>
          Seddit
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
