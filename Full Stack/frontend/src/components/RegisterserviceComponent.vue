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
          :error-messages="servicios.codigo"
          label="Codigo del Servicio"
          required
          solo
        ></v-text-field>
        <v-text-field
          v-model="correo"
          :error-messages="emailErrors"
          label="Correo del Profesional"
          required
          solo
        ></v-text-field>
        <v-text-field
          v-model="habilidad"
          :error-messages="habilidadErrors"
          label="Habilidad"
          required
          solo
        ></v-text-field>
        <v-textarea
          v-model="descripcion"
          autocomplete="Descripcion del Servicio"
          label="Descripcion del Servicio"
          required
          solo
        ></v-textarea>
        <v-text-field
          v-model="valor"
          :error-messages="valor"
          label="Valor del Servicio"
          solo
        ></v-text-field>

        <v-btn
          class="mr-4"
          color="success"
          elevation="2"
          large
          @click="guardar()"
        >
          guardar
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
  data() {
    return {
      page1: "/buscador",
      someValue: "Ingeniero",
      title: "INGENIO",
      servicios: {
        codigo: "",
        correo: "",
        habilidad: "",
        descripcion: "",
        valor: "",
      },
    };
  },
  methods: {
    /** 
    guardar(){
      const servicio = {
        codigoServicio:this.codigoServicio,
        correoProfesional:this.correoProfesional,
        descripcion:this.descripcion,
        valor: this.valor,
      };
      insertServicio(servicio)
      .then((response) => {
        console.log("Se ha creado un ingeniero", response.data._id)
      })
      .catch((error) => console.error(error))
    },
    */
    guardar() {
      console.log(this.servicios);
      axios
        .post("http://localhost:3000/api/nuevo-servicio", 
        {
        codigo: this.codigo,
        correo: this.correo,
        habilidad: this.habilidad,
        descripcion: this.descripcion,
        valor: this.valor,
        })
        .then((res) => {
          this.servicios.push(res.data);
          this.servicios.codigo = "";
          this.servicios.correo = "";
          this.servicios.habilidad = "";
          this.servicios.descripcion = "";
          this.servicios.valor = "";
          this.mensaje.color = "success";
          this.mensaje.texto = "Nota Agregada";
          this.showAlert();
        })
        .catch((e) => {
          console.log(e.response);
        });
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