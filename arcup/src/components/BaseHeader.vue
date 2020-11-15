<template>
  <div>
    <v-app-bar color="#161e2eff">
      <v-toolbar-items v-show="isMobile()">
        <v-menu transition="slide-x-transition" left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on" class="mr-4 pl-0">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-subheader>CONTÁCTANOS</v-subheader> 
            <v-list-item-group>
              <router-link :to="{ name: 'Contact' }" class="text-decoration-none">
              <v-list-item>
                <v-list-item-icon>
                  
                  <v-icon color="#161e2eff">mdi-message-text</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Contáctanos</v-list-item-title>
              </v-list-item>
              </router-link>
            </v-list-item-group>
            <v-subheader>SERVICIOS</v-subheader> 
            <v-list-item-group>
              <v-list-item
                v-for="(item, index) in itemsServicios"
                :key="index"
                @click="selectItemServicios(index)"
              >
                <v-list-item-icon>
                  <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-subheader>NOSOTROS</v-subheader>
            <v-list-item-group>
              <v-list-item
                v-for="(item, index) in itemsNosotros"
                :key="index"
                @click="selectItemNosotros(index)"
              >
                <v-list-item-icon>
                  <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <div class="d-flex justify-end">
          <router-link :to="{ name: 'Main' }" class="text-decoration-none">
            <figure class="icon__arcup mt-4 align-end"></figure>
          </router-link>
          <router-link :to="{ name: 'Main' }" class="text-decoration-none">
            <span class="white--text font__arcup align-end">arcup</span>
          </router-link>
        </div>
      </v-toolbar-items>
      <v-toolbar-items v-show="!isMobile()">
        <router-link :to="{ name: 'Main' }" class="text-decoration-none">
          <figure class="icon__arcup mt-4"></figure>
        </router-link>
        <router-link :to="{ name: 'Main' }" class="text-decoration-none">
          <span class="white--text font__arcup ml-2 mr-16">arcup</span>
        </router-link>
        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text rounded v-bind="attrs" v-on="on" color="white">
              Nosotros
              <v-icon right> mdi-chevron-down </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in itemsNosotros"
              :key="index"
              @click="selectItemNosotros(index)"
            >
              <v-list-item-icon>
                <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu offset-y transition="slide-y-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text rounded v-bind="attrs" v-on="on" color="white">
              Servicios
              <v-icon right> mdi-chevron-down </v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item
              v-for="(item, index) in itemsServicios"
              :key="index"
              @click="selectItemServicios(index)"
            >
              <v-list-item-icon>
                <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
        <router-link :to="{ name: 'Contact' }" class="text-decoration-none">
          <v-btn text rounded color="white" class="mt-3 pt-1">
            Contáctanos
          </v-btn>
        </router-link>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "BaseHeader",
  data: () => ({
    drawer: false,
    group: null,
    collapseOnScroll: true,
    itemsNosotros: [
      { text: "Tecnologías", icon: "mdi-source-branch" },
      { text: "Historia", icon: "mdi-account-group" },
      { text: "Cultura", icon: "mdi-home-search" },
    ],
    itemsServicios: [
      { text: "Software", icon: "mdi-web" },
      { text: "Paquetes", icon: "mdi-package-variant" },
      { text: "Tu proyecto", icon: "mdi-vector-polyline-edit" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    selectItemNosotros: function (index) {
      switch (index) {
        case 0:
          this.$router.push({ name: "Technology" });
          break;
        case 1:
          break;
        case 2:
          this.$router.push({ name: "About" });
          break;
        default:
          break;
      }
    },
    selectItemServicios: function (index) {
      switch (index) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
        default:
          break;
      }
    },
    isMobile: function () {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
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