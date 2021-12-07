import React, {useState} from "react";
import axios from 'axios';
import "../css/Card.css"

const UpcomingCardList = () => {
    

    const [data, setData] = useState([]);
    
    
    
    axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=7ae5fc23")
        .then((response) => {
            setData(response.data);
        });
    
        
    

    // const getData = async () => {
    //     const result = await axios.get("http://www.omdbapi.com/?i=tt3896198&apikey=7ae5fc23");
    //     const data = result.data.data;
    //     const postData = data.map(pd => 
    //        <div className='card-container'>
    //     <div className="card" >
    //         <img src="https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg" className="card-img-top" alt=''/>
    //         <div className="card-body">
    //                     <h5 className="card-title">{pd.Title}</h5>
    //                     <p className="card-text">{pd.Plot}<br /> Release Date: {pd.Year}</p>
    //             {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    //         </div>
    //         </div>
            
    //         </div>)
    //     postData();
        

       
    // }

   
    
        return (
        
            <div>                           
                       
                <div class="container">

                <div class="row">
                        <div class="col-sm-8">
                            <h2 class="text-light mb-5 mt-2">Synopsis</h2>
                            <p class="text-light">{data.Plot} Release Date: {data.Year}</p>
                        <h5 class="text-light">{data.Title}</h5>
                   
                        <button class="button-62">
                            <a href="#">More Information</a>
                        </button> </div>
                    <div class="col-sm-4"><img src={data.Poster} alt='' /></div>
                
                
    
                </div>
               
                
            </div>

            </div>
           
        )
} 

 
export default UpcomingCardList;