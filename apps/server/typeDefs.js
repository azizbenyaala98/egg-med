import { gql } from 'apollo-server-express'

const typeDefs=gql`
type Product{
    id:ID
    title:String
    description:String
    price:String
    image:String
}
type Query{
    welcome:String
    getProducts:[Product]
    getProduct(id:ID):Product

}
type Mutation{
    addProduct(title:String,description:String,price:String,image:String):Product
    deleteProduct(id:ID):String
    updateProduct(id:ID,title:String,description:String,price:String,image:String):Product
}
`

export default typeDefs