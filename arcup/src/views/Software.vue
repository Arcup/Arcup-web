<template>
  <div>
    <base-header> </base-header>
    <v-img
      id="imagenTecnologias"
      src="../assets/title-images/image-software.png"
      max-width="100%"
      max-height="300"
      class="mb-10"
    >
    </v-img>
    <div v-for="(item, index) in sections" :key="index">
      <v-card class="text-center" height="150">
        <h2>{{ item.title }}</h2>
        <v-card-text class="text-start">{{ item.description }}</v-card-text>
      </v-card>

      <v-parallax dark :src="item.src" height="270" class="mb-16">        
      </v-parallax>
    </div>

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
  data() {
    return {
      sections: [
        {
          title: "Obtención de requisitos",
          description: "Compatibilidad con los navegadores",
          src:
            "https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261_960_720.jpg",
        },
        {
          title: "Análisis",
          description: "Compatibilidad con los navegadores",
          src:
            "https://cdn.pixabay.com/photo/2019/03/07/16/48/hands-4040619_960_720.jpg",
        },
        {
          title: "Diseño",
          description: "Compatibilidad con los navegadores",
          src:
            "https://cdn.pixabay.com/photo/2015/09/29/22/49/blueprint-964629_960_720.jpg",
        },
        {
          title: "Codificación",
          description: "Compatibilidad con los navegadores",
          src:
            "https://cdn.pixabay.com/photo/2019/06/17/19/48/source-4280758_960_720.jpg",
        },
        {
          title: "Pruebas",
          description: "Compatibilidad con los navegadores",
          src:
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/113AC/production/_113427507_solar_orbiter_eui-fullsun01.jpg",
        },
      ],
    };
  },
};
</script>