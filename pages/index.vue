<template>
  <div>
    <!-- Nav -->
    <Nav></Nav>
    <!-- titulo y descripcion -->
    <section class="text-center py-5 container">
      <b-row>
        <b-col sm="1" md="12">
          <h1>Frase.me</h1>
          <p>Las mejores <b>frases bonitas</b> estan aqui en esta <b>aplicacion de frases</b>.</p>
          <p>Aqui un listado de las frases mas buscadas en internet para compartir con amigos o en redes sociales.</p>
          <p>Tambien te dejamos algunas frases bonitas muy <b>especiales para ti.!</b> puedes copiar y pegar facilmente con tan solo un click.!</p>
        </b-col>
      </b-row>
    </section>
    <!-- card con las frases para compartir -->
    <section>
      <div>
        <b-row class="mx-2">
          <b-col sm="1" md="4" class="py-2" v-for="frases in frases" :key="frases.key">
            <b-card class="text-center">
              <blockquote :cite="frases.text" class="blockquote grey-text">
                <span class="text-center">{{ frases.text }}</span>
              </blockquote>
              <hr />
              <b-button variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- secciones de frases -->
    <section>
      <div>
        <div class="text-center py-5 container">
          <b-row>
            <b-col sm="1" md="12">
              <h2>Mas frases y secciones de citas bonitas para elegir</h2>
              <p>Adivina que, tambien tenemos mas secciones para que puedas elegir tu mejor frase.</p>
              <p>¿Que quieres buscar? entra a muchas frases con tan solo un click.</p>
              <p>Si aun no te convenso de ir a por ello, te dire que tambien encontraras imagenes muy bonitas para descargar.</p>
            </b-col>
          </b-row>
        </div>
        <!-- Menu principal de frases bonitas -->
        <Menu></Menu>
      </div>
    </section>
    <!-- Seccion de imagenes -->
    <section>
      <div>
        <div class="text-center py-5 container">
          <b-row>
            <b-col sm="1" md="12">
              <h2>Imagenes para descargar</h2>
              <p>Tambien he pensado algo, es que si buscas frases, buscas imagenes bonitas.</p>
              <p>A veces las imagenes son mejores que una frase escrita en puro texto.</p>
              <p>No te preocupes, tambien hay imagenes para que seas feliz.</p>
            </b-col>
          </b-row>
        </div>
        <b-row class="mx-2 text-center">
          <b-col sm="1" md="4" class="py-2" v-for="imagenes in imagenes" :key="imagenes.key">
            <b-img thumbnail :src="imagenes.url" fluid alt="Responsive image"></b-img>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- Mas frases para finalizar -->
    <section class="text-center py-5 container">
      <b-row>
        <b-col sm="1" md="12">
          <h2>Mas frases lindas y bellas para compartir</h2>
          <p>Para finalizar, un listado completo de una recopilacion de las mejores citas.</p>
          <p>Comparte esta pagina web si te ha gustado, asi me ayudara mucho a mi para seguir trabajando en esta pagina web.</p>
          <p>Quiero convertirla en una red social para frases bonitas, seamos una comunidad grande.!</p>
        </b-col>
      </b-row>
      <div>
        <b-row class="mx-2">
          <b-col sm="1" md="4" class="py-2" v-for="frases2 in frases2" :key="frases2.key">
            <b-card class="text-center">
              <blockquote :cite="frases2.text" class="blockquote">
                <span class="text-center">{{ frases2.text }}</span>
              </blockquote>
              <hr />
              <b-button variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from '@/components/esencial/nav.vue'
import Menu from '@/components/frases-bonitas-menu/menu.vue'
export default {
  components: {
    Menu,
    Nav
  },
  data () {
    return {
      count: 4,
      frases: [
        { text: 'Mejores son las mentiras' },
        { text: 'Mas vale pajaro en mano' },
        { text: 'Es mejor la soledad' },
        { text: 'Sin numero de frases' },
        { text: 'Mi palabra clave es la segunda ley de newton' },
        { text: 'Esta es una palabra longtitle que se basa es una frase muy larga para ver que tan fuerte es el quiebre de las fuentes en vuejs' }
      ],
      imagenes: [
        { url: 'https://www.gratistodo.com/wp-content/uploads/2016/08/fondos-oto%C3%B1o-descargar-gratis.jpg' },
        { url: 'https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg' },
        { url: 'https://img.freepik.com/vector-gratis/fondo-acuarela_220290-34.jpg?size=626&ext=jpg' }
      ],
      frases2: [
        { text: 'Finalizando las frases bonitas' },
        { text: 'Mas vale pajaro en mano' },
        { text: 'Es mejor la soledad' },
        { text: 'Sin numero de frases' },
        { text: 'Mi palabra clave es la segunda ley de newton' },
        { text: 'Esta es una palabra longtitle que se basa es una frase muy larga para ver que tan fuerte es el quiebre de las fuentes en vuejs' }
      ]
    }
  },
  head: {
    title: 'Frase.me | Frases de amor y bonitas',
    // titleTemplate: 'Frase.me | %s',
    htmlAttrs: {
      lang: 'es',
      amp: false
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Frase.me | descarga las mejores frases bonitas y de amor con un solo click. Facil y rapido.!'
      }
    ],
    // link: [
    //   {
    //     rel: 'stylesheet',
    //     href: 'https://fonts.googleapis.com/css?family=Nunito&display=swap'
    //   },
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    // ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js',
        async: true,
        defer: true
      }
    ]
  }
  // head: {
  //   description: 'Frase.me | descarga las mejores frases bonitas y de amor con un solo click. Facil y rapido.!',
  //   meta: [
  //     { charset: 'utf-8' },
  //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     { hid: 'description', name: 'description', content: '' }
  //   ],
  //   link: [
  //     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  //   ]
  // }
}
</script>
