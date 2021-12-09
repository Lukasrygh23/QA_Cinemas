import CarouselGallery from "./components/CarouselGallery";
import CardListUpcomingMovies from "./components/CardListUpcomingMovies";
import Footer from "./components/Footer";

const homePage = () => {
  return (
    <div>
      <CarouselGallery />
      <CardListUpcomingMovies />
      <Footer />
    </div>
  );
};

export default homePage;
