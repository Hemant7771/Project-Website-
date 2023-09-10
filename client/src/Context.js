import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [cartitem,Setcartitem]=useState()
    const [cartProduct, setCartProduct] = useState([]);

    const getcartdata = () => {
        axios.get("http://localhost:8000/getCartData").then(async (res) => {
          
        await setCartProduct(res.data);
        await Setcartitem(res.data.length);



        });
      }
      useEffect(()=>{
        getcartdata()
      },[])
    return (
        <AppContext.Provider value={{ cartitem,cartProduct }}>
          {children}
        </AppContext.Provider>
      );
}

export { AppContext, AppProvider }