import React from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import HeaderLinks from "components/Header/HeaderLinks.js";
import HeaderLeft from "components/Header/HeaderLeft.js";

import styles from "assets/jss/material-kit-react/views/components.js";

import logo from "assets/img/colegio/logo.png";
import WorkSection from "./Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={<HeaderLeft />}
        color="transparent"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "warning",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/colegio/amarillo.jpg")}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem justify="center" xs={12} sm={12} md={12}>
              <div className={classes.brand}>
                <h6>Colegio</h6>
                <h2>
                  <strong>
                    San Francisco <br /> de Asís
                  </strong>
                </h2>
              </div>
              <div className={classes.brand}>
                <img src={logo} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
