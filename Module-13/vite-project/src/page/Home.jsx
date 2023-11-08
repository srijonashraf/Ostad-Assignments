import { useRef, useState, useEffect } from "react";

const Home = () => {
  // Create a reference to the input element
  const inputRef = useRef(null);

  // Create a state variable to store the input value
  const [inputValue, setInputValue] = useState("");

  // Use the useEffect hook to focus the input element on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Handle the onChange event of the input element
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle the onSubmit event of the form
  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the inputValue state variable after the form has been submitted
    setInputValue((prevInputValue) => {
      return prevInputValue;
    });

    window.alert("Submitted: ".concat(inputValue));
    inputRef.value = "";
  };

  return (
    <div className="home">
      <h1>Welcome to my website!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter your name:</label>
        <input
          ref={inputRef}
          type="text"
          id="input"
          name="input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;
