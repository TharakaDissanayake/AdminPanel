import React from 'react'
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Title', width: 200 },
  { field: 'category', headerName: 'Category', width: 110 },
  { field: 'price', headerName: 'Price', width: 130 },
  { field: 'qty', headerName: 'Quantity', width: 130 },
  { field: 'unit', headerName: 'Unit', width: 80 },
  { field: 'description', headerName: 'Description', width: 300 },
]

function NewPublishedAdsTable(props) {
  const [tableData, setTableData] = useState([])
  useEffect(() => {
    async function getUser() {
      try {
        const { data } = await axios.get(
          'http://localhost:5000/ads/all-promoted-ads',
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

export default NewPublishedAdsTable
