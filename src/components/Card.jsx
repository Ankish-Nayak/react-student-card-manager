import React from "react";
export default function Card(props) {
    const { student, deleteStudent } = props;
    return (
        <div className="card">
            <p className="card-fristName">{student.firstName}</p>
            <p className="card-lastName">{student.lastName}</p>
            <button className="card-button" onClick={() => {
                deleteStudent(student.id);
            }}>
                Delete
            </button>
        </div>
    );
}