<template>
  <div>
    <div v-show="isMobile()">
      <v-app-bar app color="#161e2e">
        <div class="d-flex">
          <router-link :to="{ name: 'Main' }" class="text-decoration-none">
            <figure
              class="icon__arcup-mobile mt-4 align-end"
              @click="scrollTop"
            ></figure>
          </router-link>
          <router-link :to="{ name: 'Main' }" class="text-decoration-none">
            <span class="white--text font__arcup align-end" @click="scrollTop"
              >arcup</span
            >
          </router-link>
        </div>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon
          right
          @click.stop="drawer = !drawer"
          color="white"
        ></v-app-bar-nav-icon>
      </v-app-bar>
      <v-app-bar color="#161e2e"> </v-app-bar>
    </div>
    <div v-show="!isMobile()">
      <v-app-bar app elevate-on-scroll color="#161e2e">
        <v-toolbar-items>
          <router-link :to="{ name: 'Main' }" class="text-decoration-none">
            <figure
              class="icon__arcup-no-mobile mt-2"
              @click="scrollTop"
            ></figure>
          </router-link>
          <router-link :to="{ name: 'Main' }" class="text-decoration-none">
            <span class="white--text font__arcup mr-16 ml-1" @click="scrollTop"
              >arcup</span
            >
          </router-link>
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
                <v-list-item-icon @click="scrollTop">
                  <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content @click="scrollTop">
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
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
                <v-list-item-icon @click="scrollTop">
                  <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title @click="scrollTop">{{
                  item.text
                }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <router-link :to="{ name: 'Contact' }" class="text-decoration-none">
            <v-btn text color="white" class="mt-3 pt-1" @click="scrollTop">
              Contáctanos
            </v-btn>
          </router-link>
        </v-toolbar-items>
      </v-app-bar>
      <v-app-bar color="#161e2e"> </v-app-bar>
    </div>

    <v-navigation-drawer v-model="drawer" fixed left class="drawer">
      <v-list>
        <v-subheader>CONTÁCTANOS</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group>
          <router-link :to="{ name: 'Contact' }" class="text-decoration-none">
            <v-list-item>
              <v-list-item-icon @click="scrollTop">
                <v-icon color="#161e2eff">mdi-message-text</v-icon>
              </v-list-item-icon>
              <v-list-item-title @click="scrollTop"
                >Contáctanos</v-list-item-title
              >
            </v-list-item>
          </router-link>
        </v-list-item-group>
        <v-subheader>SERVICIOS</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item
            v-for="(item, index) in itemsServicios"
            :key="index"
            @click="selectItemServicios(index)"
          >
            <v-list-item-icon @click="scrollTop">
              <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content @click="scrollTop">
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <v-subheader>NOSOTROS</v-subheader>
        <v-divider></v-divider>
        <v-list-item-group>
          <v-list-item
            v-for="(item, index) in itemsNosotros"
            :key="index"
            @click="selectItemNosotros(index)"
          >
            <v-list-item-icon @click="scrollTop">
              <v-icon color="#161e2eff" v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title @click="scrollTop">{{
              item.text
            }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
      { text: "Conócenos", icon: "mdi-home-search" },
      { text: "Tecnologías", icon: "mdi-source-branch" },
      { text: "Historia", icon: "mdi-account-group" },
    ],
    itemsServicios: [
      { text: "Paquetes", icon: "mdi-package-variant" },
      { text: "Software", icon: "mdi-web" },
      { text: "Tu proyecto", icon: "mdi-vector-polyline-edit" },
    ],
  }),
  watch: {
    group() {
      this.drawer = false;
    },
  },

  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
    selectItemNosotros: function (index) {
      switch (index) {
        case 0:
          this.openView("About");
          break;
        case 1:
          this.openView("Technology");
          break;
        case 2:
          this.openView("Story");
          break;
        default:
          break;
      }
    },
    selectItemServicios: function (index) {
      switch (index) {
        case 0:
          this.openView("Package");
          break;
        case 1:
          this.openView("Software");
          break;
        case 2:
          this.openView("YourProject");
          break;
        default:
          break;
      }
    },
    openView: function (view) {
      this.$router.push({ name: view }).catch(() => {});
    },
    isMobile: function () {
      return this.$vuetify.breakpoint.smOnly || this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
<style  lang='css'>
.icon__arcup-mobile {
  background-image: url("../assets/formaLogo-Arcup.svg");
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.icon__arcup-no-mobile {
  background-image: url("../assets/formaLogo-Arcup.svg");
  width: 20px;
  height: 43px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.drawer {
  z-index: 5 !important;
}
</style>