import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Reseña Histórica del Plantel</h2>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <h4 className={classes.description}>
            El año 1940, fueron llamadas las Hermanas franciscanas del Sagrado
            Corazón de Jesús por el Padre Hilario de Escalante, O.F.M. Cap.,
            para la fundación de un colegio en la ciudad de Maracaibo.
          </h4>
          <h4 className={classes.description}>
            Las hermanas María del Sagrario (Superiora), Encarnación, María
            Cecilia, San Rafael, María del Crucificado y Marta, llegan a
            Maracaibo el día 3 de noviembre, quienes son recibidas por el Padre
            Hilario de Escalante, la Hna. Teófila, superiora de las Hermanitas
            de los Pobres, quien le brinda hospedaje en el Asilo de Mendigos y
            un grupo de seglares, hasta el día 09 del presente mes y año, cuando
            pasan a la casa que les tenía preparada, situada en la esquina de
            las Delicias y el Paraíso.
          </h4>
          <h4 className={classes.description}>
            El colegio comenzó a funcionar el día 19 de noviembre, con 75 a 80
            niños y niñas, que el Padre Hilario de Escalante, ya había inscrito.
            Allí comienzan las hermanas a ejercer su apostolado educativo. Es de
            acotar, la gran colaboración que prestaron la feligresía y las
            autoridades locales (Dr. Manuel Maldonado, presidente de Ciudad,
            Drs. Enrique Acosta, Parra Valbuena, Atencio, Luís Ríos de Vicente)
            y eclesiásticas (Padres Capuchinos) para la dotación y el
            mantenimiento inicial del colegio.
          </h4>
          <h4 className={classes.description}>
            En esta primera navidad se celebró una misa y se colocó un bello
            nacimiento para estrenar un bonito altar de madera, donado por el
            Dr. Valbuena.
          </h4>
          <h4 className={classes.description}>
            El 14 de marzo de 1941, se nombró como directora a la Hna. Rosa de
            San Francisco de Asís. En cuanto a la formación espiritual y
            catequística, estuvo a cargo de las hermanas y del Padre Hilario.
          </h4>
          <h4 className={classes.description}>
            El colegio contaba con atención espiritual y sacramental, tres veces
            por semana a cargo de los Padres Capuchinos. El 19 de marzo de 1944,
            fue designado por Mons. Sergio Godoy, Obispo de Maracaibo, el Padre
            Julio Cesar Farías como capellán del colegio, quien con mucho celo y
            fervor ejerció su ministerio dando conferencias, catequesis y
            administrando los sacramentos de confesión y eucaristías a las
            hermanas y alumnos (as).
          </h4>
          <h4 className={classes.description}>
            El 6 de septiembre de 1942 se nombró a la Hna. Josefina de San
            Francisco de Asís, como superiora y directora, quien permaneció en
            el cargo hasta 1946. Ya para 1943, la matrícula escolar alcanzó 200
            alumnos (as).
          </h4>
          <h4 className={classes.description}>
            El colegio siempre ha estado presente en las celebraciones
            religiosas propiciadas por la Iglesia local. Para la celebración
            aniversario de los 25 años del nombramiento de Mons. Sergio Godoy,
            como Obispo de la Ciudad, se organizó y se preparó una
            escenificación de la Coronación de la Virgen María de Chiquinquirá,
            en el Teatro Baralt. Dicha presentación fue muy elogiada y aplaudida
            por los presentes.
          </h4>
          <h4 className={classes.description}>
            En este mismo año se apertura las clases de Inglés y Mecanografía,
            por petición de lo Padres.
          </h4>
          <h4 className={classes.description}>
            Ya consolidada la institución, comenzó a recoger fondo producto de
            la generosidad de los marabinos, con el fin de adquirir un terreno
            para la construcción propia de un local.
          </h4>
          <h4 className={classes.description}>
            En el año 1945, se adquiere el terreno ubicado hacia el norte de la
            ciudad, en el sector denominado Tierra Negra. Para 1947, la
            población estudiantil había crecido y se contaba con 400 alumnos
            (as), bajo la dirección de la Hna. María del Sagrario. Con el apoyo
            de la Sociedad de Ex alumnas se organizan eventos con el objeto de
            recoger fondos para construcción de la nueva sede.
          </h4>
          <h4 className={classes.description}>
            En 1950, se coloca la primera piedra y se da inicio a la obra, en
            forma de “L”, desde la Av. 11 hacia la calle 72, incluía Capilla,
            salones de clase, residencia de las hermanas y amplios pasillos. En
            la parte Noreste se hizo un garaje para los buses, que en 1951,
            fueron bautizados como Santa Isabel y Santa Clara.
          </h4>
          <h4 className={classes.description}>
            En octubre de 1952, se comienza con el bachillerato (Educación
            Secundaria) con una matrícula de 14 alumnas, bajo la dirección de la
            Hna. María del Sagrario, en 1953 se incorpora la Hna. Eulalia como
            directora, creando el 2do. Año para poder brindar la prosecución de
            estudios a las alumnas, La Hna. Eulalia se retira en 1959 y asume la
            dirección la Hna. Ana Isabel (Rosa Amelia) que dura en el cargo
            hasta 1968.
          </h4>
          <h4 className={classes.description}>
            En el período escolar 1961 – 1962, egresa la primera promoción de
            Bachilleres en Ciencias. En 1968, asume la dirección la Hna. María
            Jesús, mujer y religiosa ejemplar por su don de hacerse cercana,
            alegre, emprendedora, muy espiritual y con un gran carisma
            franciscano. Colaboró con la Asociación Venezolana de Educación
            Católica - AVEC para lograr el Subsidio o Convenio con el Gobierno
            Nacional y también fue presidente de dicha Institución. Se
            caracteriza su período educativo por una gran apertura a la tarea
            educativa abierta a las relaciones con los colegios de varones de la
            ciudad (Maristas, San Vicente de Paúl y Claret).
          </h4>
          <h4 className={classes.description}>
            Al asumir el cargo de Superiora General de la Congregación, en 1982
            deja la dirección del plantel, que es ocupada por la Hna. María del
            Pilar Yragorri Nucete, desde 1983 a 1992. En este período, se
            impulsó el Centro de Ciencias (1974), conformando posteriormente el
            Centro de Acción Juvenil, que se distinguió por grandes logros a
            nivel académico e investigativos a nivel local, regional, nacional e
            internacional, así como también en el área deportiva.
          </h4>
          <h4 className={classes.description}>
            En 1992, al ser elegida por la Congregación Consejera del Equipo de
            gobierno, deja su cargo, que recibe la Hna. Fanny de Jesús
            Aristizabal, que permanece en el cargo hasta 1994, la sustituye la
            Hna. Nieves (Petra De Paz) hasta el año 1999, siendo designada para
            el período 1999 – 2000 hasta 2006 – 2007 la Hna. Elvia Colina, la
            sustituye para el período 2007 a 2009 la Hna. Narkis Maza y a partir
            de septiembre del 2009 a 2013 regresa al Colegio la Hna. Elvia
            Colina y en el 2013 a la fecha retorna la Hna. Ma. Del Pilar
            Yragorri.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
