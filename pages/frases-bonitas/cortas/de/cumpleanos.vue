<template>
  <div>
    <!-- Nav -->
    <Nav></Nav>
    <!-- titulo y descripcion -->
    <section class="text-center py-5">
      <div class="container ">
        <b-row>
          <b-col>
            <h1 class="h3">{{ fraseClave }} mensajes, citas, palabras y poemas</h1>
            <p>Estas buscando {{fraseClave}} para dedicar, o para enviar a alguien o dar gratitud de esta forma?.</p>
            <p>Citas, mensajes, poemas, versos y palabras para dedicar  y mas cuando se trata de {{fraseClave}}, son tan especiales</p>
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
              <h2>una pagina dedicada a las mejores frases y especialmente estas > {{ fraseClave }}.!</h2>
              <p>Esta pagina se convertira en una red social muy grande, mientras tanto guarda esta pagina y sigue disfrutando de > {{ fraseClave }}.</p>
              <p>Dedica desde el corazon, dedica desde lo mas profundo de tu alma esas {{ fraseClave }}</p>
              <p>las {{ fraseClave }} que estas viendo exactamente ahora, son recopilaciones de todo internet. Te he trido todas las {{ fraseClave }} especialmente para ti.</p>
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
          <h2>Deja volar tu imaginacion {{ fraseClave }} son especialmente para darle un espacio en las reflexiones que hacmos a diario</h2>
          <p>La reflexion se apodera de nosotros cuando leemos {{ fraseClave }}, y la imaginacion no se queda atras.</p>
          <p>Lo inportante aqui es que disfrutes de esta pagina, y por ello es que {{ fraseClave }} es especial para que disfrutes de este contenido exclusivo de la pagina.</p>
          <p>Ama, valora, piensa, da ese amor y demuestralo con {{ fraseClave }} <br>
          Da ese cariño a todas las personas que cumplen un dia mas de vida en tu corazon.</p>
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
          <h2>Si te ha de faltar un ser querido que esta en los cielos porque ha fallecido, dedica estas {{ fraseClave }}.</h2>
          <p>Se que es doloroso para ti, pero no queda de otra que consolar nuestra alma dedicando {{ fraseClave }}.</p>
          <p>Las heridas sanan, y sanan mas rapido con el tiempo. pero si ves la oportunidad de dedicar {{ fraseClave }} mejor.</p>
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
          <h2>Hay frase de todo tipo, pero las {{ fraseClave }} tambien sirven para dedicar en el dia del cumpleaño de esa persona.</h2>
          <p>Espera a ese dia en especial para esa persona, asi es, espera hasa que cumpla años y dedicale {{ fraseClave }} justo cuando cumpla año.</p>
          <p>Acompañala en su dia especial, dedicale una de las exelentes {{ fraseClave }} para su cumpleaños.</p>
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
    <!-- amor -->
    <section class="text-center py-5">
      <div class="container ">
      <b-row>
        <b-col>
          <h2>{{ fraseClave }} con amor, o para el amor.</h2>
          <p>El amor es muy bello, estas {{ fraseClave }} encajan perfectamente para alguien que esta vivo o ha fallecido, sea a esas maravillosas personas.</p>
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
          <h2>Guarda esta pagina como tu favorita, pronto traere algo muy especial para ti.</h2>
          <p>Espero volverte a ver y gracias por visitar, espero que te hayan gustado {{ fraseClave }}. Espero volver a verte por aca.</p>
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
      fraseClave: 'Frases Bonitas cortas de cumpleaños <3 ',
      frases: [
        { text: 'Hoy es un día maravilloso, porque es el cumpleaños de un gran ser humano, a quien quiero y valoro por su carisma y por su gran corazón. Espero que pases un día estupendo y que sigas siendo tan extraordinario y tan lleno de amor. ¡Feliz cumpleaños!' },
        { text: 'Mis deseos para ti en el día de tu cumpleaños son salud, amor y prosperidad pues no necesitas más para vivir una vida plena, de la que te sientas agradecido y satisfecho. ¡Feliz cumpleaños! Bendiciones para ti.' },
        { text: 'Qué feliz me hace saber que hoy sumas un año más a tu vida, y esa felicidad se torna aún mayor cuando recuerdo que estaré contigo para celebrarlo. ¡Felicidades!' },
        { text: 'Hoy, he despertado con el corazón acelerado y con una sonrisa que no se borra, porque he recordado que es el cumpleaños de una persona maravillosa. ¡Feliz cumpleaños, cariño!' },
        { text: 'No puedo concebir una vida sin ti a mi lado, pues a cada segundo y a cada minuto de cada hora, mi mayor deseo es estar contigo. ¡Feliz cumpleaños, amor!' }
      ],
      frases2: [
        { text: 'Si me dieran la oportunidad de pedir un deseo, yo pediría estar por siempre a tu lado, pues nada me alegra más que compartir contigo momentos bonitos y memorables. ¡Feliz cumpleaños!' },
        { text: '¡Feliz cumpleaños a ti! Que hoy pases un día genial y que todos tus deseos se hagan realidad.' },
        { text: 'Estar a tu lado es mi mayor fortuna, especialmente en esas fechas importantes como la que celebramos hoy. ¡Feliz cumpleaños, cariño! Tengo suerte de tenerte.' },
        { text: 'Brindemos con alegría, porque es el cumpleaños de una persona especial, a quien queremos desearle un día fenomenal, por tratarse del día de su cumpleaños. ¡Feliz aniversario!' },
        { text: 'En el día de tu cumpleaños, quiero agradecerte por ser tan increíble y por brindarme tu amor incondicional a través de los años. Eres un ser estupendo y mi mayor deseo es tu felicidad. ¡Feliz cumpleaños!' }
      ],
      frases3: [
        { text: 'Hoy, quiero pedirle al cielo que deje caer sobre ti una lluvia de alegrías y de buenos deseos, pues es el día de tu cumpleaños y te mereces solo lo mejor. ¡Feliz cumpleaños!' },
        { text: 'Lamento muchísimo no poder estar contigo para verte soplar las velas de tu tarta, pero sé que muy pronto estaré a tu lado y celebraremos juntos éste y todos los cumpleaños que estén por venir. Feliz cumpleaños y que lo pases muy bien.' },
        { text: 'Deseo para ti un día alegre y lleno de sonrisas, pues no siempre se tiene la dicha de cumplir un año más de vida. Que todo lo que veas, oigas y sientas te llene de alegría, y que todo cuánto pidas se convierta en realidad. ¡Feliz cumpleaños!' },
        { text: 'Que hoy disfrutes de un gran día, en compañía de tus familiares y de tus amigos, pues cumples un año más de vida y mereces que todos estén contigo para desearte muchas felicidades. ¡Feliz cumpleaños!' },
        { text: 'Porque eres un gran amigo y un compañero incondicional, hoy quiero desearte un cumpleaños especial, en el que recibas todo cuanto puedas imaginar. ¡Felicidades!' }
      ],
      frases4: [
        { text: 'Felicidades!! Te queda un año menos para dejar de soportar a tu suegra' },
        { text: 'Si tu cumple is, la fiesta is coming.' },
        { text: ' Feliz cumpleaños pero, ¿no habías cumplido ya suficientes el año pasado?' },
        { text: 'Feliz cumpleaños, pero debes saber que coleccionar años es solo importante si eres un vino.' },
        { text: 'Cumplir años tiene una desventaja y una ventaja: no ves las letras de cerca, pero a los idiotas los ves desde lejos.' }
      ],
      frases5: [
        { text: 'Te haces viejo… ¿te compadezco o te aplaudo?' },
        { text: 'Felicidades, eres genial ¡y tú sin enterarte!' },
        { text: '¿Es tu cumple? Pues chapa y pintura y ¡lista para la aventura!' },
        { text: 'El tiempo pasa… ¡y hace maravillas en ti!' },
        { text: 'Cumplas los años que cumplas, son los nuevos 30, ¡felicidades!' }
      ],
      frases6: [
        { text: 'Un hoy bien vivido contigo hace que cada ayer sea un recuerdo feliz y cada mañana una nueva esperanza. ¡Feliz cumpleaños, amigo!' },
        { text: 'Los cumpleaños van y vienen. Pero las personas inolvidables permanecen en el corazón para siempre. Feliz Cumpleaños.' },
        { text: 'Por tener la capacidad de sorprenderme, de alegrarme, de sacarme una sonrisa cuando estoy triste y de muchas otras cosas más, te quiero. ¡Feliz cumpleaños!' },
        { text: 'Un año más, un año menos, lo importante es que lo gocemos. ¡Feliz cumpleaños!' },
        { text: 'Feliz cumpleaños a esa persona especial que siempre ha estado a mi lado para compartir lo bueno y lo menos bueno de la vida. Que pases un día genial.' }
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
    titleTemplate: 'Frases Bonitas cortas de cumpleaños <3  <3 | %s',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frases Bonitas cortas de cumpleaños <3  Citas, Mensajes, Poemas en Reyfrases.com'
      }
    ],
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
