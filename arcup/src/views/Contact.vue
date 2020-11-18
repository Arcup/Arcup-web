<template>
  <div id="divContact" class="background_contact">
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-contact.png"
      max-width="100%"
      max-height="200"
    ></v-img>
    <validation-observer ref="observer" v-slot="{ invalid }">
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
                <validation-provider
                  v-slot="{ errors }"
                  name="Nombre"
                  rules="required|max:50"
                >
                  <v-text-field
                    label="Nombre"
                    :error-messages="errors"
                    v-model="name"
                    required
                  >
                  </v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Apellido Paterno"
                  rules="required|max:50"
                >
                  <v-text-field
                    label="Apellido Paterno"
                    :error-messages="errors"
                    v-model="lastNameF"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Apellido Materno"
                  rules="required|max:50"
                >
                  <v-text-field
                    label="Apellido Materno"
                    :error-messages="errors"
                    v-model="lastNameM"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Teléfono"
                  rules="required|max:13"
                >
                  <v-text-field
                    label="Teléfono"
                    :error-messages="errors"
                    v-model="phoneNumber"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="email"
                  rules="required|email"
                >
                  <v-text-field
                    label="E-mail"
                    :error-messages="errors"
                    v-model="email"
                    required
                  ></v-text-field>
                </validation-provider>
              </v-col>
              <v-col class="col-input" cols="12" sm="6" md="4" lg="4">
                <validation-provider
                  v-slot="{ errors }"
                  name="Estado"
                  rules="required"
                >
                  <v-select
                    v-model="statesSelected"
                    :items="statesArray"
                    :error-messages="errors"
                    label="Estado"
                    required
                    @change="onChangeStates()"
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Ciudad"
                  rules="required"
                >
                  <v-select
                    :disabled="selectDisabled === true"
                    v-model="citySelected"
                    :items="cityArray"
                    :error-messages="errors"
                    label="Ciudad"
                    required
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Nombre del Proyecto"
                  rules="required|max:50"
                >
                  <v-text-field
                    label="Nombre del Proyecto"
                    v-model="projectName"
                    :error-messages="errors"
                    required
                  ></v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Descripción del Proyecto"
                  rules="required|max:1000"
                >
                  <v-textarea
                    outlined
                    required
                    :error-messages="errors"
                    v-model="projectDescription"
                    :counter="1000"
                    no-resize
                    label="Descripción del Proyecto"
                    height="121px"
                  ></v-textarea>
                </validation-provider>
                <v-btn
                  depressed
                  color="primary"
                  type="submit"
                  :disabled="invalid"
                >
                  ENVIAR
                </v-btn>
                <v-btn @click="clear" outlined class="ml-2 icon"> LIMPIAR CAMPOS </v-btn>
                <div class="text-size-m icon pt-1">
                  Llena todos los campos para enviar
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </form>
    </validation-observer>
    <base-footer> </base-footer>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader.vue";
import axios from "axios";
import { required, email, max } from "vee-validate/dist/rules";
import BaseFooter from "@/components/BaseFooter.vue";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "El campo {_field_} no puede estar vacio",
});

extend("max", {
  ...max,
  message: "El campo {_field_} no puede tener más de {length} caracteres",
});

extend("email", {
  ...email,
  message: "Formato de e-mail no valido",
});

export default {
  name: "Contact",
  components: {
    BaseHeader,
    ValidationProvider,
    ValidationObserver,
    BaseFooter,
  },

  created() {
    axios
      .get("https://api-sepomex.hckdrk.mx/query/get_estados")
      .then((response) =>
        (this.statesArray = response.data.response.estado).sort()
      );
  },

  methods: {
    onChangeStates() {
      if (this.statesSelected != null) {
        axios
          .get(
            "https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/" +
              this.statesSelected
          )
          .then((response) =>
            (this.cityArray = response.data.response.municipios).sort()
          );
        this.selectDisabled = false;
      }
    },
    submit() {
      this.$refs.observer.validate();
    },
    clear() {
      this.name = "";
      this.lastNameF = "";
      this.lastNameM = "";
      this.phoneNumber = "";
      this.email = "";
      this.statesSelected = null;
      this.citySelected = null;
      this.projectName = "";
      this.projectDescription = "";
      this.$refs.observer.reset();
    },
  },

  data: () => ({
    name: "",
    lastNameF: "",
    lastNameM: "",
    phoneNumber: "",
    email: "",
    projectName: "",
    projectDescription: "",

    selectDisabled: true,
    statesArray: [],
    statesSelected: [],
    cityArray: [],
    citySelected: [],
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
.text-size-m{
  font-size: small;
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