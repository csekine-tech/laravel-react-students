import axios from 'axios';
import React , { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Addstudent = () =>
{
    const initialFormState = { id: '', name: '', course: '', email: '', phone: ''};
    const[student, setStudent] = useState(initialFormState);
    const handleInput = (event) => {
        const { name, value } = event.target
        setStudent({ ...student, [name]: value })
    }

    const saveStudent = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/add-student',{...student});
        if(res.data.status === 200){
            console.log(res.data.message);
            setStudent(initialFormState);
        }
    }

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Add Students
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveStudent}>
                                    <div className='form-group mb-3'>
                                        <label>Student Name</label>
                                        <input type="text" name="name" onChange={handleInput} value={student.name} className="form-control"></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Student Course</label>
                                        <input type="text" name="course" onChange={handleInput} value={student.course} className="form-control"></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Student Email</label>
                                        <input type="text" name="email" onChange={handleInput} value={student.email} className="form-control"></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label>Student Phone</label>
                                        <input type="text" name="phone" onChange={handleInput} value={student.phone} className="form-control"></input>
                                    </div>
                                    <div className='form-group mb-3'>
                                        <button type="submit" className="btn btn-primary">Save Student</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Addstudent;