<template>
  <div>
    <base-header> </base-header>
    <v-img
      src="../assets/title-images/image-technology.png"
      max-width="100%"
      max-height="250"
      class="mb-4"
    >
    </v-img>
    <!-- Inicia versión web -->
    <v-container v-show="!isMobile()">
      <!-- Avatars -->
      <v-row class="ma-0">
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

      <!-- Inicio de tarjetas -->
      <v-col class="shrink">
        <!-- Inicia tarjeta 1 -->
        <v-scroll-x-transition hide-on-leave>
          <v-card
            v-show="expandWeb"
            height="100%"
            width="97%"
            class="mx-auto"
            color="#ffffff"
            outlined
          >
            <v-row>              
              <v-col
                v-for="(item, index) in itemsCards1"
                :key="index"
                cols="12"
                sm="6"
                md="3"
                lg="3"
              >
                <v-card class="">
                  <v-img :src="item.src" max-height="100"></v-img>
                  <v-card-title> {{ item.name }} </v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item
                        class="pa-0"
                        v-for="(description, i) in item.description"
                        :key="i"
                      >
                        <v-icon color="black" size="10" class="mr-2"
                          >mdi-checkbox-blank-circle</v-icon
                        >
                        <v-list-item-title>
                          {{ description }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
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
            width="97%"
            class="mx-auto"
            color="#ffffff"
            outlined
          >
            <v-row>
              <v-col
                v-for="(item, index) in itemsCards2"
                :key="index"
                cols="12"
                sm="6"
                md="3"
                lg="3"
              >
                <v-card>
                  <v-img :src="item.src" max-height="100"></v-img>
                  <v-card-title> {{ item.name }} </v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item
                        class="pa-0"
                        v-for="(description, i) in item.description"
                        :key="i"
                      >
                        <v-icon color="black" size="10" class="mr-2"
                          >mdi-checkbox-blank-circle</v-icon
                        >
                        <v-list-item-title>
                          {{ description }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
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
            width="97%"
            class="mx-auto"
            color="#ffffff"
            outlined
          >
            <v-row>
              <v-col
                v-for="(item, index) in itemsCards3"
                :key="index"
                cols="12"
                sm="6"
                md="3"
                lg="3"
              >
                <v-card class="">
                  <v-img :src="item.src" max-height="100"></v-img>
                  <v-card-title> {{ item.name }} </v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item
                        class="pa-0"
                        v-for="(description, i) in item.description"
                        :key="i"
                      >
                        <v-icon color="black" size="10" class="mr-2"
                          >mdi-checkbox-blank-circle</v-icon
                        >
                        <v-list-item-title>
                          {{ description }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-subtitle>
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
            <v-avatar size="100" class="background" @click="expandWebVA = !expandWebVA">
              <v-icon size="60" dark> mdi-web </v-icon>
            </v-avatar>
          </v-card>
        </v-hover>
      </v-row>

      <v-fade-transition hide-on-leave>
        <v-card
          v-show="expandWebVA"          
          height="100%"
          width="90%"
          class="mx-auto mb-10"
          color="#ffffff"
          outlined
        >
          <v-row>
            <v-col
              v-for="(item, index) in itemsCards1"
              :key="index"
              cols="12"
              sm="12"
              md="12"
              lg="12"
            >
              <v-card class="">
                <v-img :src="item.src" max-height="120"></v-img>
                <v-card-title> {{ item.name }} </v-card-title>
                <v-card-subtitle>
                  <v-list>
                    <v-list-item
                      class="pa-0"
                      v-for="(description, i) in item.description"
                      :key="i"
                    >
                      <v-icon color="black" size="10" class="mr-2"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                      <v-list-item-title>
                        {{ description }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
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
            <v-avatar size="100" class="background" @click="expandAndroidVA = !expandAndroidVA">
              <v-icon size="60" dark>mdi-android</v-icon>
            </v-avatar>
          </v-card>
        </v-hover>
      </v-row>

      <v-fade-transition hide-on-leave>
        <v-card
          v-show="expandAndroidVA"
          height="100%"
          width="90%"
          class="mx-auto mb-10"
          color="#ffffff"
          outlined
        >
          <v-row>
            <v-col
              v-for="(item, index) in itemsCards2"
              :key="index"
              cols="12"
              sm="12"
              md="12"
              lg="12"
            >
              <v-card class="">
                <v-img :src="item.src" max-height="120"></v-img>
                <v-card-title> {{ item.name }} </v-card-title>
                <v-card-subtitle>
                  <v-list>
                    <v-list-item
                      class="pa-0"
                      v-for="(description, i) in item.description"
                      :key="i"
                    >
                      <v-icon color="black" size="10" class="mr-2"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                      <v-list-item-title>
                        {{ description }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
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
            <v-avatar size="100" class="background" @click="expandConsultationVA = !expandConsultationVA">
              <v-icon size="50" dark> mdi-account-group </v-icon>
            </v-avatar>
          </v-card>
        </v-hover>
      </v-row>

      <v-fade-transition hide-on-leave>
        <v-card
          v-show="expandConsultationVA"
          height="100%"
          width="90%"
          class="mx-auto mb-10"
          color="#ffffff"
          outlined
        >
          <v-row>
            <v-col
              v-for="(item, index) in itemsCards3"
              :key="index"
              cols="12"
              sm="12"
              md="12"
              lg="12"
            >
              <v-card class="">
                <v-img :src="item.src" max-height="120"></v-img>
                <v-card-title> {{ item.name }} </v-card-title>
                <v-card-subtitle>
                  <v-list>
                    <v-list-item
                      class="pa-0"
                      v-for="(description, i) in item.description"
                      :key="i"
                    >
                      <v-icon color="black" size="10" class="mr-2"
                        >mdi-checkbox-blank-circle</v-icon
                      >
                      <v-list-item-title>
                        {{ description }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
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

      itemsCards1: [
        {
          src:
            "https://colorlib.com/wp/wp-content/uploads/sites/2/html5-logo.png",
          name: "HTML5",
          description: [
            "Compatibilidad con los navegadores",
            "Diseño responsivo",
          ],
        },
        {
          src:
            "https://th.bing.com/th/id/OIP.deLqvHQOJl4i8VExhqJtsQHaEK?pid=Api&rs=1",
          name: "JavaScript",
          description: [
            "Adecuado para el desarrollo de páginas web",
            "De los lenguajes más usados",
          ],
        },
        {
          src:
            "https://th.bing.com/th/id/OIP.7TaggWnbRJ91hKi8p41q2QHaEK?pid=Api&rs=1",
          name: ".NET",
          description: [
            "Robusto y Seguro",
            "Soporta multiples lenguajes",
          ],
        },
        {
          src:
            "https://cdn-images-1.medium.com/max/1600/1*oZqGznbYXJfBlvGp5gQlYQ.jpeg",
          name: "Vue.js",
          description: [
            "Moderno",
            "Estructura ordenada",
            "Comunidad muy activa",            
          ],
        },
      ],
      itemsCards2: [
        {
          src:
            "https://www.solutionanalysts.com/wp-content/uploads/2017/07/kotlin-course-image.jpg",
          name: "Kotlin",
          description: [
            "Compatibilidad en los navegadores",
            "Diseño responsivo",
          ],
        },
        {
          src:
            "https://th.bing.com/th/id/OIP.qNbFWTHHkCxEkkI-0Lo4WwHaEK?pid=Api&rs=1",
          name: "Java",
          description: [
            "Universal",
            "Seguro",
          ],
        },
        {
          src:
            "https://th.bing.com/th/id/OIP.yNAPK4wpATuB-cb8ebuqWwHaDt?pid=Api&rs=1",
          name: "AndroidStudio",
          description: [
            "Compatibilidad en los navegadores",
            "Diseño responsivo",
          ],
        },
      ],
      itemsCards3: [
        {
          src:
            "https://www.itprotoday.com/sites/itprotoday.com/files/uploads/2015/12/sqlserver-generic_0.jpg",
          name: "SQLServer",
          description: [
            "Escalable",
            "Soporta procedimientos almacenados",
          ],
        },
        {
          src: "https://pngimg.com/uploads/mysql/mysql_PNG29.png",
          name: "MySQL",
          description: [
            "Buen rendimiento",
            "Velocidad en las transacciones",
          ],
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
.background {
  background-image: url("../assets/background-circle-tech.svg");
}
</style>