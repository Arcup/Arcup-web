<template>
  <div>
    <base-header> </base-header>
    <v-img
      src="../assets/title-images/image-software.png"
      max-width="100%"
      max-height="300"
      class="mb-10"
    >
    </v-img>

    <div>
      <h1 class="text-center pb-2 pr-4 pl-4">
        CONOCE NUESTRO PROCESO DE DESARROLLO DE SOFTWARE
        <v-icon color="cyan">mdi-laptop</v-icon>
      </h1>
      <v-container>
        <v-card class="mx-auto pt-3 pr-3 pl-3 background-gray" flat width="950">
          <p class="text-justify">
            En Arcup estamos comprometidos con el desarrollo de software de
            calidad, por tal motivo, nos apegamos al uso de metodologías,
            procesos y herramientas para su construcción. Conoce nuestro
            proceso:
          </p>
        </v-card>
      </v-container>
    </div>

    <!-- Versión web -->
    <div v-show="!isMobile()">
      <!-- FIla 1 -->
      <v-row>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
              <v-card-text> <h2>Obtención de requisitos</h2> </v-card-text>
              <v-card-text>
                <h3>Recopilamos las caracteristicas para tu sistema, 
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

      <!-- FIla 2 -->
      <v-row>
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
            <v-card-text class="pa-0"><h3>texto</h3></v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- FIla 3 -->
      <v-row>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Diseño</h2></v-card-text>
            <v-card-text class="pa-0"><h3>texto</h3></v-card-text>
          </v-card>
        </v-col>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card rounded="0" height="300">
            <v-img
              height="300"
              src="../assets/software-images/image-diseño.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <!-- FIla 4 -->
      <v-row>
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
            <v-card-text class="pa-0"> <h3>texto</h3> </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- FIla 5 -->
      <v-row>
        <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
          <v-card class="pa-2 text-center d-flex align-content-center flex-wrap" color="#F5F5F5" rounded="0" height="300">
            <v-card-text><h2>Pruebas</h2></v-card-text>            
            <v-card-text class="pa-0"> <h3>texto</h3> </v-card-text>
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

      <!-- FIla 6 -->
      <v-row>
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
            <v-card-text class="pa-0"> <h3>texto</h3> </v-card-text>
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

//Adding image to card
import obtencionReque from "../assets/software-images/image-obtencionReque.jpg";
import analisis from "../assets/software-images/image-analisis.jpg";
import diseño from "../assets/software-images/image-diseño.jpg";
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
          description: "Aqui va una descripción bien perrona y bien larga asdasdasds asdasdsadas asdasdsadasd adasdasdasd adasdasdasd adasdasdsad ",
          src: obtencionReque,
        },
        {
          title: "Análisis",
          description: "",
          src: analisis,
        },
        {
          title: "Diseño",
          description: "",
          src: diseño,
        },
        {
          title: "Codificación",
          description: "",
          src: codificacion,
        },
        {
          title: "Pruebas",
          description: "",
          src: pruebas,
        },
        {
          title: "Despliegue",
          description: "",
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
};
</script>
<style lang="css">
  h1{
    font-size: 30px;
    
  }
  h2{
    color: black;
    font-size: 25px;
    font-family: Mazzard;  
  }
  h3{
    color: black;

  }
  p{
    color:#000000;
    font-size: medium;
  }
</style>