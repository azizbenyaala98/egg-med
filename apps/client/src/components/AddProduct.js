import { useMutation } from '@apollo/client'
import React, { useState } from "react";

import {Card,CardContent,Grid,TextField,Button,IconButton,FormControl,InputLabel,InputAdornment,OutlinedInput} from '@mui/material'
import { ADD_PRODUCT } from '../graphql/Mutation'
import { GET_PRODUCTS } from '../graphql/Query'
const AddProduct=()=>{
    const [product,setProduct]=useState({
        title:'',
        description:'',
        price:'',
        image:''
    })
    const [addProduct] = useMutation(ADD_PRODUCT)
    const onSubmit=e =>{
        e.preventDefault();
        addProduct({
            variables:{
                title:product.title,
                description:product.description,
                price:product.price,
                image:product.image
            }, refetchQueries:[{
                query:GET_PRODUCTS
            }

            ]
        })
    }
        return (
     <form onSubmit={onSubmit}>
          <Card >
 <CardContent >
    
 <Grid container spacing={1}>
    <Grid xs={12} sm={6} item>
         <TextField
          value={product.title} 
         onChange={e=>setProduct({...product,title:e.target.value})}
         label="title" placeholder='enter product tiltle' variant="filled" fullWidth required/>
         </Grid>
         
         <Grid xs={12} sm={6} item>
         <TextField
         value={product.descirption} 
         onChange={e=>setProduct({...product,description:e.target.value})}
         
         label="description" multiline rows={4} placeholder='enter product description' variant="filled" fullWidth required/>
       
         </Grid>
         <Grid xs={12} sm={6}>
         <Button 
         value={product.image} 
         onChange={e=>setProduct({...product,image:e.target.value})}
         variant="contained" component="label"> Upload product picture  <input hidden accept="image/*" multiple type="file"  /></Button>
         <IconButton color="primary" aria-label="upload picture" component="label">
         </IconButton>
         </Grid>

          
         <Grid xs={12} sm={6}>
         <FormControl fullWidth variant="filled" required>
       <InputLabel 
       
       
       htmlFor="outlined-adornment-amount">price</InputLabel>
       <OutlinedInput
         id="outlined-adornment-amount"
       
         startAdornment={<InputAdornment position="start">$</InputAdornment>}
         label="price" value={product.price} 
         onChange={e=>setProduct({...product,price:e.target.value})}
       />
     
     <Grid xs={12} sm={6}></Grid>
     <Button type="submit"variant="contained">submit</Button>
     </FormControl>
     </Grid>
          
         </Grid>
   </CardContent>
 </Card>   
 </form>    
        
    )
}
export default AddProduct