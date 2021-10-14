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
          v-model="codigoServicio"
          :error-messages="codigoServicio"
          label="Codigo del Servicio"
          required
          @input="$v.codigoServicio.$touch()"
          @blur="$v.codigoServicio.$touch()"
          solo
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="Correo del Profesional"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
          solo
        ></v-text-field>
        <v-textarea 
        autocomplete="Descripcion del Servicio" 
        label="Descripcion del Servicio" 
        solo
        ></v-textarea>
        <v-text-field
          v-model="valor"
          :error-messages="valor"
          label="Valor del Servicio"
          required
          @input="$v.valor.$touch()"
          @blur="$v.valor.$touch()"
          solo
        ></v-text-field>

        <v-btn class="mr-4" color="success" elevation="2" large @click="submit">
          guardar
        </v-btn>
      </form>
    </v-container>
  </v-app>
</template>

<script>
export default {
  title() {
    return `${this.someValue}`;
  },
  data() {
    return {
      page1: "/buscador",
      someValue: "Ingeniero",
      title: "INGENIO",
      profesion: [
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
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
</style>