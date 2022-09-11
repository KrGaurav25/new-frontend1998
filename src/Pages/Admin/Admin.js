import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddJobs from './Navbar/AddJobs'
import Employees from './Navbar/Employee'
import Home from './Navbar/Home'
import MyJobs from './Navbar/MyJobs'
import Profile from './Navbar/Profileadmin'
import AdminNav from './Navbar/AdminNav'
import MyEmployees from './Navbar/MyEmployees'
import 'bootstrap/dist/css/bootstrap.min.css'
const Admin = () => {
    return (
        <div>
            <Router>
                <AdminNav/>
                <Routes>
                    <Route path='/admindashboard' element={<Home />} />
                    <Route path='/addjobs' element={<AddJobs />} />
                    <Route path='/applicants' element={<Employees />} />
                    <Route path='/myjobs' element={<MyJobs />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/myEmployees' element={<MyEmployees />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Admin