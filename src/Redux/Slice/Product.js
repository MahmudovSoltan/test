import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [
      {
        name: "Content Marketing Certification Course",
        category: "cookie",
        price: 50,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-10-600x450.jpg",
        price:"Free",
        lessons:"7",
        week:"10"
      },
      {
        name: "Business Analytics Course Program(Data Scientist)",
        category: "cookie",
        price: 10,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-11-600x450.jpg",
        price:"$80.00",
        lessons:"7",
        week:"10"
      },
      {
        name: "Mini MBA Course – Lean Business Administration",
        category: "drink",
        price: 2,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-12-600x450.jpg",
        price:"$30.00",
        lessons:"10",
        week:"8"
      },
      {
        name: "Professional Course Of Sales Skills And Customer Care",
        category: "drink",
        price: 5,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-07-600x450.jpg",
        price:"$36.00",
        lessons:"3",
        week:"10"
      },
      {
        name: "Method of online business from home with Authority Site",
        category: "cookie",
        price: 5,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-02-600x450.jpg",
        price:"$55.00",
        lessons:"5",
        week:"100"
      },
      {
        name: "Building a business on the Internet",
        category: "drink",
        price: 12,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-03-600x450.jpg",
        price:"Free",
        lessons:"4",
        week:"100"
      },
      {
        name: "Effective online business method for products",
        category: "cookie",
        price: 50,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-04-600x450.jpg",
        price:"$60.00",
        lessons:"5",
        week:"10"
      },
      {
        name: "Complete retail on Facebook, Zalo, Shopee to have thousands of orders",
        category: "cookie",
        price: 10,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-05-600x450.jpg",
        price:"Free",
        lessons:"6",
        week:"10"
      },
      {
        name: "Make money from selling on Smartphone",
        category: "drink",
        price: 2,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-06-600x450.jpg",
        price:"$69.00",
        lessons:"5",
        week:"10"
      },
      {
        name: "Complete set of Marketing, the art of selling online from basic to actual sales, billions of",
        category: "drink",
        price: 5,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-07-600x450.jpg",
        price:"$75.00",
        lessons:"3",
        week:"10"
      },
      {
        name: "Learn Amazon Dropshiping from idea to practice.",
        category: "cookie",
        price: 5,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-08-600x450.jpg",
        price:"$94.00",
        lessons:"8",
        week:"10"
      },
      {
        name: "Implement your own online business",
        category: "drink",
        price: 12,
        img:"https://coaching.thimpress.com/business-consulting/wp-content/uploads/sites/52/2022/09/course-thumb-09-600x450.jpg",
        price:"$99.00",
        lessons:"4",
        week:"10"
      },
    ],
    priceSort: false,
    index:1
  };

  
  export const productSlice = createSlice ({
    name:"product",
    initialState,
    reducers:{
       
        setIndex:(state) =>{
      state.index +=1
        },
        setindex2:(state) =>{
          
      state.index -=1
        }

    }
})

export const { setIndex ,setindex2 } = productSlice.actions;
export default productSlice.reducer;

