import { configureStore } from "@reduxjs/toolkit";
  import productReducer from "../Redux/Slice/Product";


const store = configureStore({
  reducer: {
    product: productReducer,    
   
  },
});

export default store;