import React, { useState } from "react";

function Finance() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      className: "Class A",
      amount: 50,
      date: "2026-11-20",
    },
    {
      id: 2,
      name: "Amina Hassan",
      className: "Class B",
      amount: 0,
      date: "2026-11-20",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    className: "",
    amount: "",
    date: "",
  });

  const paidStudents = payments.filter((p) => Number(p.amount) > 0).length;

  const unpaidStudents = payments.filter((p) => Number(p.amount) === 0).length;

  const totalPaid = payments.reduce((total, p) => total + Number(p.amount), 0);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function addPayment(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.className ||
      form.amount === "" ||
      Number(form.amount) < 0 ||
      !form.date
    ) {
      alert("Please complete all fields correctly");
      return;
    }

    const newPayment = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setPayments([...payments, newPayment]);

    setForm({
      name: "",
      className: "",
      amount: "",
      date: "",
    });
  }

  function deletePayment(id) {
    setPayments(payments.filter((p) => p.id !== id));
  }

  return (
    <div className="management-page">
      <h2 className="page-title">Finance Management</h2>

      {/* Four Cards */}
      <div className="finance-cards">
        <div className="management-card">
          <p>Paid Students</p>
          <h2>{paidStudents}</h2>
        </div>

        <div className="management-card">
          <p>Unpaid Students</p>
          <h2>{unpaidStudents}</h2>
        </div>

        <div className="management-card">
          <p>Total Students</p>
          <h2>{payments.length}</h2>
        </div>

        <div className="management-card">
          <p>Total Paid Amount</p>
          <h2>${totalPaid.toFixed(2)}</h2>
        </div>
      </div>

      {/* Add Student Fee */}
      <div className="management-box">
        <h3>Add Student Fee</h3>

        <form onSubmit={addPayment} className="finance-form">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={form.name}
            onChange={handleChange}
          />

          <select
            name="className"
            value={form.className}
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
            <option value="Class C">Class C</option>
          </select>

          <input
            type="number"
            name="amount"
            min="0"
            placeholder="Paid Amount ($)"
            value={form.amount}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <button type="submit">Add Student Fee</button>
        </form>
      </div>

      {/* Financial List */}
      <div className="management-box">
        <h3>Financial List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Class Name</th>
              <th>Paid Amount</th>
              <th>Payment Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.className}</td>
                <td>${Number(p.amount).toFixed(2)}</td>
                <td>{p.date}</td>
                <td>
                  <span
                    className={
                      Number(p.amount) > 0 ? "paid-status" : "unpaid-status"
                    }
                  >
                    {Number(p.amount) > 0 ? "Paid" : "Unpaid"}
                  </span>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deletePayment(p.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {payments.length === 0 && (
              <tr>
                <td colSpan="7">No financial records available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Finance;
