import * as React from 'react';
import {useQuery} from '@apollo/client'
import Product from './components/Product.js'
import AddProduct from './components/AddProduct.js';
import {GET_PRODUCTS} from './graphql/Query.js'
import './App.css';
function App() {
  const {loading ,error,data}=useQuery(GET_PRODUCTS);
  if (loading) return <p>loading ...</p>
  if (loading) return <p>{error.message}</p>
  console.log(data);
  return (
    <div className='App' >
      <AddProduct />
     
  <div>
  {data?.getProducts.map(product=>( 
  <Product 
  key={product.id}
  id={product.id}
  title={product.title}
  description={product.description}
  price={product.price}
  image={product.image}


  
  
  
  
  
  />
  
  
  
  
  
  ))}
  </div>


  

       

      
      
      
         </div>
  );
}

export default App;

