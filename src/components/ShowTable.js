import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddIcon from '@material-ui/icons/Add'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined'
import CloseIcon from '@material-ui/icons/Close'
import Usetable from './FormParts/Conrols/useTable'
import TableBody from '@material-ui/core/TableBody'
import { TableRow } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone'
import { makeStyles, Toolbar, InputAdornment } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import Controls from './FormParts/Conrols/Controls'
import Popup from './FormParts/Popup'
import ReuseableForm from './FormParts/ReuseableForm'
import AdminForm from './AllForms/AdminForm'

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: '75%',
  },
}))

function ShowTable(props) {
  const classes = useStyles()
  const [records, setRecords] = useState([])
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items
    },
  })
  const headCells = [
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'nic', label: 'NIC' },
    { id: 'tel1', label: 'Phone-1' },
  ]
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get('http://localhost:5000/admin/all-data')

        setRecords(data)
        // newRows(data)
      } catch (error) {
        console.error(error)
      }
    }
    getUser()
  }, [])

  //Add admin route

  async function getAdmin() {
    axios
      .post('http://localhost:5000/admin/rgister', {
        firstName: 'Finn',
        lastName: 'Williams',
        email: 'yyyy@gmail.com',
        nic: '951951951v',
        tel1: '03323568525',
        password: '123456',
        passwordrepaeat: '123456',
        address: 'aaaaaaa',
      })
      .then(
        (response) => {
          console.log(response)
        },
        (error) => {
          console.log(error)
        },
      )
  }

  getAdmin()

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = Usetable(records, headCells, filterFn)

  const handleSearch = (e) => {
    let target = e.target
    setFilterFn({
      fn: (items) => {
        if (target.value === '') return items
        else
          return items.filter((x) =>
            x.firstName.toLowerCase().includes(target.value),
          )
      },
    })
  }
  // const addOrEdit = (admin, resetForm) => {
  //   if (employee.id == 0) employeeService.insertEmployee(employee)
  //   else employeeService.updateEmployee(employee)
  //   resetForm()
  //   setRecordForEdit(null)
  //   setOpenPopup(false)
  //   setRecords(employeeService.getAllEmployees())
  // }
  return (
    <React.Fragment>
      <Toolbar>
        <Controls.Input
          label="Search Employees"
          className={classes.searchInput}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
        <Controls.Button
          text="Add New"
          variant="outlined"
          startIcon={<AddIcon />}
          className={classes.newButton}
          onClick={() => {
            setOpenPopup(true)
            // setRecordForEdit(null)
          }}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.firstName}</TableCell>
              <TableCell>{item.lastName}</TableCell>
              <TableCell>{item.nic}</TableCell>
              <TableCell>{item.tel1}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />

      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Employee Form"
      >
        <AdminForm />
      </Popup>
      {/* <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <ReuseableForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup> */}
    </React.Fragment>
  )
}

export default ShowTable
