import React from 'react'
import PropTypes from 'prop-types'
import { Button, Grid, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg'
import { ReactComponent as LeftArrow } from '../../../assets/LeftArrow.svg'
import styles from './styles'
import useClasses from '../../../hooks/useClasses'

function MyPagination({ page, setPage, totalPages }) {
  const classes = useClasses(styles)

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item alignSelf="center">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className={classes.previousButton}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <LeftArrow />
            </Grid>
            <Grid item alignSelf="center">
              <Typography className={classes.previousTypography}>
                Previous
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Grid>
      <Grid item alignSelf="center">
        <Pagination
          count={totalPages}
          page={page}
          hidePrevButton
          hideNextButton
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className={classes.nextButton}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography className={classes.nextTypography}>Next</Typography>
            </Grid>
            <Grid item>
              <RightArrow />
            </Grid>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  )
}

export default MyPagination

MyPagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
}
