import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/carouselContainer.css";
import { Carousel } from "react-responsive-carousel";

const movie1Handler = () => {
  window.open("http://localhost:3000/movie/no_time_to_die", "_self");
};

const movie1BookingHandler = () => {
  window.open("http://localhost:3000/booking/no_time_to_die", "_self");
};

const movie2Handler = () => {
  window.open("http://localhost:3000/movie/dune", "_self");
};

const movie2BookingHandler = () => {
  window.open("http://localhost:3000/booking/dune", "_self");
};

const movie3Handler = () => {
  window.open("http://localhost:3000/movie/eternals", "_self");
};

const movie3BookingHandler = () => {
  window.open("http://localhost:3000/booking/eternals", "_self");
};

const movie4Handler = () => {
  window.open("http://localhost:3000/movie/the_last_duel", "_self");
};

const movie4BookingHandler = () => {
  window.open("http://localhost:3000/booking/the_last_duel", "_self");
};

const CarouselGallery = () => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      interval={5000}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
    >
      <div className="divContainer">
        <img
          style={{ "pointerEvents": "all" }}
          onClick={movie1Handler}
          className="carouselImages"
          src="https://cdn.mos.cms.futurecdn.net/dNmCDjJT5G76aDKiYphTkF.jpg"
          alt="No Time To Die"
        />
        <p className="legend mb-5 fw-bold">
          <span className="me-5">No Time To Die</span>{" "}
          <span className="fw-light fst-italic">
            Director: Cary Joji Fukunaga
          </span>{" "}
          <span className="fw-light ms-5">
            Stars: Daniel Craig, Ana de Armas, Léa Seydoux
          </span>
        </p>
        <button className="button-62 mb-2" onClick={movie1BookingHandler}>
          Book now
        </button>
      </div>
      <div className="divContainer">
        <img
          style={{ "pointerEvents": "all" }}
          onClick={movie2Handler}
          className="carouselImages"
          src="https://images5.alphacoders.com/117/thumb-1920-1174594.jpg"
          alt="Dune"
        />
        <p className="legend mb-5 fw-bold">
          <span className="me-5">Dune: Part One</span>{" "}
          <span className="fw-light fst-italic">
            Director: Denis Villeneuve
          </span>{" "}
          <span className="fw-light ms-5">
            Stars: Timothée Chalamet, Rebecca Ferguson, Zendaya
          </span>
        </p>
        <button className="button-62 mb-2" onClick={movie2BookingHandler}>
          Book now
        </button>
      </div>
      <div className="divContainer">
        <img
          style={{ "pointerEvents": "all" }}
          onClick={movie3Handler}
          className="carouselImages"
          src="https://images2.alphacoders.com/118/thumb-1920-1180551.jpg"
          alt="Eternals"
        />
        <p className="legend mb-5 fw-bold">
          <span className="me-5">Eternals</span>{" "}
          <span className="fw-light fst-italic">Director: Chloé Zhao</span>{" "}
          <span className="fw-light ms-5">
            Stars: Gemma Chan, Richard Madden, Angelina Jolie
          </span>
        </p>
        <button className="button-62 mb-2" onClick={movie3BookingHandler}>
          Book now
        </button>
      </div>
      <div className="divContainer">
        <img
          style={{ "pointerEvents": "all" }}
          onClick={movie4Handler}
          className="carouselImages"
          src="https://images8.alphacoders.com/117/thumb-1920-1176366.jpg"
          alt="The Last Duel"
        />
        <p className="legend mb-5 fw-bold">
          <span className="me-5">The Last Duel</span>{" "}
          <span className="fw-light fst-italic">Director: Ridley Scott</span>{" "}
          <span className="fw-light ms-5">
            Stars: Matt Damon, Adam Driver, Jodie Comer
          </span>
        </p>
        <button className="button-62 mb-2" onClick={movie4BookingHandler}>
          Book now
        </button>
      </div>
    </Carousel>
  );
};

export default CarouselGallery;
