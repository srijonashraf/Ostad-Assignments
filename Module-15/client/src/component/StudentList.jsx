import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { deleteStudent, getAllStudent } from "../apiRequest/apiRequest";

const StudentList = () => {
  const [student, setStudent] = useState([]);
  const [change, setChange] = useState(0);

  useEffect(() => {
    (async () => {
      const res = await getAllStudent();
      setStudent(res);
    })();
  }, [change]);

  const onDelete = async (id) => {
    const res = await deleteStudent(id);

    if (res) {
      toast.success("Delete Success");
      setChange(new Date().getTime());
    } else {
      toast.success("Delete Failed");
    }
  };
  if (student === undefined) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>DOB</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>AdmissionDate</th>
                  <th>Nationality</th>
                  <th>Courses</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {student &&
                  student.map((item, i) => (
                    <tr key={i}>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.email}</td>
                      <td>{new Date(item.dateOfBirth).toLocaleDateString()}</td>
                      <td>{item.phone}</td>
                      <td>{item.address}</td>
                      <td>{item.gender}</td>
                      <td>
                        {new Date(item.admissionDate).toLocaleDateString()}
                      </td>
                      <td>{item.nationality}</td>
                      <td>{item.courses}</td>
                      <td>
                        <button
                          onClick={() => {
                            onDelete(item._id);
                          }}
                          className="btn mx-2 btn-danger"
                        >
                          Delete
                        </button>
                        <Link
                          to={"/save?id=" + item._id}
                          className="btn mx-2 btn-success"
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default StudentList;
