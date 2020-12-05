<template>
    <div>
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          lg="2"
          class="py-2"
          v-for="secciones in secciones"
          :key="secciones.key">
            <b-card :title="secciones.title" class="text-center">
              <p class="text-muted text-center">
                <b>{{ secciones.text }}</b>
              </p>
              <hr />
              <b-link :href="secciones.link" class="card-link">{{secciones.title}}</b-link>
            </b-card>
          </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
  data () {
    return {
      secciones: [
        { title: 'Frases Bonitas', text: 'Entra a la seccion de frases de amor.', link: 'https://reyfrases.com/frases-bonitas' },
        { title: 'Frases de la vida', text: 'Frases de la vida misma.', link: 'https://reyfrases.com/frases-de/la-vida' },
        { title: 'Frases para abuelos fallecidos', text: 'Para los mas viejitos de la casa.', link: 'https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo' },
        { title: 'Frases para abuelas fallecidas', text: 'Sea whatsapp o facebook, puedes compartirlas todas.!', link: 'https://reyfrases.com/frases-para/abuelos/descansa-en-paz-abuelita' },
        { title: 'Palabras con za e zi zo zu', text: 'Entre amigos y fiestas.', link: 'https://reyfrases.com/palabras/con-/z-y-za-ze-zi-zo-zu' },
        { title: 'Frases para tu novio a distancia', text: 'Ese amor de tu vida.', link: 'https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia' },
        { title: 'Frases para tu novia largos', text: 'Tan especial es tu novio, ¿Verdad?.', link: 'https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos' },
        { title: 'Home', text: 'Reyfrases', link: 'https://reyfrases.com/' }
      ]
    }
  }
}
</script>
