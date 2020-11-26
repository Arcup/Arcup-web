<template>
<div >
      <base-header></base-header>
      <v-img
      src="../assets/title-images/image-culture.png"
      max-width="100%"
      max-height="200"
    ></v-img>

  <v-container>
    
    
    <v-row class="">
      
      <v-col cols="12" md="6" sm="6">
        <v-card-title class="title margin-text">Misión</v-card-title>

          <v-card-text class="text--primary">
            <div class="text-justify text-card padding-button">
              Desarrollar y diseñar software de calidad basado en las nuevas
              tendencias tecnológicas, utilizando herramientas modernas y
              haciendo énfasis en la completitud de los requerimientos del
              cliente, superando así, las expectativas del producto desarrollado.
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
            <div class="text-card"><v-icon color="cyan">
               mdi-check </v-icon> Responsabilidad</div>
            <div class="text-card"><v-icon color="cyan">
               mdi-check </v-icon> Honestidad</div>
            <div class="text-card"><v-icon color="cyan">
               mdi-check </v-icon> Competitividad</div>
            <div class="text-card"><v-icon color="cyan"
            > mdi-check </v-icon> Superar expectativas</div>
            <div class="text-card padding-button"><v-icon color="cyan">
               mdi-check </v-icon> Innovación</div>
          </v-card-text>
      </v-col>

      <v-col cols="12" md="6" sm="6" >

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
  <div>
    
  </div>
  <base-footer> </base-footer>
</div>
</template>


<script>

import BaseHeader from '@/components/BaseHeader.vue'
import BaseFooter from "@/components/BaseFooter.vue";

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
  }),
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
.backgroud{
  background-color: #161e2eff;
  width: 100%;
  height: 100%;
}
.white-color{
  background-color: rgb(247, 247, 247);
}

.backgroud-card{
  background-color: #161e2eff;
}

.padding-button{
  padding-bottom: 30px;
}
.background-gray{
  background-color: rgb(238, 238, 238);
}


</style>