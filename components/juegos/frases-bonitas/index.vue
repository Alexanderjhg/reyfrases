<template>
    <div class="px-2">
        <b-card title="Cual es la frase que te define en la vida?" class="targeta text-center" sub-title="Frases bonitas">
            <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Abrir test</button>
        </b-card>
        <b-modal id="modal-scrollable" scrollable size="xl" title="Elige una frase bonita" class="warning">
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
                <h5 class="success pa-4">Elige el color tu color favorito</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in colorFavorito" :key="i.key" @click="set2(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="disabled3" title="Test 3">
              <div class="my-4 text-center">
                <h5 class="success pa-4">hace cuanto regalaste algo?</h5>
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
        <b-modal id="resultado" hide-footer>
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
            <b-button class="mt-3" block @click="$bvModal.hide('resultado')">Cerrar</b-button>
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
        { text: 'LA MAGIA DEL PRIMER AMOR ES LA IGNORANCIA DE QUE PUEDE TENER UN FINAL' },
        { text: 'LAS RELACIONES BASADAS EN LA OBLIGACIÓN CARECEN DE DIGNIDAD' },
        { text: 'TODO AMANTE ES UN SOLDADO EN GUERRA' },
        { text: 'SOLO PODEMOS APRENDER A AMAR AMANDO' },
        { text: 'LOS AMANTES CÉLEBRES DE LA HISTORIA VIVIERON SIEMPRE SEPARADOS ' },
        { text: 'ES MÁS FÁCIL QUEDAR BIEN COMO AMANTE QUE COMO MARIDO, YA QUE ES MÁS FÁCIL SER OPORTUNO E INGENIOSO DE VEZ EN CUANDO QUE TODOS LOS DÍAS' },
        { text: 'Te necesito como el aire para respirar.' },
        { text: 'Todo es muy difícil antes de ser fácil.' },
        { text: 'No creas todo lo que piensas.' },
        { text: 'Si el amor aprieta, no es tu talla.' },
        { text: 'No debes pensar si eres feliz, tan solo serlo.' },
        { text: 'Nunca es demasiado tarde para hacer lo que ames.' },
        { text: 'Cuando llevas el sol por dentro no importa si afuera llueve.' },
        { text: 'Si quieres ser feliz; ama, perdona y olvida.' },
        { text: 'Aprovecha el tiempo o aprende a detenerlo.' },
        { text: 'No eres lo que logras, eres lo que superas.' },
        { text: 'Da siempre lo mejor de ti, lo que plantes ahora, lo cosecharás mas tarde.' },
        { text: 'Sin locura no hay felicidad.' },
        { text: 'Hazlo y si te da miedo, hazlo con miedo.' }
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
        { text: 'De 1 a 2 dias' },
        { text: 'De 3 a 4 dias' },
        { text: 'De 5 a 7 dias' },
        { text: 'De 1 a 2 semanas' },
        { text: 'De 3 a 4 semanas' },
        { text: 'Hace un mes o mas' }
      ],
      fraseDefinicion: [
        { text: 'SIEMPRE TENEMOS MIEDO DE INTERESARNOS DEMASIADO, POR TEMOR A QUE EL OTRO NO SE INTERESE NADA' },
        { text: 'NUNCA POR ENCIMA DE TI, NUNCA POR DEBAJO DE TI, SIEMPRE A TU LADO' },
        { text: 'QUIEN AMA, DELIRA' },
        { text: 'Cuando estoy contigo nada me molesta y todo es perfecto a tu alrededor, te adoro' },
        { text: 'Mi vida, mi corazón ya tiene dueña. Eres tú' },
        { text: 'No se lo que vi en ti pero no lo veo en nadie más.' },
        { text: 'Te conocí como a cualquiera, sin buscar nada, y terminé queriéndote como a nadie, encontrándolo todo.' },
        { text: 'Gracias por siempre ser mi arco iris al final de la tormenta.' },
        { text: 'Eres el mejor novio del mundo, la luz que alumbra mi camino.' },
        { text: 'Amo cada parte de ti desde tu cabeza hasta tus pies, te amo como eres, te amo a ti completo.' },
        { text: 'Te amo de aquí a la luna, al infinito, hasta el fin del universo.' },
        { text: 'Los momentos mas felices son aquellos cuando estamos juntos.' },
        { text: 'Si pudiera escoger dos momentos para estar contigo serían: Ahora y por siempre.' },
        { text: 'Un amor como el nuestro, está en las manos de Dios.' },
        { text: 'Tú eres mi novio, mi amigo, mi confidente, mi hermano, mi todo.' },
        { text: 'No hay mal que 100 años dure ni tristeza que una amiga no cure.' },
        { text: 'Detrás de una gran mujer como tú hay una amiga loca que la anima constantemente.' },
        { text: 'Una buena amiga conoce todas tus historias, una mejor amiga las ha vivido contigo.' },
        { text: 'Lo divertido del camino es perderse con amigas.' },
        { text: 'Con amigas como tú a mi lado, hay diversión para rato.' }
      ],
      resultadoTest: [
        'Somos lo que hacemos reiteradamente. La excelencia, entonces, no es una acción sino un hábito.',
        'El único lugar donde tus sueños se vuelven imposibles es en tu propio pensamiento',
        'Si sólo veo mi objetivo, los obstáculos deben hacerse a un lado',
        'Primero sueño mi pintura, y luego pinto mi sueño',
        'Todo lo que somos es el resultado de nuestros pensamientos',
        'Aquel que mira hacia afuera sueña; aquel que mira hacia adentro despierta.',
        'Si quieres triunfar, no te quedes mirando la escalera. Empieza a subir, escalón por escalón, hasta que llegues arriba.',
        'Los grandes espíritus siempre han tenido que luchar contra la oposición feroz de mentes mediocres',
        'Toda crítica tiene algo de verdad … sobre quien lo dice',
        'Es duro fracasar en algo, pero es mucho peor no haberlo intentado',
        'Saber no es suficiente; tenemos que aplicarlo. Tener voluntad no es suficiente: tenemos que implementarla.',
        'Avanza tan lejos como puedas; Cuando llegues hasta ahi veras como llegar mas lejos.',
        'La única forma de conocer nuestros limites es dando nuestro mejor esfuerzo, el cual siempre puede ser superado',
        'La vida no se trata de que tan fuerte golpees sino de que tan fuerte seas golpeado y no te des por vencido',
        'Solo una cosa convierte un sueño en imposible: el miedo a fracasar',
        'Es mejor estar preparado para una oportunidad y no tenerla, que tener una oportunidad y no estar preparado',
        'Encuentra aquello que mas te gusta hacer y ve tras ello como si tu vida dependiera de eso … porque depende!',
        'Si puedes soñarlo… puedes hacerlo',
        'La inspiración existe pero ella tiene que encontrarte trabajando',
        'Felicidad no es hacer lo que uno quiere sino querer lo que uno hace',
        'La vida es lo que ocurre a tu lado mientras haces otros planes',
        'Quiero y puedo. Espera lo mejor de ti mismo',
        'Las dificultades preparan a personas comunes para destinos extraordinarios',
        'No permitas que el ruido de las opiniones ajenas silencie tu voz interior',
        'El éxito llega cuando tus sueños superan tus excusas',
        'Piensa, cree, sueña y atrevéte',
        'El dolor es inevitable, el sufrimiento es cuestión de elección',
        'El pesimista se queja del viento, el optimista espera que cambie, pero el realista acomoda las velas',
        ' Lo que no se empieza nunca tendrá un final',
        'Cuando dejas de soñar dejas de vivir',
        'No me voy a limitar a mí misma sólo porque otras personas no aceptarán el hecho de que yo puedo hacer otra cosa',
        'Las tristezas no se quedan para siempre cuando caminamos en dirección a lo que siempre deseamos.',
        'Elige un trabajo que te guste, y nunca tendrás que volver a trabajar en tu vida'
      ]
    }
  },
  // updated () {
  //   console.log(this.vor)
  // },
  methods: {
    set (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
        this.disabled1 = true
        this.disabled2 = false
      }.bind(this), 5000)
    },
    set2 (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.disabled2 = true
        this.disabled3 = false
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
      }.bind(this), 5000)
    },
    set3 (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
        this.disabled3 = true
        this.disabled4 = false
      }.bind(this), 5000)
    },
    set4 (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.disabled4 = true
        this.result = false
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
        this.x = true
        this.aleatorio = Math.floor(Math.random() * (30 - 1)) + 1
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
