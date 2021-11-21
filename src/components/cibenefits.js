import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    height: "700px",
    marginTop: "90px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginRight: "100px",
    marginLeft: "100px",
  },
  quotebutton: {
    backgroundColor: "#b71234",
    color: "white",
    marginLeft: "120px",
    marginRight: "30px",
  },
  boxestb: {
      width: "70%",
  },
  boxesm: {
    width: "25%",
},
}));

function InsuranceBenefits() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid className={classes.boxestb} item xs={12}>
            <Paper elevation={0} className={classes.paper}>
                <Typography variant="h2">Car Insurance Benefits</Typography>
                <Typography variant="body1">Get car insurance from the car experts. It's quick, easy and affordable.
                We've got you covered from comprehensive, third party fire & theft, to third party property damage.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
            <Typography variant="h7">Nil excess for windscreen repairs</Typography>
                <Typography variant="body2">We will cover breakage of windscreen and window glass.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
            <Typography variant="h7">Replacement vehicle cover</Typography>
                <Typography variant="body2">If you replace a vehicle, or buy an additional vehicle for your sole use then we will ensure the replacement.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
            <Typography variant="h7">Trailer cover</Typography>
                <Typography variant="body2">We will cover any trailer owned, hired or leased by you.*</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
            <Typography variant="h7">Key & locks</Typography>
                <Typography variant="body2">We will cover the costs reasonably incurred in altering or replacing locks or replacing the keys.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
            <Typography variant="h7">Emergency travel, accommodation & repairs</Typography>
                <Typography variant="body2">HELP is a 24 hour, 7 days a week emergency assistance service.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={0} className={classes.paper}>
            <Typography variant="h7">AA Roadside Assistance cover</Typography>
                <Typography variant="body2">You may be eligible for 24/7 roadside assistance coverage.</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={0} className={classes.paper}>
            <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.quotebutton}
                >
                Get an instant online quote
                </Fab>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

export default InsuranceBenefits