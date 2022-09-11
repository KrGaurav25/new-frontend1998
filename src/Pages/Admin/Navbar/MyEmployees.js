import React from 'react'
import AdminNav from './AdminNav'
import './MyEmployees.css'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../../../Store/employeeSlice'
import * as ReactBootstrap from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const MyEmployees = () => {
    const item = useSelector((state) => state.employee)
    const dispatch = useDispatch();
    const handleRemove=(id)=>{
        dispatch(remove(id))
      }
    const renderItem = (item, index) => {
        return (
            <tr key={index}>
                <td>{item.title}</td>
                <td>{item.maxApplicants}</td>
                <td>{item.maxPositions}</td>
                <td>{item.maxPositions}</td>
                <td><Button onClick={()=>handleRemove(item._id)}>Terminate</Button></td>
            </tr>
        )
    }
  return (
    <div>
        <AdminNav/>
        <div style={{marginTop: "1rem"}}>
        <h1 className='itemsHeader'>EMPLOYEES IN THE COMPANY</h1>
            <div className='tablestyle'>
                <ReactBootstrap.Table striped variant='dark' hover>
                    <thead>
                        <tr>
                            <th>Item Title</th>
                            <th>Item maxApplicants</th>
                            <th>Item maxPositions</th>
                            <th>Add this item</th>
                            <th>Terminate Employment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item.map(renderItem)
                        }
                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><strong>Total Price</strong></td>
            
                            <td><Link to='/' className='btn btn-warning'><b>Buy It!</b></Link></td>
                        </tr>
                    </tfoot> */}
                </ReactBootstrap.Table>
            </div>
        </div>
    </div>
  )
}

export default MyEmployees