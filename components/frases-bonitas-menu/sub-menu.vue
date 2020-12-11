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
        { title: 'Frases Bonitas cortas de amigas', text: 'para amigas', link: 'https://reyfrases.com/frases-bonitas/cortas/de/amigas/' },
        { title: 'Frases Bonitas cortas de amistad', text: 'Para las amistades', link: 'https://reyfrases.com/frases-bonitas/cortas/de/amistad/' },
        { title: 'Frases Bonitas cortas de amor propio', text: 'amate a ti mismo', link: 'https://reyfrases.com/frases-bonitas/cortas/de/amor-propio/' },
        { title: 'Frases Bonitas cortas de amor y amistad', text: 'Entre amigos y fiestas.', link: 'https://reyfrases.com/frases-bonitas/cortas/de/amor-y-amistad/' },
        { title: 'Frases Bonitas cortas de amor', text: 'Ese amor de tu vida.', link: 'https://reyfrases.com/frases-bonitas/cortas/de/amor' },
        { title: 'Frases Bonitas cortas de autoestima', text: 'Tan especial es tu novio, ¿Verdad?.', link: 'https://reyfrases.com/frases-bonitas/cortas/de/autoestima' },
        { title: 'Frases Bonitas cortas de buenas noches', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/buenas-noches/' },
        { title: 'Frases Bonitas cortas de buenos dias', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/buenos-dias/' },
        { title: 'Frases Bonitas cortas de cumpleanos', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/cumpleanos/' },
        { title: 'Frases Bonitas cortas de familia', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/familia/' },
        { title: 'Frases Bonitas cortas de felicidad', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/felicidad/' },
        { title: 'Frases Bonitas cortas de la vida', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/la-vida/' },
        { title: 'Frases Bonitas cortas de reflexion', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/reflexion/' },
        { title: 'Frases Bonitas cortas de reflexion', text: 'Reyfrases', link: 'https://reyfrases.com/frases-bonitas/cortas/de/parejas/' }
      ]
    }
  }
}
</script>
