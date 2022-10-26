import React from "react";
import "@fontsource/inter";
import { Divider, Grid, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { ReactComponent as ShoppingBag } from "../../assets/ShoppingBag.svg";
import { ReactComponent as ShoppingBagColored } from "../../assets/ShoppingBagColored.svg";
import { ReactComponent as Headphones } from "../../assets/Headphones.svg";
import { ReactComponent as HeadphonesColored } from "../../assets/HeadphonesColored.svg";
import { ReactComponent as Avatar } from "../../assets/Avatar.svg";
import { ReactComponent as Logout } from "../../assets/Logout.svg";
import styles from "./styles";
import useClasses from "../../hooks/useClasses";

const Sidebar = () => {
  const classes = useClasses(styles);
  const [clicked, setClicked] = React.useState("Food");
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      className={classes.root}
    >
      <Grid item>
        <Grid item className={classes.sidebarLogo}>
          <Logo />
        </Grid>
        <Grid item className={classes.foodButton}>
          <CustomButton
            logo={<ShoppingBag />}
            coloredLogo={<ShoppingBagColored />}
            text="Food"
            clicked={clicked}
            setClicked={setClicked}
          />
        </Grid>
        <Grid item>
          <CustomButton
            logo={<Headphones />}
            coloredLogo={<HeadphonesColored />}
            text="Electronics"
            clicked={clicked}
            setClicked={setClicked}
          />
        </Grid>
      </Grid>

      <Grid item>
        <Divider className={classes.divider} />
        <Grid container direction="row" justifyContent="space-between">
          <Grid item className={classes.cursor}>
            <Avatar />
          </Grid>
          <Grid item>
            <Grid container direction="column" justifyContent="space-between">
              <Grid item>
                <Typography className={classes.nameTypography}>
                  Olivia Rhye
                </Typography>
              </Grid>
              <Grid item>
                <Typography className={classes.emailTypography}>
                  olivia@evarostudio.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.cursor}>
            <Logout />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
