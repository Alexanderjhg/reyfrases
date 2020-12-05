<template>
  <div>
    <!-- Nav -->
    <Nav></Nav>
    <!-- titulo y descripcion -->
    <section class="text-center py-5">
      <div class="container ">
        <b-row>
          <b-col>
            <h1 class="h3">{{ fraseClave }}</h1>
            <p>Las mejores <b>{{ fraseClave }}</b> estan aqui en esta <b>aplicacion de frases</b>.</p>
            <p>Aqui un listado de las {{ fraseClave }} mas buscadas en internet para compartir con amigos o en redes sociales.</p>
            <p>Tambien te dejamos algunas {{ fraseClave }} y muy <b>especiales para ti.!</b> puedes copiar y pegar facilmente con tan solo un click.!</p>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- card con las frases para compartir -->
    <div >
      <b-row style="margin:0px;" class="justify-content-center">
        <b-col xs="12" sm="8" md="7" lg="6">
          <div class="d-flex">
            <Juego></Juego>
          </div>
        </b-col>
      </b-row>
    </div>
    <section>
      <div class="container-fluid">
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          md="3"
          class="py-2"
          v-for="frases in frases"
          :key="frases.key">
            <b-card class="text-center">
              <blockquote :cite="frases.text" class="blockquote grey-text">
                <span class="text-center" :id="'frase' + frases.text">{{ frases.text }}</span>
              </blockquote>
              <hr />
              <b-button @click="copiar('frase' + frases.text)" variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- secciones de frases -->
    <section>
      <div>
        <div class="text-center py-5">
          <div class="container">
          <b-row>
            <b-col>
              <h2>Mas y mas frases bellas y presiosas para descargar, escoge tu mejor {{ fraseClave }}.!</h2>
              <p>Ademas de eso, te quiero recordar que pronto convertire esta pagina en una red social de {{ fraseClave }}.</p>
              <p>Dedicale estas bellas frases a tus amigos por las redes sociales, veras como siempre te tendran en cuenta para todo.</p>
              <p>Las {{ fraseClave }} que te estoy dando, son frases recopiladas por internet, frases de famosos y {{ fraseClave }} de todo tipo que hay en internet.</p>
            </b-col>
          </b-row>
          </div>
        </div>
        <!-- Menu principal de {{ fraseClave }} -->
        <Menu></Menu>
      </div>
    </section>
    <!-- Imaginacion -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>Deja volar tu imaginacion con estas {{ fraseClave }} sea para un amor o reflexiones.</h2>
          <p>El amor y la imaginacion vuelan por si solos cuando las dos cosas piensas en una sola persona, es como una chispa que se prende en el cerebro cuando esto empieza.</p>
          <p>No debes preocuparte por estas cosas, porque cuando en tu pensamientos sucede eso, nosotros trabajamos aqui para darte las espectaculares {{ fraseClave }} del mundo.</p>
          <p>Deja volar tus sueños, imagina, piensa, ama, quiere, vive el dia de hoy como el ultimo en tu vida. Reflexiona y ama a tus seres queridos. <br>
          Sean familiares, personas a distancia, personas fallecidas, esas personas que por alguna razon cumplen un dia mas de vida en nuestros corazones.</p>
        </b-col>
      </b-row>
      </div>
      <div>
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          md="3"
          class="py-2"
          v-for="frases2 in frases2"
          :key="frases2.key">
            <b-card class="text-center">
              <blockquote :cite="frases2.text" class="blockquote grey-text">
                <span class="text-center" :id="'frase' + frases2.text">{{ frases2.text }}</span>
              </blockquote>
              <hr />
              <b-button @click="copiar('frase' + frases2.text)" variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- Fallecimiento -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>Un ser querido se nos ha muerto, fallecido y ahora esta en el cielo. Que descanse en paz con estas {{ fraseClave }}.</h2>
          <p>Pensar que se nos ha ido un ser querido es muy doloroso, las {{ fraseClave }} que hemos recopilado, te ayudaran en tu perdida para tratar de llenar ese vacio que dejo en tu corazon.</p>
          <p>No permitas que el dolor de que alguien se haya muerto gobierne en tu corazon, para ello, estas {{ fraseClave }} te ayudaran a sanar tu perdida o al menos consolarte.</p>
          <p>Por sobre todas las cosas, deja descansar la memoria de quien ahora esta en el cielo por haber fallecido, vuelve a amar, comparte estas {{ fraseClave }} en redes sociales y asi poder sanar ese dolor poco a poco.</p>
        </b-col>
      </b-row>
      </div>
      <div>
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          md="3"
          class="py-2"
          v-for="frases3 in frases3"
          :key="frases3.key">
            <b-card class="text-center">
              <blockquote :cite="frases3.text" class="blockquote grey-text">
                <span class="text-center" :id="'frase' + frases3.text">{{ frases3.text }}</span>
              </blockquote>
              <hr />
              <b-button @click="copiar('frase' + frases3.text)" variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- Cumpleaños -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>Si al contrario, estas buscando {{ fraseClave }} para celebrar el cumpleaños de esa persona especial para ti.</h2>
          <p>Las citas, mensajes o {{ fraseClave }} para las personas que cumplen años, son efectivamente alentadoras, pues un buen mensaje por el dia, o por la noche ayuda a mucho a levantar ese animo de cualquier persona.</p>
          <p>Acompaña a esa persona en su dia especial, pues sabemos lo especial que es para ti esa persona, tanto que tu diras: "Es una persona muy especial para mi por eso le dedicare" {{ fraseClave }} en su dia.</p>
          <p>Esa persona esta viva en tu alma, pero cabe la posibilidad de que esa persona haya fallecido en cuerpo, pero sus recuerdos quedaran de por vida.</p>
        </b-col>
      </b-row>
      </div>
      <div>
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          md="3"
          class="py-2"
          v-for="frases4 in frases4"
          :key="frases4.key">
            <b-card class="text-center">
              <blockquote :cite="frases4.text" class="blockquote grey-text">
                <span class="text-center" :id="'frase' + frases4.text">{{ frases4.text }}</span>
              </blockquote>
              <hr />
              <b-button @click="copiar('frase' + frases4.text)" variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- Cumpleaños -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>El amor es muy lindo, sientes amor por alguien y le quieres dedicar miles de {{ fraseClave }}.</h2>
          <p>El amor por alguien, este lejos de nosotros o no, este vivo o muerto, este en el cielo o no, o sea hacia nuestras mascotas. El amor nos llega sin tocar puertas.</p>
          <p>Ama de verdad con el corazon, ama a tus abuelos, a tu familia, a tus primos, a tu novio, a tu esposo, a todas las personas que esten a tu alrededor..</p>
        </b-col>
      </b-row>
      </div>
      <div>
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          md="3"
          class="py-2"
          v-for="frases5 in frases5"
          :key="frases5.key">
            <b-card class="text-center">
              <blockquote :cite="frases5.text" class="blockquote grey-text">
                <span class="text-center" :id="'frase' + frases5.text">{{ frases5.text }}</span>
              </blockquote>
              <hr />
              <b-button @click="copiar('frase' + frases5.text)" variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <!-- Mas frases para finalizar -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>No he acabado todavia, Aqui tenemos aun mas de este contenido para que puedas descargar mas variedad de citas bonitas.</h2>
          <p>Para finalizar, copia todas estas frases que hemos recopilado para ti, las mejores frases bellas para ti, mensajes,citas y poemas bonitos.</p>
          <p>Comparte esta pagina si te ha gustado, no olvides volver pronto para que puedas seguir disfrutando de las mejores {{ fraseClave }}.</p>
          <p>Espero volverte a ver pronto, recuerta que la vida es bella, nada en este mundo es imposible. Lucha por tus sueños.</p>
        </b-col>
      </b-row>
      </div>
      <div>
        <b-row class="mx-2">
          <b-col
          xs="12"
          sm="4"
          md="3"
          class="py-2"
          v-for="frases6 in frases6"
          :key="frases6.key">
            <b-card class="text-center">
              <blockquote :cite="frases6.text" class="blockquote">
                <span class="text-center" :id="'frase' + frases6.text">{{ frases6.text }}</span>
              </blockquote>
              <hr />
              <b-button @click="copiar('frase' + frases6.text)" variant="primary">Copiar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </section>
    <b-modal id="modal1" hide-footer>
      <template #modal-title>
          <div class="text-center"><h5>Reyfrases.com</h5></div>
      </template>
      <div class="d-block text-center">
        <p class="h5">Copiando Frase...</p>
        <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Nav from '@/components/esencial/nav.vue'
import Menu from '@/components/frases-bonitas-menu/menu.vue'
import Juego from '@/components/juegos/frases-bonitas/index.vue'
export default {
  components: {
    Menu,
    Nav,
    Juego
  },
  data () {
    return {
      count: 4,
      fraseClave: 'Frases Bonitas',
      frases: [
        { text: 'EL AMOR NO RECLAMA POSESIONES SINO QUE DA LIBERTAD' },
        { text: 'CUANDO ALGUIEN TE MUESTRA QUIÉN ES DE VERDAD, CONFÍA ' },
        { text: 'LA RELACIÓN ENTRE MARIDO Y MUJER DEBE SER LA DE DOS MEJORES AMIGOS' },
        { text: 'LAS PERSONAS CAMBIAN Y SE OLVIDAN DE DECÍRSELO A LOS DEMÁS' },
        { text: 'EL AMOR ES LA POESÍA DE LOS SENTIDOS' },
        { text: 'EL MODO EN EL QUE LA GENTE TE TRATA ES SU KARMA, MIENTRAS QUE CÓMO REACCIONAS ES EL TUYO' },
        { text: 'NUNCA PIERDES AL AMAR, SIEMPRE PIERDES AL REPRIMIRTE' },
        { text: 'AL PRIMER AMOR SE LE QUIERE MÁS, A LOS OTROS SE LES QUIERE MEJOR' },
        { text: 'NI LA AUSENCIA DE AMOR IMPLICA EL ODIO, NI LA AUSENCIA DE ODIO GARANTIZA EL AMOR' },
        { text: 'EL AMOR NO SE MIRA, SE SIENTE ' },
        { text: 'LA AMISTAD SE CONVIERTE EN AMOR CON FRECUENCIA, PERO EL AMOR NUNCA PASA A SER AMISTAD ' },
        { text: 'PARA UN AMANTE YA NO HAY AMIGOS' },
        { text: 'EL AMOR INTENSO NO MIDE, SINO QUE SIMPLEMENTE DA' },
        { text: 'AMAR NO ES MIRARSE EL UNO AL OTRO SINO MÁS BIEN MIRAR AMBOS EN LA MISMA DIRECCIÓN' }
      ],
      frases2: [
        { text: 'LO QUE SE HACE POR AMOR ESTÁ MÁS ALLÁ DEL BIEN Y DEL MAL' },
        { text: 'LAS RELACIONES SALUDABLES CRECEN DE UNA CONFIANZA SIN LÍMITES' },
        { text: 'NINGUNA PERSONA INVOLUCRADA EN UNA RELACIÓN DEBERÍA SENTIR QUE PARA HACERLA VIABLE NECESITA RENUNCIAR A UNA PARTE ESENCIAL DE SÍ MISMA' },
        { text: ' NO EXISTE NADA MÁS INTERESANTE QUE LA CONVERSACIÓN DE DOS AMANTES QUE PERMANECEN CALLADOS' },
        { text: 'EL HECHO DE SER HONESTOS ES LO QUE HACE QUE LAS RELACIONES PERDUREN' },
        { text: 'Tú eres la persona que no busqué pero de la que me enamoré.' },
        { text: 'En el cielo hay millones de estrellas, en mi vida solo hay una y esa eres tú.' },
        { text: 'Tu alegría es mi alegría, tu corazón hace latir al mio.' },
        { text: 'Enamorarse cada día de una misma persona, eso es amor.' },
        { text: 'No te confundas, no quiero que me hagas feliz, quiero ser feliz contigo.' },
        { text: 'Si supieras que mis motivos para vivir son tus besos.' },
        { text: 'Tú eres la razón por la que soy feliz aunque me sienta triste y la única razón por la que sonrío aunque esté llorando.' },
        { text: 'La ternura de tus ojos me tiene asfixiado el corazón.' },
        { text: 'No eres el amor que quiero, eres el amor que necesito.' }
      ],
      frases3: [
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
      frases4: [
        { text: 'AMAR ES ENCONTRAR EN LA FELICIDAD AJENA TU PROPIA FELICIDAD' },
        { text: 'EL AMOR ES UNA ENERGÍA RENOVABLE. HAY PARA TODO EL MUNDO Y AMANDO SE GENERA MÁS AMOR' },
        { text: 'NO EXISTE NADA MÁS INTERESANTE QUE LA CONVERSACIÓN DE DOS AMANTES QUE PERMANECEN CALLADOS ' },
        { text: 'EN LOS INICIOS DE UN AMOR LOS AMANTES HABLAN DEL FUTURO, EN SUS POSTRIMERÍAS, DEL PASADO' },
        { text: 'HAY MÁS PLACER EN AMAR QUE EN SER AMADO' },
        { text: 'EL AMOR ES LA AMISTAD EN LLAMAS' },
        { text: 'No hay mejor remedio para la tristeza que el amor y una sonrisa.' },
        { text: 'Si tus días son muy grises, yo te presto los colores.' },
        { text: 'La vida es demasiado corta para aburrirnos ¡Diviértete!.' },
        { text: 'Intenta que tus sueños sean más grandes que tus miedos.' },
        { text: 'Lo que decidas hacer asegúrate que te haga feliz.' },
        { text: 'Respira, ama y sé feliz… lo demás es secundario.' },
        { text: 'La vida es simple, haz lo que te haga feliz.' },
        { text: 'Mi vida no es perfecta, pero tiene momentos maravillosos.' },
        { text: 'Cada nuevo día es otra oportunidad para cambiar tu vida.' },
        { text: 'La vida no se mide en minutos, se mide en momentos.' },
        { text: 'La esencia de la vida es ir hacia adelante.' },
        { text: 'Disfruta la vida hoy; el ayer se fue y mañana quizá no exista.' },
        { text: 'La vida es simple, pero insistimos en hacerla complicada.' },
        { text: 'Que la vida me perdone las veces que no la viví.' },
        { text: 'Es curioso que la vida, cuanto más vacía, más pesa.' },
        { text: 'Nadie en esta vida es perfecto, así que aceptate tal y como eres.' }
      ],
      frases5: [
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
      frases6: [
        { text: 'Hay gente que puede ser feliz con muy poco.' },
        { text: 'Creo que el mundo es un poco menos malo porque existes tú.' },
        { text: 'Más vale tarde, porque por la mañana me duermo.' },
        { text: 'Salgamos juntos, yo invito a los besos.' },
        { text: 'La felicidad no es una meta sino un estilo de vida.' },
        { text: 'Las ilusiones no se marchitan, porque no son flores, sino semillas.' },
        { text: 'No se sale adelante celebrando éxitos, sino superando fracasos.' },
        { text: 'El tiempo te da las opciones, pero tu tomas las decisiones.' },
        { text: 'Pasó cupido y me dijo; «Tú no, tú estudia.»' },
        { text: 'Las cosas no se dicen, se hace. Porque al hacer, se dicen solas.' },
        { text: 'Sé tu mismo, a no ser que seas gilipollas.' },
        { text: 'La felicidad de tu día depende de la calidad de tus pensamientos.' },
        { text: 'La vida puede ser maravillosa si no le tienes miedo.' },
        { text: 'Cuando sientas que vas a rendirte, piensa en por qué empezaste.' },
        { text: 'No es más ciego quien no ve, sino quien mira para otro lado.' },
        { text: 'Me hago responsable de lo que digo, no de lo entiendas.' },
        { text: 'La vida tiene diferentes capítulo, uno malo no es el fin de la historia.' },
        { text: 'No solo crezcas, florece.' },
        { text: '¿Qué sería la vida si no tuviéramos el valor de intentar algo nuevo?' },
        { text: 'No necesito hacer dieta. Según mi whatsapp estoy en línea. ' }
      ]
    }
  },
  methods: {
    copiar (i) {
      this.$bvModal.show('modal1')
      const aux = document.createElement('input')
      aux.setAttribute('value', document.getElementById(i).innerHTML)
      document.body.appendChild(aux)
      aux.select()
      document.execCommand('copy')
      document.body.removeChild(aux)
      setTimeout(function () {
        this.$bvModal.hide('modal1')
        this.$bvToast.toast('Frase Copiada Con exito.!!!', {
          title: 'Exito.!!!',
          variant: 'success',
          solid: true
        })
      }.bind(this), 5000)
    }
  },
  head: {
    title: 'Reyfrases.com',
    titleTemplate: 'Frases bonitas | %s',
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
        content: 'Dedica Frases Bonitas y compartelas en las redes sociales y con tus amigos. Citas, Mensajes, Poemas en Frases.me'
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
}
</script>
