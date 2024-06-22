/*import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import App from "../App";

// Pepperoni checkbox
test("checkbox is initially unchecked", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  expect(addPepperoni).not.toBeChecked();
});

test("checkbox appears as checked when user clicks it", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);
  expect(addPepperoni).toBeChecked();
});

test("checkbox appears as unchecked when user clicks a second time", () => {
  render(<App />);

  const addPepperoni = screen.getByRole("checkbox", { name: /add pepperoni/i });

  userEvent.click(addPepperoni);

  expect(addPepperoni).toBeChecked();

  userEvent.click(addPepperoni);

  expect(addPepperoni).not.toBeChecked();
});*/

// Size select element

// "Your Selection" text

// "Contact Info" text box

// Submit Order button
function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);
  const [size, setSize] = useState("small");
  const [contactInfo, setContactInfo] = useState("");
  const [orderIsSubmitted, setOrderIsSubmitted] = useState(false);

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);

  const selectSize = (e) => setSize(e.target.value);

  const updateContactField = (e) => setContactInfo(e.target.value);

  const submitOrder = (e) => {
    e.preventDefault();
    setOrderIsSubmitted(true);
  };

  return (
    <div>
      <h1>Place an Order</h1>
      <p>
        Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}
      </p>
      <form onSubmit={submitOrder}>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>
        <div>
          <h3>Size</h3>
          <label htmlFor="select-size">Select size: </label>
          <select id="select-size" value={size} onChange={selectSize}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <h3>Contact Info</h3>
          <label htmlFor="email">Enter your email address: </label>
          <input
            type="text"
            value={contactInfo}
            id="email"
            placeholder="email address"
            onChange={updateContactField}
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
      {orderIsSubmitted ? <h2>Thanks for your order!</h2> : null}
    </div>
  );
}
