import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  roots: {
    minWidth: 275,
    color: 'var(--text_light)',
    margin: 'auto'
  },
  inputs: {
      border: 'none',
      background: 'none',
      outline: 'none',
      color: 'inherit',
      fontSize: '2rem',
      height: '40px',
      width: "400px",
      padding: '',
      borderBottom: '1px solid'
  },
  buttons: {
      border: 'none',
      outline: 'none',
      color: 'inherit',
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.1em',
      padding: '9px 90px',
      marginTop: '25px',
      borderRadius: '5px',
      backgroundColor: 'red',
      transition: 'background 0.1s ease-in-out',
      cursor:'pointer'
  },
  formStyling: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
  },
  headings: {
      fontWeight: 'bold',
      fontSize: '4rem',
      letterSpacing: '0.02em',
      padding: '0 0 30px 0',
  }
});


const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    const classes = useStyles();


    return (
      <div className={classes.roots}>
      <div className="container-fluid justify-content-center">

            <h1 className={classes.headings} id="heading" >Weather Forecast Application</h1>
            <div className="d-flex inputs justify-content-center">
            <FormControl
              className={classes.inputs}
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
            </div>
          
  
            <Button className={classes.buttons} onClick={() => onSearch(city)}>Check Weather</Button>
            </div>

         
      </div>
    );
  };

export default CitySelector;