const BookingForm = (props) => {
    return (
        <div class="row">
            <h2 class="text-center text-warning mt-3">Place your booking</h2>
            <div class="col-md-6 offset-md-3">
          <form onSubmit={props.handleSubmit} novalidate class="validated-form" enctype="multipart/form-data">
            <div class="mb-3">
              <label class="form-label text-light" for="title">Movie</label>
              <input class="form-control" type="text" id="title" value={props.movie} readonly />
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="date">Date</label>
              <input class="form-control" type="date" id="date" onChange={props.dateHandler} min={props.startDate} max={props.endDate} required />
              <div class="valid-feedback text-light">Looks good!</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="time">Time</label>
              <select class="form-select" id="time" onChange={props.timeHandler}>
                <option value={props.time1} selected>{props.time1}</option>
                <option value={props.time2}>{props.time2}</option>
                <option value={props.time3}>{props.time3}</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="bookingName">Name of booker</label>
              <input class="form-control" type="text" id="bookingName" onChange={props.bookingNameHandler} required />
              <div class="valid-feedback text-light">Looks good!</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="adult">Number of adults <span className="ms-5 text-warning">Price per adult £12.00</span></label>
              <input class="form-control" type="number" min="0" id="adult" onChange={props.noOfAdultsHandler} required />
            </div>
            {(props.certificate == "12A" ?
              <div class="mb-3">
              <label class="form-label text-light" for="child">Number of children <span className="ms-5 text-warning">Price per child £7.00</span></label>
              <input class="form-control" type="number" min="0" id="child" onChange={props.noOfChildrenHandler} required />
              </div>
            : '')}
            <div class="mb-3">
              <label class="form-label text-light" for="child">Promo Code</label>
              <input class="form-control" type="input" id="child" onChange={props.concessionsHandler} />
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="price">Price of booking</label>
              <div class="input-group">
                <span class="input-group-text" id="price-label">£</span>
                <input
                  type="text"
                  class="form-control"
                  id="price"
                  value={props.price}
                  name="booking[price]"
                  aria-label="price"
                  aria-describedby="price-label"
          />
        </div>
      </div>
      <div class="mb-3 d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="button-62">Proceed to payment</button>
      </div>
    </form>
  </div>
</div>
    );
}

export default BookingForm;