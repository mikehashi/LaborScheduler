import axios from "axios";

export default {
  // Gets all books
  getEmps: function() {
    return axios.get("/api/emps");
  },
  // Gets the book with the given id
  getEmp: function(id) {
    return axios.get("/api/emps/" + id);
  },
  // Deletes the book with the given id
  deleteEmp: function(id) {
    return axios.delete("/api/emps/" + id);
  },
  // Saves a book to the database
  saveEmp: function(empData) {
    return axios.post("/api/emps", empData);
  }
};
