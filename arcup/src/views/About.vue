<template>
  <div>
    <base-header></base-header>

    <div class="pb-15">
      <v-carousel :show-arrows="false" height="400" >
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
          <div class="height text-center pl-6 pr-6">
            
            <v-row>
              <v-col cols="12" md="6" sm="6" xs="12" class="pt-5">
                <span class="font__main-alter-xs">{{ item.degree }}</span
                ><br />
                <span class="font__main-alter">{{ item.name }}</span
                ><br />
                <span class="font__main-alter font-color">{{
                  item.jobTitle
                }}</span
                ><br />
                <span class="font__main-alter-xs">{{ item.tasks }}</span
                ><br />
                <v-icon size="20" class="pr-1" color="#00ffff">
                  mdi-email-outline</v-icon
                >
                <span>{{ item.email }}</span>
              </v-col>
              <v-col cols="12" md="6" sm="6" xs="12">
                <v-avatar class="border-avatar" :size="size">
                  <img :src="item.photo" /> </v-avatar
                ><br />
              </v-col>
            </v-row>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
    <v-container>
      <v-row class="">
        <v-col cols="12" md="6" sm="6">
          <v-card-title class="title margin-text">Misión</v-card-title>

          <v-card-text class="text--primary">
            <div class="text-justify text-card padding-button">
              Desarrollar y diseñar software de calidad basado en las nuevas
              tendencias tecnológicas, utilizando herramientas modernas y
              haciendo énfasis en la completitud de los requerimientos del
              cliente, superando así, las expectativas del producto
              desarrollado.
            </div>
          </v-card-text>

          <div class="card"></div>

          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="145px"
              src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
            ></v-img>
          </v-card>
          <div class="card"></div>

          <v-card-title>Nuestros valores</v-card-title>

          <v-card-text class="text--primary">
            <div class="text-card">
              <v-icon color="cyan"> mdi-check </v-icon> Responsabilidad
            </div>
            <div class="text-card">
              <v-icon color="cyan"> mdi-check </v-icon> Honestidad
            </div>
            <div class="text-card">
              <v-icon color="cyan"> mdi-check </v-icon> Competitividad
            </div>
            <div class="text-card">
              <v-icon color="cyan"> mdi-check </v-icon> Superar expectativas
            </div>
            <div class="text-card padding-button">
              <v-icon color="cyan"> mdi-check </v-icon> Innovación
            </div>
          </v-card-text>
        </v-col>

        <v-col cols="12" md="6" sm="6">
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="168px"
              src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg"
            >
            </v-img>
          </v-card>
          <div class="card"></div>

          <v-card-title>Visión</v-card-title>

          <v-card-text class="text--primary">
            <div class="text-justify text-card padding-button">
              Consolidarnos como una empresa moderna de desarrollo de software
              en México, implementando metodologías de trabajo que ayuden a
              mejorar nuestros procesos de producción.
            </div>
          </v-card-text>
          <div class="card"></div>

          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="190px"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/26/write-593333_960_720.jpg"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <base-footer> </base-footer>
  </div>
</template>


<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import imgCarousel from "../assets/carousel-images/carousel-pictures.png";
import photoJesus from "../assets/photos/photo-jesus.jpg";

export default {
  name: "About",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data: () => ({
    attrs: {
      class: "mb-6",
      boilerplate: true,
      elevation: 2,
    },
    items: [
      {
        src: imgCarousel,
        name: "Jesús Hernández",
        degree: "Ingeniero de software",
        photo: photoJesus,
        jobTitle: "Co-Fundador y CEO",
        tasks: "Front-End y Back-End Developer",
        email: "jesus.hdez@arcup.com.mx",
      },
      {
        src: imgCarousel,
        name: "Luis Galicia",
        degree: "Ingeniero de software",
        photo: photoJesus,
        jobTitle: "Co-Fundador y CEO",
        tasks: "Front-End y Back-End Developer",
        email: "luis.galicia@arcup.com.mx",
      },
      {
        src: imgCarousel,
        name: "Jahir Landa",
        degree: "Ingeniero de software",
        photo: photoJesus,
        jobTitle: "Co-Fundador y CEO",
        tasks: "Front-End y Back-End Developer",
        email: "jesus.hdez@arcup.com.mx",
      },
    ],
  }),
  computed: {
    size() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 100;
        default:
          return 210;
      }
    },
  },
};
</script>

<style scoped>
.card {
  padding-top: 20px;
}
.title {
  color: rgb(44, 44, 44);
}
.text-card {
  font-size: medium;
}
.backgroud {
  background-color: #161e2eff;
  width: 100%;
  height: 100%;
}
.white-color {
  background-color: rgb(247, 247, 247);
}

.backgroud-card {
  background-color: #161e2eff;
}

.padding-button {
  padding-bottom: 30px;
}
.background-gray {
  background-color: rgb(238, 238, 238);
}
.height {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
}
.font__main-alter {
  font-family: Mazzard;
  font-size: 35px;
}
.font__main-alter-md {
  font-family: Mazzard;
  font-size: 28px;
}
.font__main-alter-xs {
  font-family: Mazzard;
  font-size: 20px;
}
.font-color {
  color: cyan;
}
.border-avatar {
  border-style: solid;
  border-color: cyan;
  border-width: 3px;
}
</style>