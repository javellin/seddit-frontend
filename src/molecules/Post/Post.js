import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";

import { localStorageService } from "services";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginTop: "15px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  span: {
    marginLeft: "15px"
  }
}));

export default function Post({ post, handleVote }) {
  const classes = useStyles();

  const isUpvoted = () => {
    return localStorageService.upvotedPostsIncludesPostId(post.id);
  };

  const [upvoted, setUpvoted] = React.useState(isUpvoted(post.id));
  const [upvotes, setUpvotes] = React.useState(post.upvotes);
  const [loading, setLoading] = React.useState(false);

  const vote = async () => {
    setLoading(true);
    setUpvoted(!upvoted);
    const savedPostsResponse = await handleVote(post.id, upvoted ? -1 : 1);
    upvoted
      ? localStorageService.removeFromUpvotedPosts(post.id)
      : localStorageService.addToUpvotedPosts(post.id);
    setUpvotes(savedPostsResponse.data);
    setLoading(false);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {post.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={vote} size="small" disabled={loading}>
          {upvoted ? <ThumbDown /> : <ThumbUp />}
          <span className={classes.span}>{upvotes}</span>
        </Button>
      </CardActions>
    </Card>
  );
}
