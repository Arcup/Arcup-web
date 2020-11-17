<template>
  <div id="divContact" class="background_contact">
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-contact.png"
      max-width="100%"
      max-height="200"
    ></v-img>
    <form @submit.prevent="submit">
      <div>
        <v-container>
          <v-row>
            <v-col class="col" sm="12" cols="12" md="4" lg="4">
              <v-card-text class="text-justify text-size">
                En Arcup nos interesa lo que tengas que decir, si tienes en
                mente un proyecto y requieres una solucion tecnológica o
                asesoría personalizada ponte en contacto con nosotros a través
                del formulario de solicitud, o para cualquier aclaración
                mediante nuestras fuentes de contacto:
              </v-card-text>
              <v-card-text class="text-justify text-size">
                <h2 class="h2">E-mail</h2>
                <br />
                arcup.management@outlook.com
                <h2 class="h2"><br />Teléfono</h2>
                <br />
                (+52) 2281132016 <br />
                (+52) 2281458744
              </v-card-text>
            </v-col>
            <v-col class="col-input" cols="12" sm="6" md="4" lg="4">
              <v-text-field label="Nombre" required></v-text-field>
              <v-text-field label="Apellido Paterno" required></v-text-field>
              <v-text-field label="Apellido Materno" required></v-text-field>
              <v-text-field label="Teléfono" required></v-text-field>

              <v-text-field label="E-mail" required></v-text-field>
            </v-col>
            <v-col class="col-input" cols="12" sm="6" md="4" lg="4">
              <v-select
                v-model="statesSelected"
                :items="statesArray"
                label="Estado"
                required
                @change="onChangeStates()"
              ></v-select>
              <v-select :disabled="selectDisabled === true"
                v-model="citySelected"
                :items="cityArray"
                label="Ciudad"
                required
              ></v-select>
              <v-text-field label="Nombre del Proyecto" required></v-text-field>
              <v-textarea
                outlined
                no-resize
                label="Descripción del Proyecto"
                height="121px"
              ></v-textarea>
              <v-btn depressed color="primary"> ENVIAR </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </form>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import axios from "axios";

export default {
  name: "Contact",
  components: {
    BaseHeader,
  },

  created() {
    axios
      .get("https://api-sepomex.hckdrk.mx/query/get_estados")
      .then((response) => (this.statesArray = response.data.response.estado));
      this.statesArray.sort();
  },

  methods: {
    onChangeStates() {
      if (this.statesSelected != null) {
        axios
          .get(
            "https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/" + this.statesSelected
          )
          .then(
            (response) => (this.cityArray = response.data.response.municipios)
          );
          this.selectDisabled = false;
          this.cityArray.sort();
      }
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    selectDisabled: true,
    statesArray: [],
    statesSelected: [],
    cityArray: ["Seleccione un esatdo"],
    citySelected: [],
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    car: [
      {
        src:
          "https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg",
      },
      {
        src:
          "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_960_720.jpg",
      },
      {
        src:
          "https://cdn.pixabay.com/photo/2015/05/31/10/55/man-791049_960_720.jpg",
      },
      {
        src:
          "https://cdn.pixabay.com/photo/2018/03/10/12/00/paper-3213924_960_720.jpg",
      },
    ],
    checkbox: null,
  }),
};
</script>

<style scoped>
.h2 {
  color: rgb(119, 119, 119);
  text-decoration: none;
}
.col-input {
  padding-left: 20px;
  padding-right: 20px;
}
.h1 {
  padding-left: 14px;
}

.background_contact {
  position: relative;
  background-position-y: top;
  background-image: url("../assets/contact-background.svg");
}
.divContact {
  height: 100%;
}
.center {
  text-align: center;
  padding-top: 10%;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
}
.text-size {
  font-size: medium;
}
.networks {
  color: rgb(119, 119, 119);
  text-decoration: none;
  padding: 10px;
}

.icon {
  color: rgb(119, 119, 119);
}
.black_background {
  background-color: rgb(53, 53, 53);
}
.white_color {
  color: aliceblue;
}
</style>