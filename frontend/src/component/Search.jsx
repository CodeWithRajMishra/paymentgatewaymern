import axios from "axios";


import { useState } from "react";
const Search=()=>{
    const [pro, setPro]= useState("");
    const handleInput=(e)=>{
          setPro(e.target.value);
          axios.get().then();

    }

    return(
        <>
        <center>
         <h1 align="center"> Search Your Products</h1>
         Enter Product Name : <input type="text" value={pro} onChange={handleInput}  style={{width:"300px"}}/> 
         </center>
        </>
    )
}
export default Search;