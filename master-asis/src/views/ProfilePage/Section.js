import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h3 className={classes.title}>Objetivo Específico</h3>
            <h4>
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
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                1. Promover una educación de calidad desde los valores humanos – cristianos, en sintonía con el espíritu franciscano e isabeliano y de acuerdo al ordenamiento legal venezolano. 
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                2. Fortalecer el principio de “Educador formador de hombres” con identidad católica franciscana, haciendo énfasis en la fraternidad, minoridad y oración.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                3. Formar jóvenes con capacidad para interpretar la realidad, la cultura y los valores del pueblo
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                4. Facilitar espacios para la preparación del docente a fin de que se mantenga actualizado en las nuevas tendencias educativas. 
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                5. Lograr una efectiva sintonía entre el quehacer diario y el mensaje evangélico, actuando de manera práctica y concreta para la vida.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                6. Generar actitudes de cambio a nivel personal y grupal con el fin de responder a los signos de los tiempos, convencidos de que la justicia, la libertad responsable, los derechos humanos y la integración nacional debe ser nuestro compromiso.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                7. Impulsar una educación para el trabajo productivo y creativo con miras a la incorporación de los jóvenes al mercado de trabajo de acuerdo a los ideales de Madre Ysabel Lagrange.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                8. Establecer canales de participación para todos los miembros de la Comunidad Educativa, con el fin de optimizar el proceso pedagógico.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h4 className={classes.title}>
              <strong>
                9. Lograr la cooperación de organismos e instituciones del entorno y de la Región, con el propósito de mejorar el proceso pedagógico.
              </strong>
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
