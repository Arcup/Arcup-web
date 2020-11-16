<template>
  <div>
    <v-footer color="#161E2E" absolute padless>
      <v-card
        color="#161E2E"
        width="100%"
        tile
        class="lighten-1 white--text text-center"
      >
        <v-card-text class="white--text pt-0"> 
          Icon arcup 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text  class="d-flex justify-center">
          <div>
            <v-btn
              target="_blank"
              href="https://vuetifyjs.com/en/api/v-btn/#v-btn-api"
              class="mx-4 white--text"
              icon
            >
              <v-icon color="#05F5FB" size="30px"> 
                mdi-facebook 
              </v-icon>
            </v-btn>
            <h5>Arcup</h5>
          </div>
          <div>
            <v-btn
              target="_blank"
              href="https://vuetifyjs.com/en/api/v-btn/#v-btn-api"
              class="mx-4 white--text"
              icon
            >
              <v-icon color="#05F5FB" size="30px"> 
                mdi-instagram 
              </v-icon>
            </v-btn>
            <h5>Instagram</h5>
          </div>
          <div>
            <v-btn
              target="_blank"
              href="https://vuetifyjs.com/en/api/v-btn/#v-btn-api"
              class="mx-4 white--text"
              icon
            >
              <v-icon color="#05F5FB" size="30px"> mdi-twitter </v-icon>
            </v-btn>
            <h5>Twitter</h5>
          </div>
          <div>
            <v-btn
              target="_blank"
              href="https://vuetifyjs.com/en/api/v-btn/#v-btn-api"
              class="mx-4 white--text"
              icon
            >
              <v-icon color="#05F5FB" size="30px"> mdi-linkedin </v-icon>
            </v-btn>
            <h5>Linkedin</h5>
          </div>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-twitter", "mdi-linkedin"],
  }),
};
</script>

<style lang='css'>
  h5 {
    color: blanchedalmond;
    font-family: 'Courier New', Courier, monospace;
  }
</style>