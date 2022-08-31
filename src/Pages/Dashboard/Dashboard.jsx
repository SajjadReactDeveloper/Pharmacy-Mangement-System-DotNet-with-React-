import React from "react";
// react-bootstrap components
import { Card, Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import { AiFillMedicineBox } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { FaFileInvoiceDollar } from "react-icons/fa";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import FactoryIcon from '@mui/icons-material/Factory';
import ListIcon from '@mui/icons-material/List';
import MedicationIcon from '@mui/icons-material/Medication';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Date",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Client Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Medicin Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Quantity",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Total",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Invoices
        </Typography>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function Dashboard() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState();
  const [medicines, setMedicines] = React.useState();
  const [manufacturers, setManufacturers] = React.useState();
  const [invoices, setInvoices] = React.useState();

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://localhost:7107/SuperVillain/invoice`
      );
      const data = await axios.get(
        "https://localhost:7107/SuperVillain/manufacturer"
      );
      const medicine = await axios.get(
        `https://localhost:7107/SuperVillain/medicine`
      );
      setInvoices(res.data.length);
      setManufacturers(data.data.length);
      setMedicines(medicine.data.length);
    };
    getData();
  }, []);

  const series1 = [44, 55, 13, 43, 22];
const options1 = {
  chart: {
    width: 380,
    type: "pie",
  },
  labels: [],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [open, setOpen] = React.useState(false);

  const handleClick1 = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const navigate = useNavigate();

  const [cars, setCars] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `https://localhost:7107/SuperVillain/invoice`
      );
      setCars(res.data);
      console.log(res.data)
    };
    getData();
  }, []);

  const handleClick = (data) => {
    navigate("/admin/complaints/detail", { state: data });
    // history.push({
    //   pathname: '/admin/complaintDetails',
    //   state: data
    // });
  };

  const deleteComplaint = async (id) => {
    try {
      const res = await axios.delete(
        `https://localhost:7107/SuperVillain/deleteInvoice/${id}`
      );
      navigate("/invoice");
    } catch (error) {}
  };

  const [collapse, setCollapse] = React.useState(false);

    const handleLogout = async () => {
      try {
        localStorage.setItem('Login', 'false');
        window.location.href = "/";
      } catch (error) {
        window.location.href = "/";
      }
    };

  const handleClickOpen = (data) => {
    navigate("/invoice/edit", { state: data });
  };
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-2 p-0 m-0">
        <ProSidebar
      style={{ height: "100vh", backgroundColor: "#265077", position: 'fixed' }}
      toggled="true"
      collapsed={collapse}
      breakPoint="xs"
      onToggle={() => {
        setCollapse(true);
      }}
    >
      <SidebarHeader>
        <div className="logo-details" style={{ padding: 10 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="p-2"
            >
              <Avatar alt="Remy Sharp" style={{ marginRight: 10 }} />
              <span className="logo_name ml-2">Pharmacy Management</span>
            </div>
        </div>
      </SidebarHeader>
      <Menu popperArrow innerSubMenuArrows>
        <MenuItem style={{ paddingLeft: 0 }} icon={<HomeIcon />} active>
          Dashboard
          <Link to="/" />
        </MenuItem>
        <SubMenu title="Manufacturer" icon={<FactoryIcon />}>
          <MenuItem>
            Add Manufacturer
            <Link to="/manufacturer/add" />
          </MenuItem>
          <MenuItem>
            Manage Manufacturer
            <Link to="/manufacturer" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Categories" icon={<ListIcon />}>
          <MenuItem>
            Add Categories
            <Link to="/category/add" />
          </MenuItem>
          <MenuItem>
            Manage Categories
            <Link to="/category" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Medicines" icon={<MedicationIcon />}>
          <MenuItem>
            Add Medicines
            <Link to="/medicine/add" />
          </MenuItem>
          <MenuItem>
            Manage Medicines
            <Link to="/medicine" />
          </MenuItem>
        </SubMenu>
        <SubMenu title="Invoices" icon={<InsertDriveFileIcon />}>
          <MenuItem>
            Add Invoice
            <Link to="/invoice/add" />
          </MenuItem>
          <MenuItem>
            Manage Invoice
            <Link to="/invoice" />
          </MenuItem>
        </SubMenu>
        <MenuItem icon={<LogoutIcon />} onClick = {handleLogout}>Logout</MenuItem>
      </Menu>
    </ProSidebar>
        </div>
        <div className="col-10 p-0 m-0" style={{ backgroundColor: 'black' }}>
          <Navbar />
          <Container className="mt-5">
            <Row className="justify-content-md-center mb-5">
              <Col lg="3" sm="6">
                <Card className="card-stats" style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <AiFillMedicineBox
                            style={{ fontSize: 60, color: "green" }}
                          />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Total Medicine</p>
                          <Card.Title as="h4" style={{ color: 'white' }}>{medicines}</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="fas fa-redo mr-1"></i>
                      Update Now
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats" style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <BsBuilding style={{ fontSize: 60, color: "blue" }} />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Total Manufacturer</p>
                          <Card.Title as="h4" style={{ color: 'white' }}>{manufacturers}</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="far fa-calendar-alt mr-1"></i>
                      Last day
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
              <Col lg="3" sm="6">
                <Card className="card-stats" style={{ backgroundColor: 'black', color: 'white' }}>
                  <Card.Body>
                    <Row>
                      <Col xs="5">
                        <div className="icon-big text-center icon-warning">
                          <FaFileInvoiceDollar
                            style={{ fontSize: 60, color: "orange" }}
                          />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Total Invoices</p>
                          <Card.Title as="h4" style={{ color: 'white' }}>{invoices}</Card.Title>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer>
                    <hr></hr>
                    <div className="stats">
                      <i className="far fa-clock-o mr-1"></i>
                      In the last hour
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>

            <div
              style={{
                display: "flex",
                justifyContent: 'center',
                marginBottom: "40px",
                marginTop: "50px",
              }}
            >
              <div className="">
                <div className="" style={{ marginRight: "80px", color: 'white' }}>
                  <Chart
                    options={options1}
                    series={series1}
                    type="pie"
                    width={500}
                    height={320}
                  />
                </div>
              </div>
              <div className="">
                <Chart
                  options={options}
                  series={series}
                  type="bar"
                  width={500}
                  height={320}
                />
              </div>
            </div>

            
          </Container>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
