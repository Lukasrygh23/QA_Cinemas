const UpcomingMovies = (props) => {
const {movie}=props;
console.log(movie);

    if (movie.newRelease === true) {
        return (
            <div class="container">

                <div class="row">
                    <div class="col-sm-8">
                        <h2 class="text-light mb-5 mt-2">Synopsis</h2>
                        <p class="text-light">{movie.synopsis} </p>
                        <h5 class="text-light">{movie.movieTitle}</h5>
                   
                        <button class="button-62">
                            <a href="#">More Information</a>
                        </button> </div>
                    <div class="col-sm-4"><img src={movie.imageURL} alt='' /></div>
                
                
    
                </div>
               
                
            </div>
                
        )
    } else {
        return null;
    }
   

}
export default UpcomingMovies;