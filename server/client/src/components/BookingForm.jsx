const BookingForm = (props) => {
    return (
        <div class="row">
            <h2 class="text-center text-warning mt-2">Complete your booking</h2>
            <div class="col-md-6 offset-md-3">
          <form action="/campgrounds" method="post" novalidate class="validated-form" enctype="multipart/form-data">
            <div class="mb-3">
              <label class="form-label text-light" for="title">Movie</label>
              <input class="form-control" type="text" id="title" name="booking[movieTitle]" value={props.movie} readonly />
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="date">Date</label>
              <input class="form-control" type="date" id="date" name="booking[date]" min="2021-12-17" max="2021-12-23" required />
              <div class="valid-feedback text-light">Looks good!</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="time">Time</label>
              <select class="form-select" id="time" name="booking[time]">
                <option selected>15.15</option>
                <option value="1">19:45</option>
                <option value="2">23:30</option>
              </select>
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="bookingName">Name of booker</label>
              <input class="form-control" type="text" id="bookingName" name="booking[bookingName]" required />
              <div class="valid-feedback text-light">Looks good!</div>
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="adult">Number of adults</label>
              <input class="form-control" type="number" min="0" id="adult" name="booking[adult]" onChange={props.noOfAdultsHandler} required />
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="child">Number of children</label>
              <input class="form-control" type="number" min="0" id="child" name="booking[child]" onChange={props.noOfChildrenHandler} required />
            </div>
            <div class="mb-3">
              <label class="form-label text-light" for="child">Promo Code <span className="text-warning ms-5">Price will automatically update if valid</span></label>
              <input class="form-control" type="input" id="child" name="booking[consessions]" onChange={props.concessionsHandler} />
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