import { gql } from '@apollo/client';

export const ADD_PRODUCT = gql`

   mutation addProduct($title: String,$description:String,$price:String,$image:String) {
      addProduct(title:$title,description:$description,price:$price,image:$image){
        id 
        title
        description
        price
        image
      }
    }
  
`
export const DELETE_PRODUCT=gql`
  mutation deleteProduct($id:ID){
    deleteProduct(id:$id)
  }`
