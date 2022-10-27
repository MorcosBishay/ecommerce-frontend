import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Typography } from '@mui/material'
import { ReactComponent as Filter } from '../../../assets/FilterLines.svg'
import styles from './styles'
import useClasses from '../../../hooks/useClasses'
import SortAlert from './SortAlert'

function SortButton({
  handleClickOpen,
  handleClose,
  open,
  sortType,
  setSortType,
  setSubmit,
}) {
  const classes = useClasses(styles)
  return (
    <>
      <Button className={classes.button} onClick={handleClickOpen}>
        <Grid container direction="row" justifyContent="center" gap="8px">
          <Grid item>
            <Filter />
          </Grid>
          <Grid item>
            <Typography className={classes.typography}>Sort By</Typography>
          </Grid>
        </Grid>
      </Button>
      <SortAlert
        open={open}
        handleClose={handleClose}
        sortType={sortType}
        setSortType={setSortType}
        setSubmit={setSubmit}
      />
    </>
  )
}

export default SortButton

SortButton.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  setSubmit: PropTypes.func.isRequired,
}
