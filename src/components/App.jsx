import React from 'react';
import {nanoid} from 'nanoid';
import InputArea from './InputArea';
import OutputArea from './OutputArea'; 
export default function App() {
    const [student, setStudent] = React.useState({
        firstName: '',
        lastName: ''
    });
    const [students, setStudents] = React.useState([]);

    function addStudent() {
        setStudents((prevStudents) => {
            return [
                ...prevStudents,
                {
                    id: nanoid(),
                    ...student
                }
            ];
        });
    }
    function deleteStudent(id) {
        setStudents((prevStudents) => {
            return prevStudents.filter(prevStudent => prevStudent.id !== id);
        });
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setStudent(prevStudent => {
            return {
                ...prevStudent,
                [name]: value
            };
        });
    } 
    return (
        <div className="App">
            <InputArea
                student={student}
                addStudent={addStudent}
                handleChange={handleChange}
            />
            <OutputArea
                students={students}
                deleteStudent={deleteStudent}
            />
        </div>
    );
}