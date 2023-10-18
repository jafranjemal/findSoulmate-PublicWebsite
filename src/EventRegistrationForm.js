import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
      marginTop: theme.spacing(2),
    },
  }));

const EventRegistrationForm = () => {


const classes = useStyles();

      

  return (
 <form action="https://formspree.io/f/mnqkawjr" method="POST">
    <h5 style={{
        textAlign:'center'
    }} >Pre Marital 1 Day Workshop Registration Form </h5>
    
      <TextField
        label="Your email"
        type="email"
        name="email"
        required
        fullWidth
        margin="normal"
      />
      <FormControl className={classes.formControl}>
        <InputLabel>Your gender</InputLabel>
        <Select name="gender" required>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Whatsapp No"
        type="number"
        name="whatsapp"
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Your message"
        name="message"
        multiline
        rows={4}
        fullWidth
        margin="normal"
      />
   <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Register Now
      </Button>
</form>

  )
}

export default EventRegistrationForm