import React from "react";
import AppNavbar from "../component/AppNavbar";
import StudentList from "../component/StudentList";

const ListPage = () => {
  return (
    <div>
      <AppNavbar />
      <StudentList></StudentList>
    </div>
  );
};

export default ListPage;
