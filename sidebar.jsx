import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h2>School Management</h2>

      <button onClick={() => setPage("home")}>Home</button>

      <button onClick={() => setPage("class")}>Class</button>

      <button onClick={() => setPage("student")}>Student</button>

      <button onClick={() => setPage("finance")}>Finance</button>

      <button onClick={() => setPage("staff")}>Staff</button>

      <button onClick={() => setPage("registration")}>Registration</button>

      <div className="profile"></div>
    </div>
  );
}

export default Sidebar;
