<template>
  <v-app>
    <v-app-bar
      color="#6A76AB"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      height="100"
      app
    >
      <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img contain max-height="70%" src="..\assets\logo.png" ></v-img>
      </v-avatar>

      <v-container>
          <v-row>
            <v-col>
              <v-toolbar-title class="font-weight-black headline">
                {{ title }}
              </v-toolbar-title>
            </v-col>
            <v-col align="end">
              <v-btn color="secundary" right="true" :to="page1" link
                >Home</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
    </v-app-bar>
  
  <h1>Buscador de Ingenieros Registrados</h1>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page.sync="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="blue darken-3"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="ordenar"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="blue"
                :value="false"
              >
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="blue"
                :value="true"
              >
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
            <v-spacer></v-spacer>
            <v-btn
              class="mx-2"
              fab
              dark
              color="blue"
              :to="page4" link
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.name"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.profesion }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-card-actions>
                <v-spacer></v-spacer>
                  <v-btn color="success" :to="page3 + item._id" link>Editar</v-btn>
                  <v-btn color="error" @click="eliminarProfesional(item._id)" :to="pageA" link>Eliminar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row
          class="mt-2"
          align="center"
          justify="center"
        >
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span
            class="mr-4
            grey--text"
          >
            Page {{ page }} of {{ numberOfPages }}
          </span>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="ml-1"
            @click="nextPage"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
  <h1>Buscador de Servicios Registrados</h1>

    <div>
    <BuscadorServicios></BuscadorServicios>
    </div>
  </v-app>
</template>

<script>
import { getAllProfesionales } from "../services/Profesionales";
import BuscadorServicios from '../components/ServiciosComponent';
//import dialog from '../components/DialogoEliminar'
import axios from "axios";

  export default {
    components:{
      BuscadorServicios
    },
     mounted() {         
          getAllProfesionales()
          .then((response) => {
            this.items= response.data;
          })
          .catch((err) => console.error(err));
        },
    data () {
      return {  
        //title : "Ingenio",
        page2:'/register',
        page3:'/actuinge/',
        page4:'/signininge',
        pageA:'/buscador',
        page1: '/',
        items: [],
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        ordenar: [
          'Profesion',
          'Ciudad',
        ],
      //para obtener info del backend
          keys: [
          'Nombre',
          'Correo',
          'Telefono',
          'Profesion',
          'Ciudad'
        ],
      }
    },
        computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
      eliminarProfesional(id) {
        console.log(id)
        axios.delete("http://localhost:3000/api/borra/" + id)
        .then(response => {
          this.result.splice(this.id, 1)
          console.log(response)
        });
        location. reload()
        this.$router.go(0)
      },
    },
  }
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
h1 {
    text-align:center;
}
</style>