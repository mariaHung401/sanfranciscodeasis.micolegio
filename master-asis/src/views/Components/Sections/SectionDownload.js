import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Carousel from "react-slick";
import Button from "components/CustomButtons/Button.js";

// import image1 from "assets/img/colegio/logo2.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h4>NUESTRO LEMA:</h4>
            <h2>Paz y Amor</h2>
          </GridItem>
        </GridContainer>
        {/* <GridContainer justify="center">
          <GridItem xs={12} sm={5} md={2} className={classes.marginAuto}>
            <Carousel {...settings}>
              <div>
                <img src={image1} className="slick-image" />
              </div>
            </Carousel>
          </GridItem>
        </GridContainer> */}
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>Comunicate con nosotros!</h3>
            <h6>Números:</h6>
            <h5>0261-797.03.53 /0261-798.20.66</h5>
            <h6>Dirección</h6>
            <h5>Av 11 entre calles 71 y 72, sector Tierra Negra, Bellavista</h5>
          </GridItem>
        </GridContainer>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h3>Siguenos!</h3>
            <Button
              color="transparent"
              href="https://www.instagram.com/colesanfranciscomcbo/"
              target="_blank"
            >
              <i className={classes.socialIcons + " fab fa-instagram"} />
              Instagram
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
