import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
import SectionFeed from "./SectionFeed";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem sm={12} md={6}>
            <Card plain>
              <SectionFeed
                account="colesanfranciscomcbo"
                numberOfMediaElements={1}
              />
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <h3>Siguenos en instagram</h3>
            <h5>
              Somos un colegio dedicado a crear mejores ciudadanos guiados por
              las enseñanzas de San Francisco de Asís.
            </h5>
            <Button
              color="transparent"
              size="lg"
              href="https://www.instagram.com/colesanfranciscomcbo/"
              target="_blank"
            >
              Ver
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
