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
              <b-link href="#" class="card-link">Ir</b-link>
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
        { title: 'Frases de amor', text: 'Entra a la seccion de frases de amor.' },
        { title: 'Frases de la vida', text: 'Frases de la vida misma.' },
        { title: 'Frases para abuelos', text: 'Para los mas viejitos de la casa.' },
        { title: 'Frases para compartir', text: 'Sea whatsapp o facebook, puedes compartirlas todas.!' },
        { title: 'Frases para amigos', text: 'Entre amigos y fiestas.' },
        { title: 'Frases para tu pareja', text: 'Ese amor de tu vida.' },
        { title: 'Frases para tu novio', text: 'Tan especial es tu novio, ¿Verdad?.' },
        { title: 'Frases para tu novia', text: 'La chica de tus sueños.' },
        { title: 'Frases para tus hijos', text: 'Las personas mas esppeciales de tu decendencia.' },
        { title: 'Abrir seccion completa', text: 'Que espera, busca tu categoria perfecta.!' }
      ]
    }
  }
}
</script>
