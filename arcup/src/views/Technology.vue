<template>
  <div>
    <base-header> </base-header>
    <v-img
      src="../assets/title-images/image-technology.png"
      max-width="100%"
      max-height="300"
      class="mb-4"
    >
    </v-img>
    <!-- Inicia versión web -->
    <v-container v-show="!isMobile()">
      <!-- Avatars -->
      <v-row class="ma-0">
        <v-col tag="center" cols="12" sm="4" md="4" lg="4" xl="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              height="100"
              max-width="100"
            >
              <v-avatar size="100" class="background" @click="selecWeb">
                <v-icon color="#00ffff" size="60" dark> mdi-web </v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>

        <v-col tag="center" cols="12" sm="4" md="4" lg="4" xl="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              height="100"
              max-width="100"
            >
              <v-avatar size="100" class="background" @click="selecAndroid">
                <v-icon color="#00ffff" size="60" dark>mdi-server</v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>

        <v-col tag="center" cols="12" sm="4" md="4" lg="4" xl="4">
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
                <v-icon color="#00ffff" size="50" dark> mdi-cellphone </v-icon>
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
                xl="3"
              >
                <v-card class="">
                  <v-img :src="item.src" max-height="110"></v-img>
                  <v-card-title> {{ item.name }} </v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item
                        class="pa-0"
                        v-for="(description, i) in item.description"
                        :key="i"
                      >
                        <v-icon color="black" size="10" class="mr-2"
                          >mdi-star-four-points-outline</v-icon
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
                xl="3"
              >
                <v-card>
                  <v-img :src="item.src" max-height="110"></v-img>
                  <v-card-title> {{ item.name }} </v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item
                        class="pa-0"
                        v-for="(description, i) in item.description"
                        :key="i"
                      >
                        <v-icon color="black" size="10" class="mr-2"
                          >mdi-star-four-points-outline</v-icon
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
                xl="3"
              >
                <v-card class="">
                  <v-img :src="item.src" max-height="110"></v-img>
                  <v-card-title> {{ item.name }} </v-card-title>
                  <v-card-subtitle>
                    <v-list>
                      <v-list-item
                        class="pa-0"
                        v-for="(description, i) in item.description"
                        :key="i"
                      >
                        <v-icon color="black" size="10" class="mr-2"
                          >mdi-star-four-points-outline</v-icon
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
      <v-row no-gutters justify="center" cols="12" sm="4" md="4" lg="4" xl="4">
        <v-hover v-slot="{ hover }" open-delay="200" class="mb-4">
          <v-card
            rounded="circle"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class=""
            height="100"
            max-width="100"
          >
            <v-avatar
              size="100"
              class="background"
              @click="expandWebVA = !expandWebVA"
            >
              <v-icon color="#00ffff" size="60" dark> mdi-web </v-icon>
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
              md="3"
              lg="3"
              xl="3"
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
                        >mdi-star-four-points-outline</v-icon
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

      <v-row no-gutters justify="center" cols="12" sm="4" md="4" lg="4" xl="4">
        <v-hover v-slot="{ hover }" open-delay="200" class="mb-4">
          <v-card
            rounded="circle"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class=""
            height="100"
            max-width="100"
          >
            <v-avatar
              size="100"
              class="background"
              @click="expandAndroidVA = !expandAndroidVA"
            >
              <v-icon color="#00ffff" size="60" dark>mdi-server</v-icon>
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
              md="3"
              lg="3"
              xl="3"
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
                        >mdi-star-four-points-outline</v-icon
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

      <v-row no-gutters justify="center" cols="12" sm="4" md="4" lg="4" xl="4">
        <v-hover v-slot="{ hover }" open-delay="200" class="mb-4">
          <v-card
            rounded="circle"
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            class=""
            height="100"
            max-width="100"
          >
            <v-avatar
              size="100"
              class="background"
              @click="expandConsultationVA = !expandConsultationVA"
            >
              <v-icon color="#00ffff" size="50" dark> mdi-cellphone </v-icon>
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
              md="3"
              lg="3"
              xl="3"
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
                        >mdi-star-four-points-outline</v-icon
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
import android from "../assets/card-images/image-android.png";
import javaS from "../assets/card-images/image-js.png";
import imgVuetify from "../assets/card-images/image-vuetify.png";
import net from "../assets/card-images/image-net.png";
import java from "../assets/card-images/image-java.png";
import vuejs from "../assets/card-images/image-vuejs.png";
import htmlcss3 from "../assets/card-images/image-htmlcss3.png";
import sql from "../assets/card-images/image-sql.png";
import mysql from "../assets/card-images/image-mysql.png";
import kotlin from "../assets/card-images/image-kotlin.png";
import xamarin from "../assets/card-images/image-xamarin.png";
import restful from "../assets/card-images/image-restful.png";

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
          src: vuejs,
          name: "Vue.js",
          description: ["Moderno", "Progresivo", "Diseño escalable", "Modular"],
        },
        {
          src: imgVuetify,
          name: "Vuetify",
          description: [
            "Ligero",
            "Responsivo",
            "Enfoque móvil",
            "Actualización constante",
          ],
        },
        {
          src: javaS,
          name: "JavaScript",
          description: [
            "Adecuado para el desarrollo de páginas web",
            "De los lenguajes más usados",
            "Versátil",
            "Modo FullStack",
          ],
        },
        {
          src: htmlcss3,
          name: "HTML y CSS",
          description: [
            "Compatibilidad con los navegadores",
            "Diseño responsivo",
            "Estructura limpia",
            "Mejora la experiencia de usuario",
          ],
        },
      ],
      itemsCards2: [
        {
          src: net,
          name: ".NET",
          description: [
            "Robusto y Seguro",
            "Interoperabilidad multilenguaje",
            "Código administrado",
            "Facilidad de despliegue",
          ],
        },
        {
          src: sql,
          name: "SQLServer",
          description: [
            "Escalable",
            "Estable y seguro",
            "Soporta procedimientos almacenados",
            "Potente entorno gráfico",
          ],
        },
        {
          src: mysql,
          name: "MySQL",
          description: [
            "Buen rendimiento",
            "Velocidad en las transacciones",
            "Open source",
            "Ligero",
          ],
        },
        {
          src: restful,
          name: "Servicios RestFul",
          description: [
            "Independencia de tecnologías",
            "Escalabilidad, Fiabilidad, seguridad",
            "Arquitectura cliente-servidor",
            "Consume pocos recursos",
          ],
        },
      ],
      itemsCards3: [
        {
          src: kotlin,
          name: "Kotlin",
          description: [
            "Lenguaje oficial de google",
            "Manejo de errores",
            "Multi-plataforma",
            "Moderno",
          ],
        },
        {
          src: java,
          name: "Java",
          description: [
            "Multi-plataforma",
            "Manejo de errores",
            "Robusto",
            "Facilita el desarrollo",
          ],
        },
        {
          src: android,
          name: "Android Studio",
          description: [
            "Especializado para Android",
            "Soporte de versiones",
            "Código ordenado",
            "Emulador para pruebas",
          ],
        },
        {
          src: xamarin,
          name: "Xamarin",
          description: [
            "Multiplataforma",
            "Experiencia nativa",
            "Reutilización de código",
            "Tecnología de código abierto",
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
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
<style lang='css'>
.background {
  background-image: url("../assets/background-circle-tech.svg");
}
</style>