import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./styles";
import useClasses from "../../../hooks/useClasses";

export default function BasicTabs({ value, handleChange }) {
  const classes = useClasses(styles);

  return (
    <Box>
      <Tabs
        TabIndicatorProps={{ style: { display: "none" } }}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <Tab className={classes.leftTab} label="Fruits" />
        <Tab className={classes.rightTab} label="Vegetables" />
      </Tabs>
    </Box>
  );
}

BasicTabs.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};
