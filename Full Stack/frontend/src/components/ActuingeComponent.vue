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
      <h1>Actualizar Ingenierio</h1>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="nombre"
          :error-messages="nombreErrors"
          label="Nombre Completo"
          required
          @input="$v.nombre.$touch()"
          @blur="$v.nombre.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="documento"
          :error-messages="documentoErrors"
          :counter="10"
          label="Documento de Identidad"
          required
          @input="$v.documento.$touch()"
          @blur="$v.documento.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="correo"
          :error-messages="correoErrors"
          label="E-mail"
          required
          @input="$v.correo.$touch()"
          @blur="$v.correo.$touch()"
        ></v-text-field>
        <v-select
          v-model="profesion"
          :items="listaProfesion"
          :error-messages="profesionErrors"
          label="Profesion"
          required
          @change="$v.profesion.$touch()"
          @blur="$v.profesion.$touch()"
        ></v-select>
        <v-text-field
          v-model="telefono"
          :error-messages="telefono"
          label="Numero Celular"
          required
          @input="$v.telefono.$touch()"
          @blur="$v.telefono.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="ciudad"
          :error-messages="ciudadOferta"
          label="Ciudad de Residencia"
          required
          @input="$v.ciudad.$touch()"
          @blur="$v.ciudad.$touch()"
        ></v-text-field>

        <v-btn
          class="mr-4"
          color="success"
          elevation="2"
          large
          @click="guardar()"
        >
          actualizar
        </v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
//import { insertInge } from "../services/Profesionales";
import axios from "axios";

export default {
  title() {
    return `${this.someValue}`;
  },
  mounted() {
    axios
      .get("http://localhost:3000/api//busca/" + this.$route.params.id)
      .then((respuesta) => {
        this.nombre = respuesta.data.nombre;
        this.documento = respuesta.data.documento;
        this.correo = respuesta.data.correo;
        this.profesion = respuesta.data.profesion;
        this.telefono = respuesta.data.telefono;
        this.ciudad = respuesta.data.ciudad;
        console.log(respuesta.data);
      });
  },
  data() {
    return {
      page1: "/buscador",
      someValue: "Ingeniero",
      title: "INGENIO",
      listaProfesion: [
        "Ingeniero Agrónomo",
        "Ingeniero Civil",
        "Ingeniero de Minas",
        "Ingeniero de Sistemas",
        "Ingeniero en Telecomunicaciones",
        "Ingeniero Eléctrico",
        "Ingeniero Electrónico",
        "Ingeniero en Energía",
        "Ingeniero Ambiental",
        "Ingeniero Logístico",
        "Ingeniero Industrial",
        "Ingeniero Mecanico",
        "Ingeniero Mecatrónico",
        "Ingeniero Químico",
      ],

      nombre: "",
      documento: "",
      correo: "",
      profesion: "",
      telefono: "",
      ciudad: "",
    };
  },
  methods: {
    guardar() {
      console.log(this.ingeniero);
      axios.put(
        "http://localhost:3000/api/actualiza/" + this.$route.params.id,
        {
          nombre: this.nombre,
          documento: this.documento,
          correo: this.correo,
          telefono: this.telefono,
          profesion: this.profesion,
          ciudad: this.ciudad,
        }
      );

      location.reload();
      this.$router.go(0);
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
</style>