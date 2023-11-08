const About = () => {
    const city = ["Dhaka", "Delhi", "Kolkata"];
    return (
      <div id="about" className="d-flex flex-row align-items-center justify-content-center gap-2">
        <h3>Select Your City</h3>
        <select className="btn bg-danger fw-bold text-white" name="city" id="">
          {city.map((item, i) => {
            return (
              <option key={i.toString}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  
  export default About;
  