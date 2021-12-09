import React, { useEffect, useState } from 'react';
import BookingForm from "./components/BookingForm";

const BookingNoTimeToDiePage = () => {
    const movie = "No Time To Die"
    const [noOfAdults, setNoOfAdults] = useState(0)
    const [noOfChildren, setNoOfChildren] = useState(0)
    const [price, setPrice] = useState(0.00)
    const [concession, setConcession] = useState(false)

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

    useEffect(() => {
        setPrice(calculatePrice)
    }, [noOfAdults, noOfChildren, concession])

    return (
        <React.Fragment>
            <BookingForm movie={movie} noOfAdultsHandler={noOfAdultsHandler} price={price} noOfChildrenHandler={noOfChildrenHandler} concessionsHandler={concessionsHandler}/>
        </React.Fragment>
     );
}

export default BookingNoTimeToDiePage;