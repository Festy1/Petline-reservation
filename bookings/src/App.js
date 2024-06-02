import { useEffect, useState } from "react";
import "./App.css";

const initialBookings = [
  {
    id: 1,
    description: "Dog(s)",
    quantity: 2,
    petName: "Jonny & Brown",
    checkedIn: false,
    from: 22032024,
    to: 24032024,
  },
  {
    id: 2,
    description: "Cat(s)",
    quantity: 1,
    petName: "Milo",
    checkedIn: true,
    from: 22032024,
    to: 24032024,
  },
  {
    id: 3,
    description: "Dogs(s) & Cat(s)",
    quantity: 3,
    petName: "Fredo, lucky & chiko",
    checkedIn: false,
    from: 22032024,
    to: 24032024,
  },
];

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Box>
          <BookingList initialBookings={initialBookings} />
        </Box>
      </Main>
    </div>
  );
}

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </div>
  );
};

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <div className="logo"></div>
      </div>
      <div className="header-date">
        <p className="date">
          <DateTime />
        </p>
      </div>
    </div>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function Box({ children }) {
  return <div className="box">{children}</div>;
}

function InputBooking() {
  const [description, setDescript] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [petName, setPetName] = useState("");

  return (
    <form>
      <h3>Reservation details</h3>
      <div>
        <select>
          <option> Dog(s)</option>
          <option> Cats(s)</option>
          <option> Dog(s) & Cat(s)</option>
        </select>

        <select>
          {Array.from({ lenght: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Enter Pet's name " />
        <label for="From">From: </label>
        <input type="date" />
        <label for="To">To: </label>
        <input type="date" />
      </div>
    </form>
  );
}

function BookingList({ initialBookings }) {
  return (
    <div>
      <div className="booking-list">
        <ul>
          {initialBookings.map((booking) => (
            <Booking booking={booking} key={booking.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Booking({ booking }) {
  return (
    <div>
      <li className="booking">
        <span>{booking.description}</span>
        <span>{booking.quantity}</span>
        <span>{booking.petName}</span>
        <span>{booking.checkedIn}</span>
        <span>{booking.from}</span>
        <span>{booking.to}</span>
        <span>{booking.checkedIn ? "Checked In" : "Not Checked In"}</span>
      </li>
    </div>
  );
}
