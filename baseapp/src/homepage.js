import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import logo from './imgs/logoG0.png';
import footer from './imgs/footerG0.png';
import SearchBar from './SearchBar';

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
    logo: {
      height: "30vh",
      paddingTop: "100px"
    }
  }));


export default function Homepage() {
    const classes = useStyles();
    return (
        <div className={classes.root} /*background div*/> 
            
            {/*Grid for logo and title */}
            <Grid align="center">
              <img src = {logo} className={classes.logo}></img>
                <Typography style ={{color:"#FFFFFF", fontSize: 40}}>EfficienSEA Map</Typography>
            </Grid>

            {/*Search bar */}
            <SearchBar></SearchBar>
            {/*bottom vector image */}
            <img src={footer} className={classes.footer} />
        </div>
    );
}