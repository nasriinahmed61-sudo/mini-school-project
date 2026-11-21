import React, { useState } from "react";

function ClassManagement() {
  const [classes, setClasses] = useState([
    { id: 1, name: "Class A", teacher: "Ahmed Ali", students: 30 },
    { id: 2, name: "Class B", teacher: "Amina Hassan", students: 25 },
  ]);

  const [className, setClassName] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [studentCount, setStudentCount] = useState("");

  const totalStudents = classes.reduce(
    (total, item) => total + Number(item.students),
    0,
  );

  const totalTeachers = new Set(
    classes.map((item) => item.teacher.trim().toLowerCase()),
  ).size;

  function addClass(e) {
    e.preventDefault();

    if (
      !className.trim() ||
      !teacherName.trim() ||
      studentCount === "" ||
      Number(studentCount) < 0
    ) {
      alert("Please fill in all fields correctly");
      return;
    }

    const newClass = {
      id: Date.now(),
      name: className,
      teacher: teacherName,
      students: Number(studentCount),
    };

    setClasses([...classes, newClass]);

    setClassName("");
    setTeacherName("");
    setStudentCount("");
  }

  function deleteClass(id) {
    setClasses(classes.filter((item) => item.id !== id));
  }

  return (
    <div className="management-page">
      <h2 className="page-title">Class Management</h2>

      {/* Three Cards */}
      <div className="management-cards">
        <div className="management-card">
          <p>Total Classes</p>
          <h2>{classes.length}</h2>
        </div>

        <div className="management-card">
          <p>Total Students</p>
          <h2>{totalStudents}</h2>
        </div>

        <div className="management-card">
          <p>Teachers</p>
          <h2>{totalTeachers}</h2>
        </div>
      </div>

      {/* Add Class Form */}
      <div className="management-box">
        <h3>Add New Class</h3>

        <form onSubmit={addClass} className="management-form">
          <input
            type="text"
            placeholder="Class Name"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Teacher Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />

          <input
            type="number"
            min="0"
            placeholder="Student Count"
            value={studentCount}
            onChange={(e) => setStudentCount(e.target.value)}
          />

          <button type="submit">Add Class</button>
        </form>
      </div>

      {/* Class List */}
      <div className="management-box">
        <h3>Class List</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Class Name</th>
              <th>Teacher Name</th>
              <th>Student Count</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.teacher}</td>
                <td>{item.students}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => deleteClass(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {classes.length === 0 && (
              <tr>
                <td colSpan="5">No classes available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClassManagement;
