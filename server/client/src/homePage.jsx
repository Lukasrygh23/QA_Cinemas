import Navbar from './components/navbar';
import CarouselGallery from './components/CarouselGallery';
import UpcomingCardList from './components/UpcomingCardList';
import Footer from './components/Footer';

const homePage = () => {
    return (
        <div>
            <Navbar/>
            <CarouselGallery />
            <UpcomingCardList />
            <Footer/>
        </div>
    );
}

export default homePage;