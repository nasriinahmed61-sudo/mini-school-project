import React, { useState } from "react";

function Registration() {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    fullName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    nationality: "",
    address: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function registerStudent(e) {
    e.preventDefault();

    if (Object.values(form).some((value) => !value.trim())) {
      alert("Please complete all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...form,
    };

    setStudents([...students, newStudent]);

    setForm({
      fullName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      phone: "",
      email: "",
      nationality: "",
      address: "",
    });

    alert("Student registered successfully!");
  }

  return (
    <div className="management-page">
      <h2 className="page-title">Student Registration</h2>

      <div className="management-cards">
        <div className="management-card">
          <p>Total Registrations</p>
          <h2>{students.length}</h2>
        </div>
      </div>

      <div className="management-box">
        <h3>Student Personal Information</h3>

        <form onSubmit={registerStudent} className="registration-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter full name"
              value={form.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              placeholder="Enter middle name"
              value={form.middleName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select name="gender" value={form.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Nationality</label>
            <input
              type="text"
              name="nationality"
              placeholder="Enter nationality"
              value={form.nationality}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter home address"
              value={form.address}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button type="submit" className="register-btn">
            Register Student
          </button>
        </form>
      </div>

      {/* Registered Students */}
      <div className="management-box">
        <h3>Registered Students</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Nationality</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>
                  {student.fullName} {student.middleName} {student.lastName}
                </td>
                <td>{student.gender}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>{student.nationality}</td>
                <td>{student.address}</td>
              </tr>
            ))}

            {students.length === 0 && (
              <tr>
                <td colSpan="8">No registered students yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Registration;
