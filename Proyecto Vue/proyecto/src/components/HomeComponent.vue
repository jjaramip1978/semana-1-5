<template>
  
  <div id="app">
    <v-app>
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
                INGENIO
              </v-toolbar-title>
            </v-col>
            <v-col align="end">
              <v-btn color="primary" right="true" href="https://vuetifyjs.com" :to="page3" link
                >Sign in</v-btn
              >
              &nbsp;
              <v-btn color="secondary" right="true" href="https://vuetifyjs.com" :to="page2" link
                >Sign up</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>

      <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="..\assets\FotoHome.jpg"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col class="white--text text-center" cols="12" tag="h1">
                    <span
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-1'
                          : 'display-2',
                      ]"
                      class="font-weight-light"
                    >
                      G5
                    </span>

                    <br />

                    <span
                      :class="[
                        $vuetify.breakpoint.smAndDown
                          ? 'display-3'
                          : 'display-4',
                      ]"
                      class="font-weight-black"
                    >
                      INGENIO
                    </span>
                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">ACERCA DE INGENIO</h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive
            class="mx-auto title font-weight-light mb-8"
            max-width="720"
          >
            Ingenio es una plataforma que te ayudara a conseguir los mejores
            servicios de ingeniería. De los ingenieros profesionales mejor
            formados y en todas las áreas que necesitas.
          </v-responsive>

          <!-- <v-avatar
            class="elevation-12 mb-12"
            size="128"
          >
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-avatar> -->

          <div></div>

          <v-btn color="grey" outlined large :to="page1" link>
            <span class="grey--text text--darken-1 font-weight-bold">
              Buscar Servicios
            </span>
          </v-btn>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="features" class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-3 font-weight-bold mb-3">NUESTROS SERVICIOS</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text, font_size }, i) in features"
              :key="i"
              cols="20"
              md="4"
            >
              <v-card class="py-12 px-4" color="grey lighten-5" flat>
                <v-theme-provider dark>
                  <div>
                    <v-avatar color="primary" size="88">
                      <v-icon large v-text="icon"></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                  v-bind:style="{fontSize: font_size + 'px' }"
                ></v-card-title>

                <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          src="https://fondosmil.com/fondo/47904.jpg"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col
                v-for="[value, title] of stats"
                :key="title"
                cols="12"
                md="3"
              >
                <div class="text-center">
                  <div
                    class="display-3 font-weight-black mb-4"
                    v-text="value"
                  ></div>

                  <div
                    class="title font-weight-regular text-uppercase"
                    v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>
      <v-footer class="justify-center" color="#292929" height="100">
        <div
          class="title font-weight-light grey--text text--lighten-1 text-center"
        >
          &copy; {{ new Date().getFullYear() }} — MisionTIC 2022, Pereira,
          Colombia
        </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  title () {
    return `${this.someValue}`
  },
  data() {
    return {
      someValue: 'Ingenio',
      page1: "/buscador",
      page2: "/signin",
      page3: "/buscador",
      articles: [
        {
          src: "https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Mobile first & Responsive",
          text: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.",
        },
        {
          src: "https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          title: "Think outside the box",
          text: "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.",
        },
        {
          src: "https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80",
          title: "Small changes, big difference",
          text: "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.",
        },
      ],
      features: [
        {
          icon: "mdi-account-search-outline",
          title: "El profesional idóneo para tu negocio",
          text: "Contamos con una amplia base de datos de ingenieros profesionales capacitados en diversas disciplinas, que le ayudarán a concretar, gestionar y ejecutar su idea de negocio. En nuestro portal de búsqueda podrá hacer uso de los filtros disponibles para encontrar a la persona indicada",
        },
        {
          icon: "mdi-briefcase-outline",
          title: "Comparte las ofertas de tus empleo",
          text: "Publica un trabajo y recibe propuestas y perfiles de ingenieros interesados en él. Es fácil y gratis. Escribe un título, descripción, presupuesto y pública tu propuesta de forma llamativa",
        },
        {
          icon: "mdi-calendar-check ",
          title: "Crea y organiza tu plan de trabajo",
          text: "Administra tu proyecto; por medio de formularios y tableros de control, crea, planifica y realiza seguimiento junto con tu equipo de trabajo. Crea la lista de actividades, estima los plazos, cronograma y balancea tus recursos",
        },
      ],
      stats: [
        ["10+", "Ingenieros"],
        ["15+", "Clientes"],
        ["100+", "Trabajos Concretados"],
        ["★★★★★", "Calificación Promedio"],
      ],
    };
  },
};
</script>
