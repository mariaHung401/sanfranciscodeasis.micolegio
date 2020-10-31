import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Carousel from "react-slick";
import Button from "components/CustomButtons/Button.js";

import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import ps from "assets/img/colegio/ps.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Epónimo</h3>
      <h5 className={classes.title}>“San Francisco de Asis”</h5>
      <div>
        <GridContainer justify="center">
          <GridItem>
            <Button color="info" simple target="_blank">
              <ArrowForwardIosRoundedIcon />
              Desliza...
            </Button>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card plain carousel>
              <Carousel {...settings}>
                <div>
                  <Button color="info" simple target="_blank">
                    <strong>1</strong>
                  </Button>
                  <h5>
                    <strong>Francisco nació </strong>en 1182 en la ciudad de Asís (Italia). Era una villa próspera de uno dos mil habitantes. Sus padres Pedro Bernardone y Donna Pica, era una familia plebeya. Su padre había alcanzado la prosperidad económica como fruto de su esfuerzo y habilidad para los negocios. 
                  </h5>
                </div>
                <div>
                  <Button color="info" simple target="_blank">
                    <strong>2</strong>
                  </Button>
                  <h5>
                    Los nobles lo respetaban por su astucia como comerciante, pero no era aceptado por la nobleza, por eso se propuso educar a su hijo en las mejores escuelas y universidades del país, pues estaba convencido de que sería admirado y aceptado por su preparación y gallardía como cualquier aristócrata. Su madre se encargó de su educación moral y su padre le enseñó francés y el arte del comercio. Lo que más le entusiasmaba en su juventud, era el canto y la poesía también le gustaba asistir a fiestas y parrandas con los amigos. Francisco era generoso, al contrario de su padre que era avaro y solo le interesaba acumular riquezas. Cuando se incorporó al mundo de los negocios, demostró que era mal comerciante, regalaba a los pobres las telas que vendía su padre. Se dedicó a vivir una vida libertina, era vanidoso y quería ser admirado. Su vida de juglar se reducía a comer y beber en compañía de sus amigos. Anhelaba ser el primero en todo, por eso soñaba con grandezas militares, pues tenía cualidades para ello: caballerosidad, valentía y nobleza.
                  </h5>
                </div>
                <div>
                  <Button color="info" simple target="_blank">
                    <strong>3</strong>
                  </Button>
                  <h5>
                    Un día orando ante el Crucifijo de San Damián, le haba el Señor: “Francisco vete, repara mi Iglesia”. A partir de este momento Francisco cambia de rumbo, rompe con su padre dominador y acumulador de riquezas y se identifica con los pobres y pasa a ser un pobre más. Descubrió en el pobre, su hermano, se solidariza con él, ya que poniéndose de parte de ellos podía cambiar su vida. El encuentro cara a cara con el leproso, el pobre más pobre de su época, es el que más influye en su conversión.
                  </h5>
                </div>
                <div>
                  <Button color="info" simple target="_blank">
                    <strong>4</strong>
                  </Button>
                  <h5>
                    Su conversión fue total, el Evangelio será su norma de vida. Comienza a unírsele muchos compañeros, jóvenes y personas de la región hasta formar un grupo importante que lo seguían y compartían su vida de oración y de perfección espiritual basada en el desprendimiento de la vida terrena. El 3 de octubre de 1226, estigmatizado con las llagas de Cristo, Francisco entrega su alma al Señor a los 45 años de edad y a los 20 de su conversión. El 15 de julio de 1228 fue canonizado solemnemente.
                  </h5>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <h3 className={classes.title}>Filosofía Institucional</h3>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={9}>
            <h3>
              <strong>Insignia</strong>
            </h3>
          </GridItem>
          <GridItem xs={12} sm={12} md={4} className={classes.marginAuto}>
            <Card plain carousel>
              <Carousel {...settings}>
                <div>
                  <img src={ps} alt="First slide" className="slick-image" />
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Misión
                <br />
              </h4>
              <CardBody>
                <h5>
                  La Unidad Educativa Colegio "San Francisco de Asís", ubicada en Maracaibo del Municipio Autónomo Maracaibo, es una plataforma de unión y servicio a la comunidad circundante y a los  sectores populares de la ciudad, donde se ofrece una educación integral de calidad en proceso constante de superación y generadora de cambios significativos; y al mismo tiempo se busca fortalecer la convivencia en fraternidad entre niños, niñas, jóvenes y adultos siguiendo los valores evangélicos al estilo franciscano - isabeliano.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Card plain>
              <h4 className={classes.cardTitle}>
                Visión
                <br />
              </h4>
              <CardBody>
                <h5>
                  Pretendemos que en nuestra institución se esfuerce cada día por ser un Centro Educativo apostólico, potenciando un servicio de auténtica excelencia en la acción educadora y evangelizadora, abierta a la comunidad, capaz de congregar a los diferentes entes que la conforman, al realizar de obras concretas de apertura hacia un futuro esperanzador, dinamizando el crecimiento humano - cristiano desde los valores evangélicos a través de una formación franciscano – isabeliano.
                </h5>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
