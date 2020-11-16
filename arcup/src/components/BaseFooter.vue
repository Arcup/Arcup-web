<template>
  <div>
    <v-footer absolute dark padless>
      <v-card
        width="100%"
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text class="white--text pt-0"> 
            Icon arcup 
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-instagram", "mdi-twitter", "mdi-linkedin", ],
  }),
};
</script>