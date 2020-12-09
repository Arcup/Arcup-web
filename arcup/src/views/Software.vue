<template>
  <div>
    <base-header> </base-header>
    <v-img
      src="../assets/title-images/image-software.png"
      max-width="100%"
      max-height="300"
    >
    </v-img>

    <div class="text-center pt-10 pb-10">
      <v-icon size="50" color="cyan">mdi-responsive</v-icon>      
      <h1 class="text-center padding-top pb-2 pr-4 pl-4">
        CONOCE NUESTRO PROCESO DE DESARROLLO DE SOFTWARE
      </h1>
        <v-card class="mx-auto pt-3 pr-0 pl-0" flat width="950">
          <p class="text-justify pl-4 pr-4">
            En Arcup estamos comprometidos con el desarrollo de software de
            calidad, por tal motivo, nos apegamos al uso de metodologías,
            procesos y herramientas para su construcción. 
            Durante cada etapa de nuestro proceso de desarrollo, mantenemos una comunicación
            en paralelo con el cliente. 
            Conoce nuestro proceso:
          </p>
        </v-card>
    </div>

    <!-- Versión web -->
    <div v-show="!isMobile()">
      <!-- File 1 -->
      <v-row no-gutters>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
              <v-card-text> <h2>Obtención de requisitos</h2> </v-card-text>
              <v-card-text>
                <h3>
                  Planificamos una reunión entre el cliente y el 
                  equipo de trabajo para obtener las características, funcionalidades y reglas
                  del negocio que se implementarán en el sistema de software.                  
                </h3>
              </v-card-text>            
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="text-center d-flex align-content-center flex-wrap" rounded="0" height="300">
            <v-img
              max-width="100%"
              max-height="100%"
              src="../assets/software-images/image-obtencionReque.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- File 2 -->
      <v-row no-gutters>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card rounded="0" height="300">
            <v-img
              height="300"
              src="../assets/software-images/image-analisis.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Análisis</h2> </v-card-text>
            <v-card-text class="pa-0">
              <h3>
                Reunimos los requerimientos acordados en las reuniones para determinar los posibles flujos que 
                pueden tener las funcionalidades, con ello hacer una elección de las tecnologías y metodologías 
                que mejor se adapten al desarrollo del proyecto.            
              </h3></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- File 3 -->
      <v-row no-gutters>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Diseño</h2></v-card-text>
            <v-card-text class="pa-0"><h3>
              Creamos prototipos funcionales que guían el proceso de construcción y permiten a los
              desarrolladores y al cliente visualizar de manera clara el 
              comportamiento del sistema.              
            </h3></v-card-text>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card rounded="0" height="300">
            <v-img
              height="300"
              src="../assets/software-images/image-diseno.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- File 4 -->
      <v-row no-gutters>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card rounded="0" height="300">
            <v-img
              height="300"
              src="../assets/software-images/image-codificacion.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Codificación</h2></v-card-text>            
            <v-card-text class="pa-0"> 
              <h3>
                Codificamos software por iteraciones para mostrar los avances que se han realizado. Mantenemos comunicación
                constante con el cliente para validar las funcionalidades realizadas.
              </h3> 
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- File 5 -->
      <v-row no-gutters>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Pruebas</h2></v-card-text>            
            <v-card-text class="pt-0"> <h3>
              Realizamos un plan de pruebas por iteración para validar los módulos implementados, asegurando así la calidad
              del producto final. 
            </h3> </v-card-text>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card rounded="0" height="300">
            <v-img
              height="300"
              src="../assets/software-images/image-pruebas.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- File 6 -->
      <v-row no-gutters>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card rounded="0" height="300">
            <v-img
              height="300"
              src="../assets/software-images/image-despliegue.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Despliegue</h2></v-card-text>            
            <v-card-text class="pa-0 text-center"> 
              <h3>
                En esta fase nos aseguramos de que tu sistema se encuentre disponible y 
                funcionando acorde a los requisitos establecidos en cada una de las fases 
                del proceso de desarrollo.
              </h3> 
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- versión movil -->
    <div v-show="isMobile()">
      <v-row no-gutters v-for="(item, index) in sections" :key="index">
        <v-col class="pa-0" cols="12" sm="12" md="12" lg="12" xl="12">
          <v-card class="text-center" color="#F5F5F5" rounded="0" height="auto">
            <h2 class="pt-4">{{item.title}}</h2>
            <v-card-text class="pb-6 text-justify">
              {{item.description}}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="12" md="12" lg="12" xl="12">
          <v-card rounded="0" height="auto">
            <v-img :src="item.src" max-width="100%" max-height="100%"> </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <base-footer> </base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

import obtencionReque from "../assets/software-images/image-obtencionReque.jpg";
import analisis from "../assets/software-images/image-analisis.jpg";
import diseno from "../assets/software-images/image-diseno.jpg";
import codificacion from "../assets/software-images/image-codificacion.jpg";
import pruebas from "../assets/software-images/image-pruebas.jpg";
import despliegue from "../assets/software-images/image-despliegue.jpg";

export default {
  name: "Software",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {
      sections: [
        {
          title: "Obtención de requisitos",
          description: "Planificamos una reunión entre el cliente y el equipo " 
           + "de trabajo para obtener las características, funcionalidades y reglas " 
           + "del negocio que se implementarán en el sistema de software.",
          src: obtencionReque,
        },
        {
          title: "Análisis",
          description: "Reunimos los requerimientos acordados en las reuniones para determinar los posibles "
            + "flujos que pueden tener las funcionalidades, con ello hacer una elección de las tecnologías y metodologías "
            + "que mejor se adapten al desarrollo del proyecto.",
          src: analisis,
        },
        {
          title: "Diseño",
          description: "Creamos prototipos funcionales que guían el proceso de construcción y "
            + "permiten a los desarrolladores y al cliente visualizar de manera clara el "
            + "comportamiento del sistema.",
          src: diseno,
        },
        {
          title: "Codificación",
          description: "Codificamos software por iteraciones para mostrar los avances que se "
            + "han realizado. Mantenemos comunicación constante con el cliente para validar las funcionalidades realizadas.",
          src: codificacion,
        },
        {
          title: "Pruebas",
          description: "Realizamos un plan de pruebas por iteración para validar los modulos implementados, " 
            + "asegurando así la calidad del producto final.",
          src: pruebas,
        },
        {
          title: "Despliegue",
          description: "En esta fase nos aseguramos de que tu sistema se encuentre disponible y "
            + "funcionando acorde a los requisitos establecidos en cada una de las fases "
            + "del proceso de desarrollo.",
          src: despliegue,
        },
      ],
    };
  },
  methods: {
    isMobile: function () {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  metaInfo() {
    return {
      title: "Software | Arcup",
      meta: [
        {
          name: "description",
          content: "Conoce nuestras fases en el proceso de desarrollo software.",
        },
      ],
    };
  },
};
</script>
<style lang="css">
  h1{
    font-size: 30px;
    font-family: Mazzard;  
  }
  h2{
    color: black;
    font-size: 25px;
    font-family: Mazzard;  
  }
  h3{
    color: #7E7E7E;
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    text-align: justify;
  }
  p{
    color:#000000;
    font-size: medium;
  }
  .background-gray {
  background-color: rgb(245, 245, 245);
  }
</style>