import axios from 'axios';
import React , { useEffect ,useState }  from 'react';
import {Link} from 'react-router-dom';

const StudentsList = () =>
{
    const [ students, setStudents ] = useState([]);

    useEffect(()=>{
        fetch();
    },[])

    const fetch = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/api/students/`);
        try{
            // console.log(res.data.students);
            setStudents(res.data.students);
        }
        catch(e){
            console.log(e);
        }
    };

    const removeStudent = async (id) => {
        const res = await axios.get(`http://127.0.0.1:8000/api/remove-student/${id}`);
        try{
            console.log(res.data.message);
            fetch();
        }
        catch(e){
            console.log(e);
        }
    }

        return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Students Data
                                    <Link to={'add-student'} className="btn btn-primary btn-sm float-end">Add Student</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Course</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {students.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.course}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                                            </td>
                                            <td>
                                            <button className="btn btn-danger btn-sm" onClick={()=>removeStudent(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                     ) )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
}

export default StudentsList;