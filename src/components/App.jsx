import React from 'react';
import {nanoid} from 'nanoid';
import InputArea from './InputArea';
import OutputArea from './OutputArea'; 
import Navbar from './Navbar';
export default function App() {
    const [student, setStudent] = React.useState({
        firstName: '',
        lastName: ''
    });
    let array = [];
    if(localStorage.getItem('students')){
        array = JSON.parse(localStorage.getItem('students'));
    }
    const [students, setStudents] = React.useState(array);

    React.useEffect(()=>{
        localStorage.setItem('students',JSON.stringify(students));
        console.log('r');
    },[students]);


    function addStudent() { 
        setStudents(prevStudents => {
            return [
                ...prevStudents,
                {
                    ...student,
                    id: nanoid()
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
            <Navbar />
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