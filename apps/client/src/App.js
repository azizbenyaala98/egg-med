import * as React from 'react';
import './App.css';
import {Typography,Card,CardContent,Grid,TextField,Button,IconButton,FormControl,InputLabel,InputAdornment,OutlinedInput} from '@mui/material'
function App() {
  return (
    <div className='App' >
      <Typography gutterBottom variant="h3" align="center">
        React-app
      </Typography>
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField label="title" placeholder='enter product tiltle' variant="filled" fullWidth required/>
            </Grid>
            <Grid xs={12} sm={6} item>
            <TextField label="id" placeholder='enter product id' variant="filled" fullWidth required/>
           
            </Grid>
            <Grid xs={12} sm={6} item>
            <TextField label="description" multiline rows={4} placeholder='enter product description' variant="filled" fullWidth required/>
           
            </Grid>
            <Grid xs={12} sm={6}>
            <Button variant="contained" component="label"> Upload product picture  <input hidden accept="image/*" multiple type="file" /></Button>
            <IconButton color="primary" aria-label="upload picture" component="label">
            </IconButton>
            </Grid>

            
            <Grid xs={12} sm={6}>
            <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
           
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        </Grid>
            
            </Grid>
      </CardContent>
    </Card>
      
        
    </div>
  );
}

export default App;
