import "@fontsource/inter";

const styles = () => ({
  // Tabs Styles
  tabs: {
    border: " 1px solid #D7D8DB !important",
    borderRadius: "8px !important",
    minHeight: "40px !important",
    height: "40px !important",
  },

  leftTab: {
    minHeight: "40px !important",
    height: "40px !important",
    textTransform: "none !important",
    borderRight: "1px solid #D7D8DB !important",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "#344054 !important",
    "&.Mui-selected": {
      backgroundColor: "#FE6215 !important",
      color: "#FFFFFF !important",
    },
  },

  rightTab: {
    minHeight: "40px !important",
    height: "40px !important",
    textTransform: "none !important",
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "#344054 !important",
    "&.Mui-selected": {
      backgroundColor: "#FE6215 !important",
      color: "#FFFFFF !important",
    },
  },

  // SubHeader Styles
  button: {
    textTransform: "none !important",
    background: "#FFFFFF  !important",
    border: "1px solid #D0D5DD !important",
    boxShadow: "0px 1px 2px rgba(16, 24, 40, 0.05) !important",
    borderRadius: "8px !important",
    padding: "0px !important",
    width: "110px !important",
    height: "40px !important",
    lineHeight: "0px  !important",
  },
  typography: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "#344054 !important",
  },

  // Alert Styles
  alertTitle: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "20px !important",
  },
  alertCancelTypography: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
  },

  alertSubmitTypography: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "14px !important",
    color: "#FE6215  !important",
  },

  alertButton: {
    textTransform: "none !important",
  },
  alertMenuItems: {
    fontFamily: "Inter !important",
    fontStyle: "normal !important",
    fontWeight: "500 !important",
    fontSize: "16px !important",
  },
});

export default styles;
