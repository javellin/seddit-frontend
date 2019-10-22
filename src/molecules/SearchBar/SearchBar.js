import React from "react";

import { fade, makeStyles } from "@material-ui/core/styles";

import ExpandableInput from "atoms/ExpandableInput";
import SearchIcon from "atoms/SearchIcon";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <SearchIcon />
      <ExpandableInput />
    </div>
  );
}
