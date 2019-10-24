import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginTop: "15px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function({ handleCreatePost }) {
  const classes = useStyles();

  const [title, setTitle] = React.useState();
  const [body, setBody] = React.useState();

  const createPost = React.useCallback(() => {
    handleCreatePost({
      title,
      body
    });

    setTitle('');
    setBody('');
  }, [body, handleCreatePost, title]);

  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField
          id="standard-name"
          label="Title"
          className={classes.textField}
          value={title}
          variant="outlined"
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Text"
          variant="outlined"
          multiline
          rowsMax="4"
          fullwidth
          value={body}
          onChange={e => setBody(e.target.value)}
          className={classes.textField}
          margin="normal"
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={createPost}>
          Create
        </Button>
      </CardActions>
    </Card>
  );
}
