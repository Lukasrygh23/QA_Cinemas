const BookingForm = (props) => {
    return (
        <div className="row">
            <h2 className="text-center text-warning mt-3">Place your booking</h2>
            <div className="col-md-6 offset-md-3">
          <form onSubmit={props.handleSubmit} novalidate className="validated-form" enctype="multipart/form-data">
            <div className="mb-3">
              <label className="form-label text-light" for="title">Movie</label>
              <input className="form-control" type="text" id="title" value={props.movie} readonly />
            </div>
            <div className="mb-3">
              <label className="form-label text-light" for="date">Date</label>
              <input className="form-control" type="date" id="date" onChange={props.dateHandler} min={props.startDate} max={props.endDate} required />
              <div className="valid-feedback text-light">Looks good!</div>
            </div>
            <div className="mb-3">
              <label className="form-label text-light" for="time">Time</label>
              <select className="form-select" id="time" onChange={props.timeHandler}>
                <option value={props.time1} selected>{props.time1}</option>
                <option value={props.time2}>{props.time2}</option>
                <option value={props.time3}>{props.time3}</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label text-light" for="bookingName">Name of booker</label>
              <input className="form-control" type="text" id="bookingName" onChange={props.bookingNameHandler} required />
              <div className="valid-feedback text-light">Looks good!</div>
            </div>
            <div className="mb-3">
              <label className="form-label text-light" for="adult">Number of adults <span className="ms-5 text-warning">Price per adult £12.00</span></label>
              <input className="form-control" type="number" min="0" id="adult" onChange={props.noOfAdultsHandler} required />
            </div>
            {(props.certificate === "12A" ?
              <div className="mb-3">
              <label className="form-label text-light" for="child">Number of children <span className="ms-5 text-warning">Price per child £7.00</span></label>
              <input className="form-control" type="number" min="0" id="child" onChange={props.noOfChildrenHandler} required />
              </div>
            : '')}
            <div className="mb-3">
              <label className="form-label text-light" for="child">Promo Code</label>
              <input className="form-control" type="input" id="child" onChange={props.concessionsHandler} />
            </div>
            <div className="mb-3">
              <label className="form-label text-light" for="price">Price of booking</label>
              <div className="input-group">
                <span className="input-group-text" id="price-label">£</span>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={props.price}
                  name="booking[price]"
                  aria-label="price"
                  aria-describedby="price-label"
          />
        </div>
      </div>
      <div className="mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="button-62">Proceed to payment</button>
      </div>
    </form>
  </div>
</div>
    );
}

export default BookingForm;