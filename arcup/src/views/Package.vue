<template>
  <div>
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-package.png"
      max-width="100%"
      max-height="300"
    ></v-img>
    <v-container class="mt-4">
      <v-sheet
        elevation="5"
        height="100%"
        rounded
        width="100%"
        class="fill-height bottom-gradient"
      >
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">Páginas web</h1>
            <h4 class="text-center">
              Encuentra tu paquete ideal o personalízalo con nosotros
            </h4>
          </v-col>
        </v-row>
        <v-row v-for="(item, i) in itemWebPages" :key="i" class="mx-4 my-4">
          <v-card width="100%" elevation="2" class="rounded-r-xl">
            <v-row no-gutters>
              <v-col cols="8">
                <v-container class="ml-4 my-5">
                  <h2>{{ item.title }}</h2>
                  <p class="font-weight-light">{{ item.description }}</p>
                </v-container>
              </v-col>
              <v-col cols="4" align="center">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-sheet
                      color="grey lighten-4"
                      :elevation="hover ? 5 : 0"
                      height="250"
                      rounded
                      width="100%"
                      class="transition-swing rounded-r-xl"
                    >
                      <p class="font-weight-bold pt-8">
                        {{ item.titlePrice }}
                      </p>
                      <h3 class="mt-2">{{ item.price }}</h3>
                        <v-btn dark block> Adquirir </v-btn>
                    </v-sheet>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <v-divider></v-divider>
      </v-sheet>
    </v-container>
    <v-container class="mt-4">
      <v-sheet
        elevation="5"
        height="100%"
        rounded
        width="100%"
        class="fill-height bottom-gradient"
      >
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">App móvil</h1>
            <h4 class="text-center">
              Ponte en contacto con nosotros y háblanos de tu idea
            </h4>
          </v-col>
        </v-row>
        <v-row v-for="(item, i) in itemApp" :key="i" class="mx-4 my-4">
          <v-card width="100%" elevation="2" class="rounded-r-xl">
            <v-row no-gutters>
              <v-col cols="8">
                <h2 class="ml-2">{{ item.title }}</h2>
              </v-col>
              <v-col cols="4">
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-sheet
                      color="grey lighten-4"
                      :elevation="hover ? 5 : 0"
                      height="250"
                      width="100%"
                      class="transition-swing rounded-r-xl"
                    >
                      <h3 class="text-center">{{ item.price }}</h3></v-sheet
                    >
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-row>
        <v-divider></v-divider>
      </v-sheet>
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
    itemWebPages: [
      {
        title: "Informativo",
        titlePrice: "Paquete informativo",
        price: "3,500 pesotes",
        description: "Este es un ejemplo de descripción",
      },
      {
        title: "Administrativo",
        titlePrice: "Paquete administrativo",
        price: "7,900 pelucholares",
        description: "Esta página web es aún más cara OMG!",
      },
    ],
    itemApp: [
      {
        title: "Simple App Móvil",
        titlePrice: "Paquete simple app móvil",
        price: "5,500 pesetas",
        description: "Este es un ejemplo de descripción",
      },
      {
        title: "App & Página web",
        titlePrice: "Paquete app & página web",
        price: "20,900 pesudos",
        description: "Esta página web es aún más cara OMG!",
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
.bottom-gradient {
  background-image: linear-gradient(
    to bottom,
    rgba(250, 250, 250, 1) 50%,
    transparent 72px
  );
}
</style>