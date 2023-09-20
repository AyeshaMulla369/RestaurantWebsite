import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Reserve.css';

function Reserve() {

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      date: '',
      time: '',
      guests: 1,
    });
    alert('Thank you for your reservation!');
  };


  return (
    <div className='reserveForm'>
      <h1>Reservation Booking</h1><br/>
      <p>Book a seat in the resturant nearby and have fun</p><br/>
      <form onSubmit = {handleSubmit}>
        <TextField 
          color='primary' 
          type='text'
          name='name'
          value={formData.name}
          placeholder='No. of customers' 
          onChange={handleChange}   
          required>
        </TextField><br/><br/>


        <TextField
          placeholder='time'
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        /><br/><br/>


        <TextField
          placeholder="Number of Guests"
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          inputProps={{ min: 1 }}
          required
        /><br/><br/>


        <TextField 
          type="date" 
          name='date'
          value={formData.date}
          onChange={handleChange}
          InputProps={{inputProps: { min : new Date().toISOString().split('T')[0], }}}
          required>
        </TextField><br/><br/>

        <Button variant='contained' type='submit' color='primary'>
          Submit
        </Button>
      </form>
    </div>
  )
}

export default Reserve