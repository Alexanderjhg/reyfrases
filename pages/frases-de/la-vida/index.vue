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
          <p>Tenemos un monton de frases de la vida y a continuacion te la mostramos todas</p>
          <p>Las frases de la vida se hicieron para reflexionar, para entender que es lo que pasa a nuestro alrededor. Para volvernos aun mas sabios.</p>
          <p>Muchos mensajes de la vida estan por internet, pero solo en esta web hemos recopilados muchisimas de ellas para tu comodidad.</p>
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
    <!-- <div class="text-center container">
      <h2 class="my-4">Cartas de buenas noches para mi novio que esta lejos</h2>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/TbqiOetBoqQ"
        allowfullscreen
      ></b-embed>
    </div> -->
    <section>
      <div>
        <div class="text-center py-5">
          <div class="container">
          <b-row>
            <b-col>
              <h2>Mensajes, palabras y citas para reflexionar de la vida misma</h2>
              <p>Cada palabra esta escrita con sentido en esta vida, igual que la vida.! Todo tiene un propocito y un final.</p>
              <p>La vida es misteriosa, tanto que a veces ni la comprendemos.</p>
            </b-col>
          </b-row>
          </div>
        </div>
        <!-- Menu principal de {{ fraseClave }} -->
        <Menu></Menu>
      </div>
    </section>
    <!-- card con las frases para compartir -->
    <div >
      <b-row style="margin:0px;" class="justify-content-center">
        <b-col xs="12" sm="8" md="7" lg="6">
          <div class="d-flex">
            <Juego2></Juego2>
          </div>
        </b-col>
      </b-row>
    </div>
    <!-- Imaginacion -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>La belleza de vivir</h2>
          <p>La belleza de la vida se encuentra en la felicidad. Pero a veces no es buscar nuestra propia felicidad.</p>
          <p>A veces solo tenemos que buscar a hacer felices a otras personas, Amar a alguien, regalar algo a un individuo.</p>
          <p>La vida oculta muchas maneras en la que podemos ser felices sin tanto "ROYO", solamente hay que prestar atencion a los detalles.</p>
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
          <h2>La vida es reflexiva</h2>
          <p>En la vida hay que reflexionar sobre cualquier movimiento que hemos hechos, o ya vayamos a hacer.</p>
          <p>Pero la reflexion ayuda?. Claro que ayuda, reflexionar sobre algo es darle desahogo a nuestra mente.</p>
          <p>Las mejores citas en el mundo se han creado reflexionando sobre el.</p>
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
          <h2>La vida da muchas vueltas y sorpresas</h2>
          <p>A poco no ha llegado el momento donde tu dices: "<b>la vida da muchas vueltas</b>" o "<b>La vida te da sorpresas</b>".</p>
          <p>Ese momento llega cuando una persona se pasa o se quiere pasar de lista, e alli donde nuestra mente nos hace recordar esa peculiar frase.</p>
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
          <h2>Cortas y largas</h2>
          <p>Muchas personas prefieres las frases cortas y otras personas prefieren las frases largas.</p>
          <p>Sea como sea, las frases nacieron de una mente pensante, abierta a cambios y aceptacion de la sociedad.</p>
          <p>Las frases cortas van al grano, transmiten lo que tienen que transmitir en muy pocas palabras.</p>
          <p>Mientras que las frases largas se expresan un poco mas, se adentran a los detalles y es alli donde esta el poema de la vida.</p>
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
          <h2>Hermosas frasecitas, bellas, lindas, incomparables cartas hacia la vida.</h2>
          <p>Dedica muchas frases en las redes sociales, comparte tus conocimientos</p>
          <p>Abre tu mente e intenta crear tus propias frases de la vida.</p>
          <p>Quiero que algun dia en un cuaderno puedas escribir con tus propias palabras que es para ti la vida.</p>
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
import Juego from '@/components/juegos/frases-novias/index.vue'
import Juego2 from '@/components/juegos/frases-novias/index2.vue'
export default {
  components: {
    Menu,
    Nav,
    Juego,
    Juego2
  },
  data () {
    return {
      count: 4,
      fraseClave: 'Frases de la vida, mensajes de la vida, palabras y poemas de la vida y test.',
      frases: [
        { text: 'Un buen viajante no tiene ni planes fijos ni la intención de llegar' },
        { text: 'La sabiduría viene de la experiencia. La experiencia es, a menudo, el resultado de la falta de sabiduría' },
        { text: 'No estar muerto no es estar vivo' },
        { text: 'El punto de salida hacia todo logro es el deseo' },
        { text: 'La felicidad ininterrumpida aburre; debe tener alternativas' },
        { text: 'La verdadera felicidad cuesta poco; si es cara, no es de buena clase' },
        { text: 'Ama la vida que tienes para poder vivir la vida que amas' },
        { text: 'La vida es para ser disfrutada, no sobrellevada' },
        { text: 'El pesimismo lleva a la debilidad. El optimismo, al poder' },
        { text: 'Hay que endurecerse sin perder jamás la ternura' },
        { text: 'La vida no es un problema a ser resuelto, es una realidad a experimentar' },
        { text: 'No se puede encontrar la paz evitando la vida' },
        { text: 'Donde hay amor hay vida' },
        { text: 'La vida es simple, pero insistimos en hacerla complicada' }
      ],
      frases2: [
        { text: 'Inesperadas intrusiones de la belleza. En eso consiste la vida' },
        { text: 'Perder la confianza en el propio cuerpo es perder la confianza en uno mismo' },
        { text: 'Definir algo es limitarlo' },
        { text: 'Crecer es perder ciertas ilusiones, para poder abrazar otras' },
        { text: 'La acción expresa prioridades' },
        { text: 'No vivas en el pasado, no sueñes sobre el futuro, concentra tu mente en el momento presente' },
        { text: 'La vida no va de encontrarse a uno mismo, sino de crearse a uno mismo' },
        { text: 'No recordamos los días, recordamos los momentos' },
        { text: 'El propósito de nuestras vidas es ser felices' },
        { text: 'La buena vida es la que está inspirada por el amor y guiada por el conocimiento' },
        { text: 'Donde reina el amor, sobran las leyes' },
        { text: 'El obstáculo es el camino' },
        { text: 'Los grandes resultados requieren grandes ambiciones' },
        { text: 'El corazón tiene razones que la razón ignora' }
      ],
      frases3: [
        { text: 'Nos convertimos en lo que pensamos' },
        { text: 'Mira atrás y sonríe ante los peligros pasados' },
        { text: 'La vida es como el jazz... es mucho mejor si es improvisada' },
        { text: 'La vida es un 10% lo que te pasa y un 90% cómo reaccionas ante eso' },
        { text: 'Si amas tu vida, tu vida te corresponderá con amor' },
        { text: 'No puedes tener una vida positiva si conservas una mente negativa' },
        { text: 'La mayor aventura en la que te puedes embarcar consiste en vivir la vida de tus sueños' },
        { text: 'Sin música, la vida sería un error' },
        { text: 'Elige un trabajo que te apasione y no volverás a trabajar ni un solo día de tu vida' },
        { text: 'La vida o es una gran aventura o no es nada ' },
        { text: 'La simplicidad de la vida consiste en ser uno mismo' },
        { text: 'Todos tus sueños pueden hacerse realidad si tienes el coraje de perseguirlos.' },
        { text: 'Cada mañana me levanto y reviso la lista Forbes de los hombres más ricos del planeta. Si no estoy ahí, me levanto a trabajar - Robert Orben' },
        { text: 'A veces nos cuesta empezar de nuevo pero si quieres salir adelante debes hacerlo. Deja el ayer en el pasado y no pienses en el futuro; disfruta tu presente.' },
        { text: 'Cada mañana nacemos de nuevo. Lo que hacemos hoy es lo que más importa. ' },
        { text: 'Comenzar tu día con una sonrisa hará que tu destino se pinte de colores. ' },
        { text: 'Cuando te levantes por la mañana, piensa en el precioso privilegio de estar vivo, respirar, pensar, disfrutar y amar.' },
        { text: 'Aprende a vivir con una energía positiva en cada instante y piensa siempre que las cosas que son para uno llegan en su debido momento. Sólo hace falta mucho esfuerzo, fe y esperanza. Por ello, cree y crearás todo lo que haces. Esa es tu gran misión o tarea de vida' },
        { text: 'Ten el coraje de seguir a tu corazón e intuición. De algún modo, ellos ya saben lo que realmente quieres ser. Todo lo demás es secundario. ' }
      ],
      frases4: [
        { text: 'Hoy es el primer día del resto de tu vida.' },
        { text: 'Hoy es un nuevo día. Incluso si lo hiciste mal ayer, hoy lo puedes hacer bien.' },
        { text: 'Hacen falta días malos para darte cuenta de lo bonitos que son el resto.' },
        { text: 'Con una correcta actitud mental, nada puede parar a un hombre en alcanzar su meta y nada puede ayudar a un hombre con una actitud mental incorrecta.' },
        { text: 'Cuando me levanté esta mañana sonreí. Tengo 24 horas nuevas delante mío. Prometo vivir al máximo cada instante' },
        { text: 'El éxito es la suma de pequeños esfuerzos–repetidos un día sí y otro también' },
        { text: 'La dicha de la vida consiste en tener siempre algo que hacer, alguien a quien amar y alguna cosa que esperar. ' },
        { text: 'Si quieres que tus sueños se hagan realidad, el primer paso es levantarte.' },
        { text: 'Ríete todos los días y no habrás desperdiciado ni un solo momento de tu vida.' },
        { text: 'Las oportunidades son como los amaneceres. Si esperas mucho tiempo, las pierdes' },
        { text: 'Sueña como si fueras a vivir para siempre, vive como si fueses a morir hoy. ' },
        { text: 'Haz de cada día tu obra maestra.' },
        { text: 'Debes de estar dispuesto a ser un principiante cada una de tus mañanas.' },
        { text: 'Da siempre lo mejor de ti mismo. Lo que plantas ahora, se cosechará más tarde. ' },
        { text: 'Siempre me ha encantado la perspectiva de un nuevo día; un comienzo fresco, un nuevo inicio.' },
        { text: 'El fracaso es una buena oportunidad para empezar de nuevo con más inteligencia.' },
        { text: 'Tendrás que levantarte todas las mañanas con determinación si quieres irte a la cama en la noche con satisfacción. ' },
        { text: 'Va a pasar porque yo voy a hacer que pase.' },
        { text: 'Ponte las pilas y sueña en grande.' },
        { text: 'Si tu no haces que tus días sean mágicos, ¿quién lo hará?' },
        { text: 'El éxito depende más de tu constancia que de tu talento.' },
        { text: 'Prometo no detenerme hasta sentirme orgullosa.' }
      ],
      frases5: [
        { text: 'No bajes la meta, aumenta el esfuerzo.' },
        { text: 'No cuentes los días, haz que los días cuenten.' },
        { text: 'El único límite es tu mente.' },
        { text: 'La vida te dará todo lo que creas merecer.' },
        { text: 'Vayas donde vayas, ve con todo tu corazón.' },
        { text: 'Algo maravilloso está a punto de sucederme.' },
        { text: 'Cuando crees en ti, todo es posible.' },
        { text: '¡Échale ganas!' },
        { text: 'Ese sueño... ¡alcánzalo!' },
        { text: 'La sonrisa es lo que mejor te queda.' },
        { text: 'Si lo crees, lo creas.' },
        { text: 'Las cosas no serán como antes, serán mejor.' },
        { text: 'La vida es una colección de momentos.' },
        { text: 'Puedo llegar hasta el infinito.' },
        { text: 'Todo es posible.' },
        { text: 'Más alma y menos ego.' },
        { text: 'Lo que es para ti, te encuentra.' },
        { text: 'La buena suerte se produce cuando la preparación se encuentra con la oportunidad.' },
        { text: 'Detrás de los sueños siempre hay esfuerzos que la gente no ve.' },
        { text: 'Tu viaje será mucho más fácil y ligero si no cargas el pasado contigo.' }
      ],
      frases6: [
        { text: 'La felicidad no es algo hecho. Proviene de tus propias acciones. ' },
        { text: 'Sé miserable, o date motivación. Cualquier cosa que tenga que hacerse, siempre será tu elección.' },
        { text: 'La mayoría de las personas renuncian cuando están apunto de alcanzar el éxito. Renuncian en el último minuto del juego, a un paso de ganar por touchdown.' },
        { text: 'No es posible ser feliz si te pasas la vida frustrado por circunstancias que no puedes cambiar.' },
        { text: 'La sabiduría es saber qué hacer a continuación. La habilidad es saber cómo hacerlo, y la virtud es hacerlo.' },
        { text: 'Cuando dejas de soñar, dejas de vivir.' },
        { text: 'La única manera de hacer un gran trabajo, es amar lo que haces. Si no lo has encontrado, sigue buscando. No te conformes.' },
        { text: 'El único sitio donde el éxito llega antes que el trabajo es en el diccionario. ' },
        { text: 'Si la oportunidad no llama, construye una puerta' },
        { text: 'El éxito más grande de todos, es la aceptación de uno mismo.' },
        { text: 'Los ganadores nunca abandonan y los que abandonan nunca ganan.' },
        { text: 'He fallado una y otra vez a lo largo de mi vida. Es por eso por lo que he tenido éxito.' },
        { text: 'Dentro de 20 años estarás más decepcionado por las cosas que no hiciste que por las que hiciste. ' },
        { text: 'No permitas que tu vida la controle el pasado, otras personas o el dinero.' },
        { text: 'Prefiero que me pregunten cómo lo logré, y no contar a todo el mundo lo que pienso hacer' },
        { text: 'Cuando eres entusiasta sobre lo que haces, sientes energía positiva.' },
        { text: 'La vida es una aventura atrevida o no es nada. ' },
        { text: 'El éxito consiste en obtener lo que se desea. La felicidad, en disfrutar lo que se obtiene. ' },
        { text: 'A veces la vida no es cuestión de aptitud, sino de actitud.' },
        { text: 'Haz tus sueños realidad, a tus padres orgullosos y a tus enemigos sentir en envidia.' }
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
    titleTemplate: '🥇 Frases de la vida descubre cual es tu frase | %s',
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
        content: '‎✅ Frases de la vida, Mensajes de la vida y palabras de la vida, ‎✅ Descubre cual es tu frase o cita ideal con test de frases | Frases.me'
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
