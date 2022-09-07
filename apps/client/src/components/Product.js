import React from 'react'
import {Card,CardContent} from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useMutation} from '@apollo/client'

import {Typography} from '@mui/material'
import { DELETE_PRODUCT } from '../graphql/Mutation';
import { GET_PRODUCTS } from '../graphql/Query';
const Product=({id,title,price,description,image})=>{
const [deleteProduct]=useMutation(DELETE_PRODUCT);
const removeProduct=(id)=>{
    deleteProduct({
        variables:{
            id:id
        },refetchQueries:[{query:GET_PRODUCTS}]
    })
}
    return (
<Card sx={{ maxWidth: 345 }}>
  <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt={image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <h6 size="small" color="primary">
            {price}
          </h6>
          <DeleteIcon onClick={()=>removeProduct(id)} />
        </CardActions>
        
      </Card>





    );}
    export default Product;
