import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));

export default function KebabMenu() {
  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
    >
      <MenuIcon />
    </IconButton>
  );
}
