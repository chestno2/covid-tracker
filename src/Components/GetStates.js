import React, { useState }  from 'react'
import axios from "axios"

function GetStates() {

  const [countries, setCountries ] = useState([])

    const handleChange = (e) => {
        console.log(e.target.value);
    }
   const getCountries = () =>
   {
    axios.get("https://api.covid19india.org/data.json").then((response) => {
      
                console.log(response );
                setCountries(response.data.statewise)
                
   })
   let items = []
   countries.forEach(country=> {
       items.push(
           <option >{country.state}</option>
       )
   })
 return items  
   }
    return (
        <div>
            
            <div className= "flex justify-center mt-24" >
          
            <select onChange ={handleChange}>
              {getCountries()}
            </select>   
            
             </div>
           
        </div>
           
          
        
     )
}

export default GetStates
