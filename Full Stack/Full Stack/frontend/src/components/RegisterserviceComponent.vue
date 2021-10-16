<template>
  <v-app min-height="0">
    <v-app-bar
      color="#6A76AB"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      height="100"
      app
    >
      <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img contain max-height="70%" src="..\assets\logo.png"></v-img>
      </v-avatar>

      <v-container>
        <v-row>
          <v-col>
            <v-toolbar-title class="font-weight-black headline">
              {{ title }}
            </v-toolbar-title>
          </v-col>
          <v-col align="end">
            <v-btn
              color="secundary"
              right="true"
              href="https://vuetifyjs.com"
              :to="page1"
              link
              >Buscador</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-container>
      <h1>Registrar nuevo servicio</h1>
      <form>
        <v-text-field
          v-model="codigo"
          :error-messages="codigoErrors"
          label="Codigo del Servicio"
          required
          solo
        ></v-text-field>
        <v-text-field
          v-model="correo"
          :error-messages="correoErrors"
          label="Correo del Profesional"
          required
          solo
        ></v-text-field>
        <v-text-field
          v-model="habilidad"
          :error-messages="habilidadErrors"
          label="Habilidad del Profesional"
          required
          solo
        ></v-text-field>
        <v-textarea
        v-model="descripcion"
        :error-messages="descripcionErrors"
        autocomplete="Descripcion del Servicio" 
        label="Descripcion del Servicio" 
        solo
        ></v-textarea>
        <v-text-field
          v-model="valor"
          :error-messages="valor"
          label="Valor del Servicio"
          required
          solo
        ></v-text-field>

        <v-btn class="mr-4" color="success" elevation="2" large @click="guardar()">
          guardar
        </v-btn>
      </form>
    </v-container>
  </v-app>
</template>

<script>
import { insertServicio } from "../services/Servicios";

export default {
  title() {
    return `${this.someValue}`;
  },
  data() {
    return {
      page1: "/buscador",
      someValue: "Ingeniero",
      title: "INGENIO",
    };
  },
  methods: {
    guardar(){
      const servicio = {
        codigo:this.codigo,
        correo:this.correo,
        habilidad:this.habilidad,
        descripcion:this.descripcion,
        valor:this.valor
      };
      insertServicio(servicio)
      .then((response) => {
        console.log("Se ha creado un ingeniero", response.data._id)
      })
      .catch((error) => console.log(error))
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
</style>