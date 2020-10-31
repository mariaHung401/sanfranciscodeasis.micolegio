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
              <strong>Valores</strong>
            </h3>
            <h4>
              Fe, verdad, alegría, solidaridad, responsabilidad, honestidad, respeto, perdón, minoridad, paz, justicia, libertad, oración, espiritualidad, servicio, humildad, sencillez y ecología.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
