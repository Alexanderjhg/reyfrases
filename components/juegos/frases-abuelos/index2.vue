<template>
    <div class="px-2">
        <b-card title="Descubre cual es la frase que te envia tu abuelo desde el cielo." class="targeta text-center" sub-title="Frases de abuelos">
            <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Descubrir frase aqui!</button>
        </b-card>
        <b-modal id="modal-s" scrollable size="xl" title="Elige una frase bonita" class="warning">
        <b-tabs v-model="tabIndex" small card>
            <b-tab :disabled="disabled1" title="Test 1">
                <div class="my-4 text-center">
                  <h5 class="success pa-4">Elije la frase que mas te guste</h5>
                </div>
                <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in frases" :key="i.key" @click="set(i.text)">
                    {{ i.text }}
                </blockquote>
            </b-tab>
            <b-tab :disabled="disabled2" title="Test 2">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Elije tu color favorito</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in colorFavorito" :key="i.key" @click="set2(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="disabled3" title="Test 3">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Que tanto querias a tu abuelo?</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in tiempo" :key="i.key" @click="set3(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="disabled4" title="Test 4">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Elige una frase que te defina</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in fraseDefinicion" :key="i.key" @click="set4(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="result" title="Resultado">
              <div class="text-center mb-4 pb-4 resultado">
                <h3 class="mt-3">Tu resultado</h3>
                <div class="text-center p-4 resultado">
                  <p class="blockquote">{{ resultadoTest[aleatorio] }}</p>
                  <button type="button" @click="(Resetear())" class="btn btn-success">Jugar Otra Vez</button>
                </div>
              </div>
              <Tests></Tests>
            </b-tab>
        </b-tabs>
        </b-modal>
        <b-modal id="resultado2" hide-footer>
            <template #modal-title>
                <div class="text-center"><h5>Reyfrases.com</h5></div>
            </template>
            <div class="d-block text-center">
            <pre class="h5" v-if="x">{{ resultadoFrase }}</pre>
            <div v-else>
                <p class="h5">Espera un momento...</p>
                <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
            </div>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('resultado2')">Cerrar</b-button>
        </b-modal>
    </div>
</template>

<script>
import Tests from '@/components/juegos/tests-menu/index.vue'
export default {
  components: {
    Tests
  },
  data () {
    return {
      resultadoFrase: null,
      x: true,
      tabIndex: 0,
      disabled1: false,
      disabled2: true,
      disabled3: true,
      disabled4: true,
      result: true,
      aleatorio: 0,
      frases: [
        { text: 'De los padres recibí la formación ética, práctica y académica; pero de los abuelos aprendí a amar y ser amado.' },
        { text: 'Un día despertarás y ya no habrá tiempo para hacer las cosas que siempre has querido hacer, así que hazlas ahora.' },
        { text: 'Sé que ahí donde estés, nunca me faltará tu protección; eres mi ángel de la guarda.' },
        { text: 'Una abuela es un poco madre, un poco maestra y un poco mejor amiga. Lo fuiste todo para mí, abuela.' },
        { text: 'Mientras has vivido, siempre te has preocupado de que no me faltara nunca una sonrisa. Ahora que no estás, seguiré sonriendo para hacerte feliz.' },
        { text: 'Siempre serás mi ejemplo a seguir en la vida, abuelo/a.' },
        { text: 'Solo tú has sabido transformar las peores situaciones en momentos inolvidables.' },
        { text: 'Ojalá pudieras escaparte un rato del cielo y venir a abrazarme.' },
        { text: 'Merecías más de lo que obtuviste; contigo nunca nos faltó de nada.' },
        { text: 'Todos deberíamos contar con una persona que sepa cómo bendecirnos... incluso en los peores momentos. Para mí, esa persona siempre ha sido mi abuela.' },
        { text: 'Son los abuelos los que hacen que el mundo sea un poco más suave, un poco más bondadoso y bastante más cálido.' },
        { text: 'La primera vez que rodeé tu dedo con mi diminuta mano, supe que quería quedarme aferrado/a a ti para siempre.' },
        { text: 'Todo hogar necesita una buena abuela.' },
        { text: 'Eres el Sol, abuela, el sol que ilumina mi vida.' },
        { text: 'Un abuelo puede parecer mayor, pero lo cierto es que por dentro son los más jóvenes de todos.' },
        { text: 'Si nada va bien... llama a tu abuelo/a.' },
        { text: 'Mi abuelo era tan maravilloso porque me dejaba ser un niño e incluso disfrutaba de la diversión' },
        { text: 'Mi abuelo era tan maravilloso porque me dejaba ser un niño e incluso disfrutaba de la diversión' },
        { text: 'Hay padres que no aman a sus hijos; no hay abuelo que no adore a sus nietos' },
        { text: 'Uno de los apretones de mano más poderoso es el del nuevo nieto sobre el dedo de su abuelo' },
        { text: 'Todos deberíamos tener una persona que sabe bendecirnos a pesar de la evidencia. Mi abuelo fue esa persona para mi' },
        { text: 'Los amigos más cercanos que hice a lo largo de la vida han sido personas que también crecieron cerca de un abuelo o abuela' },
        { text: 'Es natural que a menudo nos sentimos más cerca de las generaciones lejanas que de las que nos preceden inmediatamente' },
        { text: 'El amor perfecto a veces no llega hasta el primer nieto' },
        { text: ' Los abuelos pasan palabras de sabiduría a sus nietos' },
        { text: 'No necesitas un libro de historia si eres lo suficientemente afortunado de tener un abuelo' },
        { text: 'El mejor lugar para estar cuando estás triste es el regazo de tu abuelo' },
        { text: 'Una casa necesita una abuela' },
        { text: 'Mi abuelo tiene la sabiduría de un búho y el corazón de un ángel' }
      ],
      colorFavorito: [
        { text: 'Negro' },
        { text: 'Azul' },
        { text: 'Morado' },
        { text: 'Plateado' },
        { text: 'Rosado' },
        { text: 'blanco' },
        { text: 'Lila' },
        { text: 'Amarillo' },
        { text: 'Rojo' },
        { text: 'Beige' },
        { text: 'Maron' },
        { text: 'Turquesa' },
        { text: 'Gris' },
        { text: 'Anaranjado' }
      ],
      tiempo: [
        { text: 'Poco' },
        { text: 'Mucho' },
        { text: 'Mas o menos' },
        { text: 'No lo queria' },
        { text: 'Lo amaba' },
        { text: 'Lo amo y lo extraño' },
        { text: 'Es lo mejor de mi vida' },
        { text: 'Es mi viejo preferido' },
        { text: 'Te extraño' }
      ],
      fraseDefinicion: [
        { text: 'No entiendes nada realmente a menos que se lo puedas explicar a tu abuela' },
        { text: ' Los abuelos son simplemente niños pequeños antiguos' },
        { text: 'Todos necesitamos un abuelo para para crecer más seguros en el mundo' },
        { text: 'Las abuelas nunca se escapan de abrazos o galletas' },
        { text: 'Algunos de los mejores educadores del mundo son los abuelos' },
        { text: 'Si nada va bien, llama a tu abuela' },
        { text: 'Los abuelos son magos que crean recuerdos maravillosos para sus nietos' },
        { text: 'Es algo grande ser una madre de una madre – es por eso que el mundo le llama abuela' },
        { text: 'Los abuelos son una deliciosa mezcla de risas, historias maravillosas y amor' },
        { text: 'Una abuela aparenta que no sabe quién eres en Halloween' },
        { text: 'Un amor incondicional abuelos son el mayor tesoro de la familia, los fundadores de un legado de amor, los mejores contadores de historias' },
        { text: ' Cuando los abuelos entran por la puerta, la disciplina vuela por la ventana' },
        { text: 'Un abuelo es alguien con plata en su cabello y oro en su corazón' },
        { text: 'Todo el mundo necesita tener acceso a abuelos y nietos para ser un ser humano completo' },
        { text: 'Un nieto siempre representa la oportunidad para desahogar el cariño que faltó por darles a los hijos' },
        { text: 'Toda generación se revela contra sus padres y hace amigos con sus abuelos' },
        { text: 'Una abuela es una madre que tiene una segunda oportunidad' },
        { text: 'Una abuela es un poco madre, un poco maestra y un poco mejor amiga' },
        { text: 'Los abuelos son maravillosos porque escuchan y muestran interés genuino en lo que tienes que decir' },
        { text: 'Un abuelo es viejo por fuera pero joven por dentro' }
      ],
      resultadoTest: [
        'Eres el hijo de mi hijo, y tu vida es una alegría para mí. Estoy agradecido de tenerte en mi vida. Cuando miro a través de las generaciones, recuerdo que los lazos que formamos son tan eternos como el espíritu.',
        'La promesa del mañana Y la esperanza de los sueños se hace realidad … Un recordatorio de la infancia. Eso sigue siendo parte de ti … La maravilla de un milagro. De donde comenzó este amor … Hay mucho que se encuentra en el contacto De sostener la mano de un nieto.',
        'Soy joven otra vez, descubriendo el mundo a través de tus ojos. Tienes tiempo para escuchar y yo tengo tiempo para gastar, Encantado de ver las características familiares y amadas, renovadas nuevamente en ti. A través de ti, veo el futuro. A través de mí, verás el pasado. En el presente, nos amaremos el uno al otro mientras duren estos momentos.',
        'Dios mezcló una pizca de maldad con dos partes de amor y alegría; Añadió un brillo especial a cada niño especial. Dios hizo nietos para mantenernos enérgicos, y siempre en estado de alerta. Bendecir nuestras vidas con risas y mantener nuestros recuerdos cerca. Para aligerar nuestros días, y alegrar nuestros caminos.',
        'El amor perfecto a veces no llega hasta que nacen los nietos',
        'Dios nos dio un amoroso nieto como recompensa por todos nuestros actos de bondad desinteresados',
        'Mientras intentamos enseñar a nuestros nietos sobre la vida, nuestros nietos nos enseñan de qué trata la vida.',
        'Tu me llenas un espacio en mi corazón que nunca supe que estaba vacío.',
        'A tu lado o a kilómetros de distancia, tu siempre estás cerca de mi corazón'
      ]
    }
  },
  // updated () {
  //   console.log(this.vor)
  // },
  methods: {
    set (x) {
      this.$bvModal.show('resultado2')
      this.x = false
      setTimeout(function () {
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado2')
        this.disabled1 = true
        this.disabled2 = false
      }.bind(this), 5000)
    },
    set2 (x) {
      this.$bvModal.show('resultado2')
      this.x = false
      setTimeout(function () {
        this.disabled2 = true
        this.disabled3 = false
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado2')
      }.bind(this), 5000)
    },
    set3 (x) {
      this.$bvModal.show('resultado2')
      this.x = false
      setTimeout(function () {
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado2')
        this.disabled3 = true
        this.disabled4 = false
      }.bind(this), 5000)
    },
    set4 (x) {
      this.$bvModal.show('resultado2')
      this.x = false
      setTimeout(function () {
        this.disabled4 = true
        this.result = false
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado2')
        this.x = true
        this.aleatorio = Math.floor(Math.random() * (9 - 1)) + 1
        console.log(this.aleatorio)
      }.bind(this), 5000)
    },
    frasex (x) {
      this.resultadoFrase = 'Hurtado'
      console.log(x)
    },
    Resetear () {
      this.tabIndex = 0
      this.result = true
      this.disabled1 = false
    }
  }
  // computed: {
  //   vor () {
  //     if (this.x) {
  //       console.log(true, 'desde computed')
  //       return true
  //     } else {
  //       console.log(false, 'desde computed')
  //       return false
  //     }
  //   }
  // }
}
</script>

<style>
.card-juego{
    background:black
}
.blockquotes{
    border-bottom: 1px solid grey;
    padding:5px;
    border-radius:5px
}
.blockquotes:hover{
    background: #ffc107;
    cursor:pointer;
}
.targeta{
    background: #8be8a8
}
.targeta-amor{
    background: #eb3b3b;
    color: white
}
.targeta-de-la-vida{
    background: #6751e4;
    color: white
}
.targeta-de-amigos{
    background: #eb3bc8;
    color: white
}
.targeta-que-hablan{
    background: #eba53b;
    color: white
}
.targeta-seres-queridos{
    background: #eb3bdc;
    color: white
}
.resultado{
    background: #e68541;
    color: white;
    border-radius: 5px;
}
</style>
