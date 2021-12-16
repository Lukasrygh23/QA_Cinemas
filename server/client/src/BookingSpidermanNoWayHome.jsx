import React, { useEffect, useState } from 'react';
import BookingForm from "./components/BookingForm";
import StripeCheckout from 'react-stripe-checkout';
import './css/BookingPage.css'

const BookingSpidermanNoWayHomePage = () => {
    const time1 = "15:15 PM"
    const time2 = "18:45 PM"
    const time3 = "22:30 PM"
    const startDate = "2022-01-01"
    const endDate = "2022-01-31"
    const movie = "Spider-man: No Way Home"
    const certificate = "12A"
    const [date, setDate] = useState()
    const [time, setTime] = useState("15:15")
    const [bookingName, setBookingName] = useState()
    const [noOfAdults, setNoOfAdults] = useState(0)
    const [noOfChildren, setNoOfChildren] = useState(0)
    const [price, setPrice] = useState(0.00)
    const [cardPrice, setCardPrice] = useState(0.00)
    const [concession, setConcession] = useState(false)
    const [paymentReady, setPaymentReady] = useState(false)
    const [paymentConfirmed, setPaymentConfirmed] = useState(false)

    const dateHandler = (e) => {
        setDate(e.target.value)
    }

    const timeHandler = (e) => {
        setTime(e.target.value)
    }

    const bookingNameHandler = (e) => {
        setBookingName(e.target.value)
    }

    const noOfAdultsHandler = (e) => {
        setNoOfAdults(e.target.value)
    }

    const noOfChildrenHandler = (e) => {
        setNoOfChildren(e.target.value)
    }

    const calculatePrice = () => {
        let adultPrice = 12;
        let childPrice = 7;
        let total;
        if (concession) {
            total = (adultPrice * noOfAdults + childPrice * noOfChildren) / 2;
            return total.toFixed(2);
        } else {
            total = adultPrice * noOfAdults + childPrice * noOfChildren;
            return total.toFixed(2)
        }
    }

    const concessionsHandler = (e) => {
        if (e.target.value === "TFG1414" || e.target.value === "QAC1234") {
            setConcession(true)
            alert("Promo code is valid - congratulations you're entitled to a 50% discount!")
        }
    }

    const reDirectToPaymentHandler = () => {
    setPaymentReady(true)
    }

    const reDirectToHomeHandler = () => {
        setPaymentConfirmed(true)
    }
        const handleSubmit = (event) => {
        event.preventDefault();
        let obj = {
            movieTitle: "Spider-man: No Way Home",
            date: date,
            time: time,
            bookingName: bookingName,
            adult: noOfAdults,
            child: noOfChildren,
            consessions: concession,
            price: price
        }
        fetch('http://localhost:5000/bookingRoutes/create', {
            method: 'POST',
            headers: {
                'content-type': 'application/JSON',
            },
            body: JSON.stringify(obj),
        }).then(() => {
            reDirectToPaymentHandler()
        });
        };

    const calculateCardPrice = () => {
        return (price * 100)
    }

    useEffect(() => {
        setPrice(calculatePrice)
        setCardPrice(calculateCardPrice)
    }, [noOfAdults, noOfChildren, concession, price])

    if (paymentConfirmed) {
        setTimeout(function(){  window.open("http://localhost:3000/", "_self"); }, 10000)
    }

    return (
        <React.Fragment>
            {!paymentReady && (
                <BookingForm movie={movie} noOfAdultsHandler={noOfAdultsHandler} price={price} noOfChildrenHandler={noOfChildrenHandler} concessionsHandler={concessionsHandler} handleSubmit={handleSubmit} dateHandler={dateHandler} timeHandler={timeHandler} bookingNameHandler={bookingNameHandler} time1={time1} time2={time2} time3={time3} certificate={certificate} startDate={startDate} endDate={endDate}/>)}
            {paymentReady && !paymentConfirmed && (
                <div className="booking-container">
                    <h5 className="text-light mt-5 ms-5">Booking received!</h5>
                    <p className="text-light mt-3 ms-5">Please complete your booking by clicking on the below payment option</p>
                    <StripeCheckout className="ms-5 button-62"
                        token={reDirectToHomeHandler}
                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                        amount={cardPrice}
                        currency={"GBP"}
                    >
                    </StripeCheckout>
                </div>
            )}
            {paymentConfirmed && (
                <div className="booking-container">
                    <h5 className="text-light mt-5 ms-5">Booking Complete!</h5>
                    <p className="text-light mt-3 ms-5">Congratulations {bookingName}, you're off to watch <span className="text-warning"> {movie}</span> on {date} at {time}!</p>
                    <p className="text-light ms-5 mt-5">You will automatically be redirected to the home page in 10 seconds.</p>
                </div>
            )}
        </React.Fragment>
     );
}

export default BookingSpidermanNoWayHomePage;
