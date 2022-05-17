import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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


export default function Detailspage() {
    const classes = useStyles();
    {/*Added very basic template here, u can add whatever other stuff for Detailspage here*/}
    return (
        <div className={classes.root} style={{ color: '#033F63' }}>
            <h1>Details Page</h1>
            <Grid xs={12} align="center">
                <h1>Super AMA Details Page</h1>
            </Grid>
        </div>
    );
}