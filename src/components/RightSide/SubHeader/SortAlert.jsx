import * as React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Box,
} from '@mui/material'
import styles from './styles'
import useClasses from '../../../hooks/useClasses'

export default function SortAlert({
  open,
  handleClose,
  sortType,
  setSortType,
  setSubmit,
}) {
  const classes = useClasses(styles)
  const [sort, setSort] = React.useState(sortType)

  React.useEffect(() => {
    setSort(sortType)
  }, [sortType])

  const handleCloseWithoutSubmit = async () => {
    await handleClose()
    setSort(sortType)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleCloseWithoutSubmit} fullWidth>
        <DialogTitle>
          <Typography className={classes.alertTitle}>Sort</Typography>
        </DialogTitle>
        <DialogContent>
          <Box padding={5}>
            <FormControl fullWidth>
              <InputLabel>
                <Typography className={classes.alertMenuItems}>By</Typography>
              </InputLabel>
              <Select
                value={sort}
                label="By"
                onChange={(e) => setSort(e.target.value)}
              >
                <MenuItem value="name">
                  <Typography className={classes.alertMenuItems}>
                    Name ( from A to Z )
                  </Typography>
                </MenuItem>
                <MenuItem value="-name">
                  <Typography className={classes.alertMenuItems}>
                    Name ( from Z to A )
                  </Typography>
                </MenuItem>
                <MenuItem value="price">
                  <Typography className={classes.alertMenuItems}>
                    Price ( from Low to High )
                  </Typography>
                </MenuItem>
                <MenuItem value="-price">
                  <Typography className={classes.alertMenuItems}>
                    Price ( from High to Low )
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseWithoutSubmit}
            className={classes.alertButton}
          >
            <Typography className={classes.alertCancelTypography}>
              Cancel
            </Typography>
          </Button>
          <Button
            onClick={async () => {
              handleClose()
              await setSortType(sort)
              setSubmit(true)
            }}
            className={classes.alertButton}
          >
            <Typography className={classes.alertSubmitTypography}>
              Submit
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

SortAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  setSubmit: PropTypes.func.isRequired,
}
