import React, { useState } from "react";

function Student() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      className: "Class A",
      gender: "Male",
      phone: "0630000000",
    },
    {
      id: 2,
      name: "Amina Hassan",
      className: "Class B",
      gender: "Female",
      phone: "0631111111",
    },
  ]);

  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  // Add new student
  function addStudent(e) {
    e.preventDefault();

    if (!name.trim() || !className || !gender || !phone.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      className: className,
      gender: gender,
      phone: phone,
    };

    setStudents([...students, newStudent]);

    setName("");
    setClassName("");
    setGender("");
    setPhone("");
  }

  // Delete student
  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  return (
    <div className="student-page">
      <h2 className="student-title">Student Management</h2>

      {/* Statistics */}
      <div className="student-cards">
        <div className="student-card">
          <p>Total Students</p>
          <h2>{students.length}</h2>
        </div>

        <div className="student-card">
          <p>Active Students</p>
          <h2>{students.length}</h2>
        </div>
      </div>

      {/* Add Student Form */}
      <div className="student-form">
        <h3>Register New Student</h3>

        <form onSubmit={addStudent}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
            <option value="Class C">Class C</option>
          </select>

          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Add Student</button>
        </form>
      </div>

      {/* Student Table */}
      <div className="student-table">
        <h3>Student List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.className}</td>
                <td>{student.gender}</td>
                <td>{student.phone}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="6">No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
