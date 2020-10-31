import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import Carousel from "react-slick";
import Button from "components/CustomButtons/Button.js";

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import image from "assets/img/colegio/Imagen1.png";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>Reseña Histórica del Plantel</h3>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4>
            El año 1940, fueron llamadas las Hermanas franciscanas del Sagrado Corazón de Jesús por el Padre Hilario de Escalante, O.F.M. Cap., para la fundación de un colegio en la ciudad de Maracaibo.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <h4>
            Las hermanas María del Sagrario (Superiora), Encarnación, María Cecilia, San Rafael, María del Crucificado y Marta, llegan a Maracaibo el día 3 de noviembre, quienes son recibidas por el Padre Hilario de Escalante, la Hna. Teófila, superiora de las Hermanitas de los Pobres, quien le brinda hospedaje en el Asilo de Mendigos y un grupo de seglares, hasta el día 09 del presente mes y año, cuando pasan a la casa que les tenía preparada, situada en la esquina de las Delicias y el Paraíso.
          </h4>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <h4>
            El colegio comenzó a funcionar el día 19 de noviembre, con 75 a 80 niños y niñas, que el Padre Hilario de Escalante, ya había inscrito. Allí comienzan las hermanas a ejercer su apostolado educativo. Es de acotar, la gran colaboración que prestaron la feligresía y las autoridades locales (Dr. Manuel Maldonado, presidente de Ciudad, Drs. Enrique Acosta, Parra Valbuena, Atencio, Luís Ríos de Vicente) y eclesiásticas (Padres Capuchinos) para la dotación y el mantenimiento inicial del colegio.
          </h4>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem>
          <Link to="/historia">
            <Button color="info" simple target="_blank">
              <ChevronRightRoundedIcon />
              Seguir leyendo
            </Button>
          </Link>
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h3>
            <strong>Identidad Institucional</strong>
          </h3>
        </GridItem>
        <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
          <Card plain carousel>
            <Carousel {...settings}>
              <div>
                <img src={image} alt="First slide" className="slick-image" />
              </div>
            </Carousel>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
