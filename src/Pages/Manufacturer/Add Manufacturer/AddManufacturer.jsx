import React from "react";
import "./manufacturer.css";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Navbar from "../../../Components/Navbar/Navbar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddManufacturer() {
    const [name, setName] = React.useState();
    const [status, setStatus] = React.useState();

    const navigate = useNavigate();

    const submit = async(e) => {
      e.preventDefault();
      try {
        const data = await axios.post('https://localhost:7107/SuperVillain/addManufacturer', {name, status});
        navigate('/manufacturer');
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
            <h4>Add Manufacturer</h4>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="none" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Add Manufacturer</Typography>
            </Breadcrumbs>
          </div> */}
          <div className="form">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Manufacturer Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="Manufacturer Name" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-4">
                <label for="exampleFormControlInput1" class="form-label">Status</label>
                <select class="form-select" aria-label="Default select example" name="status" onChange={(e) => setStatus(e.target.value)}>
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
