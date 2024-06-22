/*import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);

  return (
    <div>
      <h1>Place an Order</h1>
      <form>
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
      </form>
    </div>
  );
}

export default App;*/
const [contactInfo, setContactInfo] = useState("");
const updateContactField = (e) => setContactInfo(e.target.value);

return (
  <div>
    <h1>Place an Order</h1>
    <p>
      Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}
    </p>
    <form>
      {/*... rest of form*/}
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
    </form>
  </div>
);
