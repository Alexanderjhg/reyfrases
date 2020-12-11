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
      fraseClave: 'Frases Bonitas cortas de amor <3 ',
      frases: [
        { text: 'Besa despacio, olvida rápido, toma riesgos y nunca, nunca te arrepientas... Te quiero amor.' },
        { text: 'Fue la forma en la que sonreíste... supe que siempre querría eso en mi vida. Te quiero amor.' },
        { text: 'Enamorarse es una sensación maravillosamente terrorífica. Te quiero amor.' },
        { text: 'Fue la forma en la que sonreíste... super que siempre querría eso en mi vida. Te quiero amor.' },
        { text: 'Amarse es comprender que somos dos seres individuales pero que decidieron compartir una vida juntos. Te quiero amor.' }
      ],
      frases2: [
        { text: 'Anoche miré al cielo y empecé a dar a cada estrella una razón por la que te quiero tanto. Me faltaron estrellas. Te quiero amor.' },
        { text: 'Desearía poder hablarte, desearía poder sonreírte, desearía poder abrazarte, pero sobre todo desearía poder besarte. Te quiero amor.' },
        { text: 'Tus imperfecciones te convierten en la mujer perfecta. Te quiero amor.' },
        { text: 'Entrégame el tiempo que te sobre, y lo gastaré en hacerte la persona más feliz del planeta. Te quiero amor.' },
        { text: 'Un suspiro es el aire que nos sobra por alguien que nos falta. Te quiero amor.' }
      ],
      frases3: [
        { text: 'El amor consta de un alma presente en dos cuerpos, y de un corazón que reside en dos almas. Te quiero amor.' },
        { text: 'Vivamos y que pase lo que tenga que pasar. Te quiero amor.' },
        { text: 'Si mi amor por ti fuera una flor, podría caminar en este jardín por siempre... Te quiero amor.' },
        { text: 'Estuviste ahí cuando más te necesitaba... y también cuando creía que no. Gracias por todo, amor. Te quiero amor.' },
        { text: 'No cambiaría un minuto de ayer contigo por cien años de vida sin ti. Te quiero amor.' }
      ],
      frases4: [
        { text: 'Seré un ladrón de minutos para estar más tiempo a tu lado. Te quiero amor.' },
        { text: 'Unos ojos que jamás me cansaré de mirar, unos labios que siempre querré besar, pero lo mejor de todo, un corazón que jamás dejaré de amar. Te quiero amor.' },
        { text: 'Solo entendí qué era el amor cuando llegaste a mi vida y le diste sentido. Te quiero amor.' },
        { text: 'Si algún día no puedo mirarte, para mí será un día oscuro, porque tú eres mi único sol, el que me ilumina, amor mío. Te quiero amor.' },
        { text: 'Me cuesta pensar que has estado ahí siempre... y que he tardado tanto en encontrarte, amor. Te quiero amor.' }
      ],
      frases5: [
        { text: 'Del cielo bajó un pintor para pintar tu figura, pero no encontró color para tanta hermosura. Te quiero amor.' },
        { text: 'Nada me parece más bello que observar el mundo a través de tus ojos. Te quiero amor.' },
        { text: 'Eres un lindo paisaje con el que me quiero deleitar, tus ojos las flores, tu rostro la pradera y tu boca el mar. Te quiero amor.' },
        { text: 'Nunca antes se había visto un amor igual al que siento por ti; no cabe en mi corazón, ni tampoco en este universo. Te quiero amor.' },
        { text: 'Cuenta la leyenda que desde tu cama se puede viajar a lo más alto del cielo. Te quiero amor.' }
      ],
      frases6: [
        { text: 'El destino de nuestros labios es encontrarse, ¿para qué alargarlo más? Te quiero amor.' },
        { text: 'Un náufrago feliz sería, si tu boca fuese el mar y yo un marinero a la deriva. Te quiero amor.' },
        { text: 'Dios se endeudó conmigo, y por eso me trajo a ti. Te quiero amor.' },
        { text: 'Te amo en colores que aún no has visto. Te quiero amor.' },
        { text: 'Te amo en formas que jamás podrías adivinar. Te quiero amor.' }
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
    titleTemplate: 'Frases Bonitas cortas de amor <3  <3 | %s',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frases Bonitas cortas de amor <3  Citas, Mensajes, Poemas en Reyfrases.com'
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
