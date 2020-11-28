<template>
  <div id="divContact" class="background_contact">
    <base-header></base-header>
    <v-img
      src="../assets/title-images/image-contact.png"
      max-width="100%"
      max-height="300"
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
                  contacto@arcup.com.mx
                  <h2 class="h2"><br />Teléfono</h2>
                  <br />
                  (+52) 2281132016 <br />
                  (+52) 2282935090 <br />
                  (+52) 2281818876
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
                    :disabled="stateDisabled"
                    :items="statesArray"
                    :error-messages="errors"
                    required
                    label="Estado"
                    @change="onChangeStates()"
                  ></v-select>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Ciudad"
                  rules="required"
                >
                  <v-select
                    :disabled="cityDisabled"
                    v-model="citySelected"
                    :items="cityArray"
                    required
                    :error-messages="errors"
                    label="Ciudad"
                  ></v-select>
                </validation-provider>
                <v-checkbox
                  v-model="checkbox"
                  value="1"
                  label="No soy de México"
                  type="checkbox"
                  @click="checkboxclick"
                ></v-checkbox>
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
                  :loading="loading3"
                  @click="loader = 'loading3'"
                >
                  ENVIAR
                </v-btn>
                <v-btn @click="clear" outlined class="ml-2 icon">
                  LIMPIAR CAMPOS
                </v-btn>
                <div class="text-size-m icon pt-1">
                  Llena todos los campos para enviar
                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </form>
    </validation-observer>
    <v-dialog v-model="dialog201" width="600">
      <v-card>
        <v-card-title class="headline lighten-2">
          Se envió el formulario con éxito!
        </v-card-title>

        <v-card-text>
          Gracias por comunicarte con nosotros, a la brevedad nuestro equipo de
          trabajo se pondrá en contacto contigo.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            v-on:click="clear"
            text
            @click="dialog201 = false"
            >ACEPTAR</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogError" width="600">
      <v-card>
        <v-card-title class="headline lighten-2 error-color">
          Algo salió mal...
        </v-card-title>

        <v-card-text class="text-size">
          Ocurrio un error al enviar el formulario, por favor intentelo de
          nuevo.</v-card-text
        ><br />
        <v-card-text>
          <div>
            Si el error persiste comunicate directamente con nostros a traves de
            nuestras fuentes de contacto.
          </div>
          <div class="text-size">E-mail:</div>
          <div>contacto@arcup.com.mx</div>
          <div class="text-size">Teléfono:</div>
          <div>(+52) 2281132016</div>
          <div>(+52) 2282935090</div>
          <div>(+52) 2281818876</div>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialogError = false"
            >ACEPTAR</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import emailjs from "emailjs-com";

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
        this.cityDisabled = false;
      }
    },
    checkboxclick() {
      if (this.stateDisabled == false) {
        this.stateDisabled = true;
        this.statesSelected = "N/A";
        this.cityDisabled = true;
        this.citySelected = "N/A";
      } else {
        this.stateDisabled = false;
        this.statesSelected = null;
        this.cityDisabled = true;
        this.citySelected = null;
      }
    },
    submit() {
      this.$refs.observer.validate();

      let templateParams = {
        userName: this.name,
        lastNameF: this.lastNameF,
        lastNameM: this.lastNameM,
        email: this.email,
        phoneNumber: this.phoneNumber,
        date: new Date().toLocaleDateString(),
        city: this.citySelected,
        state: this.statesSelected,
        projectName: this.projectName,
        projectDescription: this.projectDescription,
      };

      emailjs.send("service_arcup", "template_vw33gf9", templateParams, "user_SmeQlmZFRcDR86wl6vCpl")
      .then((response) =>  {
          if (response != null) {
            console.log("SUCCESS!", response.status, response.text);
            this.dialog201 = true;
          }
        },
        (error) => {
          if (error != null) {
            this.dialogError = true;
            console.log("FAILED...", error);
          }
        }
      );
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
    checkbox: null,

    cityDisabled: true,
    stateDisabled: false,
    statesArray: [],
    statesSelected: [],
    cityArray: [],
    citySelected: [],

    test: "",

    dialog201: false,
    dialogError: false,

    loader: null,
    loading3: false,
  }),

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 4000);

      this.loader = null;
    },
  },
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
.text-size-m {
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
.error-color {
  color: rgb(238, 122, 122);
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>