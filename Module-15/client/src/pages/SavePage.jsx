import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { StudentUpdate, getById, registration } from "../apiRequest/apiRequest";
import AppNavbar from "../component/AppNavbar";

const SavePage = () => {
  const navigate = useNavigate();
  const [fromValue, setFromValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: "",
    nationality: "",
  });
  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    const id = urlParam.get("id");
    setUpdateId(id);

    (async () => {
      if (id !== null) {
        await fillFrom(id);
      }
    })();
  }, []);

  const fillFrom = async (id) => {
    const res = await getById(id);
    setFromValue({
      firstName: res.firstName,
      lastName: res.lastName,
      gender: res.gender,
      dateOfBirth: new Date(res.dateOfBirth).toISOString().split("T")[0],
      address: res.address,
      email: res.email,
      phone: res.phone,
      admissionDate: new Date(res.admissionDate).toISOString().split("T")[0],
      courses: res.courses,
      nationality: res.nationality,
    });
  };

  const inputOnChange = (name, value) => {
    setFromValue((fromValue) => ({
      ...fromValue,
      [name]: value,
    }));
  };

  const Save = async (e) => {
    e.preventDefault();

    if (updateId === null) {
      const res = await registration(fromValue);
      if (res) {
        toast.success("Request Complete");
        navigate("/");
      } else {
        toast.success("Request Failed");
      }
    } else {
      const res = await StudentUpdate(fromValue, updateId);
      if (res) {
        toast.success("Update Complete");
        navigate("/");
      } else {
        toast.success("Request Failed");
      }
    }
  };

  return (
    <div>
      <AppNavbar />
      <div className="container">
        <div className="row justify-content-center">
          <form className="row g-3 col-md-6">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label fw-bold">
                First Name
              </label>
              <input
                value={fromValue.firstName}
                onChange={(e) => {
                  inputOnChange("firstName", e.target.value);
                }}
                type="text"
                placeholder="First Name"
                className="form-control "
                id="firstName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label fw-bold">
                Last Name
              </label>
              <input
                value={fromValue.lastName}
                onChange={(e) => {
                  inputOnChange("lastName", e.target.value);
                }}
                type="text"
                placeholder="Last Name"
                className="form-control "
                id="lastName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label fw-bold">
                Email
              </label>
              <input
                value={fromValue.email}
                onChange={(e) => {
                  inputOnChange("email", e.target.value);
                }}
                type="text"
                placeholder="example@gmail.com"
                className="form-control "
                id="email"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label fw-bold">
                Phone
              </label>
              <input
                value={fromValue.phone}
                onChange={(e) => {
                  inputOnChange("phone", e.target.value);
                }}
                type="text"
                placeholder="01900000000"
                className="form-control "
                id="phone"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="dob" className="form-label fw-bold">
                Date Of Birth
              </label>
              <input
                value={fromValue.dateOfBirth}
                onChange={(e) => {
                  inputOnChange("dateOfBirth", e.target.value);
                }}
                type="date"
                className="form-control "
                id="dob"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Gender</label>
              <select
                value={fromValue.gender}
                onChange={(e) => {
                  inputOnChange("gender", e.target.value);
                }}
                className="form-select"
                aria-label="Default select example"
              >
                <option>Select Your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="AD" className="form-label fw-bold">
                Admission Date
              </label>
              <input
                value={fromValue.admissionDate}
                onChange={(e) => {
                  inputOnChange("admissionDate", e.target.value);
                }}
                type="date"
                className="form-control "
                id="AD"
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="course" className="form-label fw-bold">
                Course
              </label>
              <input
                value={fromValue.courses}
                onChange={(e) => {
                  inputOnChange("courses", e.target.value);
                }}
                type="text"
                placeholder="Bangla, English"
                className="form-control "
                id="course"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="nationality" className="form-label fw-bold">
                Nationality
              </label>
              <input
                value={fromValue.nationality}
                onChange={(e) => {
                  inputOnChange("nationality", e.target.value);
                }}
                type="text"
                placeholder="Bangladesh"
                className="form-control "
                id="nationality"
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputAddress" className="form-label fw-bold">
                Address
              </label>
              <input
                value={fromValue.address}
                onChange={(e) => {
                  inputOnChange("address", e.target.value);
                }}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <button onClick={Save} type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default SavePage;
