import React from "react";
import Card from "./Card";
export default function OutputArea(props) {
    const { students, deleteStudent } = props;
    return (
        <>
            {
                students.map((student) => <Card
                    key={student.id}
                    student={student}
                    deleteStudent={deleteStudent}
                />)
            }
        </>
    )
}