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
              :to="page1" link
              >Home</v-btn
            >
            &nbsp;
            <v-btn
              color="primary"
              right="true"
              :to="page2" link
              >Buscador</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

     <v-container>
      <h1>Registrate Ingenierio</h1>
      <form>        
        <v-text-field
          v-model="nombre"
          :error-messages="nombreErrors"
          label="Nombre Completo"
          required
          @input="$v.nombre.$touch()"
          @blur="$v.nombre.$touch()"
          solo
        ></v-text-field>
        <v-text-field
          v-model="documento"
          :error-messages="documentoErrors"
          :counter="10"
          label="Documento de Identidad"
          required
          @input="$v.documento.$touch()"
          @blur="$v.documento.$touch()"
          solo
        ></v-text-field>
        <v-text-field
          v-model="correo"
          :error-messages="correoErrors"
          label="E-mail"
          required
          @input="$v.correo.$touch()"
          @blur="$v.correo.$touch()"
          solo
        ></v-text-field>
        <v-select
          v-model="profesion"
          :items="listaProfesion"
          :error-messages="profesionErrors"
          label="Profesion"
          required
          @change="$v.profesion.$touch()"
          @blur="$v.profesion.$touch()"
          solo
        ></v-select>
        <v-text-field
          v-model="telefono"
          :error-messages="telefonoErrors"
          label="Numero Celular"
          @input="$v.telefono.$touch()"
          @blur="$v.telefono.$touch()"
          solo
        ></v-text-field>
        <v-text-field
          v-model="ciudad"
          :error-messages="ciudadErrors"
          label="Ciudad de Residencia"
          @input="$v.ciudad.$touch()"
          @blur="$v.ciudad.$touch()"
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
//import {insertInge} from "../services/Profesionales"
import axios from "axios";

export default {
  title() {
    return `${this.someValue}`;
  },
  data() {
    return {
      page1: "/",
      page2: '/buscador',
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
    };
  },
  methods: {
    guardar () {
     axios.post('http://localhost:3000/api/nuevo-profesional',
     {
        nombre: this.nombre,
        documento: this.documento,
        correo: this.correo,
        telefono: this.telefono,
        profesion: this.profesion,
        ciudad: this.ciudad
      })
     .then(res=>{
       console.log(res);
       this.mensaje.color="success";
       this.mensaje.texto="Nota Agregada";
       this.showAlert();

     })
     .catch(e => {
       console.log(e.response);
     });
      location.reload();
      this.$router.go(0);
    }
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
</style>