import React from "react";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';

export default function EditCategory() {
    const [name, setName] = React.useState();
    const [status, setStatus] = React.useState();

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const submit = async(e) => {
      e.preventDefault();
      try {
        axios.put('https://localhost:7107/SuperVillain/updateCategory', {id: data.id ,name, status});
        navigate('/category');
      } catch (error) {
        
      }
    }
  return (
    <div>
      <div className="row m-0 p-0">
        <div className="col-2 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-10 m-0 p-0 main">
          <Navbar />
          {/* <div className="header">
            <h4>Edit Category</h4>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="none" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Edit Category</Typography>
            </Breadcrumbs>
          </div> */}
          <div className="form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Category Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" defaultValue={data.name} name="name" placeholder="Category Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Status</label>
                <select class="form-select" aria-label="Default select example" defaultValue={data.status} name="status" onChange={(e) => setStatus(e.target.value)}>
                    <option selected>-- Select --</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>
            </div>
            <div className="mb-2" style={{ float: 'right' }}>
                <button className="btn btn-primary" onClick={submit} >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
