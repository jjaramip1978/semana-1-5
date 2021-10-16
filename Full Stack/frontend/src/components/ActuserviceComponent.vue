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
      <h1>Actualizar Servicio</h1>
      <form>
        <v-text-field
          v-model="codigo"
          :error-messages="codigoErrors"
          label="Codigo del Servicio"
          required
          
        ></v-text-field>
        <v-text-field
          v-model="correo"
          :error-messages="correoErrors"
          label="Correo del Profesional"
          required
          
        ></v-text-field>
        <v-text-field
          v-model="habilidad"
          :error-messages="habilidadErrors"
          label="Habilidad del Profesional"
          required
          
        ></v-text-field>
        <v-textarea
        v-model="descripcion"
        :error-messages="descripcionErrors"
        autocomplete="Descripcion del Servicio" 
        label="Descripcion del Servicio" 
        
        ></v-textarea>
        <v-text-field
          v-model="valor"
          :error-messages="valor"
          label="Valor del Servicio"
          
        ></v-text-field>

        <v-btn class="mr-4" color="success" elevation="2" large @click="guardar()">
          actualizar
        </v-btn>
      </form>
    </v-container>
  </v-app>
</template>

<script>
//import { insertServicio } from "../services/Servicios";
import axios from "axios";

export default {
  title() {
    return `${this.someValue}`;
  },
  mounted() {
    axios
      .get("http://localhost:3000/api//buscaser/" + this.$route.params.id)
      .then((respuesta) => {
        this.codigo = respuesta.data.codigo;
        this.correo = respuesta.data.correo;
        this.habilidad = respuesta.data.habilidad;
        this.descripcion = respuesta.data.descripcion;
        this.valor = respuesta.data.valor;
        console.log(respuesta.data);
      });
  },
  data() {
    return {
      page1: "/buscador",
      someValue: "Ingeniero",
      title: "INGENIO",

      codigo: "",
      correo: "",
      habilidad: "",
      descripcion: "",
      valor: "",
    };
  },
  methods: {
    guardar() {
      axios.put(
        "http://localhost:3000/api/actualizaser/" + this.$route.params.id,
        {
          codigo: this.codigo,
          correo: this.correo,
          habilidad: this.habilidad,
          descripcion: this.descripcion,
          valor: this.valor,
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