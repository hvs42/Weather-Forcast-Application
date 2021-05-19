import React from 'react';
import {Card} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';


const UseStyles = makeStyles({
  city: {
    width:'12rem',
    padding: '2px',
    margin: 'auto',
    marginTop: '5rem',
    borderRadius: '40px',
    boxShadow: '8px 6px grey',
    color: 'black',
    opacity: '0.9'    
  },
  weekName: {
    fontFamily: [
      'BioRhyme',
      'serif',
    ].join(',')
  },
  elements: {
    fontWeight: 'bold',
    color: '#000000'
  }
});

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
  // create a date object with Date class constructor
  const classes = UseStyles();
  const date = new Date(dt);
  return (
    <Card className={classes.city} bg-transparent >
      <Card.Img
        variant="top"
        className={classes.elements}
        // get the src from example url and pass the icon prop for icon code
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <Card.Body className={classes.elements}>
        <Card.Title>{main}</Card.Title>
        {/*  datetime is received in milliseconds, let's turn into local date time */}
        <p>
          {date.toLocaleDateString()} - {date.toLocaleTimeString()}
        </p>
        {/* minimum temperature */}
        <p>Min: {temp_min}</p>
        {/* maximum temperature */}
        <p>Max: {temp_max}</p>
      </Card.Body>
    </Card>
  );
};
export default WeatherCard;
