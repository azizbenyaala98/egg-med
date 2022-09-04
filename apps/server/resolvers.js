import Product from "./models/Product.js"

const resolvers ={
    Query:{
        welcome:()=>{
            return"welcome to egg-med"
        },
        getProducts: async()=>{
            const products= await Product.find()
            return products
        },
        getProduct: async(root,args)=>{
            const product= await Product.findById(args.id)
            return product
        },
    },
    Mutation:{
        addProduct:async(root,args)=>{
        const newProduct = new Product({title:args.title,description:args.description,price:args.price,image:args.image})
        await newProduct.save()
        return newProduct
        },
        deleteProduct:async(root,args)=>{
        await Product.findByIdAndDelete(args.id)
        return "product deleted successsfully"
        },
        updateProduct:async(root,args)=>{
            const{id,title,description,price,image}=args
            const updatedProduct={};
            if (title!= undefined){
                updatedProduct.title=title
            }
            if (price!= undefined){
                updatedProduct.price=price
            }
            if (description!= undefined){
                updatedProduct.description=description
            }
            if (image!= undefined){
                updatedProduct.image=image
            }

            const product=await Product.findByIdAndUpdate(id,updatedProduct,{new:true})
            return product;
        }
    }
}
export default resolvers