import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import styles from "assets/jss/material-kit-react/views/componentsSections/OtherStyle.js";
import stylesComplet from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);
const useStylesComplet = makeStyles(stylesComplet);

export default function SectionCarousel() {
  const classes = useStyles();
  const classesComplet = useStylesComplet();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h3 className={classesComplet.title}>Objetivo Específico</h3>
            <h4 className={classesComplet.title}>
              Desarrollar una acción educativa integral y de calidad,
              fundamentada en los valores evangélicos con carisma franciscano e
              isabeliano, que promuevan la justicia, el trabajo, la
              participación y la solidaridad, con una opción preferencial por
              los pobres, que dé respuesta a las necesidades de la persona,
              orientándola a la comunicación filia, con el Padre y a la
              comunidad fraterna con los hermanos en un compromiso con la
              sociedad y con la Iglesia.
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9} className={classes.marginAuto}>
            <h3 className={classesComplet.title}>
              <strong>
                Promover una educación de calidad desde los valores humanos – cristianos, en sintonía con el espíritu franciscano e isabeliano y de acuerdo al ordenamiento legal venezolano. 
              </strong>
            </h3>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem>
            <Link to="/Objetivos-especificos">
              <Button color="info" simple target="_blank">
                <ChevronRightRoundedIcon />
                Seguir leyendo
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
