<template>
  <div>
    <base-header> </base-header>
    <v-img
      id="imagenTecnologias"
      src="../assets/title-images/image-technology.png"
      max-width="100%"
      max-height="200"
    >
    </v-img>

    <v-container>
      <v-row>
        <v-col class="" cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200" class="centrado">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class=""
              height="100"
              max-width="100"              
            >
              <v-avatar size="100" class="background" @click="selec1">
                <v-icon size="60" dark> mdi-web </v-icon>
              </v-avatar>
            </v-card>
          </v-hover>          
        </v-col>
        
        <v-col class="text-center" cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200" class="centrado">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class=""
              height="100"
              max-width="100"
              
            >
              <v-avatar size="100" class="background" @click="selec2">
                <v-icon size="60" dark>mdi-android</v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>
        <v-col class="text-center"  cols="12" sm="4" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200" class="centrado">
            <v-card
              rounded="circle"
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class=""
              height="100"
              max-width="100"
            >
              <v-avatar size="100" class="background" @click="selec3">
                <v-icon size="50" dark> mdi-account-group </v-icon>
              </v-avatar>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <v-col class="shrink">
        <v-scroll-x-transition hide-on-leave>
          <v-card
            v-show="expand"
            height="200"
            width="70%"
            class="mx-auto"
            color="blue"
          >
            111111111111111
          </v-card>
        </v-scroll-x-transition>
        <v-fade-transition hide-on-leave>
          <v-card
            v-show="expand2"
            height="200"
            width="70%"
            class="mx-auto"
            color="blue"
          >
            22222222222
          </v-card>
        </v-fade-transition>
        <v-scroll-x-reverse-transition hide-on-leave>
          <v-card
            v-show="expand3"
            height="200"
            width="70%"
            class="mx-auto"
            color="blue"
          >
            333333333333333333333
          </v-card>
        </v-scroll-x-reverse-transition>
      </v-col>
    </div>
    <base-footer> </base-footer>
  </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
export default {
  name: "Technology",
  components: {
    BaseHeader,
    BaseFooter,
  },
  data() {
    return {
      expand: true,
      expand2: false,
      expand3: false,
    };
  },
  methods: {
    selec1: function () {
      this.expand2 = false;
      this.expand3 = false;
      this.expand = true;
    },
    selec2: function () {
      this.expand = false;
      this.expand3 = false;
      this.expand2 = true;
    },
    selec3: function () {
      this.expand = false;
      this.expand2 = false;
      this.expand3 = true;
    },
  },
};
</script>
<style lang='css'>
.centrado {
    margin-left: 33% !important;
}
#imagenTecnologias {
  margin-bottom: 30px;
}
.background {
  background-image: url("../assets/background-circle-tech.svg");
}
</style>