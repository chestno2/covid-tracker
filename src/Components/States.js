import axios from 'axios'
import React, { useEffect, useState } from 'react'

function States() {
     
    // const [Confirmed, setConfirmed] = useState(0);
    // const [Recovered, setRecovered] = useState(0)
    // const [Deaths, setDeaths] = useState(0);
    // const [States , setStates] = useState([])
    
    
    
  
     
  
            // function selectStates() {
            //     let items = []; 
            //     States.forEach(state => {
            //         items.push(
            //              <option value={States.state} >{States.state}</option>
            //         )
            //     })
            //     return items
                
            // }
           
            
   
   
    return (
        <div>
 <div className="flex justify-evenly mt-12 ">
                <div className="grid  grid-cols-3  ">
                        <div className="shadow-2xl mx-12 w-56" >
                             <p className="text-center">Total Cases</p>
                                {/* <p className="text-center" >{Confirmed}</p> */}
                        </div>
                                <div className="shadow-2xl mx-12 w-56">
                                       <p className="text-center">Recovered</p>
                                        {/* <p className="text-center">{Recovered}</p> */}
                                </div>
                                        <div className="shadow-2xl mx-12 w-56">
                                            <p className="text-center  " >Deaths</p>
                                            {/* <p className="text-center">{Deaths}</p> */}
                                        </div>
                 </div>
        </div>
            </div>

    )
    
    }
export default States

           {/* {
       pokemonData.game_indices ? 
       <div>
       {pokemonData.game_indices.map((data,index)=>(
        <li key = {index}>{data?.version.name}  </li>
        ))}
       </div> : null
     }  */}
              