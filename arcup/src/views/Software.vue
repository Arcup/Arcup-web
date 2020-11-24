<template>
  <div>
    <base-header> </base-header>
    <v-img
      id="imagenTecnologias"
      src="../assets/title-images/image-software.png"
      max-width="100%"
      max-height="250"
    >
    </v-img>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            height="200"
            width="300"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-6">Páginas web</h1>
                <h4 class="subheading">Build your application today!</h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="8">
          Texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            height="200"
            width="300"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-6">Páginas web</h1>
                <h4 class="subheading">Build your application today!</h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="8">
          Texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-parallax
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            height="200"
            width="300"
          >
            <v-row align="center" justify="center">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-6">Páginas web</h1>
                <h4 class="subheading">Build your application today!</h4>
              </v-col>
            </v-row>
          </v-parallax>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="8">
          Texto texto texto texto texto texto texto texto texto
          texto texto texto texto texto texto
        </v-col>
      </v-row>
    </v-container>
    <base-footer> </base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
export default {
  name: "Software",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>