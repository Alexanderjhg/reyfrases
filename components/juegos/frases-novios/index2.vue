<template>
    <div class="px-2">
        <b-card title="Descubre la frase que tu novio te guarda en silencio aun es la distancia!" class="targeta text-center" sub-title="Frases para novios">
            <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Descubrir Aqui!</button>
        </b-card>
        <b-modal id="modal-scrollable2" scrollable size="xl" title="Elige una frase bonita" class="warning">
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
              <b-card title="Que tan amoroso eres segun la Frase de amor que elijas" class=" my-2 targeta-amor text-center">
                <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Abrir test de Amor</button>
            </b-card>
            <b-card title="Que tan inteligente eres segun la frase de vida que elijas" class=" my-2 targeta-de-la-vida text-center">
                <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Abrir test de La vida</button>
            </b-card>
            <b-card title="Que tanto quieres a tus seres queridos segun la frase que elijas" class=" my-2 targeta-seres-queridos text-center">
                <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Abrir test de Seres queridos</button>
            </b-card>
            <b-card title="Que hablan de ti segun la frase de amigos que elijas" class=" my-2 targeta-que-hablan text-center">
                <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Abrir test de los amigos</button>
            </b-card>
            <b-card title="Que tan buen amigo eres segun la frase que escojas" class=" my-2 targeta-de-amigos text-center">
                <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Abrir test de hermandad</button>
            </b-card>
            </b-tab>
        </b-tabs>
        </b-modal>
        <b-modal id="resultado2" hide-footer>
            <template #modal-title>
                <div class="text-center"><h5>Frase.me</h5></div>
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
export default {
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
        { text: 'Mi amor, espero que hayas tenido un gran día, y que ahora puedas disfrutar de un merecido descanso, no sabes cuánto me encantaría estar a tu lado, para engreírte con una taza de té y darte las buenas noches, claro que antes te hubiese llenado de besos, imagina que estoy ahí contigo y que lo hago. Abrígate mucho y descansa profundamente, mañana será un gran día' },
        { text: 'Cuando no estás conmigo siento que las horas se hacen largas, y ni hablar de las noches, son más frías, más tristes porque no estás conmigo. Te extraño tanto, la única forma de sentirte cerca es escribirte y desearte buenas noches, de ese modo recuerdo los momentos a tu lado y sonrío. Espero que duermas muy bien y que despiertes con mucha energía. Te quiero mucho' },
        { text: 'Ha pasado poco tiempo desde que estuviste aquí a mi lado, tu aroma aún lo puedo sentir en mi almohada, conforme llega la noche siento que te extraño más y más, es inevitable, necesito de ti para sentirme pleno. Ya que no estás a mi lado, solo me queda escribirte y llamarte, para desearte buenas noches, que tengas lindos sueños y pienses un poquito en mí. Te extraño como nunca y te amo como siempre' },
        { text: 'Lo que más me agrada de la noche es que me abrazo a mi almohada y me imagino que eres tu quien está a mi lado' },
        { text: 'A veces quisiera tener alas para volar junto a ti y cobijarte entre mis brazos. Te quiero muchísimo amorcito lindo. Que tengas dulces sueños.' },
        { text: 'No sabes cuánto desearía quedarme dormida entre tus brazos y despertar junto a ti. Eres el hombre ideal para compartir mi vida.' },
        { text: 'Espero que las horas vuelen para estar nuevamente a tu lado. Con todo cariño te deseo lindos sueños y que mañana tengas un día maravilloso mi Rey.' },
        { text: 'Cuando me voy a descansar por las noches cierro mis ojos y me pongo a soñar en una vida junto a ti, la cual estoy segura estaría llena de gratos momentos, alegrías, sorpresas y más.' },
        { text: 'No hay nada más agradable que irnos a descansar con un bello mensajito de la persona que amamos. Sentir que nos tiene presente en todo momento, que nos desea dulces sueños y más es algo muy halagador para uno.' },
        { text: 'Mi amor antes de irme a descansar eleve mi mirada al cielo y le pedí a las estrellas que cuidaran tu sueño y que te regalaran una noche maravillosa.' },
        { text: 'Deseo de todo corazón que logres descansar para que mañana te levantes recuperado. Te adoro.' },
        { text: 'Lo que más me agrada de la noche es que me abrazo a mi almohada y me imagino que eres tu quien está a mi lado.' },
        { text: 'No sabes cuánto desearía quedarme dormida entre tus brazos y despertar junto a ti. Eres el hombre ideal para compartir mi vida.' },
        { text: 'Espero que las horas vuelen para estar nuevamente a tu lado. Con todo cariño te deseo lindos sueños y que mañana tengas un día maravilloso mi Rey.' }
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
        { text: 'Antes de que tus ojos se cierren quiero que leas este mensaje. Quiero recordarte que solo tú tienes mi corazón y que solo a ti te amo. Descansa.' },
        { text: 'Quiero desear buenas noches al chico más linda que hay, al chico que me roba el aliento, que me hace ver la vida de otra manera. Buenas noches para ti amor.' },
        { text: 'Deseo que recibas mil besos en tu rostro, mil abrazos, mil te quiero, mil te amo. Descansa bien linda, cierra tus ojos de luna y sueña solo cosas bellas' },
        { text: 'Cada noche siempre es lo mismo. Cada noche siempre sueño contigo. Será porque te amo, será porque no hay nadie más que tú para mí. Buenas noches tesoro, te veré mis sueños.' },
        { text: 'Descansa estrellita mía. Me das la luz que necesito para seguir, me das la esperanza de un nuevo día. Que la luna ilumine tus sueños.' },
        { text: 'Las noches son más cálidas desde que estás conmigo. Mis sueños son hermosos desde que estamos juntos. El amor que siento por ti es eterno y deseo que sepas esto antes de dormir. Descansa mi corazón.' },
        { text: 'Este mensaje lleva adjunto mucho amor y muchas caricias para ti. Espero que las sientas al leer esto y espero que sueñes con ellas. Buena noches preciosa' },
        { text: 'Olvida todo lo malo que te pueda haber pasado durante el día. Es hora de descansar y de soñar solo cosas lindas. Espero que el recuerdo de nuestro amor sea tu compañía y que en tus sueños puedas encontrarme amor.' },
        { text: 'Quiero desearte buenas noches y dulces sueños para ti mi amor. Deseo que hasta ti lleguen mis más dulces besos y que en sueños nos podamos encontrar.' },
        { text: 'La noche tranquila empieza y yo solo puedo pensar en ti cariño. Las horas pasan y tú no sales de mi mente. Espero duermas plácidamente y que el día de mañana pueda verte. Descansa mi amor.' },
        { text: 'Las noches se me hacen largas, la espera se me hace insoportable. Ojalá ya estés dormida y que en tus sueños desees verme tanto como yo a ti.' },
        { text: 'Cariño, el día ha terminado y es hora de descansar. Cierra tus hermosos ojos y ponte a soñar que yo velaré tus sueños y cuidaré de ti. Buenas noches amor.' },
        { text: 'Cuando te vi por primera vez comprendí que deseaba ver tus ojos todos los días antes de dormir. Que tengas muy buenas noches mi amor.' },
        { text: 'Corazón, quiero que sepas que significas mucho para mí. No dejo de pensarte, incluso antes de dormir. Descansa mi amor.' },
        { text: 'Mientras duermes deseo que recuerdes que para mí eres la persona más maravillosa del mundo. Te Amo mi amor, ten dulces sueños.' },
        { text: 'Mi mayor deseo esta noche es que la luna, las estrellas y los ángeles cuiden tus sueños. Eres lo más preciado para mí.' },
        { text: 'Mi corazón, a pesar de la distancia que nos separa, nos encontraremos en tus sueños para estar juntos. Te extraño mucho.' },
        { text: 'En el mundo de los sueños todo es posible. Por eso te beso, te abrazo y te quiero en mis sueños a pesar de estar lejos. Descansa mi amor y sueña conmigo.' },
        { text: 'No sé si es coincidencia, pero cada noche que sueño contigo al día siguiente soy muy feliz y todo me sale bien. Mi amor, ojalá esta noche eso ocurra, ojalá te encuentre en mis sueños y sea feliz. ¡Te quiero!' },
        { text: 'Yo no podría marchar esta noche a la cama sintiéndome la princesa más bella si no fuera porque tú, principe querido, me haces sentir así. Gracias por complementar este día con tanta felicidad y tanto amor.' }
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
