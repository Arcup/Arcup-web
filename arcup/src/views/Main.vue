<template>
  <v-main>
    <base-header></base-header>
    <v-divider></v-divider>
    <div class="container__deep" id="containerDeep">
      <v-row class="mb-6" no-gutters>
        <v-col offset-md="5" id="colMainCarousel">
          <v-carousel
            :show-arrows="false"
            cycle
            height="300"
            hide-delimiter-background
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end mr-2" id="rowMainSheets">
        <v-card
          class="ma-3 card__main"
          max-width="280"
          height="270"
          v-for="(item, index) in itemsPaquetes"
          :key="index"
        >
          <v-card-text>
            <p class="display-1 text--primary">{{ item.name }}</p>
            <p class="deep-purple--text">{{ item.price }}</p>
            <div class="text--primary">
              {{ item.description }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="deep-purple accent-4"> Ver más </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
    <div class="container__angle">
      <v-col lg="6" md="12" sm="12" class="ml-12 mt-10" id="columnTextMain">
        <v-col class="white--text">
          <h1>
            Construimos software de calidad a la medida, creamos tu página y se
            la mostramos al <strong>mundo.</strong>
          </h1>
        </v-col>
        <v-col class="mt-16">
          <v-row justify-sm="left">
            <v-col md="4">
              <router-link :to="{ name: 'About' }" class="text-decoration-none">
                <v-btn elevation="2" large rounded color="white">
                  <strong class="">Conócemos </strong></v-btn
                >
              </router-link>
            </v-col>
            <v-col md="4">
              <router-link
                :to="{ name: 'Contact' }"
                class="text-decoration-none"
              >
                <v-btn elevation="2" large outlined rounded color="white">
                  <strong>Empecemos </strong>
                </v-btn>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
    </div>
  </v-main>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  name: "Main",
  data() {
    return {
      items: [
        {
          src:
            "https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg",
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/01/08/18/26/write-593333_960_720.jpg",
        },
        {
          src:
            "https://scontent.fmex23-1.fna.fbcdn.net/v/t1.0-9/78367546_2717002245022520_6775081467992080384_o.jpg?_nc_cat=109&ccb=2&_nc_sid=e3f864&_nc_eui2=AeE2EzwDBAM5zl0-DVYs_L2LPzZl9SyYmVI_NmX1LJiZUp1_UBE-W6pl8bmuUL8015ooorLi6N7La-yrv6k0wfzX&_nc_ohc=hPI1ghMeGpcAX_3Iif-&_nc_ht=scontent.fmex23-1.fna&oh=b1e7972683aeae20d6f57f9f01680cd5&oe=5FD48991",
        },
      ],
      itemsPaquetes: [
        {
          name: "Básico",
          price: "$1,500",
          description: "Este es un ejemplo de descripción",
        },
        {
          name: "Intermedio",
          price: "$7,000",
          description: "Esta es otra descripción ejemplo",
        },
        {
          name: "Avanzado",
          price: "$12,000",
          description: "La última descripción de ejemplo",
        },
      ],
    };
  },
  components: {
    BaseHeader,
  },
};
</script>
<style lang='css'>
@font-face {
  font-family: RoundedElegance;
  src: url("../assets/Rounded_Elegance.ttf");
}
.container__deep {
  position: absolute;
  height: 100% auto;
  width: 100%;
}
.container__angle {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  background-size: 85%;
  background-image: url("../assets/background-darkBlueMain.svg");
}

.size__fontText {
  font-size: 28px;
}
</style>