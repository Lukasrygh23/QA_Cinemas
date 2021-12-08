import '../css/Card.css'
const UpcomingMovies = (props) => {
const {movie}=props;
console.log(movie);

    if (movie.newRelease === true) {
        return (
            <div>
            <div class="container">

                <div class="row  mt-5 mb-3">
                    <div class="col-sm-8">
                        {/* <h2 class="text-light mb-5 mt-2">Synopsis</h2> */}
                        <h2 class="text-light mt-3 mb-3">{movie.movieTitle}</h2>    
                        <p class="text-light">{movie.synopsis} </p>
                        
                        <br />
                        <button class="button-62">
                            <a class="btnText" href="#">More Information</a>
                        </button> </div>
                        <div class="col-sm-4"><img class="movImg mb-5" src={movie.imageURL} alt='' /></div>
                        <hr class="hrTag" />
                
                
    
                </div>
               
                
            </div>
            <br />
            </div>
                
        )
    } else {
        return null;
    }
   

}
export default UpcomingMovies;