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
    <div v-for="(item, index) in sections" :key="index">
      <v-card flat class="text-center" width="100%" height="140">
        <h2>{{ item.title }}</h2>        
        <v-card-text class="text-center">{{ item.description }}</v-card-text>        
      </v-card>
      
      <v-parallax dark :src="item.src" height="300" class="mb-16">        
      </v-parallax>
    </div>
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
    return {
      sections: [
        {
          title: "Obtención de requisitos",
          description: "En Arcup organizamos reuniones con nuestros clientes para descubrir y entender tus necesidades.",
          src:
            "https://cdn.pixabay.com/photo/2017/01/14/10/56/men-1979261_960_720.jpg",
        },
        {
          title: "Análisis",
          description: "Revisamos las necesidades expuestas para determinar los requerimientos y generar una propuesta de solución que cumpla tus expectativas.",
          src:
            "https://cdn.pixabay.com/photo/2019/03/07/16/48/hands-4040619_960_720.jpg",
        },
        {
          title: "Diseño",
          description: "Elaboramos prototipos que te permitirán conocer una vista del contenido de tu sistema, también, elegimos las mejores tecnologías y herramientas para su desarrollo.",
          src:
            "https://cdn.pixabay.com/photo/2015/09/29/22/49/blueprint-964629_960_720.jpg",
        },
        {
          title: "Codificación",
          description: "Codificamos el software por iteraciones para mostrarte los avances que se han realizado. ",
          src: "https://cdn.pixabay.com/photo/2019/03/07/16/48/hands-4040619_960_720.jpg",
        },
        {
          title: "Pruebas",
          description: "Realizamos pruebas en paralelo para garantizar el correcto funcionamiento de tú proyecto. Al finalizar desplegamos tú sistema para que valides su funcionamiento.",
          src:
            "https://cdn.pixabay.com/photo/2020/05/22/21/44/review-5207277_960_720.jpg",
        },
      ],
    };
  },
};
</script>