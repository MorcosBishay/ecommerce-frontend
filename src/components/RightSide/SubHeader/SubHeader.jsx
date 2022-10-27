import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import BasicTabs from "./BasicTabs";
import SortButton from "./SortButton";

const SubHeader = ({
  clicked,
  value,
  handleChange,
  sortType,
  setSortType,
  setSubmit,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        {clicked === "Food" ? (
          <BasicTabs value={value} handleChange={handleChange} />
        ) : null}
      </Grid>
      <Grid item>
        <SortButton
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
          sortType={sortType}
          setSortType={setSortType}
          setSubmit={setSubmit}
        />
      </Grid>
    </Grid>
  );
};

export default SubHeader;

SubHeader.propTypes = {
  clicked: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  setSubmit: PropTypes.func.isRequired,
};
