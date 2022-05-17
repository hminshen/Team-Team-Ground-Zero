import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Map, GoogleApiWrapper } from 'google-maps-react';
const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      position: 'relative',
      align: 'center',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      maxWidth: '100%',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
  }));


export default function Mappage() {
    const classes = useStyles();
    {/*Added very basic template here, u can add whatever other stuff for Mappage here*/}
    return (
        <div className={classes.root} style={{ color: '#033F63' }}>
            <h1>Map Page</h1>
            <Grid xs={12} align="center">
                <h1>Super AMA Map Page</h1>
            </Grid>
        </div>
    );
}