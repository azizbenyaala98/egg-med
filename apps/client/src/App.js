import {Card,CardContent,Grid,TextField,Button,IconButton,FormControl,InputLabel,InputAdornment,OutlinedInput} from '@mui/material'
import * as React from 'react';
import {useQuery} from '@apollo/client'
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';
import {GET_PRODUCTS} from './graphql/Query.js'
import './App.css';
import {Typography} from '@mui/material'
function App() {
  const {loading ,error,data}=useQuery(GET_PRODUCTS);
  if (loading) return <p>loading ...</p>
  if (loading) return <p>{error.message}</p>
  console.log(data);
  return (
    <div className='App' >
     <Card>
 <CardContent>
 <Grid container spacing={1}>
    <Grid xs={12} sm={6} item>
         <TextField label="title" placeholder='enter product tiltle' variant="filled" fullWidth required/>
         </Grid>
         
         <Grid xs={12} sm={6} item>
         <TextField label="description" multiline rows={4} placeholder='enter product description' variant="filled" fullWidth required/>
       
         </Grid>
         <Grid xs={12} sm={6}>
         <Button variant="contained" component="label"> Upload product picture  <input hidden accept="image/*" multiple type="file" required /></Button>
         <IconButton color="primary" aria-label="upload picture" component="label">
         </IconButton>
         </Grid>

          
         <Grid xs={12} sm={6}>
         <FormControl fullWidth variant="filled" required>
       <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
       
         startAdornment={<InputAdornment position="start">$</InputAdornment>}
         label="Amount"
       />
     </FormControl>
     <Grid xs={12} sm={6}></Grid>
     <Button variant="contained">submit</Button>
     </Grid>
          
         </Grid>
   </CardContent>
 </Card>
  
 <Card sx={{ maxWidth: 345 }}>
  {data?.getProducts.map(product=>(<div>
    
    <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <h6 size="small" color="primary">
            Share
          </h6>
        </CardActions></div>
      </Card>


  

  ))} 
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <h6 size="small" color="primary">
            Share
          </h6>
        </CardActions>
      </Card>

      
      
      
         </div>
  );
}

export default App;

