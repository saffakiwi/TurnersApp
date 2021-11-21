import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import '../styles/styles.css';

const useStyles = makeStyles((theme) => ({
    footer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#c4c4c4",
    },
    footergrid: {
        display: "flex",
        flexDirection: "column",
        
    },
    containerfooter: {
        display: "flex",
        width: "100%",
        backgroundColor: "#898989",
    },
    socialfooter: {
        marginTop: "12px",
        display: "flex",
        width: "100%",
        backgroundColor: "#898989",
    },
    social: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    }
}));

function Footer() {
    const classes = useStyles();
return (

    <div class="footer">
        <Container className={classes.containerfooter} maxWidth="lg">
        <Grid className={classes.footer} container spacing={3}>

        <Grid className={classes.footergrid} item xs={2}>
          <h3>CARS</h3>  
          <Link>How to Buy</Link>
          <Link>Sell Your Car</Link>
          <Link>Finance & Insurance</Link>
          <Link>Auctions & Events</Link>
          <Link>Buyer & Seller Fees</Link>
          <Link>Vehicle Sale Price History Tool</Link>
          <Link>Shipping Costs</Link>
        </Grid>

        <Grid className={classes.footergrid} item xs={3}>
        <h3>FINANCE & INSURANCE</h3>  
          <Link>Finance Homepage</Link>
          <Link>Car & Personal Finance</Link>
          <Link>Loan Calculator</Link>
          <Link>Car Insurance</Link>
          <Link>Mechanical Breakdown Insurance</Link>
          <Link>General Insurances</Link>
          <Link>Trucks Finance</Link>
          <Link>Financial Information</Link>
        </Grid>

        <Grid className={classes.footergrid} item xs={3}>
        <h3>SEARCH FOR</h3>  
          <Link>Cars</Link>
          <Link>Trucks & Machinery</Link>
          <Link>Damaged & End of Life Cars</Link>
          <Link>Boats & Marine</Link>
          <Link>Motorcycles & Scooters</Link>
          <Link>General Goods</Link>
          <Link>Buses, Caravans & Motorhomes</Link>
          <Link>Turners Auction Schedule</Link>
        </Grid>

        <Grid className={classes.footergrid} item xs={2}>
        <h3>ABOUT US</h3>  
          <Link>Overview</Link>
          <Link>Turners Careers</Link>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Turners Live</Link>
          <Link>The Good Oil Blog</Link>
          <Link>Email Alerts</Link>
          <Link>Contact Us</Link>
        </Grid>

        <Grid className={classes.footergrid} item xs={2}>
          <img src="winner.png"/>
        </Grid>
        </Grid>
        </Container>

        <Container className={classes.containerfooter}>
        <Grid className={classes.socialfooter} container spacing={2}>
        <Grid className={classes.footergrid} item lg={2}>
            <p>@2021 Turners</p>
        </Grid> 

         <Grid className={classes.social} item lg={9}>
            <button>Branch Details</button>
            <button>Facebook</button>
            <button>Newsletter</button>
            <button>Email Alerts</button>
            <button>Instagram</button>
        </Grid> 
        </Grid>
        </Container>
    </div>
);
}

export default Footer