<template>
  <div>
    <base-header></base-header>

    <v-img
      src="../assets/title-images/image-project.png"
      max-width="100%"
      max-height="200"
    ></v-img>

    <v-row class="padding-top">
      <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
        <v-avatar size="100" class="background">
          <v-icon size="60" dark> mdi-alarm </v-icon>
        </v-avatar>
        <v-card-text class="text-justify">
          En Arcup nos interesa lo que tengas que decir, si tienes en mente un
          proyecto y requieres una solucion tecnológica o asesoría personalizada
          ponte en contacto con nosotros a través del formulario de solicitud, o
          para cualquier aclaración mediante nuestras fuentes de contacto:
        </v-card-text>
      </v-col>
      <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
          <v-icon size="60" dark>mdi-web </v-icon>
        </v-avatar>
        <v-card-text class="text-justify">
          En Arcup nos interesa lo que tengas que decir, si tienes en mente un
          proyecto y requieres una solucion tecnológica o asesoría personalizada
          ponte en contacto con nosotros a través del formulario de solicitud, o
          para cualquier aclaración mediante nuestras fuentes de contacto:
        </v-card-text>
      </v-col>

      <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
          <v-icon size="60" dark>mdi-cellphone </v-icon>
        </v-avatar>
        <v-card-text class="text-justify">
          En Arcup nos interesa lo que tengas que decir, si tienes en mente un
          proyecto y requieres una solucion tecnológica o asesoría personalizada
          ponte en contacto con nosotros a través del formulario de solicitud, o
          para cualquier aclaración mediante nuestras fuentes de contacto:
        </v-card-text>
      </v-col>

      <v-col class="text-center" cols="12" sm="6" md="3" lg="3">
          <v-avatar size="100" class="background">
          <v-icon size="60" dark> mdi-cog </v-icon>
        </v-avatar>
        <v-card-text class="text-justify">
          En Arcup nos interesa lo que tengas que decir, si tienes en mente un
          proyecto y requieres una solucion tecnológica o asesoría personalizada
          ponte en contacto con nosotros a través del formulario de solicitud, o
          para cualquier aclaración mediante nuestras fuentes de contacto:
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>


<script>
import BaseHeader from "@/components/BaseHeader.vue";
export default {
  name: "Project",
  components: {
    BaseHeader,
  },
};
</script>
<style scoped>
.padding-top{
    padding-top: 5%;
}
.background{
    background-image: url("../assets/background-circle.svg");
}
</style>