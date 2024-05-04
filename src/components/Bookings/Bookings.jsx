import "./Bookings.css";

function Bookings() {
  return (
    <form className="booking-form">
      <label>Full Name</label>
      <input></input>
      <label>Email</label>
      <input type="email"></input>
      <label>Phone Number</label>
      <input type="tel" name="phone" />
      <label>Date</label> <input type="date" />
      <div className="booking-send">Send</div>
    </form>
  );
}

export default Bookings;
