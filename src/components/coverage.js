import react from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    covcont: {
      display: "flex",
      height: "500px",
      backgroundColor: "#d9eaf5",
      width: "100%",
    },
    gridmain: {
        display: "flex",
        width: "80%",
        margin: "auto",
    }
}));

function Coverage(){
    const classes = useStyles();

    return(
    <div className={classes.covcont}>
        <Grid className={classes.gridmain} container>
            <Grid item xs={7}>
                <Typography variant="h3">Auto insurance coverage options that fit your needs</Typography><br/>
                <Typography variant="body2">You can purchase car insurance for any vehicle you own, even if you didn’t buy it at Turners (subject to underwriting criteria). With three levels of car insurance cover — Comprehensive, Third party with fire & theft, and Third party — you can choose the VehiclePlan that’s right for you.
                    <br/><br/>
                    Got any questions? Help is always here. If you are looking for branch details and opening hours, please visit our Branch page. or contact us for personal assistant</Typography>
            </Grid>

            <Grid item xs={5}>
            <img src="building.png"/>
            </Grid>

        </Grid>
    </div>

    )
}

export default Coverage