import React, { useEffect, useState } from 'react'
import { DataGrid, useApiRef } from '@material-ui/data-grid'
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'nic', headerName: 'NIC', width: 130 },
  { field: 'tel1', headerName: 'Phone1', width: 130 },
  { field: 'tel2', headerName: 'Phone2', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
]

export default function DataTable() {
  const [tableData, setTableData] = useState([])
  const apiRef = useApiRef()
  const handleUpdate = () => {
    apiRef.current.updateRows([
      {
        firstname: 'tttt',
        lastName: 'dddd',
        nic: '1111',
        tel1: '01122122',
        tel2: '01122',
        email: 'gggggg',
      },
    ])
  }
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get('http://localhost:5000/admin/all-data')

        setTableData(data)
        // newRows(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])

  let i
  for (i = 0; i < tableData.length; i++) {
    tableData[i].id = tableData[i]['_id']
    delete tableData[i]._id
  }
  console.log(tableData)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  )
}

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from '@material-ui/core'
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Container, Row, Col, Card, CardHeader, CardBody } from 'shards-react'

// import PageTitle from '../components/common/PageTitle'

// // const Tables = () => (
// //   useEffect(() => {
// //
// // }
// // return(<React.Fragment></React.Fragment>)

// // export default Tables

// function AdminTable(props) {
//   const [tableData, setTableData] = useState([])
//   useEffect(() => {
//     async function getUser() {
//       try {
//         const { data } = await axios.get('http://localhost:5000/admin/all-data')

//         setTableData(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     getUser()
//   }, [])
//   console.log(tableData)
//   const item1 = tableData.map(
//     (data) =>
//       ` <tr><td>${data.email}</td><td>${data.firstName}</td><td>${data.lastName}</td><td>${data._id}</td></tr>`,
//   )

//   const item = tableData.map((c) => `<li>${c.email}</li>`)
//   console.log()
//   return (
//     <React.Fragment>
//       <Container fluid className="main-content-container px-4">
//         {/* Page Header */}
//         <Row noGutters className="page-header py-4">
//           <PageTitle
//             sm="4"
//             title="Admin Details"
//             subtitle="AgroLanka|Admin"
//             className="text-sm-left"
//           />
//         </Row>

//         {/* Default Light Table */}
//         <Row>
//           <Col>
//             <Card small className="mb-4">
//               <CardHeader className="border-bottom">
//                 <h6 className="m-0">Active Users</h6>
//               </CardHeader>
//               <CardBody className="p-0 pb-3">
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>First Name</TableCell>
//                       <TableCell>Last Name</TableCell>
//                       <TableCell>NIC</TableCell>
//                       <TableCell>Phone1</TableCell>
//                       <TableCell>Phone2</TableCell>
//                       <TableCell>Email</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {tableData.map((data) => {
//                       return (
//                         <TableRow key={data.email}>
//                           <TableCell>{data.firstName}</TableCell>
//                           <TableCell>{data.lastName}</TableCell>
//                           <TableCell>{data.nic}</TableCell>
//                           <TableCell>{data.tel1}</TableCell>
//                           <TableCell>{data.tel2}</TableCell>
//                           <TableCell>{data.email}</TableCell>
//                         </TableRow>
//                       )
//                     })}
//                   </TableBody>
//                 </Table>
//                 {/* <table className="table mb-0">
//                     <thead className="bg-light">
//                       <tr>
//                         <th scope="col" className="border-0">
//                           First Name
//                         </th>
//                         <th scope="col" className="border-0">
//                           Last Name
//                         </th>
//                         <th scope="col" className="border-0">
//                           NIC
//                         </th>
//                         <th scope="col" className="border-0">
//                           Phone1
//                         </th>
//                         <th scope="col" className="border-0">
//                           Phone2
//                         </th>
//                         <th scope="col" className="border-0">
//                           Email
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {tableData.map((row) => {
//                         return `<tr><td>${row.firstName}</td></tr>`
//                       })}
//                     </tbody>
//                   </table> */}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>

//         {/* Default Dark Table */}
//         {/* <Row>
//     <Col>
//       <Card small className="mb-4 overflow-hidden">
//         <CardHeader className="bg-dark">
//           <h6 className="m-0 text-white">Active Users</h6>
//         </CardHeader>
//         <CardBody className="bg-dark p-0 pb-3">
//           <table className="table table-dark mb-0">
//             <thead className="thead-dark">
//               <tr>
//                 <th scope="col" className="border-0">
//                   #
//                 </th>
//                 <th scope="col" className="border-0">
//                   First Name
//                 </th>
//                 <th scope="col" className="border-0">
//                   Last Name
//                 </th>
//                 <th scope="col" className="border-0">
//                   Country
//                 </th>
//                 <th scope="col" className="border-0">
//                   City
//                 </th>
//                 <th scope="col" className="border-0">
//                   Phone
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Ali</td>
//                 <td>Kerry</td>
//                 <td>Russian Federation</td>
//                 <td>Gdańsk</td>
//                 <td>107-0339</td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Clark</td>
//                 <td>Angela</td>
//                 <td>Estonia</td>
//                 <td>Borghetto di Vara</td>
//                 <td>1-660-850-1647</td>
//               </tr>
//               <tr>
//                 <td>3</td>
//                 <td>Jerry</td>
//                 <td>Nathan</td>
//                 <td>Cyprus</td>
//                 <td>Braunau am Inn</td>
//                 <td>214-4225</td>
//               </tr>
//               <tr>
//                 <td>4</td>
//                 <td>Colt</td>
//                 <td>Angela</td>
//                 <td>Liberia</td>
//                 <td>Bad Hersfeld</td>
//                 <td>1-848-473-7416</td>
//               </tr>
//             </tbody>
//           </table>
//         </CardBody>
//       </Card>
//     </Col>
//   </Row> */}
//       </Container>
//     </React.Fragment>
//   )
// }

// export default AdminTable
