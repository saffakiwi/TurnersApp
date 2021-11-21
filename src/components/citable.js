import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   
  header: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "100px",
  },
  texts: {
    margin: "auto",
    marginBottom: "30px",
  }
}));

function InsuranceTable() {
  const classes = useStyles();

  return (
    <Container className={classes.header}>
      <Typography className={classes.texts} variant="h2">Three ways to cover your car</Typography>
      <Typography className={classes.texts} variant="body1">We've got several different insurance products available, and will offer you the best product for your needs.</Typography>
      <img src="table.png"/>
    </Container>
  );
}

export default InsuranceTable