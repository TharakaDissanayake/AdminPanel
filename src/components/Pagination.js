import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}))

function PaginationNew(props) {
  const classes = useStyles()
  const { pagesCount } = props
  return (
    <div className={classes.root}>
      <Pagination count={pagesCount} color="primary" />
    </div>
  )
}

export default PaginationNew
