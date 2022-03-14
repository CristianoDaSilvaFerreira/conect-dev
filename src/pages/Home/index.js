import React from 'react';

// import "./style.css";
import { makeStyles } from '@material-ui/styles';

import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Feed from './components/Feed/Feed';

const useSyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    height: '100vh',
    display: 'flex',
    width: '1200px',
    margin: '0 auto',
  }
});

function Home() {
  const classes = useSyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>
        <NavBar />
        <Feed />
        </main>
    </div>
  );
}

export default Home;
