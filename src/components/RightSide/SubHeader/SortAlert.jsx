import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./styles";
import useClasses from "../../../hooks/useClasses";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function SortAlert({
  open,
  handleClose,
  sortType,
  setSortType,
  setSubmit,
}) {
  const classes = useClasses(styles);

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth>
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
                value={sortType}
                label="By"
                onChange={(e) => setSortType(e.target.value)}
              >
                <MenuItem value={"name"}>
                  <Typography className={classes.alertMenuItems}>
                    Name ( from A to Z )
                  </Typography>
                </MenuItem>
                <MenuItem value={"-name"}>
                  <Typography className={classes.alertMenuItems}>
                    Name ( from Z to A )
                  </Typography>
                </MenuItem>
                <MenuItem value={"price"}>
                  <Typography className={classes.alertMenuItems}>
                    Price ( from low to high )
                  </Typography>
                </MenuItem>
                <MenuItem value={"-price"}>
                  <Typography className={classes.alertMenuItems}>
                    Price ( from high to low )
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.alertButton}>
            <Typography className={classes.alertCancelTypography}>
              Cancel
            </Typography>
          </Button>
          <Button
            onClick={() => {
              handleClose();
              setSubmit(true);
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
  );
}

SortAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  setSubmit: PropTypes.func.isRequired,
};
