import React from 'react';

// Material UI Styles - MakeStyles
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Header from './components/Header';
import NavBar from './components/NavBar';
import Feed from './components/Feed';

// MakeStyles
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    }
});

function Home() {

    // Usando o MakeStyles
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <Header />
            <main className='main'>
                <NavBar />
                <Feed />
            </main>
        </div>
    );
}

export default Home;