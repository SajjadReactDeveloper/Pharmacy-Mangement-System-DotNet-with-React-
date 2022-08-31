import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddManufacturer from './Pages/Manufacturer/Add Manufacturer/AddManufacturer';
import ViewManufacturer from './Pages/Manufacturer/View Manufacturer/ViewManufacturer';
import AddCategory from './Pages/Category/Add Category/AddCategory';
import ViewCategory from './Pages/Category/View Category/ViewCategory';
import AddMedicine from './Pages/Medicine/Add Medicine/AddMedicine';
import ViewMedicine from './Pages/Medicine/View Medicine/ViewMedicine';
import ViewInvoice from './Pages/Invoice/View Invoice/ViewInvoice';
import AddInvoice from './Pages/Invoice/Add Invoice/AddInvoice';
import EditManufacturer from './Pages/Manufacturer/Edit Manufacturer/EditManufacturer';
import EditInvoice from './Pages/Invoice/Edit Invoice/EditInvoice';
import EditCategory from './Pages/Category/Edit Category/EditCategory';
import EditMedicine from './Pages/Medicine/Edit Medicine/EditMedicine';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Auth/Login/Login';
import Expire from './Pages/Expire/Expire';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element = {<Dashboard />} />
            <Route path='/login' exact element = {<Login />} />
            <Route path='/manufacturer/add' exact element = {<AddManufacturer />} />
            <Route path='/manufacturer/edit' exact element = {<EditManufacturer />} />
            <Route path='/manufacturer' exact element = {<ViewManufacturer />} />
            <Route path='/category/add' exact element = {<AddCategory />} />
            <Route path='/category/edit' exact element = {<EditCategory />} />
            <Route path='/category' exact element = {<ViewCategory />} />
            <Route path='/medicine/add' exact element = {<AddMedicine />} />
            <Route path='/medicine/edit' exact element = {<EditMedicine />} />
            <Route path='/medicine' exact element = {<ViewMedicine />} />
            <Route path='/invoice/add' exact element = {<AddInvoice />} />
            <Route path='/invoice/edit' exact element = {<EditInvoice />} />
            <Route path='/invoice' exact element = {<ViewInvoice />} />
            <Route path='/expire' exact element = {<Expire />} />
        </Routes>
    </BrowserRouter>
  )
}
