import React from "react";
export default function Card(props) {
    const { student, deleteStudent } = props;
    return (
        <div className="card">
            <div className="card-data">
            <p className="card-firstName"><span className='light'>First Name</span>: {student.firstName}</p>
            <p className="card-lastName"><span className='light'>Last Name</span> : {student.lastName}</p>
            </div>
            <button className="card-delete" onClick={() => {
                deleteStudent(student.id);
            }}>
                Delete
            </button>
        </div>
    );
} 