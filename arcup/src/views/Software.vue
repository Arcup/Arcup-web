<template>
  <div>
    <base-header> </base-header>
    <v-img
      id="imagenTecnologias"
      src="../assets/title-images/image-software.png"
      max-width="100%"
      max-height="300"
      class="mb-10"
    >
    </v-img>    
    <div>
      <h2 class="text-center padding-top pb-2 color-title pr-4 pl-4">
        CONOCE NUESTRO PROCESO DE DESARROLLO DE SOFTWARE
        <v-icon color="cyan">mdi-laptop</v-icon>
      </h2>
      <v-container>
        <v-card class="mx-auto pt-3 pr-3 pl-3 background-gray" flat width="950">
          <p class="text-justify">
            En Arcup estamos comprometidos con el desarrollo de software de calidad, por tal motivo,
            nos apegamos al uso de metodologías, procesos y herramientas para su construcción.
            Conoce nuestro proceso:            
          </p>
        </v-card>
      </v-container>
    </div>
    <!-- FIla 1 -->
    <v-row>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-card class="text-center" color="#F5F5F5" rounded="0" height="300">
          <h3 class="pa-4">Obtención de requisitos</h3>
          <v-card-text class="pt-0"> En Arcup organizamos las reuniones necesarias para que nos cuente sobre su proyecto </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6"> 
        <v-card rounded="0" height="300">
          <v-img max-width="100%" max-height="100%"  src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg">
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- FIla 2 -->
    <v-row>
      <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
        <v-card rounded="0" height="300">
          <v-img height="300"  src="https://cdn.pixabay.com/photo/2020/02/24/16/06/whiteboard-4876651_960_720.jpg">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-card class="text-center" color="#F5F5F5" rounded="0" height="300">
          <h3 class="pa-4">Análisis</h3>
          <v-card-text class="pa-0"> texto </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- FIla 3 -->
    <v-row>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-card class="text-center" color="#F5F5F5" rounded="0" height="300">
          <h3 class="pa-4">Diseño</h3>
          <v-card-text class="pa-0"> texto </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6"> 
        <v-card rounded="0" height="300">
          <v-img height="300"  src="https://cdn.pixabay.com/photo/2015/12/16/11/28/technology-1095751_960_720.jpg">
          </v-img>
        </v-card>
      </v-col>
    </v-row>

    <!-- FIla 4 -->
    <v-row>
      <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
        <v-card rounded="0" height="300">
          <v-img height="300"  src="https://cdn.pixabay.com/photo/2016/11/19/15/32/business-1839876_960_720.jpg">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-card class="text-center" color="#F5F5F5" rounded="0" height="300">
          <h3 class="pa-4">Codificación</h3>
          <v-card-text class="pa-0"> texto </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- FIla 5 -->
    <v-row>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-card class="text-center" color="#F5F5F5" rounded="0" height="300">
          <h3 class="pa-4">Pruebas</h3>
          <v-card-text class="pa-0"> texto </v-card-text>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6"> 
        <v-card rounded="0" height="300">
          <v-img height="300"  src="https://cdn.pixabay.com/photo/2017/05/15/06/08/checklist-2313804_960_720.jpg">
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    
    <!-- FIla 6 -->
    <v-row>
      <v-col class="pa-0" cols="12" sm="6" md="6" lg="6" xl="6">
        <v-card rounded="0" height="300">
          <v-img height="300"  src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg">
          </v-img>
        </v-card>
      </v-col>
      <v-col class="pa-0" cols="12"  sm="6" md="6" lg="6" xl="6">
        <v-card class="text-center" color="#F5F5F5" rounded="0" height="300">
          <h3 class="pa-4">Despliegue</h3>
          <v-card-text class="pa-0"> texto </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  

    <base-footer> </base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "Software",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {};
  },
};
</script>