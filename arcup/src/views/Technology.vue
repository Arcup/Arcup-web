<template>
  <div>
    <base-header> </base-header>
    <v-img
      id="imagenTecnologias"
      src="../assets/title-images/image-technology.png"
      max-width="100%"
      max-height="250"
    >
    </v-img>
    <!-- Inicia versión web -->
    <v-container v-show="!isMobile()">
      <!-- Avatars -->
      <v-row>
        <v-col tag="center" cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              height="100"
              max-width="100"
            >
              <v-avatar size="100" class="background" @click="selecWeb">
                <v-icon size="60" dark> mdi-web </v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>

        <v-col tag="center" cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              height="100"
              max-width="100"
            >
              <v-avatar size="100" class="background" @click="selecAndroid">
                <v-icon size="60" dark>mdi-android</v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>
        <v-col tag="center" cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              height="100"
              max-width="100"
            >
              <v-avatar
                size="100"
                class="background"
                @click="selecConsultation"
              >
                <v-icon size="50" dark> mdi-account-group </v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
      <!-- Finaliza avatars -->
      <!-- Inicio tarjetas -->
      <v-col class="shrink bordo" >
        <!-- Inicia tarjeta 1 -->
        <v-scroll-x-transition hide-on-leave>
          <v-card
            v-show="expandWeb"
            height="100%"
            width="94%"
            class="mx-auto"
            color="#ffffff"
          >
            <v-row>
              <v-col 
                v-for="(item, index) in itemsCards1" :key="index" 
                cols="12" sm="6" md="3" lg="3"
              >
                <v-card class="">
                  <v-img
                    :src="item.src"
                    max-height="100"
                  ></v-img>
                  <v-card-title> {{item.name}} </v-card-title>
                  <v-card-subtitle> {{item.description}} </v-card-subtitle>                                  
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-x-transition>
        <!-- Finaliza tarjeta 1 -->
        <!-- Inicia tarjeta 2 -->
        <v-fade-transition hide-on-leave>
          <v-card
            v-show="expandAndroid"
            height="100%"
            width="94%"
            class="mx-auto"
            color="#ffffff"
          >
            <v-row>
              <v-col 
                v-for="(item, index) in itemsCards2" :key="index" 
                cols="12" sm="6" md="3" lg="3"
              >
                <v-card class="">
                  <v-img
                    :src="item.src"
                    height="100%"
                  ></v-img>
                  <v-card-title> {{item.name}} </v-card-title>
                  <v-card-subtitle> {{item.description}} </v-card-subtitle>                                  
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-fade-transition>
        <!-- Inicia tarjeta 3 -->
        <v-scroll-x-reverse-transition hide-on-leave>
          <v-card
            v-show="expandConsultation"
            height="100%"
            width="94%"
            class="mx-auto"
            color="#ffffff"
          >
            <v-row>
              <v-col 
                v-for="(item, index) in itemsCards3" :key="index" 
                cols="12" sm="6" md="3" lg="3"
              >
                <v-card class="">
                  <v-img
                    :src="item.src"
                    height="100%"
                  ></v-img>
                  <v-card-title> {{item.name}} </v-card-title>
                  <v-card-subtitle> {{item.description}} </v-card-subtitle>                                  
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-scroll-x-reverse-transition>
      </v-col>
    </v-container>
    <!-- Finaliza versión web -->
    <!-- Versión movil -->
    <div v-show="isMobile()">
      <v-row no-gutters justify="center" cols="12" sm="4" md="4" lg="4">
        <v-hover v-slot="{ hover }" open-delay="200" class="mb-4">
          <v-card
            rounded="circle"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class=""
            height="100"
            max-width="100"
          >
            <v-avatar size="100" class="background">
              <v-icon size="60" dark> mdi-web </v-icon>
            </v-avatar>
          </v-card>
        </v-hover>
      </v-row>

      <v-fade-transition hide-on-leave>
        <v-card
          v-show="expandWebVA"
          height="200"
          width="70%"
          class="mx-auto mb-10"
          color="blue"
        >
          111111111111111
        </v-card>
      </v-fade-transition>

      <v-row no-gutters justify="center" cols="12" sm="4" md="4" lg="4">
        <v-hover v-slot="{ hover }" open-delay="200" class="mb-4">
          <v-card
            rounded="circle"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class=""
            height="100"
            max-width="100"
          >
            <v-avatar size="100" class="background">
              <v-icon size="60" dark>mdi-android</v-icon>
            </v-avatar>
          </v-card>
        </v-hover>
      </v-row>

      <v-fade-transition hide-on-leave>
        <v-card
          v-show="expandAndroidVA"
          height="200"
          width="70%"
          class="mx-auto mb-10"
          color="blue"
        >
          22222222222
        </v-card>
      </v-fade-transition>

      <v-row no-gutters justify="center" cols="12" sm="4" md="4" lg="4">
        <v-hover v-slot="{ hover }" open-delay="200" class="mb-4">
          <v-card
            rounded="circle"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class=""
            height="100"
            max-width="100"
          >
            <v-avatar size="100" class="background">
              <v-icon size="50" dark> mdi-account-group </v-icon>
            </v-avatar>
          </v-card>
        </v-hover>
      </v-row>

      <v-fade-transition hide-on-leave>
        <v-card
          v-show="expandConsultationVA"
          height="200"
          width="70%"
          class="mx-auto mb-10"
          color="blue"
        >
          333333333333333333333
        </v-card>
      </v-fade-transition>
    </div>
    <!-- FInaliza versión movil-->
    <base-footer> </base-footer>
  </div>
</template>
<script>
//Adding components
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
//Adding image to card

export default {
  name: "Technology",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {
      expandWeb: true,
      expandAndroid: false,
      expandConsultation: false,
      expandWebVA: true,
      expandAndroidVA: true,
      expandConsultationVA: true,
      show: false,
      itemsCards1: [
        {
          src: "https://colorlib.com/wp/wp-content/uploads/sites/2/html5-logo.png",
          name: "HTML5",
          description: "Descripción 1",
        },
        {
          src: "https://th.bing.com/th/id/OIP.deLqvHQOJl4i8VExhqJtsQHaEK?pid=Api&rs=1",
          name: "JavaScript",          
          description: "Descripción 2",
        },
        {
          src: "https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/qu%C3%A9-es-php-1.png",
          name: "PHP",
          description: "Descripción 3",
        },
        {
          src: "https://cdn-images-1.medium.com/max/1600/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg",
          name: "Vue.js",
          description: "Descripción 4",
        },
      ],
      itemsCards2: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Kotlin",
          description: "Descripción 1",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "Java",          
          description: "Descripción 2",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "AndroidStudio",
          description: "Descripción 3",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "web",
          description: "Descripción 4",
        },
      ],
      itemsCards3: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "SQLServer",
          description: "Descripción 1",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "MySQL",          
          description: "Descripción 2",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "web",
          description: "Descripción 3",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          name: "web",
          description: "Descripción 4",
        },
      ],
    };
  },
  methods: {
    selecWeb: function () {
      this.expandAndroid = false;
      this.expandConsultation = false;
      this.expandWeb = true;
    },
    selecAndroid: function () {
      this.expandWeb = false;
      this.expandConsultation = false;
      this.expandAndroid = true;
    },
    selecConsultation: function () {
      this.expandWeb = false;
      this.expandAndroid = false;
      this.expandConsultation = true;
    },
    isMobile: function () {
      return this.$vuetify.breakpoint.xlOnly || this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
<style lang='css'>
#imagenTecnologias {
  margin-bottom: 30px;
}
.background {
  background-image: url("../assets/background-circle-tech.svg");
}
.bordo{
  border: none;
  border-block-color: red;
}
</style>