import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/carouselContainer.css'
import { Carousel } from 'react-responsive-carousel'

const onClickHandler = () => {
     window.open("https://www.codegrepper.com/code-examples/javascript/react+onclick+open+url", "_blank")
}

const onClickHandler1 = () => {
     window.open("https://www.google.co.uk/", "_blank")
}

const CarouselGallery = () => {
    return (
            <Carousel autoPlay={true} showThumbs={false} interval={5000} infiniteLoop={true} showStatus={false} showIndicators={false} >
                <div className="divContainer" onClick={onClickHandler}>
                    <img className="carouselImages" src="https://cdn.mos.cms.futurecdn.net/dNmCDjJT5G76aDKiYphTkF.jpg" alt="No Time To Die" />
                    <p className="legend mb-5 fw-bold"><span className="me-5">No Time To Die</span> <span className="fw-light fst-italic">Director: Cary Joji Fukunaga</span> <span className="fw-light ms-5">Stars: Daniel Craig, Ana de Armas, Léa Seydoux</span></p>
                    <button className="button-62 mb-2" onClick={onClickHandler1}>Book now</button>
                </div>
                <div>
                    <img className="carouselImages" src="https://images5.alphacoders.com/117/thumb-1920-1174594.jpg" alt="Dune" />
                    <p className="legend mb-5 fw-bold"><span className="me-5">Dune</span> <span className="fw-light fst-italic">Director: Denis Villeneuve</span> <span className="fw-light ms-5">Stars: Timothée Chalamet, Rebecca Ferguson, Zendaya</span></p>
                    <button className="button-62 mb-2" onClick={onClickHandler1}>Book now</button>
                </div>
                <div>
                    <img className="carouselImages" src="https://images2.alphacoders.com/118/thumb-1920-1180551.jpg" alt="Eternals" />
                    <p className="legend mb-5 fw-bold"><span className="me-5">Eternals</span> <span className="fw-light fst-italic">Director: Chloé Zhao</span> <span className="fw-light ms-5">Stars: Gemma Chan, Richard Madden, Angelina Jolie</span></p>
                    <button className="button-62 mb-2" onClick={onClickHandler1}>Book now</button>
                </div>
                <div>
                    <img className="carouselImages" src="https://images8.alphacoders.com/117/thumb-1920-1176366.jpg" alt="The Last Duel" />
                    <p className="legend mb-5 fw-bold"><span className="me-5">The Last Duel</span> <span className="fw-light fst-italic">Director: Ridley Scott</span> <span className="fw-light ms-5">Stars: Matt Damon, Adam Driver, Jodie Comer</span></p>
                    <button className="button-62 mb-2" onClick={onClickHandler1}>Book now</button>
                </div>
            </Carousel>
     );
}

export default CarouselGallery;