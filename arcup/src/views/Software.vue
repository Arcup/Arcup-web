<template>
  <div>
    <base-header> </base-header>
    <v-img
      id="imagenTecnologias"
      src="../assets/title-images/image-software.png"
      max-width="100%"
      max-height="200"
    >
    </v-img>

    
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
};
</script>