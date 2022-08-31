import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddInvoice() {
    const [date, setDate] = React.useState();
    const [client, setClient] = React.useState();
    const [contact, setContact] = React.useState();
    const [medicine, setMedicine] = React.useState();
    const [rate, setRate] = React.useState();
    const [quantity, setQuantity] = React.useState();
    const [total, setTotal] = React.useState();
    const [type, setType] = React.useState();
    const [status, setStatus] = React.useState();
    const [data, setData] = React.useState([]);

    const navigate = useNavigate();

    const submit = async(e) => {
      e.preventDefault();
      try {
        await axios.post('https://localhost:7107/SuperVillain/addInvoice', {date, client, contact, medicine, rate, quantity, total, type, status});
        navigate('/invoice');
      } catch (error) {
        
      }
    }

    React.useEffect(() => {
      const getData = async () => {
        const data = await axios.get(
          "https://localhost:7107/SuperVillain/medicine"
        );
        setData(data.data);
      };
      getData();
    });

    const medicineFUnc = (value) => {
      setMedicine(value);
      data.map(data => (
        data.name == value ? setRate(data.rate) : null
      ))
    }

    const TotalFunc = (value) => {
      value = value ? value : 1;
      setQuantity(value);
      var total =  (parseInt(rate) * parseInt(value));
      setTotal(total.toString());
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
            <h4>Add Invoice</h4>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="none" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Add Invoice</Typography>
            </Breadcrumbs>
          </div> */}
          <div className="form mt-3" style={{ width: 700 }}>
            <div className="row">
                <div className="col-12">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Date</label>
                        <input type="date" class="form-control" id="exampleFormControlInput1" name="date" placeholder="" onChange={(e) => setDate(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Client Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="client" placeholder="Client Name" onChange={(e) => setClient(e.target.value)} />
                    </div>
                </div>
                <div className="col-6">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Client Contact</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="contact" placeholder="Client Contact" onChange={(e) => setContact(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Medicine Name</label>
                        <select class="form-select" aria-label="Default select example" name="medicine" onChange={(e) => medicineFUnc(e.target.value)}>
                        <option selected>-- Select --</option>
                    {data.map((data1) => (
                      <option value={data1.status == "Available" ? data1.name : null}>{data1.status == "Available" ? data1.name : null}</option>
                    ))}
                </select>
                    </div>
                </div>
                <div className="col-3">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Rate</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" value={rate} name="rate" disabled  placeholder="Rate" />
                    </div>
                </div>
                <div className="col-3">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Quantity</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="quantity" placeholder="Quantity" onChange={(e) => TotalFunc(e.target.value)} />
                    </div>
                </div>
                <div className="col-3">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Total</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" disabled value={total === NaN ? "Total" : total} name="total" placeholder="Total" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Payment Type</label>
                        <select class="form-select" aria-label="Default select example" name="type" onChange={(e) => setType(e.target.value)}>
                    <option selected>-- Select --</option>
                    <option value="cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
                    </div>
                </div>
                <div className="col-6">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Status</label>
                        <select class="form-select" aria-label="Default select example" name="status" onChange={(e) => setStatus(e.target.value)}>
                    <option selected>-- Select --</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>
                    </div>
                </div>
            </div>
            <div className="mb-2" style={{ float: 'right' }}>
                <button className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
