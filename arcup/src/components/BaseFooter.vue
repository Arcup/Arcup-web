<template>
  <div>
    <v-footer color="#161E2E">
      <v-row>
        <v-col class="ma-0 " cols="12" sm="12" md="4" lg="4" xl="4">
          <v-card-text class="text-center white--text">
            <div class="body-1">Correo: contacto@arcup.com.mx</div>
            <div class="body-1">Telefonos: 2123123212</div>
            <div class="body-2">2123123212 </div>
            <div class="body-2">2123123212 </div>
          </v-card-text>
        </v-col>

        <v-col class="ma-0 " cols="12" sm="12" md="4" lg="4" xl="4">
          <v-row no-gutters class="ml-4 mr-2 mb-2">
            <v-col class="ma-0 pa-0" cols="12" sm="3" md="3" lg="3" xl="3">
              <v-card-text class="d-flex justify-center pr-0">
                <v-img
                  max-height="54"
                  max-width="40"
                  src="../assets/formaLogo-Arcup.svg"
                ></v-img>
              </v-card-text>
            </v-col>
            <v-col cols="12" sm="7" md="7" lg="7" xl="7">
              <v-card-text id="content" class="text-justify body-2 white--text pa-1">
                En Arcup nos comprometemos con la entrega puntual del producto y
                te brindamos soporte las 24 horas los 7 días de la semana
              </v-card-text>              
            </v-col>
          </v-row>
        </v-col>

        <v-col class="ma-0 " cols="12" sm="12" md="4" lg="4" xl="4">
          <v-card color="#161E2E" width="100%" tile class="text-center" flat>
            <v-card-text class="d-flex justify-center">
              <div v-for="(item, index) in redesSociales" :key="index">
                <v-btn
                  target="_blank"
                  :href="item.href"
                  class="mx-4 white--text"
                  icon
                >
                  <v-icon color="whithe" size="34px"> {{ item.icon }} </v-icon>
                </v-btn>
                <div class="body-2 white--text">{{ item.name }}</div>
              </div>
            </v-card-text>
          </v-card>
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
        {
          name: "Linkedin",
          icon: "mdi-linkedin",
          href: "https://vuetifyjs.com/en/api/v-btn/#v-btn-api",
        },
      ],
    };
  },
};
</script>
<style lang='css'>
h5 {
  color: #00ffff;
  font-family: GilroyLight;
}
#text {
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 10px;
  text-align: justify;
}
#content{
  max-width: 360px;
}
</style> 
 <!--../assets/formaLogo-Arcup.svg -->