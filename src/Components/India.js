import axios from 'axios'
import React ,{ useEffect, useState} from 'react'


function India() {

    const [Cases, setCases] = useState(0);
    const [Recovered, setRecovered] = useState(0);
    const [Deaths, setDeaths] = useState(0);
                                                                                                                                                                                                                                                                                                                
useEffect( () => (
    axios.get("https://api.covid19india.org/data.json").then((response) => {
       
//         axios.get("https://api.covid19api.com/countries").then((response) => {
      
//             console.log(response );
            
            
// })
      let totalConfirmed = 0 ;
    //   console.log(response);

      response.data.cases_time_series.forEach(element => {
          totalConfirmed = totalConfirmed + parseInt(element.dailyconfirmed)
      });
    let  totalDeaths = 0;
      setCases(totalConfirmed)
      response.data.cases_time_series.forEach(element => {
        
        totalDeaths = totalDeaths + parseInt(element.dailydeceased)  
        setDeaths(totalDeaths)
      });

      let totalRecovered  = 0;
      response.data.cases_time_series.forEach(element => {
          totalRecovered = totalRecovered +parseInt(element.dailyrecovered)
      })
    setRecovered(totalRecovered)
        // setCases(totalConfirmed);
        // setDeaths(totalDeceased)
        // setRecovered(totalRecovered)
        // console.log(response);
        
    } )

) ,[] )


    return (
        <div>
           <div className="flex justify-evenly mt-12 ">
                <div className="grid  grid-cols-3  ">
                        <div className="shadow-2xl mx-12 w-56" >
                             <p className="text-center">Total Cases</p>
                                <p className="text-center" >{Cases}</p>
                        </div>
                                <div className="shadow-2xl mx-12 w-56">
                                       <p className="text-center">Recovered</p>
                                        <p className="text-center">{Recovered}</p>
                                </div>
                                        <div className="shadow-2xl mx-12 w-56">
                                            <p className="text-center" >Deaths</p>
                                            <p className="text-center">{Deaths}</p>
                                        </div>
                 </div>
        </div>
            {/* <button onClick={getData}>Get Data</button> */}
         
        </div>
    
    )
}
 
    

export default India;



// function calcTotal(array, property){
//     let total = 0;
//     // person?.name?.fullname
//     if(array&&property){
//         array.forEach((item)=>{
//             total = total + parseInt(item[property]);
//         });
//     }
      
//     return total;
// };
 //     console.log(response);
    // let totalDeceased = calcTotal(response.data.cases_time_series , "dailydeceased");
    // let totalConfirmed = calcTotal(response.data.cases_time_series, 'dailyconfirmed');
    // let totalRecovered = calcTotal(response.data.cases_time_series, 'dailyrecovered');
    // // response.data.cases_time_series.forEach((item)=>{
    // //     totalDeceased = totalDeceased + parseInt(item.dailydeceased);
    // // });