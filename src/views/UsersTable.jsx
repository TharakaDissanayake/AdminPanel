import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstname', headerName: 'First name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  { field: 'type', headerName: 'Type', width: 130 },
  { field: 'preferences', headerName: 'Preferences', width: 130 },
  { field: 'tel', headerName: 'Phone1', width: 130 },
  // { field: 'tel2', headerName: 'Phone2', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
]

export default function UsersTable() {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/users/all-users',
        )

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

// function ClientsTable(props) {
//   const [tableData, setTableData] = useState([])
//   useEffect(() => {
//     async function getUser() {
//       try {
//         const { data } = await axios.get(
//           'http://localhost:5000/users/all-users',
//         )

//         setTableData(data)
//       } catch (error) {
//         console.error(error)
//       }
//     }
//     getUser()
//   }, [])
//   console.log(tableData)
//   //   const item1 = tableData.map(
//   //     (data) =>
//   //       ` <tr><td>${data.email}</td><td>${data.firstName}</td><td>${data.lastName}</td><td>${data._id}</td></tr>`,
//   //   )

//   //   const item = tableData.map((c) => `<li>${c.email}</li>`)
//   //   console.log()
//   return (
//     <React.Fragment>
//       <Container fluid className="main-content-container px-4">
//         {/* Page Header */}
//         <Row noGutters className="page-header py-4">
//           <PageTitle
//             sm="4"
//             title="Clients Details"
//             subtitle="AgroLanka|Clients"
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
//                       <TableCell>Email</TableCell>
//                       <TableCell>First Name</TableCell>
//                       <TableCell>Last Name</TableCell>
//                       <TableCell>Type</TableCell>
//                       <TableCell>Address</TableCell>
//                       <TableCell>District</TableCell>
//                       <TableCell>Preferences</TableCell>
//                       <TableCell>Phone1</TableCell>
//                       <TableCell>Phone2</TableCell>
//                       <TableCell>DOB</TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {tableData.map((data) => {
//                       return (
//                         <TableRow key={data._id}>
//                           <TableCell>{data.email}</TableCell>
//                           <TableCell>{data.firstname}</TableCell>
//                           <TableCell>{data.lastname}</TableCell>
//                           <TableCell>{data.type}</TableCell>
//                           <TableCell>{data.address}</TableCell>
//                           <TableCell>{data.location}</TableCell>
//                           <TableCell>{data.preferences}</TableCell>
//                           <TableCell>{data.tel}</TableCell>
//                           <TableCell>{data.tel2}</TableCell>
//                           <TableCell>{data.dob}</TableCell>
//                         </TableRow>
//                       )
//                     })}
//                   </TableBody>
//                 </Table>
//                 {/* <table className="table mb-0">
//                         <thead className="bg-light">
//                           <tr>
//                             <th scope="col" className="border-0">
//                               First Name
//                             </th>
//                             <th scope="col" className="border-0">
//                               Last Name
//                             </th>
//                             <th scope="col" className="border-0">
//                               NIC
//                             </th>
//                             <th scope="col" className="border-0">
//                               Phone1
//                             </th>
//                             <th scope="col" className="border-0">
//                               Phone2
//                             </th>
//                             <th scope="col" className="border-0">
//                               Email
//                             </th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {tableData.map((row) => {
//                             return `<tr><td>${row.firstName}</td></tr>`
//                           })}
//                         </tbody>
//                       </table> */}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>

//         {/* Default Dark Table */}
//         <Row>
//           <Col>
//             <Card small className="mb-4 overflow-hidden">
//               <CardHeader className="bg-dark">
//                 <h6 className="m-0 text-white">Active Users</h6>
//               </CardHeader>
//               <CardBody className="bg-dark p-0 pb-3">
//                 <table className="table table-dark mb-0">
//                   <thead className="thead-dark">
//                     <tr>
//                       <th scope="col" className="border-0">
//                         #
//                       </th>
//                       <th scope="col" className="border-0">
//                         First Name
//                       </th>
//                       <th scope="col" className="border-0">
//                         Last Name
//                       </th>
//                       <th scope="col" className="border-0">
//                         Country
//                       </th>
//                       <th scope="col" className="border-0">
//                         City
//                       </th>
//                       <th scope="col" className="border-0">
//                         Phone
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>1</td>
//                       <td>Ali</td>
//                       <td>Kerry</td>
//                       <td>Russian Federation</td>
//                       <td>Gdańsk</td>
//                       <td>107-0339</td>
//                     </tr>
//                     <tr>
//                       <td>2</td>
//                       <td>Clark</td>
//                       <td>Angela</td>
//                       <td>Estonia</td>
//                       <td>Borghetto di Vara</td>
//                       <td>1-660-850-1647</td>
//                     </tr>
//                     <tr>
//                       <td>3</td>
//                       <td>Jerry</td>
//                       <td>Nathan</td>
//                       <td>Cyprus</td>
//                       <td>Braunau am Inn</td>
//                       <td>214-4225</td>
//                     </tr>
//                     <tr>
//                       <td>4</td>
//                       <td>Colt</td>
//                       <td>Angela</td>
//                       <td>Liberia</td>
//                       <td>Bad Hersfeld</td>
//                       <td>1-848-473-7416</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </React.Fragment>
//   )
// }

// export default ClientsTable
