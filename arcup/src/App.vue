<template>
  <v-app>
    <router-view/>
  </v-app>
</template>
<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "Arcup",
      meta: [
        {
          name: "description",
          content: "Arcup | Construimos software de calidad a la medida, creamos tu proyecto y se lo mostramos al MUNDO. Desarrollamos tu página web o apliación móvil.",
        },
        {
          name: "keywords",
          content: "Desarrollo, Software, Desarrollo de software, Página web, Página, Aplicación Móvil, Aplicación, Precios, Xalapa, Veracruz",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "googlebot",
          content: "index, follow",
        },
      ],
    };
  },
}
</script>
<style lang="css" src="../public/styles.css"></style>

