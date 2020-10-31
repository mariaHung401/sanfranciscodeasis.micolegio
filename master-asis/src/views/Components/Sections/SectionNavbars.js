import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h3 className={classes.title}>
              <strong>Objetivo General</strong>
            </h3>
            <h4>
              Desarrollar una acción educativa integral y de calidad, fundamentada en los valores evangélicos con carisma franciscano e isabeliano, que promuevan la justicia, el trabajo, la participación y la solidaridad, con una opción preferencial por los pobres, que dé respuesta a las necesidades de la persona, orientándola a la comunicación filia, con el Padre y a la comunidad fraterna con los hermanos en un compromiso con la sociedad y con la Iglesia.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
