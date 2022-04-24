<template>
    <div class="px-2">
        <b-card title="Descubre que frase hara a tu novia mas feliz" class="targeta text-center" sub-title="Frases para novios">
            <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Descubrir Aqui!</button>
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
                <h5 class="success pa-4">Elije tu color favorito</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in colorFavorito" :key="i.key" @click="set2(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="disabled3" title="Test 3">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Que tanto amas a tu novio?</h5>
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
        { text: 'Parecías un sueño lejano, pero las esperanzas de conquistar tu difícil corazón hacen que te sienta más cerca de lo que imaginaba. Que tengas una feliz noche' },
        { text: 'Eres como un sueño que no encuentra su noche para ser soñado.... que difícil es conquistar tu corazón...yo te amo intensamente..' },
        { text: 'Que me perdone el tiempo sé que es muy valioso pero debo ir a dormir porque tengo un encuentro contigo. Feliz Noche' },
        { text: 'Mi vida, sabes que me encantaría que duermas junto a mí pero por el momento no es posible y quiero que sepas que así físicamente no te encuentres en mi habitación, espiritualmente te llevo en mi corazón y tu amor me acompañará toda la noche. Que duermas bien' },
        { text: 'Amor, quiero que cuando duermas pienses que eres una bella princesa y que cuando estés profundamente dormida yo apareceré en tus sueños para que tu despertar sea dulce como si yo te estuviera dando un beso. Que descanses como un angelito' },
        { text: 'Mi dulce amada, duerme como un angelito, que ningún ruido de la noche ose despertarte de tu letargo, yo desde donde me encuentro trataré de pensar tanto en ti hasta que mis pensamientos lleguen a tu mente y nos podamos conectar en ese mundo onírico donde podremos continuar amándonos. Te veré en tus dulces sueños' },
        { text: 'Mi Reina hace unas horas nos despedimos pero solo es algo momentáneo porque en cuanto llegue la hora de dormir estoy seguro que nos volveremos a reunir en nuestros sueños. Buenas noches, preciosa' },
        { text: 'Duerme mi cielo, quiero que no pienses más en este día que fue fatal para ti, es mejor que voltees la página porque debes llenar tu espíritu de esperanzas de que las cosas van a mejora parta ti y yo rezaré por ti para que ello suceda. Buenas noches amor' },
        { text: 'Mi dulce amada, que la oscuridad de la noche te invite a tener el mejor de los sueños y que mientras duermas tengas la suerte de soñar conmigo. Desde mi habitación yo haré lo mismo porque nunca dejo de pensar en ti. Que tengas una noche feliz' },
        { text: 'Mi amor, prométeme que vas a descansar cuando llegues a casa y que no vas a ver televisión hasta tarde, las pocas horas que quedan para que vuelva a amanecer debes emplearlas en dormir porque de lo contrario vas a despertar de mal humor y soñoliento. Buenas noches' },
        { text: 'Mi Reina, duérmete ya, para que no te dé insomnio te perdonaré que no pienses en mí antes de dormir, porque a mí me ha ocurrido muchas veces que por pensar tanto en ti me he pasado en vela toda la noche. Duerme tranquila y confiada en que mi amor por ti es puro y sincero. Buenas noches' },
        { text: 'Amor te dejo este mensaje en tu casilla de voz porque sé que a estas horas ya debes estar durmiendo como un angelito y quiero que mañana muy temprano cuando veas tus mensajes sepas que a esta hora todavía estaba despierto y pensando en lo mucho que te amo.' },
        { text: 'Que duermas como un dulce angelito' },
        { text: 'Amorcito, has llegado rendido del trabajo, te he preparado algo ligero para que puedas dormir bien, no te preocupes por los chicos yo me encargo de todo para y no hay nada que no pueda hacer sin tu ayuda. Trataré de hacer el menor ruido porque quiero que descanses mi rey' }
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
        { text: 'Cada noche que paso sin ti es una noche triste y oscura, solo hay espacio para la añoranza de dormir entre tus brazos mientras escucho el tierno latir de tu corazón. ¡Siempre me quedarán los sueños!' },
        { text: 'Buenas noches mi vida, nos vemos en un rato en nuestros sueños.' },
        { text: 'En la profundidad de la noche, mientras todos duermen, yo solo puedo pensar en ti, eres el calor en el frío húmedo de la soledad, el resplandor en la casa de los olvidos.' },
        { text: 'Como cada noche, llega el momento de ir a dormir, a mí me gusta llamarlo el momento en el que sales de mis pensamientos par a entrar en mis sueños: buenas noches vida mía.' },
        { text: 'Dulces sueños tesoro mío, no veo el momento de qué sea ya mañana para poder darte los buenos días con un beso húmedo que me de la energía que necesito.' },
        { text: 'Llevo tiempo preguntándome si me gusta más pensar en ti o soñar contigo. Ya ves, la vida a veces puede plantear cuestiones muy crueles… ¡te quiero!' },
        { text: 'Irme a la cama con la certeza de que mañana te volveré a ver me llena de esperanza, y la esperanza es siempre una fuente de vida para cualquier persona.' },
        { text: 'Recibe mi más afectuosa caricia virtual antes de ir a la cama. Buenas noches preciosa.' },
        { text: 'Buenas noches mi vida: cierra los ojos y sueña mucho conmigo, porque yo ya estoy soñando en soñar contigo.' },
        { text: 'Cuando anochece y el cielo se vuelve oscuro del todo, es porque está buscando a la estrella más bonita, así que ya sabes, hasta que no te encuentre estaremos a oscuras.' },
        { text: 'Esta noche volaré en tus sueños mientras te acariciará el primer rayo de sol, y yo, siempre tan fugaz, te besaré con la sonrisa que solo alguien inmensamente feliz puede tener.' },
        { text: 'Si todo esto ha sido un sueño, no me despiertes, prefiero vivir en él 100 años que en un mundo real sin ti. Felices sueños.' },
        { text: 'Yo que siempre he adorado el sol y la luz del día, hoy quisiera que la noche no acabara nunca para seguir soñando contigo' },
        { text: 'Cuando pienso en ti mi corazón se calienta, y mi felicidad es solo comparable a la de un niño al que le han regalado su primera pelota. Dulces sueños mi niña.' },
        { text: 'Siento tus manos sobre mi piel realizando un dulce movimiento, mientras tanto, miro al cielo y veo una estrella que resalta entre todas las demás, si pudiera cogerla con la mano te la regalaría a ti amor mío… ¡Dulces sueños!' },
        { text: 'Buenas noches corazón mío, alma y vida mía, aire del que respiro… te echo tanto de menos que apareces en todos mis sueños, en todos mis pensamientos, todos los días a todas las horas. Te quiero hasta al punto que ni siquiera yo sé cuánto.' },
        { text: 'Ojalá las estrellas del cielo bajaran para besar tus dulces labios mientras que el reflejo de la luna te arropase en esta bonita noche. Ojalá mis brazos pudieran abrazar tus sueños.' },
        { text: 'Qué duermas como vives, como te veo yo. Qué duermas como un ángel mi vida.' },
        { text: 'Felices sueños mi vida, espero qué duermas bien, mañana te contaré en que magnífico sueño te me has aparecido. Te quiero.' },
        { text: 'Dulces noches pequeño rayo de luna que ilumina mis sueños, solo tú los sabes transformar en fantásticos cuentos que recordaré para siempre.' }
      ],
      resultadoTest: [
        'Solo se que si te olvido y te encuentro de nuevo me enamore de ti otra vez.',
        '¿Sabes cuál es mi mayor sueño? no te lo he dicho pero eres tu.',
        'Cuando te conocí me pareciste una ilusión, una muy bonita pero ahora eres toda mi realidad mi única y hermosa realidad.',
        'Quiero enamorarte cada día mas con mis tonterías porque cada vez que lo hago eres feliz y así quiero verte inmensamente feliz.',
        'No soy el mejor para ti, pero quiero que sepas que lo haré todo por ti.',
        'Si estoy contigo olvido el tiempo y a las personas, en mi mente solamente estas tu.',
        'Lo mejor de cada día es que al menos un momento puedo estar contigo.',
        'Gracias por ser la razón de mi felicidad por cada noche y cada día que son especiales gracias a ti.',
        'Sin duda mi parte favorita de cada día es en la que me sonríes.',
        'Pase lo que pase tu siempre estarás muy dentro en mis pensamientos y en mi corazón.',
        'Se que te pido demasiado pero me gustaría que me guardes muy dentro en tu corazón para siempre.',
        'Si me duele algo solo necesito de ti para olvidar el dolor y pensar en lo bueno que es estar contigo.',
        'Por ti he hecho cosas que nunca me imagine que haría por alguien pero por ti lo haría de nuevo.',
        'Soy un soñador que con lo único que sueña es con poder estar contigo todos los días.',
        'Sólo necesito cerrar mis ojos y ahí estas recordándome que hay cosas buenas y hermosas en este mundo.',
        'Definitivamente, eres el amor de mi vida, la mujer que ha logrado encender y adueñarse de cada espacio de mi corazón.',
        'Solo a ti te he mostrado lo bueno y lo malo de mi y es porque quiero que me conozcas por completo.'
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
        this.aleatorio = Math.floor(Math.random() * (17 - 1)) + 1
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
