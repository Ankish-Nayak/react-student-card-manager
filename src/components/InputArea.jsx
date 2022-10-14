import React from 'react';
export default function InputArea(props) {
    const { student, addStudent, handleChange } = props;
    return (
        <form action="">
            <input name="firstName"
                value={student.firstName}
                placeholder="firstName"
                onChange={handleChange}
                className='inputArea-firstName' />
            <input name="lastName"
                value={student.lastName}
                placeholder="lastName"
                onChange={handleChange}
                className='inputArea-lastName' />
            <button className='inputArea-add' onClick={(e) => {
                e.preventDefault();
                addStudent();
            }}>Add</button>
        </form>
    );
}