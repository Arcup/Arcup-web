<template>
  <div>
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-story.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <v-container>
      <v-timeline
        align-top
        :dense="$vuetify.breakpoint.smAndDown"
        class="timeline"
      >
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="item.color"
          :icon="item.icon"
          fill-dot
        >
          <template v-slot:opposite>
            <span class="headline grey--text" v-text="item.year"></span>
          </template>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card dark :elevation="hover ? 24 : 5" class="transition-swing">
                <v-img
                  :src="item.src"
                  gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                  height="80px"
                  ><v-card-title class="title">
                    {{ item.title }}
                  </v-card-title></v-img
                >
                <v-card-text class="white text--primary">
                  <p class="text-justify">
                    {{ item.description }}
                  </p>
                </v-card-text>
              </v-card>
            </template>
          </v-hover>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <base-footer></base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Story",
  data: () => ({
    items: [
      {
        title: "Nuestra formación",
        description:
          "En el año 2015 los fundadores de Arcup se encontraron por primera vez en la carrera de Ingeniería de Software de la Universidad Veracruzana. " +
          "Durante 4 años formaron sus habilidades profesionales en la industria del software. Para su último año de carrera, " +
          "cada miembro de arcup comenzó a trabajar en proyectos de manera independiente, fortaleciendo así, aptitudes necesarias para crear lo que hoy es Arcup.",
        year: "2015-2019",
        color: "light-blue darken-4",
        icon: "mdi-school-outline",
        src: "https://www.uv.mx/its/files/2019/05/DSC_0125.jpg",
      },
      {
        title: "¿Cómo iniciamos?",
        description:
          "Arcup es fundada en Agosto de 2020 en Xalapa, Veracruz. Sus tres miembros fundadores después de trabajar durante 1 año de manera independiente " +
          "deciden reunirse para formar una empresa desarrolladora de software. Su experiencia, la situación mundial actual debido a la pandemia y el acercamiento a tecnologías modernas " +
          "motiva a los fundadores de Arcup a trabajar en equipo para crear productos de software innovadores, de utilidad y sobre todo de calidad. ",
        year: "2019",
        color: "light-blue darken-3",
        icon: "mdi-ray-start-arrow",
        src:
          "https://th.bing.com/th/id/OIP.YBc5KBpmQ2t_Rt05yEZ3IwHaER?pid=Api&w=3000&h=1732&rs=1",
      },
      {
        title: "En la actualidad...",
        description:
          "El equipo de arcup se encuentra en un aprendizaje constante de nuevas tecnologías para brindarle a nuestros clientes lo último y más usable en tecnología. " +
          "De manera individual cada miembro participa activamente en distintos proyectos Open Source para compartir opiniones y experiencias que ayuden a superar la calidad de nuestros productos de software.",
        year: "... 2020",
        color: "light-blue darken-2",
        icon: "mdi-buffer",
        src:
          "https://img.freepik.com/free-vector/mobile-technology-concept_46706-824.jpg?size=626&ext=jpg",
      },
    ],
  }),
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
<style lang="css" scoped>
.timeline {
  z-index: 0;
}
</style>