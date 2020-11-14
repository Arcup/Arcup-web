<template>
    <div>
        <base-header>
        </base-header>
        <v-carousel
            cycle
            interval="5000"
            height="350"
            show-arrows-on-hover
        >
            <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
        </v-carousel>
        <div >
            <v-stepper non-linear>
                <v-stepper-header>
                    <v-stepper-step
                        editable
                        step="1"
                        class="ma-2"
                        color="primary"                        
                        @click="selec1"
                    >
                        Desarrollo Web
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        editable
                        step="2"
                        class="ma-2"
                        color="primary"                        
                        @click="selec2"
                    >
                        Desarrollo movil
                    </v-stepper-step>
                    <v-divider></v-divider>
                    <v-stepper-step
                        step="3"
                        editable
                        class="ma-2"
                        color="primary"                        
                        @click="selec3"
                    >
                        Asesorias
                    </v-stepper-step>
                </v-stepper-header>
            </v-stepper> 
            
            <v-col class="shrink">
                <v-scroll-x-transition leave-absolute="false">
                    <v-card
                        v-show="expand"
                        height="200"
                        width="500"
                        class="mx-auto secondary"
                    >
                    1111111111111
                    </v-card>
                </v-scroll-x-transition>
                <v-scroll-x-transition leave-absolute="false">
                    <v-card
                        v-show="expand2"
                        height="200"
                        width="500"
                        class="mx-auto secondary"
                    >
                    22222222222
                    </v-card>
                </v-scroll-x-transition >
                <v-scroll-x-transition leave-absolute="false">
                    <v-card
                        v-show="expand3"
                        height="200"
                        width="500"
                        class="mx-auto secondary"
                    >
                    333333333333333333333
                    </v-card>
                </v-scroll-x-transition>
            </v-col>           
        </div>    
        <div>
        </div>    
    </div>
</template>
<script>
import BaseHeader from "@/components/BaseHeader.vue"
export default {
    name: 'Technology',
    components: {
        BaseHeader,
    },
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        expand: false,
        expand2: false,
        expand3: false,
      }
    },
    methods: {
    selec1: function () {
      this.expand2 = false;
      this.expand3 = false;  
      this.expand = !this.expand
      
    },
    selec2: function () {
      this.expand = false;
      this.expand3 = false;  
      this.expand2 = !this.expand2
      
    },
    selec3: function () {
      this.expand = false;
      this.expand2 = false;
      this.expand3 = !this.expand3
      
    },
  },
}
</script>
<style lang='css'>
    .v-stepper{
        margin-top: 5%;
        margin-left: 15%;
        margin-right: 15%;
        box-shadow: none;
    }
</style>