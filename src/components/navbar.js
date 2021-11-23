import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "flex",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  imgbox: {
      display: "flex",
      height: "90px",
      alignItems: "center",
  },
  buttons: {
      marginTop: "10px",
  },
  login: {
      borderRadius: "30px",
      backgroundColor: "#66add8",
      color: "white",
      marginLeft: "30px",
  }
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <div className="toplinks">
        <div>
          <a className="toplinks a">0800 887 637</a>
        </div>
        <div>
          <a className="toplinks a">FIND US</a>
        </div>
        <div>
          <a className="toplinks a">Support</a>
        </div>
      </div>

      <div className="navbar">
        <div>
          <img className="logo" src="turners_logo.png" />
        </div>

        <div className="subnav">
          <a className="navbar a" href="#home">
            Buy
          </a>
        </div>

        <div className="subnav">
          <a className="navbar a" href="#home">
            Sell
          </a>
        </div>

        <div className="subnav">
          <a className="navbar a" href="#home">
            Finance
          </a>
        </div>

        <div className="subnav">
          <button className="subnavbtn">
            Insurance
          </button>
          <div className="subnav-content">
            <Grid container={true}>
              <Grid className={classes.imgbox} item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="car1.png" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                
                <Grid className={classes.buttons} item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Car Insurance
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Cover for accident, fire, theft and 3rd party damage
                    </Typography>
                  </Grid>
                </Grid>
                
              </Grid>

            <img className="line" src="line.png"/>

              <Grid className={classes.imgbox} item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="car2.jpeg" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item className={classes.buttons} xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Mechanical Breakdown Insurance
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Cover for unforseen and sudden mechanical and electrical breakdowns
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <img className="line" src="line.png"/>

              <Grid className={classes.imgbox} item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="dollar.png" />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item className={classes.buttons} xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      Claim
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Cover for unforseen and sudden mechanical breakdowns
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              
            </Grid>
          </div>
        </div>

        <div className="subnav">
          <a className="navbar a" href="#home">
            Auctions
          </a>
        </div>

        <div className="subnav">
          <a className="navbar a" href="#home">
            Services
          </a>
        </div>

        <SearchIcon className="searchIcon" size="medium" />
        <Button className={classes.login} variant="contained" color="primary">
        Log in
      </Button>
      </div>
    </div>
  );
}

export default Navbar;
