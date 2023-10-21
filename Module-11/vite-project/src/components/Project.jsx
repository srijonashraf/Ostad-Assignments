import { useState } from "react";
import { Button } from "react-bootstrap";

const LoginStatusButton = () => {
  const [status, setStatus] = useState(true);

  const updateStatus = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className="d-flex flex-row gap-2 justify-content-center">
      <h3>{status ? "You are logged in" : "Click the button to Login"}</h3>
      <Button variant={status ? "danger" : "primary"} onClick={() => updateStatus(!status)}>
        {status ? "Logout" : "Login"}
      </Button>
    </div>
  );
};

const Project = () => {
  return (
    <div className="">
      <br />
      <LoginStatusButton />
    </div>
  );
};

export default Project;
