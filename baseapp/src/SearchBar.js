import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from "react-router-dom";
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import { InputBase } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    marginLeft: '50px',
    marginRight: '50px',
    backgroundColor: '#001A78',
    borderRadius: 10,
  },
  from:{
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
  filter:{
    color:"black",
    backgroundColor: "white",
    padding: theme.spacing(1),
    borderRadius: 10,
    marginRight:theme.spacing(1)

  },
  Button:{
    padding: theme.spacing(1),
    borderRadius: 10,
    marginRight: '10px',
  },
  
  
}));

const filters = [
  { label: 'Class 1: Explosive'},
  { label: 'Class 2: Gases'},
  { label: 'Class 3: Flammable Liquids'},
  { label: 'Class 4: Flammable Solids'},
  { label: 'Class 5: Oxidising Substances, Organic Peroxides'},
  { label: 'Class 6: Toxic and Infectious Substances '},
  { label: 'Class 7: Radioactive Materials'},
  { label: 'Class 8: Corrosives'},
  { label: 'Class 9: Misc Hazardous Materials' },
  
];

function SearchBar(props) {
    const classes = useStyles(); 
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/locations`; 
    navigate(path);
  } 
    return (
    <div className={classes.root} align = 'center' >
        <Grid container spacing = {3}>
            <Grid item xs={4}  >
                <InputBase
                className= {classes.from}
                
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="From"
                />
            </Grid>
            <Grid item xs={4}>
            <InputBase
                className= {classes.to}
                id="outlined-basic"
                variant="outlined"
                fullWidth
                placeholder="To"
                />
            </Grid>
            <Grid item xs={4} >
                <Autocomplete
                className = {classes.filter}
                disablePortal
                id="combo-box-demo"
                options={filters}
                renderInput={(params) => <TextField {...params} label="Container Type" />}
                />
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4}/>
            <Grid item xs={4}  align ="left">
                <Button 
                variant="contained" 
                fullWidth 
                onClick={routeChange} 
                className ={classes.button}
                >Button </Button>
            </Grid>
        </Grid>
        
    </div>
  );
}

export default SearchBar;