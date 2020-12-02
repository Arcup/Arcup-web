<template>
<div>
  <BaseHeader></BaseHeader>
  <div class="fullScreen text-center">
    <div class="width">
        <v-icon color="cyan" size="50">mdi-alert</v-icon>
        <h2 class="font__main-alter-xs colorgray">404 Not Found</h2>
      <v-img
        width="250"
        class="mx-auto"
        src="../assets/logo-Arcup-SFondoN.png"
      ></v-img>
      <h1 class="font__main-alter-md">Página no encontrada</h1>
      <h2 class="font__main-alter-xs">
        La página que solicita no se encuentra
      </h2>
      <h2 class="font__main-alter-xs pb-5">disponible o no existe</h2>
      <router-link :to="{ name: 'Main' }" class="text-decoration-none">
        <v-btn color="#161e2e" dark elevation="2"> 
            <v-icon size="20">mdi-home</v-icon>
          <strong class="pl-1">IR AL INICIO</strong></v-btn
        >
      </router-link>
    </div>
  </div>
  <BaseFooter></BaseFooter>
</div>
  
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";

export default {
  name: "PageNotFound",
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>
<style scoped>
.fullScreen {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  
}

.width {
  padding: 50px;
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
.colorgray{
  color: gray;
}
</style>