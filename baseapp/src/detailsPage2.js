import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import footer from './imgs/footerG0.png';
import logo from './imgs/keppelLogo.png';
import container from './imgs/keppelContainer.png';
import details from "./imgs/shippingdetails.png"

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      left: '0',
      right: '0',
      overflow: 'hidden',
      backgroundColor: '#334893',
      height: '100vh',
      width: '100vw',
      zIndex: -999,
      
    },
    footer: {
      width: '100vw',
      bottom: '0%',
      position: 'absolute',
      zIndex: -1,
    },
    subdiv: {
      height: '40vh',
      backgroundColor: "#001A78",
      borderRadius: 10,
      margin: "auto",
      marginTop: "30px",
      
    },
    logodiv:{
      height: '40vh',
      margin: "auto",
      marginTop: "30px",
    },
    logo: {
      height: "30vh",
    },
    cargo: {
      width: "25vw"
    },
    details:{
      marginTop:"20px",
      height: "30vh"
    },
    
  }));


export default function Detailspage() {
    const classes = useStyles();
    {/*Added very basic template here, u can add whatever other stuff for Detailspage here*/}
    return (
        <div className={classes.root} >
            <Grid container spacing = {2}>
              <Grid item xs = {5} className= {classes.logodiv} align = 'center'>
                <img src = {logo} className = {classes.logo}></img>
                <Typography style ={{color:"#FFFFFF", fontSize: 24}}>Keppel Logistics</Typography> 
              </Grid>

              <Grid item xs = {5} className = {classes.subdiv} align = "center">
                <img src = {container} className = {classes.cargo}></img>
                
                <Typography style ={{color:"#FFFFFF", fontSize: 20, }}>Container #ACBI1234567</Typography>
                <Typography style ={{color:"#FFFFFF", fontSize: 18,}}>Volume Available: 70 cubic metres</Typography>
                <Typography style ={{color:"#FFFFFF", fontSize: 18,}}>Weightage Available: 6,000 kilogrammes</Typography>
                <Typography style ={{color:"#FFFFFF", fontSize: 18,}}>Price: $2.50 per kilogrammes</Typography>
              </Grid>

              <Grid item xs = {5} className = {classes.subdiv}>
                <Typography style ={{color:"#FFFFFF", fontSize: 20, marginTop: "10px"}}>
                Keppel Logistics operates world-class logistics facilities with state-of-the-art IT infrastructure in China, Hong Kong, Malaysia, Indonesia, Vietnam, and Australia                </Typography>
                <h3></h3>
                <Typography style ={{color:"#FFFFFF", fontSize: 20}}>
                We have more than three million square feet of warehousing facilities to support comprehensive and integrated end-to-end logistical services in warehousing, transportation, distribution, value-add projects, freight management and consolidation services.                </Typography>
              </Grid>

              <Grid item xs = {5} className = {classes.subdiv} align= "center">
                <img src ={details} className = {classes.details}></img>
              </Grid>
            </Grid>
            {/*bottom vector image */}
            <img src={footer} className={classes.footer} />
        </div>
    );
}