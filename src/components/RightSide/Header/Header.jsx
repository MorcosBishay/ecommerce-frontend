import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'
import styles from './styles'
import useClasses from '../../../hooks/useClasses'

function Header({ text }) {
  const classes = useClasses(styles)
  return (
    <Grid container direction="column">
      <Grid item className={classes.firstGridItem}>
        <Typography className={classes.titleTypography}>{text}</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.messageTypography}>
          Welcome back, Olivia!
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Header

Header.propTypes = {
  text: PropTypes.string.isRequired,
}
