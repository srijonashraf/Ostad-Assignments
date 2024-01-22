import React from "react";

const Thanks = () => {
  return (
    <div className="container">
      <div className="text-center p-4">
        <p className="mt-3">
          Thank you for choosing us. You will receive a confirmation
          email shortly.
        </p>
        <button className="btn btn-primary rounded-1 fs-6 p-3 mt-3">
          Continue Shopping!
        </button>
      </div>
      <div className="text-center mt-4">
        <h3>Call Us</h3>
        <h3 className="text-danger">012 123 152</h3>
      </div>
    </div>
  );
};

export default Thanks;
