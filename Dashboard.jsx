import React from "react";

function Dashboard() {
  return (
    <div className="content">
      <h2 className="page-title">School Dashboard</h2>

      <div className="cards">
        <div className="card">
          <p>Students</p>
          <h2>1</h2>
        </div>

        <div className="card">
          <p>Teachers</p>
          <h2>2</h2>
        </div>

        <div className="card">
          <p>Classes</p>
          <h2>2</h2>
        </div>

        <div className="card">
          <p>Departments</p>
          <h2>13</h2>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section">
          <h3>Attendance</h3>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
          <p>Attendance Overview</p>
        </div>

        <div className="section">
          <h3>Upcoming Events</h3>
          <p>School Meeting</p>
          <p>Examination</p>
          <p>Annual Celebration</p>
        </div>

        <div className="section">
          <h3>Notice Board</h3>
          <p>School Announcements</p>
          <p>Important Information</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
