import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddMedicine() {
  const [name, setName] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const [rate, setRate] = React.useState();
  const [expire, setExpire] = React.useState();
  const [manufacturer, setManufacturer] = React.useState();
  const [category, setCategory] = React.useState();
  const [status, setStatus] = React.useState();
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:7107/SuperVillain/addMedicine", {
        name,
        quantity,
        rate,
        expire,
        manufacturer,
        category,
        status,
      });
      navigate("/medicine");
    } catch (error) {}
  };

  React.useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        "https://localhost:7107/SuperVillain/manufacturer"
      );
      setData(data.data);
      const res1 = await axios.get(
        `https://localhost:7107/SuperVillain/category`
      );
      setData1(res1.data);
    };
    getData();
  });
  return (
    <div>
      <div className="row m-0 p-0">
        <div className="col-2 m-0 p-0">
          <Sidebar />
        </div>
        <div className="col-10 m-0 p-0 main">
          <Navbar />
          {/* <div className="header">
            <h4>Add Medicine</h4>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="none" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Add Medicine</Typography>
            </Breadcrumbs>
          </div> */}
          <div className="form mt-5">
            <div className="row">
              <div className="col-12">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Medicine Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="name"
                    placeholder="Medicine Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Quantity
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="quantity"
                    placeholder="Quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Rate
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="rate"
                    placeholder="Rate"
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    class="form-control"
                    id="exampleFormControlInput1"
                    name="expire"
                    placeholder=""
                    onChange={(e) => setExpire(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Manufacturer Name
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="manufacturer"
                    onChange={(e) => setManufacturer(e.target.value)}
                  >
                    <option selected>-- Select --</option>
                    {data.map((data1) => (
                      <option value={data1.status == "Available" ? data1.name : null}>{data1.status == "Available" ? data1.name : null}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Category Name
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option selected>-- Select --</option>
                    {data1.map((data1) => (
                      <option value={data1.status == "Available" ? data1.name : null}>{data1.status == "Available" ? data1.name : null}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-6">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Status
                  </label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option selected>-- Select --</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-2" style={{ float: "right" }}>
              <button className="btn btn-primary" onClick={submit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
