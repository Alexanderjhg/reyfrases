<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Frase.me</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for="secciones in secciones" :key="secciones.key" :href="secciones.link">{{secciones.title}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-alert show>Usamos cookies</b-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      secciones: [
        { title: 'Frases Bonitas', text: 'Entra a la seccion de frases de amor.', link: 'https://reyfrases.com/frases-bonitas/' },
        { title: 'Frases de la vida', text: 'Frases de la vida misma.', link: 'https://reyfrases.com/frases-de/la-vida/' },
        { title: 'Abuelos fallecidos', text: 'Para los mas viejitos de la casa.', link: 'https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo/' },
        { title: 'Abuelitas fallecidas', text: 'Sea whatsapp o facebook, puedes compartirlas todas.!', link: 'https://reyfrases.com/frases-para/abuelos/descansa-en-paz-abuelita/' },
        { title: 'Palabras con z', text: 'Entre amigos y fiestas.', link: 'https://reyfrases.com/palabras/con-/z-y-za-ze-zi-zo-zu/' },
        { title: 'Amor a distancia', text: 'Ese amor de tu vida.', link: 'https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia/' },
        { title: 'Frases largas', text: 'Tan especial es tu novio, ¿Verdad?.', link: 'https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos/' },
        { title: 'Home', text: 'Reyfrases', link: 'https://reyfrases.com/' }
      ]
    }
  }
}
</script>
