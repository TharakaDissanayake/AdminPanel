import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'label', headerName: 'Label', width: 300 },
  { field: 'uri', headerName: 'URI', width: 700 },
]

export default function CategoryTable() {
  const [tableData, setTableData] = useState([])
  const [selection, setSelection] = useState([])
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/category/all-data',
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
    tableData[i].id = tableData[i]['value']
    delete tableData[i]._id
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionChange={(newSelection) => {
          console.log(`set selection =${newSelection}`)
          setSelection(newSelection.rows)
          console.log(`selection= ${selection}`)
        }}
      />
    </div>
  )
}
