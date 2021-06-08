import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { UserContext } from '../../../App';
import TableSpinner from '../TableSpinner/TableSpinner';

const AllAdmin = () => {
    const { loggedInUser : {email} } = useContext(UserContext);
    const [admins, setAdmins] = useState([]);


    useEffect(() => {
        axios.get('https://moto-repair.herokuapp.com/all-admin')
            .then(res => {
                setAdmins(res.data);
            })
            .catch(error => toast.error(error.message))
    }, [])

    const handleDeleteReview = (id) =>{
        if (email === "admin@test.gmail") {
            return swal("Permission restriction!", "As a test-admin, you don't have this permission.", "info");
        }

        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this Admin?",
            icon: "warning",
            buttons: [true, "Yes"],
            dangerMode: true,
        }).then(wantDelete => {
            if (wantDelete) {
                const loading = toast.loading('Deleting...Please wait!');
                const removedAdmins = admins.filter(item => item._id !== id);
                axios.delete(`https://moto-repair.herokuapp.com/remove-admin/${id}`)
                    .then(res => {
                        toast.dismiss(loading);
                        if (res.data) {
                            setAdmins(removedAdmins)
                            return swal("Successfully Deleted!", "This Admin has been successfully deleted.", "success");
                        }
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
                    })
                    .catch(err => {
                        toast.dismiss(loading);
                        swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true })
                    })
                 }
            });   
    }
    return (
        <Container>
        <div className="shadow p-5 bg-white" style={{ borderRadius: "15px" }}>
            {
                admins.length >0  ? 
                <Table className='table-style' hover responsive >
                    <thead className="bg-light ">
                        <tr>
                            <th>Sl. No</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                        {
                            admins.map((admin, index) => {
                                return (
                                    <tbody key={admin._id}>
                                        <tr>
                                            <td>{index+1}</td>
                                            <td>{admin.email}</td>
                                            <td>
                                                <Button variant="outline-danger" className="p-1 ml-3 mb-0"onClick={()=> handleDeleteReview(admin._id)}>
                                                    <FontAwesomeIcon icon={faTrash} className="mx-1" />
                                                </Button>
                                            </td>
                                        </tr>
                                    </tbody> ) })
                        }
                </Table> : <TableSpinner />
            }
         </div>
  </Container>
    );
};

export default AllAdmin;