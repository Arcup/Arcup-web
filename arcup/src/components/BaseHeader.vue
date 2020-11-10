<template>
  <div>
    <v-toolbar dark>
      <figure class="icon__arcup"></figure>
      <span class="white--text font__arcup ml-2 mr-16">arcup</span>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            Nosotros
            <v-icon right color="orange darken-2"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            Servicios
            <v-icon right color="orange darken-2"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <router-link :to="{ name: 'Contact' }" class="text-decoration-none">
        <v-btn text dark v-bind="attrs" v-on="on"> Contáctanos </v-btn>
      </router-link>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
};
</script>
<style lang='css'>
.font__arcup {
  font-family: RoundedElegance;
  font-size: 40px;
}
.icon__arcup {
  background-image: url("../assets/formaLogo-Arcup.svg");
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>