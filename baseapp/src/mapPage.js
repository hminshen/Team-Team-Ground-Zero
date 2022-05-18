import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import footer from './imgs/footerG0.png';
import { InputBase } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';

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
    from:{
        top:"20px",
        color:"black",
        backgroundColor: "white",
        borderRadius: 10,
        marginLeft: '10px',
        height: '6vh',
        padding: theme.spacing(2)
    },
    to:{
      color:"black",
      backgroundColor: "white",
      borderRadius: 10,
      marginLeft: '5px',
      height: '6vh',
      padding: theme.spacing(2),
    },
    footer: {
        width: '100vw',
        bottom: '0%',
        position: 'absolute',
        zIndex: -1,
      },
    location:{
        color:"black",
        backgroundColor: "white",
        borderRadius: 10,
        marginLeft: '5px',
        height: '6vh',
        padding: theme.spacing(2),
      },
  }));

/*export default function Mappage() {
    const classes = useStyles();*/
    {/*Added very basic template here, u can add whatever other stuff for Mappage here*/}
    /*return (
        <div className={classes.root} style={{ color: '#033F63' }}>
            <h1>Map Page</h1>
            <Grid xs={12} align="center">
                <h1>Super AMA Map Page</h1>
            </Grid>
        </div>
    );
}*/
const containerStyle = {
  width: '700px',
  height: '650px',
  top:'20px',
  right:'20px'
};

const center = {
    lat: 1.28967, 
    lng: 103.85007
};

function Mappage() {
  const classes = useStyles();
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/details`; 
    navigate(path);
}
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCKcuTMH5JlYP6KAgAlP-znr3S6Y76JodA"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <div className={classes.root} style={{ color: '#033F63' }}>
        <Grid container spacing = {8} >
            <Grid container item spacing={2} direction="column" justifyContent="space-around" alignItems="center" xs={6}>
                <Grid container item spacing={2} direction="column" justifyContent="space-around" alignItems="center" xs={6}>
                    <Grid item xs={6}  >
                        <InputBase
                        className= {classes.from}
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        placeholder="From"
                        />
                    </Grid>
                    <Grid item xs={6}>
                    <InputBase
                        className= {classes.to}
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        placeholder="To"
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} direction="column" justifyContent="space-around" alignItems="center" xs={6}>
                    <Grid item xs={6}>
                        <Button 
                            style={{
                            borderRadius: 10,
                            backgroundColor: "#7C89FF",
                            color: "white",
                            fontSize: "18px",
                            font: "Roboto"
                            }}
                            variant="contained" 
                            fullWidth
                            onClick={routeChange} 
                            className ={classes.button}
                            ><Typography>Singapore Shipping Corporation Limited</Typography> </Button>
                        </Grid>
                    <Grid item xs={6}>
                    <Button 
                            style={{
                            borderRadius: 10,
                            backgroundColor: "#7C89FF",
                            color: "white",
                            fontSize: "18px",
                            font: "Roboto"
                            }}
                            variant="contained" 
                            fullWidth
                            onClick={routeChange} 
                            className ={classes.button}
                            ><Typography>Keppel Logistics Center</Typography> </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <item><GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    {/* Jurong Port and SSCL and keppel latitude/longitude */}
                    <Marker position={{ lat: 1.309824, lng: 103.717392}}/>
                    <Marker position={{ lat: 1.28967, lng: 103.85007}}/>
                    <Marker position={{ lat: 1.2713913, lng: 103.8284318}}/>
                </GoogleMap></item>
            </Grid>
        </Grid>
        <img src={footer} className={classes.footer} />
    </div>
  ) : <></>
}

export default Mappage