<template>
  <div>
    <base-header></base-header>

    <v-img
      src="../assets/title-images/image-project.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <div class="background-gray">
      <h2 class="text-center padding-top pb-2 color-title pr-4 pl-4">
        DESCUBRE LAS CARACTERÍSTICAS DE NUESTROS SERVICIOS
        <v-icon color="cyan">mdi-information-outline </v-icon>
      </h2>
      <v-container>
        <v-card class="mx-auto pt-3 pr-3 pl-3 background-gray" flat width="950">
          <p class="text-justify">
            Nuestros valores nos guían para construir proyectos software de
            calidad que cumplan con todos los estandares tecnológicos actuales y
            así poder asegurar integridad de los proyectos que desarrollamos,
            por lo tanto, todos nuestros servicios de construcción de software
            incluyen:
          </p>
        </v-card>
      </v-container>
    </div>

    <v-container class="padding-top">
      <v-row class="padding-bottom">
        <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
            <v-icon size="60" color="#00ffff">
              mdi-clock-time-eight-outline
            </v-icon>
          </v-avatar>
          <h3 class="text-center m-padding-top color-title">Atención 24/7</h3>

          <v-card-text class="text-justify">
            Respondemos tus dudas o solicitudes en cualquier momento del día.
            Nuestro equipo de trabajo se encuntra disponible y capacitado para
            responder tus mensajes a la brevedad y de la forma adecuada.
          </v-card-text>
        </v-col>
        <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
            <v-icon size="50" color="#00ffff"
              >mdi-message-processing-outline</v-icon
            >
          </v-avatar>
          <h3 class="text-center m-padding-top color-title">
            Comunicación constante
          </h3>
          <v-card-text class="text-justify">
            Nos aseguramos de que nuestros servicios cumplan tus expectativas,
            por ello, mantemos una buena y constante comunicación con nuestros
            clientes y así asegurar el éxito del proyecto.
          </v-card-text>
        </v-col>

        <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
            <v-icon size="60" color="#00ffff">mdi-progress-check</v-icon>
          </v-avatar>
          <h3 class="text-center m-padding-top color-title">
            Revisión de avances
          </h3>
          <v-card-text class="text-justify">
            Gracias a nuestros reportes semanales podemos confirmar o ajustar el
            proyecto para que cumpla con todas tus expectativas.
          </v-card-text>
        </v-col>

        <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
            <v-icon size="60" color="#00ffff"> mdi-cog </v-icon>
          </v-avatar>
          <h3 class="text-center m-padding-top color-title">
            Asesorias tecnológicas
          </h3>
          <v-card-text class="text-justify">
            Te orientamos para construir la solución tecnológica que tu
            necesitas, basandonos en tus necesidades y objetivos encontraremos
            las herramientas adecuadas para que tu proyecto digital sea un
            éxito.
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <div class="background-color padding-top pb-10">
      <v-container>
        <v-row class="">
          <v-col class="text-center" cols="12" sm="4" md="4" lg="4">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Tecnologías</div>
                <p class="display-1 text--primary">Front-end</p>
                <p>Cualidades</p>
                <div class="text--primary">
                  Diseños 100% responsivos, modernos y validados por el usuario
                </div>
              </v-card-text>
              <router-link
                :to="{ name: 'Technology' }"
                class="text-decoration-none"
              >
                <v-btn text color="cyan"> DESCUBRE MÁS </v-btn>
              </router-link>
            </v-card>
          </v-col>
          <v-col class="text-center" cols="12" sm="4" md="4" lg="4">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Tecnologías</div>
                <p class="display-1 text--primary">Back-end</p>
                <p>Cualidades</p>
                <div class="text--primary">
                  Conexión a API Rest, consultas seguras y rápidas.
                </div>
              </v-card-text>
              <router-link
                :to="{ name: 'Technology' }"
                class="text-decoration-none"
              >
                <v-btn text color="cyan"> DESCUBRE MÁS </v-btn>
              </router-link>
            </v-card>
          </v-col>
          <v-col class="text-center" cols="12" sm="4" md="4" lg="4">
            <v-card class="mx-auto" max-width="344">
              <v-card-text>
                <div>Tecnologías</div>
                <p class="display-1 text--primary">Móviles</p>
                <p>Cualidades</p>
                <div class="text--primary">
                  Funcionalidades y diseños enfocados en la productividad del
                  usuario
                </div>
              </v-card-text>
              <router-link
                :to="{ name: 'Technology' }"
                class="text-decoration-none"
              >
                <v-btn text color="cyan"> DESCUBRE MÁS </v-btn>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-divider class="color-gray"></v-divider>
    <base-footer> </base-footer>
  </div>
</template>


<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Project",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>


<style scoped>
.padding-top {
  padding-top: 5%;
}
.padding-bottom {
  padding-bottom: 5%;
}
.m-padding-top {
  padding-top: 15px;
}
.background {
  background-image: url("../assets/background-circle.svg");
}
.color-title {
  color: rgb(95, 95, 95);
}
.background-color {
  background-color: #161e2eff;
}
.background-gray {
  background-color: rgb(238, 238, 238);
}
.color-gray{
  background-color: rgb(110, 110, 110);
}
</style>