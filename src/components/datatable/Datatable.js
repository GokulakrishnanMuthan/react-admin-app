import React from 'react'
import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom';


const columns = [
    {field: 'id', headerName: 'ID', width: 100 },
    {field: 'fullName', headerName: 'Full name',width: 160,
      renderCell : (params)=>{
         return (
         <div className='cellWithImg'>
           <img src={params.row.img} alt="user" className='cellImg' />
          <span>{params.row.firstName}  {params.row.lastName} </span>
        </div>
         )}
    },
  {field: 'age',   headerName: 'Age',    type: 'number',  width: 100,    },
  {field: 'status',   headerName: 'Status',    width: 150,  renderCell : (params)=>{
    return (
      <div className={`cellWithStatus ${params.row.status}` }>   {params.row.status} </div>
    )}   },
   
  ];

  
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35,status:'active',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42,status:'passive',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45,status:'pending',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,status:'passive',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 55,status:'active',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 50 ,status:'passive',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg"},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,status:'pending',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36,status:'active',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg" },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,status:'pending',img:"https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-941693.jpg&fm=jpg"},
  ];

  const actionColumn=[
    {field: 'action',headerName: 'Action',width: 200, renderCell : (params)=>{
      return (
        <div className='cellAction'>
           <Link to="/users/test" style={{textDecoration:'none'}}> 
                <div className="viewButton">View</div>
            </Link>  
            <div className="deleteButton" >Delete</div>
            
        </div>
      )} 
     },
  ]
const Datatable = () => {
  return (
    <div className='datatable'>

            <div className="datatableTitle">
                  Add New User
                  <Link to="/users/new" className='linkbtn'>
                      Add New  
                  </Link>
            </div>
            <DataGrid
                    className='datagrid'
                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={8}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
    </div>
  )
}

export default Datatable