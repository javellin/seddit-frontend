import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { default as Search } from "@material-ui/icons/Search";

const useStyles = makeStyles(theme => ({  
  searchIcon: {
    width: theme.spacing(7),    
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function SearchIcon() {
  const classes = useStyles();
  return (
    <div className={classes.searchIcon}>
      <Search />
    </div>
  );
}
