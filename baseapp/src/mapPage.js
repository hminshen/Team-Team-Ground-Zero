import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import footer from './imgs/footerG0.png';
import { InputBase } from '@material-ui/core';
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button';
import rectBox from './imgs/rectbox.png';

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
    button: {
        backgroundColor: 'white',

    },
    button2: {
        backgroundColor: '#334893',

    },
    from:{
        top:"20px",
        color:"black",
        backgroundColor: "white",
        borderRadius: 10,
        marginLeft: '0px',
        height: '6vh',
        padding: theme.spacing(2)
    },
    to:{
      color:"black",
      backgroundColor: "white",
      borderRadius: 10,
      marginLeft: '0px',
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

const containerStyle = {
  width: '700px',
  height: '650px',
  top:'20px',
  right:'20px'
};

const center = {
    lat: 1.309824, 
    lng: 103.717392
};

function Mappage() {
  const classes = useStyles();
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/details`; 
    navigate(path);
}
const routeChange2 = () =>{ 
    let path = `/details2`; 
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
  const [isSearch,setSearch] = React.useState(null)
  return isLoaded ? (
    <div className={classes.root} style={{ color: '#033F63' }}>
        <Grid container spacing = {6} >
            <Grid container item spacing={2} direction="column" justifyContent="space-around" alignItems="center" xs={6}>
                <Grid container item spacing={2} direction="column" justifyContent="space-around" alignItems="center" xs={6}>
                    <Grid item xs={6}  >
                        <TextField
                        className= {classes.from}
                        id="outlined-basic"
                        placeholder="My Location"
                        fullWidth
                        
                        color="primary"
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                center.lat = 1.309824;
                                center.lng = 103.717392;
                            }
                        }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                        className= {classes.to}
                        id="outlined-basic"
                        placeholder="To"
                        fullWidth
                        
                        color="primary"
                        onKeyPress={(event) => {
                            if (event.key === 'Enter') {
                                center.lat = 1.28967;
                                center.lng = 103.85007;
                            }
                        }}
                        />
                    </Grid>
                </Grid>
                <Grid container item spacing={4} className={classes.button} direction="row" justifyContent="space-around" alignItems="center" xs={6}>
                    <Grid container item spacing={1} className={classes.button2} direction="row" justifyContent="space-around" alignItems="center" xs={12}>
                        <Grid item xs={10}>
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
                            <Grid item xs={2} alignItems="stretch" style={{color:"white"}}>
                            <Typography>~5km</Typography>
                                </Grid>
                        </Grid>
                    <Grid container item spacing={1} className={classes.button2} direction="row" justifyContent="space-around" alignItems="center" xs={12}>
                        <Grid item xs={10}>
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
                                onClick={routeChange2} 
                                className ={classes.button}
                                ><Typography>Keppel Logistics Center</Typography> </Button>
                        </Grid>
                        <Grid item xs={2} alignItems="stretch" style={{color:"white"}}>
                            <Typography>~8km</Typography>
                         </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <item><GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={8}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    { /* Child components, such as markers, info windows, etc. */ }
                    {/* Jurong Port and SSCL and keppel latitude/longitude */}
                    <Marker position={{ lat: 1.309824, lng: 103.717392}} label= "Jurong Port Center"/>
                    <Marker position={{ lat: 1.28967, lng: 103.85007}} label= "Singapore Shipping Corporation Limited"/>
                    <Marker position={{ lat: 1.2713913, lng: 103.8284318}} label= "Keppel Logistics Center"/>
                </GoogleMap></item>
            </Grid>
        </Grid>
        <img src={footer} className={classes.footer} />
    </div>
  ) : <></>
}

export default Mappage