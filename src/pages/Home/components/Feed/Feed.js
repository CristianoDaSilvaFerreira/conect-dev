import React from "react";
import PostCard from "../../../../components/PostCard";

import { makeStyles } from "@material-ui/core/styles";

const useSyles = makeStyles((theme) => ({
  root: {},
}));

const posts = [
  { id: 1, description: "Teste 1" },
  { id: 2, description: "Teste 2" },
  { id: 3, description: "Teste 3" },
];

function Feed() {
  const classes = useSyles();
  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
