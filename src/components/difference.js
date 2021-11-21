import react from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    covcont: {
      display: "flex",
      height: "700px",
      backgroundColor: "white",
      width: "100%",
    },
    maingrid: {
        display: "flex",
        width: "100%%",
    }, 
    locationimg: {
        display: "flex",
        height: "650px",
        width: "650px",
        
    },
    winnerimg: {
        display: "flex",
        height: "180px",
        width: "180px",
        position: "relative",
        margin: "auto",
        marginLeft: "-220px",
        marginTop: "390px",
    },
    diffgrid: {
        display: "flex",
        margin: "auto",
        flexDirection: "column",
    },
    btext: {
        padding: "20px",
        marginRight: "20px",
    },
    diffimg: {
        marginRight: "10px",
        objectFit: "contain",
    },
    boxes: {
        display: "flex",
        flexDirection: "row",
    }
}));

function Difference(){
    const classes = useStyles();

    return(
    <div className={classes.covcont}>
        <Grid className={classes.maingrid} container>
        <Grid className={classes.locationimg} item={true} xs={6}>
            <img className={classes.locationimg} src="location.png"/>
            <img className={classes.winnerimg} src="winner.png"/>
            </Grid>

            <Grid className={classes.diffgrid} item={true} xs={6}>
                <Typography className={classes.btext} variant="h3">What sets Turners Cars apart</Typography><br/>
                
                <div className={classes.boxes}>
                <img className={classes.diffimg} src="branches.png"/>
                <Typography className={classes.btext} variant="body1">We operate nationally, with 18 branches conveniently located throughout New Zealand.</Typography>
                </div>

                <div className={classes.boxes}>
                <img className={classes.diffimg} src="reputation.png"/>
                <Typography className={classes.btext} variant="body1">We are proud of our hard-won reputation as the country's most trusted vehicle dealership.</Typography>
                </div>

                <div className={classes.boxes}>
                <img className={classes.diffimg} src="selling.png"/>
                <Typography className={classes.btext} variant="body1">We've been helping Kiwis buy and sell used cars for over 50 years.</Typography>
                </div>
            </Grid>

        </Grid>
    </div>

    )
}

export default Difference