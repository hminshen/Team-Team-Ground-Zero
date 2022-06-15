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
    firsthalf: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: "auto",
        marginTop: "30px",

        width: '40vw',
  height: '650px',


    },
    button:{
        borderRadius: 10,
        margin: "auto",
        height:"12vh",
        width:"35vw",
        marginTop: "50px",
    },
    button2: {
        borderRadius: 10,
        margin: "auto",
        height:"12vh",
        width:"35vw",
        marginTop: "30px",
    },
    from:{
        top:"20px",
        color:"white",
        backgroundColor: "#001A78",
        borderRadius: 10,
        marginTop: '20px',
        height: '6vh',
        padding: theme.spacing(2),
        width: "35vw"
    },
    to:{
      color:"white",
      backgroundColor: "#001A78",
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
  width: '40vw',
  height: '650px',
  top: "30px",
  margin:"auto",
};

const center = {lat: 1.28967, lng: 103.85007
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
    googleMapsApiKey: "Fill in API Key here"
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
        <Grid container spacing = {2} >
            {/* Side bar */}
            <Grid item xs = {5} className = {classes.firsthalf} align = 'center'>
            {/* to and fro */}
            <InputBase
                        className= {classes.from}
                        id="outlined-basic"
                        placeholder="Singapore"
                        
                        
                        color="primary"
                        
                        
                        />
            <InputBase
                        className= {classes.from}
                        id="outlined-basic"
                        placeholder="Malaysia"
                        
                        
                        color="primary"
                        
                        />
            
            {/* Buttons */}
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
                                className ={classes.button2}
                                ><Typography>Keppel Logistics Center</Typography> </Button>
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
                                className ={classes.button2}
                                ><Typography>Jurong Port</Typography> </Button>
            </Grid>
            {/* Map */}
            <Grid item xs = {5}>
                <item><GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
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
