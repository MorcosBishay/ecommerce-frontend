import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";

const CustomButton = ({ logo, coloredLogo, text, clicked, setClicked }) => {
  const classes = useClasses(styles);

  return (
    <Button
      onClick={() => setClicked(text)}
      className={classes.customButton}
      sx={{
        backgroundColor: clicked === text ? "#FFF6F1" : "#FFFFFF",
      }}
    >
      <Grid container direction="row">
        <Grid item className={classes.logoGrid}>
          {clicked === text ? coloredLogo : logo}
        </Grid>
        <Grid item>
          <Typography
            className={classes.typography}
            sx={{
              color: clicked === text ? "#FE6215" : "#344054",
            }}
          >
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default CustomButton;
