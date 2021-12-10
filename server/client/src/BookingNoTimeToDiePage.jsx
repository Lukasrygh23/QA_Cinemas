import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from "./components/BookingForm";
import StripeCheckout from 'react-stripe-checkout';
import './css/BookingPage.css'

const BookingNoTimeToDiePage = () => {
    const movie = "No Time To Die"
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
            movieTitle: "No Time To Die",
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

    return (
        <React.Fragment>
            {!paymentReady && (
                <BookingForm movie={movie} noOfAdultsHandler={noOfAdultsHandler} price={price} noOfChildrenHandler={noOfChildrenHandler} concessionsHandler={concessionsHandler} handleSubmit={handleSubmit} dateHandler={dateHandler} timeHandler={timeHandler} bookingNameHandler={bookingNameHandler} />)}
            {paymentReady && !paymentConfirmed && (
                <div>
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
                <div>
                    <h5 className="text-light mt-5 ms-5">Booking Complete!</h5>
                    <p className="text-light mt-3 ms-5">Congratulations {bookingName}, you're off to watch <span className="text-warning"> {movie}</span> on {date} at {time}!</p>
                    <p className="text-light ms-5 mt-5">Click to go back to <span><Link id="bookingLink" className="text-decoration-underline" to="/">home</Link></span></p>
                </div>
            )}
        </React.Fragment>
     );
}

export default BookingNoTimeToDiePage;
