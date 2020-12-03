<template>
  <div>
    <v-footer color="#161E2E" class="pt-7">
      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4" xl="4">
          <v-card-text id="contact" class="ma-0 pt-0 white--text text-center">
            <div>Correo:</div>
            <div class="pb-3">
              <v-icon size="20" color="white">mdi-email-outline</v-icon>
              contacto@arcup.com.mx
            </div>
            <div>Teléfono:</div>
            <div>
              <v-icon size="20" color="white">mdi-phone</v-icon> (+52)
              2281818876
            </div>
          </v-card-text>
        </v-col>

        <v-col class="ma-0 pa-0" cols="12" sm="6" md="4" lg="4" xl="4">
          <v-row no-gutters class="ml-4 mr-2 mb-2">
            <v-col class="ma-0 pa-0" cols="12" sm="12" md="12" lg="12" xl="12">
              <v-card-text class="ma-0 d-flex justify-center pr-0">                
                <router-link class="zoom" :to="{ name: 'Main' }">
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
              <v-card
                color="#161E2E"
                width="100%"
                tile
                class="text-center"
                flat
              >
                <v-card-text class="ma-0 pa-0 d-flex justify-center">
                  <div v-for="(item, index) in redesSociales" :key="index">
                    <v-btn
                      target="_blank"
                      :href="item.href"
                      class="mx-4 white--text zoom"
                      icon
                    >
                      <v-icon color="whithe" size="34px">
                        {{ item.icon }}
                      </v-icon>
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" xl="4">
          <v-card-text id="content" class="textFooter white--text text-justify">
            En Arcup nos comprometemos con la entrega puntual del producto y te
            brindamos soporte las 24 horas los 7 días de la semana
          </v-card-text>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>
<script>
export default {
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
  max-width: 65%;
  font-size: 12px;
}
#contact {
  font-size: 12px;
}
.zoom :hover {
  transition-duration: 2s;
  transform: rotate(360deg);
  transform: scale(1.4);
}
</style> 
