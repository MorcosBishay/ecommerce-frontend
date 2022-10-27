import { Grid } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import RightSide from "../../components/RightSide/RightSide";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";

const Products = () => {
  const classes = useClasses(styles);
  const [clicked, setClicked] = React.useState("Food");
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item xs={2}>
        <Sidebar clicked={clicked} setClicked={setClicked} />
      </Grid>
      <Grid item xs={10} className={classes.rightSideRootGrid}>
        <Grid item className={classes.rightSideSubGrid}>
          <RightSide clicked={clicked} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
