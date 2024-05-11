import { useState } from "react";
import "./Bookings.css";
import emailjs from "@emailjs/browser";

function Bookings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    date: false,
  });

  function validate() {
    const errors = {};
    if (!name) {
      errors.name = true;
    }
    if (!email) {
      errors.email = true;
    }
    if (!phone) {
      errors.phone = true;
    }
    if (!date) {
      errors.date = true;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function send() {
    if (!validate()) {
      return;
    }
  }

  return (
    <form className="booking-form">
      <div className="booking-label">
        Full Name*
        {errors.name && <span className="error-label">Name is required</span>}
      </div>
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        required
      />

      <div className="booking-label">
        Email*
        {errors.email && <span className="error-label">Email is required</span>}
      </div>
      <input
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        type="email"
        required
      ></input>

      <div className="booking-label">
        Phone Number*
        {errors.phone && (
          <span className="error-label">Phone number is required</span>
        )}
      </div>
      <input
        value={phone}
        onChange={(event) => {
          if (!event.target.value.match(/^^$|[0-9]+$/)) {
            return;
          }
          setPhone(event.target.value);
        }}
        type="tel"
        name="phone"
        required
      />

      <div className="booking-label">
        Date*
        {errors.date && <span className="error-label">Date is required</span>}
      </div>
      <input
        type="date"
        value={date}
        required
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />

      <div onClick={() => send()} className="booking-send">
        Send
      </div>
    </form>
  );
}

export default Bookings;
