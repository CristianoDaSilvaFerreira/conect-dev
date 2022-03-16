import React from "react";

// import "./style.css";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Feed from "./components/Feed/Feed";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useSyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    height: "100vh",
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
});

function Home() {
  const classes = useSyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <Container maxWidth="lg">
        <Box display="flex">
          <NavBar />
          <Feed />
        </Box>
      </Container>
      <main className={classes.main}></main>
    </div>
  );
}

export default Home;
