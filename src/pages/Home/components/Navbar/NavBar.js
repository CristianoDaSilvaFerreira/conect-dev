import React from "react";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useSyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width: 275,
    marginRight: theme.spacing(2)
  },
  button: {
    width: "100%",
  },
}));

const tags = [
  { id: 1, name: 'reactjsjs'},
  { id: 2, name: 'javascript'},
  { id: 3, name: 'dotnet'},
  { id: 4, name: 'php'},
  { id: 5, name: 'materialdesign'},
  { id: 6, name: 'webdev'},
]

function NavBar() {
  const classes = useSyles();

  return (
    <Paper className={classes.root}>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Registrar Grátis
      </Button>
      <ListSubheader>{"Tags em alta"}</ListSubheader>
      {
        tags.map((item) => (
          <ListItem dense button key={`item-${item.name}`}>
            <ListItemText primary={`#${item.name}`}></ListItemText>
          </ListItem>
        ))
      }
      <ListItem button>
        Exibir mais Tags
      </ListItem>
    </Paper>
  );
}

export default NavBar;
