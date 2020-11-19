<template>
  <div>
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-package.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <v-container class="containerPackage">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">Páginas web</h1>
          <h4 class="text-center">Encuentra tu paquete ideal o personalízalo con nosotros</h4>
        </v-col>
      </v-row>
      <v-row class="mx-2">
        <v-card width="100%" elevation="2">
          <v-row>
            <v-col cols="8">
            <h2>Es es el segundo row</h2>
          </v-col>
          <v-col cols="4">
            <h3>Estoy a la derecha</h3>
          </v-col>
          </v-row>
        </v-card>
      </v-row>
      <v-row class="mx-2 my-4">
        <v-card width="100%" elevation="2">
          <v-row>
            <v-col cols="8">
            <h2>Es es el segundo row</h2>
          </v-col>
          <v-col cols="4">
            <h3>Estoy a la derecha</h3>
          </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
    <base-footer></base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Package",
  data: () => ({
    messages: [
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "deep-purple lighten-1",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "You",
        message: "Did you still want to grab lunch today?",
        time: "9:47am",
        color: "deep-purple lighten-1",
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
.containerPackage {
  background-size: 100% 50%;
  background-image: url("https://www.strugal.com/sites/default/files/acabados-pvc/GrisClaro.png");
}
</style>