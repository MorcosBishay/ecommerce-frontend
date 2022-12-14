/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { Button, Grid, Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import { getAllFruitsWithPagination } from '../../../services/api/fruit.services'
import { getAllVegetablesWithPagination } from '../../../services/api/vegetable.services'
import { getAllElectronicsWithPagination } from '../../../services/api/electronics.services'
import styles from './styles'
import useClasses from '../../../hooks/useClasses'
import MyPagination from './MyPagination'
import Loading from '../../Loading/Loading'
import './toast.css'

export default function BasicTable({
  clicked,
  value,
  sortType,
  submit,
  setSubmit,
}) {
  const classes = useClasses(styles)

  const limit = 9
  const [page, setPage] = useState(1)

  const handleApiRequest = async () => {
    let data
    if (clicked === 'Food') {
      if (value === 0) {
        data = await getAllFruitsWithPagination(limit, page, sortType)
      } else {
        data = await getAllVegetablesWithPagination(limit, page, sortType)
      }
    } else {
      data = await getAllElectronicsWithPagination(limit, page, sortType)
    }
    return data
  }

  const { data, isLoading } = useQuery(
    ['items', page, clicked, value, sortType],
    handleApiRequest,
  )

  useEffect(() => {
    setSubmit(false)
    setPage(1)
  }, [submit])

  useEffect(() => {
    setPage(1)
  }, [clicked, value])

  if (isLoading) return <Loading />

  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Table>
          <TableBody>
            {data.documents.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" width="70%">
                  <Typography className={classes.nameTypography}>
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell align="left" width="15%">
                  <Typography className={classes.priceTypography}>
                    ${row.price.toFixed(2)}
                  </Typography>
                </TableCell>
                <TableCell align="right" width="15%">
                  <Button
                    onClick={() => {
                      toast.success(
                        `Successfully Bought ${row.name} for $${row.price}`,
                        {
                          position: 'top-right',
                          autoClose: 2000,
                        },
                      )
                    }}
                    variant="contained"
                    className={classes.button}
                    sx={{
                      boxShadow: 0,
                    }}
                  >
                    <Typography className={classes.buttonTypography}>
                      Buy Now
                    </Typography>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={12}>
        <MyPagination page={page} setPage={setPage} totalPages={data.pages} />
      </Grid>
    </Grid>
  )
}

BasicTable.propTypes = {
  clicked: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  sortType: PropTypes.string.isRequired,
  submit: PropTypes.bool.isRequired,
  setSubmit: PropTypes.func.isRequired,
}
