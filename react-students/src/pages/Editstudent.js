import axios from 'axios';
import React , { useState, useEffect } from 'react';
import {Link, useParams } from 'react-router-dom';


const Editstudent = () => {
    const {id} = useParams();
    const initialFormState = { id: id, name: '', course: '', email: '', phone: ''};
    const[student, setStudent] = useState(initialFormState);
    // const[name, setName] = useState('');
    // const[course, setCourse] = useState('');
    // const[email, setEmail] = useState('');
    // const[phone, setPhone] = useState('');


    useEffect(()=>{
        const fetch = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/api/student/${id}`);
            if(res.data.status === 200){
                    // setName(res.data.student.name);
                    // setCourse(res.data.student.course);
                    // setEmail(res.data.student.email);
                    // setPhone(res.data.student.phone);
                setStudent(res.data.student);
            }
        }
        fetch();

    },[])

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setStudent({ ...student, [name]: value })
      }

    const updateStudent = async()=>{
        document.getElementById('updateButton').innerText = "updating..."
        const res = await axios.post(`http://127.0.0.1:8000/api/update-student/${id}`,{...student});
        if(res.data.status === 200){
            console.log(res.data.message);
            document.getElementById('updateButton').innerText = "success!"
        }else{
            document.getElementById('updateButton').innerText = "failure"
        }
    }
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h4>Edit Students
                            <Link to={'/'} className="btn btn-primary btn-sm float-end">BACK</Link>
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={updateStudent}>
                            <div className='form-group mb-3'>
                                <label>Student Name</label>
                                <input type="text" name="name" onChange={handleInputChange} value={student.name} className="form-control"></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label>Student Course</label>
                                <input type="text" name="course" onChange={handleInputChange} value={student.course} className="form-control"></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label>Student Email</label>
                                <input type="text" name="email" onChange={handleInputChange} value={student.email} className="form-control"></input>
                            </div>
                            <div className='form-group mb-3'>
                                <label>Student Phone</label>
                                <input type="text" name="phone" onChange={handleInputChange} value={student.phone} className="form-control"></input>
                            </div>
                            <div className='form-group mb-3'>
                                <button type="submit" className="btn btn-primary" id="updateButton">Update Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}



export default Editstudent;