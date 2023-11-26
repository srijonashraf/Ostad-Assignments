import axios from "axios";

export async function getAllStudent() {
  try {
    const response = await axios.get("http://localhost:4500/students");

    return response.data["student"];
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
export async function getById(id) {
  try {
    const res = await fetch(`http://localhost:4500/student/${id}`);
    const jsonData = await res.json();
    return jsonData[0];
  } catch (error) {
    return [];
  }
}
export async function registration(postBody) {
  try {
    const res = await axios.post(`http://localhost:4500/add`, postBody);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
export async function StudentUpdate(postBody, id) {
  try {
    const res = await axios.put(`http://localhost:4500/update/${id}`, postBody);
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}
export async function deleteStudent(id) {
  try {
    const data = await axios.delete(`http://localhost:4500/students/${id}`);

    if (data.data.success === true) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return [];
  }
}
