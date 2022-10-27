import '@fontsource/inter'

const styles = () => ({
  // Table Styles
  nameTypography: {
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '14px !important',
    color: '#101828 !important',
  },

  priceTypography: {
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    color: '#039855 !important',
  },

  button: {
    background: '#FDF8F5 !important',
    border: '1px solid #FDF2EC !important',
    borderRadius: '8px !important',
    textTransform: 'none !important',
    '&:hover': {
      background: '#FDF8F5 !important',
    },
  },

  buttonTypography: {
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '14px !important',
    color: '#FE6215 !important',
  },

  // Pagination Styles
  root: {
    paddingTop: '30px !important',
  },
  previousButton: {
    textTransform: 'none !important',
    width: '108px !important',
    boxShadow: 'none !important',
    background: 'transparent !important',
    '&:disabled': {
      background: 'transparent !important',
    },
    '&:hover': {
      background: 'transparent !important',
      boxShadow: 'none !important',
    },
  },
  previousTypography: {
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    fontSize: '14px !important',
    color: '#667085 !important',
  },

  nextButton: {
    textTransform: 'none !important',
    width: '80px !important',
    boxShadow: 'none !important',
    background: 'transparent !important',
    '&:disabled': {
      background: 'transparent !important',
    },
    '&:hover': {
      background: 'transparent !important',
      boxShadow: 'none !important',
    },
  },

  nextTypography: {
    fontFamily: 'Inter !important',
    fontStyle: 'normal !important',
    fontWeight: '500 !important',
    paddingBottom: '5px !important',
    fontSize: '14px !important',
    color: '#667085 !important',
  },
})

export default styles
