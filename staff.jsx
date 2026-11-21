import React, { useState } from "react";

function Staff() {
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Mohamed Hassan",
      position: "Teacher",
      phone: "0630000000",
    },
    {
      id: 2,
      name: "Amina Ahmed",
      position: "Accountant",
      phone: "0631111111",
    },
  ]);

  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState("");

  function addStaff(e) {
    e.preventDefault();

    if (!name.trim() || !position || !phone.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newStaff = {
      id: Date.now(),
      name,
      position,
      phone,
    };

    setStaff([...staff, newStaff]);

    setName("");
    setPosition("");
    setPhone("");
  }

  function deleteStaff(id) {
    setStaff(staff.filter((person) => person.id !== id));
  }

  return (
    <div className="management-page">
      <h2 className="page-title">Staff Management</h2>

      <div className="management-cards">
        <div className="management-card">
          <p>Total Staff</p>
          <h2>{staff.length}</h2>
        </div>

        <div className="management-card">
          <p>Teachers</p>
          <h2>{staff.filter((s) => s.position === "Teacher").length}</h2>
        </div>

        <div className="management-card">
          <p>Other Staff</p>
          <h2>{staff.filter((s) => s.position !== "Teacher").length}</h2>
        </div>
      </div>

      <div className="management-box">
        <h3>Add New Staff</h3>

        <form onSubmit={addStaff} className="management-form">
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Select Position</option>
            <option value="Teacher">Teacher</option>
            <option value="Accountant">Accountant</option>
            <option value="Principal">Principal</option>
            <option value="Secretary">Secretary</option>
            <option value="Cleaner">Cleaner</option>
          </select>

          <input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button type="submit">Add Staff</button>
        </form>
      </div>

      <div className="management-box">
        <h3>Staff List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {staff.map((person, index) => (
              <tr key={person.id}>
                <td>{index + 1}</td>
                <td>{person.name}</td>
                <td>{person.position}</td>
                <td>{person.phone}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteStaff(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Staff;
