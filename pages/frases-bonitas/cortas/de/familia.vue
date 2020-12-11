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
      fraseClave: 'Frases Bonitas cortas de familia <3 ',
      frases: [
        { text: 'Es hermoso que los padres lleguen a ser amigos de sus hijos, desvaneciendo todo temor, pero inspirando un gran respeto.' },
        { text: 'Con la familia sucede como con todas las cosas bellas; que tienen más brillo cuando son imperfectas que cuando son acabadas.' },
        { text: 'No es la carne ni la sangre, sino el corazón, lo que nos hace una familia unida.' },
        { text: 'Mi familia es mi fuerza y mi debilidad.' },
        { text: 'El hombre es un animal no social, sino cordial, y la familia es la forma menos imperfecta de la cordialidad humana.' }
      ],
      frases2: [
        { text: 'Sin una familia, el hombre solo en el mundo, tiembla con el frío.' },
        { text: 'El valor de la familia no se compara a ningún bien material, riquezas o placeres.' },
        { text: 'El amor de la familia es incondicional y para siempre.' },
        { text: 'A pesar de las discusiones y decepciones, siempre encontrarás a tu familia a tu lado cuando la necesites.' },
        { text: 'Familia significa que nadie se queda atrás y nadie se olvida.' }
      ],
      frases3: [
        { text: 'Ohana significa familia y tu familia nunca te abandona.' },
        { text: 'Amo a mi familia hasta el fin del mundo, ida y vuelta y en tacones.' },
        { text: 'No me alcanzan las palabras ni la vida para explicar y agradecer el amor de mi familia.' },
        { text: 'No importa lo pobre que es un hombre; si tiene familia es rico.' },
        { text: 'La familia no es solo importante, lo es todo.' }
      ],
      frases4: [
        { text: 'Esta familia es el mejor regalo que la vida nos ha dado. ¡Gracias!' },
        { text: 'Gracias familia por ofrecerme siempre una amistad desinteresada' },
        { text: 'La familia te quiere y te aprecia tal y como eres' },
        { text: 'Lo que nos hace una familia unida no es la sangre, sino el corazón' },
        { text: 'No hay nada más gratificante que pasar tiempo en familia' }
      ],
      frases5: [
        { text: 'Amo a mi familia, de aquí a la luna y más allá' },
        { text: 'La familia es la brújula que guía nuestro camino, la inspiración para caminar hasta lo alto de la montaña y el mayor consuelo cuando algo sale mal' },
        { text: 'Los momentos más felices de mi vida han sido en el hogar junto a mi familia' },
        { text: 'Gracias a mi familia, por hacer mi sonrisa más brillante y mi risa más sonora' },
        { text: 'Gracias familia, por estar siempre a mi lado y ser todo corazón' }
      ],
      frases6: [
        { text: 'Gracias por ser como son y estar en mi vida' },
        { text: 'Familia... donde comienza la vida y el amor nunca termina' },
        { text: 'En esta casa somos nosotros mismos, agradecemos, cometemos errores, nos perdonamos, nos divertimos, nos damos abrazos y, sobre todo, nos amamos' },
        { text: 'No somos una familia común, ¿qué importa? Lo que de verdad importa es que, pase lo que pase, siempre nos apoyamos unos a otros' },
        { text: 'Premio a la mejor familia, porque siempre somos un equipo unido, nos protegemos, apoyamos y escuchamos' }
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
    titleTemplate: 'Frases Bonitas cortas de familia <3  <3 | %s',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frases Bonitas cortas de familia <3  Citas, Mensajes, Poemas en Reyfrases.com'
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
