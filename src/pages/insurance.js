import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import Footer from '../components/mainfooter';
import '../styles/styles.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import InsuranceBenefits from '../components/cibenefits';
import InsuranceTable from '../components/citable';
import Coverage from '../components/coverage';
import Difference from '../components/difference';

const useStyles = makeStyles((theme) => ({
   
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    insurecontainer: {
        height: "600px",
        backgroundColor: "#3391cb",
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
    },
    herotext: {
        color: "white",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    heroheader: {
      margin: "auto",
    },
    heroheader1: {
      margin: "auto",
      marginLeft: "120px",
    },
    heroheader2: {
      margin: "auto",
      marginLeft: "130px",
    },
    bgimage: {
      display: "flex",
      justifyContent: "flex-end"
    },
    quotebutton: {
      backgroundColor: "#b71234",
      color: "white",
      marginLeft: "120px",
      marginRight: "30px",
    },
    claimbutton: {
      backgroundColor: "white",
      color: "#b71234",
      border: "1px #b71234",
    },
    insurecontent: {
      height: "70px",
      backgroundColor: "#3391cb",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
  },
    buttoni: {
      width: "350px",
      backgroundColor: "white",
      color: "#3391cb",
    },
    buttonm: {
      width: "350px",
      backgroundColor: "#c4c4c4",
      color: "#3a3a3a",
    },
    buttonc: {
      width: "350px",
      backgroundColor: "#c4c4c4",
      color: "#3a3a3a",
    },
    buttonimg: {
      marginRight: "25px",
    }
  }));

function Insurance() {
const classes = useStyles();

return (
<div>
<Navbar/>
<Container className={classes.insurecontainer} maxWidth={false}>
    <Grid container={true} direction="row" >
        <Grid item={true} lg={6} className={classes.herotext}>
            <Typography className={classes.heroheader} variant='h3'>Buy car insurance on <br/>Turners online today</Typography><br/>
            <Typography className={classes.heroheader1} variant="body1">Start today with Turners all-online policies,
                caring 24/7 claims service, and premium coverages at
                affordable prices.</Typography><br/>
                <div><Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.quotebutton}
                >
                Get an instant online quote
                </Fab>

                <Fab
                variant="extended"
                size="medium"
                aria-label="add"
                className={classes.claimbutton}
                >
                Make a claim
                </Fab></div><br/>
                <Typography className={classes.heroheader2}>Continue with saved quote</Typography>
       </Grid>
    

    <Grid className={classes.bgimage} item lg={6}>
          <img id="bgimage" src="Ellipse2bg.png"/>
          <img id="bgimagetop" src="heroinsurance.png"/>
        </Grid>
        </Grid>
</Container>
<Container className={classes.insurecontent} maxWidth={false}>
<ButtonGroup variant="outlined" aria-label="contained primary button group">
  <Button className={classes.buttoni}><img className={classes.buttonimg} alt="complex" src="car1.png"/>Car Insurance</Button>
  <Button className={classes.buttonm}><img className={classes.img} alt="complex" src="car2grey.png"/>Mechanical Breakdown Insurance</Button>
  <Button className={classes.buttonc}><img className={classes.buttonimg} alt="complex" src="dollargrey.png"/>Claims</Button>
</ButtonGroup>
</Container>
<div>
<InsuranceBenefits/>
</div>

<div>
  <InsuranceTable/>
</div>

<div>
  <Coverage/>
</div>

<div className="divcontainer"> 
  <Difference/>
</div>

<div>
<Footer/>
</div>
</div>
);
}

export default Insurance