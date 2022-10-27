import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Header from "./Header/Header";
import SubHeader from "./SubHeader/SubHeader";
import BasicTable from "./Table/BasicTable";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";

const RightSide = ({ clicked }) => {
  const classes = useClasses(styles);

  const [value, setValue] = useState(0);
  const [sortType, setSortType] = useState("name");
  const [submit, setSubmit] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="row">
      <Grid item xs={12} className={classes.headerGrid}>
        <Header text={clicked} />
      </Grid>
      <Grid item className={classes.grid} xs={12}>
        <SubHeader
          clicked={clicked}
          value={value}
          handleChange={handleChange}
          sortType={sortType}
          setSortType={setSortType}
          setSubmit={setSubmit}
        />
      </Grid>
      <Grid item className={classes.grid} xs={12}>
        <BasicTable
          clicked={clicked}
          value={value}
          sortType={sortType}
          submit={submit}
          setSubmit={setSubmit}
        />
      </Grid>
    </Grid>
  );
};

export default RightSide;

RightSide.propTypes = {
  clicked: PropTypes.string.isRequired,
};
