<template>
  <div>
    <v-footer color="#161E2E">
      <v-row>
        <v-col class="ma-0 pa-0" cols="12" sm="12" md="12" lg="12" xl="12">
          <v-card-text class="ma-0 d-flex justify-center pr-0">
            <router-link class="zoom-logo" :to="{ name: 'Main' }">
              <v-img
                @click="scrollTop"
                height="45"
                width="35"
                src="../assets/formaLogo-Arcup.svg"
              ></v-img>
            </router-link>
          </v-card-text>
        </v-col>
        <v-col class="ma-0 pa-0" cols="12" sm="12" md="12" lg="12" xl="12">
          <v-card color="#161E2E" width="100%" tile class="text-center" flat>
            <v-card-text class="ma-0 pa-0 d-flex justify-center">
              <div v-for="(item, index) in redesSociales" :key="index">
                <v-btn
                  target="_blank"
                  :href="item.href"
                  class="mx-4 white--text zoom-icon"
                  icon
                  width="20px"
                >
                  <v-icon class="" color="whithe" size="28px">
                    {{ item.icon }}
                  </v-icon>
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <v-card-text id="contact" class="ma-0 pt-0 white--text text-center">
            <div class="pt-2 pb-1">Contactos:</div>
            <div class="pb-3">
              <v-icon size="20" color="#00FFFF">mdi-email-outline</v-icon>
              contacto@arcup.com.mx
            </div>
            <v-card
              id="contact"
              flat
              color="#161E2E"
              class="d-flex justify-center"
            >
              <v-icon class="" size="20" color="#00FFFF">mdi-phone</v-icon>
              (+52) 2281132016
              <v-icon class="pl-5" size="20" color="#00FFFF">mdi-phone</v-icon>
              (+52) 2282935090
              <v-icon class="pl-5" size="20" color="#00FFFF">mdi-phone</v-icon>
              (+52) 2281818876
            </v-card>
          </v-card-text>
        </v-col>
        <v-col
          class="d-flex justify-center pt-0"
          cols="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <v-card-text
            id="content"
            class="pt-0 textFooter white--text text-center"
          >
            <span class="fontFooter"> {{ new Date().getFullYear() }} </span> —
            <span class="fontFooter">Arcup</span>
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "BaseFooter",
  data() {
    return {
      redesSociales: [
        {
          name: "Facebook",
          icon: "mdi-facebook",
          href: "https://www.facebook.com/arcupdev",
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          href: "https://www.instagram.com/arcupdev/",
        },
        {
          name: "Twitter",
          icon: "mdi-twitter",
          href: "https://twitter.com/arcupdev",
        },
      ],
    };
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style lang='css'>
h5 {
  color: #00ffff;
  font-family: GilroyLight;
}
#content {
  margin-left: auto;
  margin-right: auto;
  max-width: 430px;
  font-size: 12px;
}
#contact {
  color: white;
  font-size: 12px;
}
.zoom-logo :hover {
  transition-duration: 0.5s;
  transform: scale(1.4);
}
.zoom-icon :hover {
  transition-duration: 0.5s;
  transform: scale(1.1);
}
.fontFooter {
  font-family: GilroyLight;
  font-size: 16px;
}
</style> 