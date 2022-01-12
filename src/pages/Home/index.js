import React from 'react';

// Material UI Styles - MakeStyles
// import './style.css';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Header from './components/Header';
import NavBar from './components/NavBar';
import Feed from './components/Feed';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

// MakeStyles
const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },

    main: {
        height: '100vh',
        padding: 24,
    },

    toolbar: {
        minHeight: 64,
    }
});

function Home() {

    // Usando o MakeStyles
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <Header />
           <div className={classes.toolbar} />
            <main className={classes.main}>
                <Container maxWidth="lg">
                    <Box display="flex">
                        <NavBar />
                        <Feed />
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Home;