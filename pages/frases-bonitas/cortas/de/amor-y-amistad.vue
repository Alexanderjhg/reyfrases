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
      fraseClave: 'Frases Bonitas cortas de amor y amistad',
      frases: [
        { text: 'Todos guardamos un secreto que nos avergüenza revelar, algo de lo que nos arrepentimos pero necesitamos remediar y un amor que nunca llegaremos a olvidar. dios guarde este amor y amistad.' },
        { text: 'Las buenas cosas ocurren todos los días. Solo nos tenemos que dar cuenta de ellas. dios guarde este amor y amistad.' },
        { text: 'El amor es siempre tímido ante la belleza, al paso que la belleza anda siempre detrás del amor. dios guarde este amor y amistad.' },
        { text: 'Si no te lo he dicho, por si me he olvidado, por si hace mucho que no lo escuchas, por si tienes dudas o solo porque sí, tienes que saber que te quiero. dios guarde este amor y amistad.' },
        { text: 'Para ganarte la confianza de una persona, primero debes demostrar que tú también confías. dios guarde este amor y amistad.' }
      ],
      frases2: [
        { text: 'Piensa en grande pero disfruta de los pequeños placeres. dios guarde este amor y amistad.' },
        { text: 'Es una locura amar, a menos de que se ame con locura. dios guarde este amor y amistad.' },
        { text: 'Te amo desde que sale el sol hasta que se pone, te amo desde que sale la luna hasta que se pone, debido a que no paro de pensar en ti mi amo. dios guarde este amor y amistad.' },
        { text: 'Los amigos verdaderos están ahí cuando el resto te deja tirado, se queda a tu lado mientras otros se han marchado. dios guarde este amor y amistad.' },
        { text: 'Tu vida no esta tan determinada por lo que te trae como por tu actitud ante ello; no tanto por lo que te ocurre como por cómo interpretas lo que ocurre. dios guarde este amor y amistad.' }
      ],
      frases3: [
        { text: 'La gota de agua perfora la roca, no por su fuerza sino por su constancia. dios guarde este amor y amistad.' },
        { text: '¿Cómo podré olvidarte algún día? Si eres mi sol y mi tierra. dios guarde este amor y amistad.' },
        { text: 'Cada vez que pienso en la felicidad, vuelves a mi mente. dios guarde este amor y amistad.' },
        { text: 'Todo lo que siempre has querido está al otro lado del miedo. dios guarde este amor y amistad.' },
        { text: 'Aunque les resulte imposible, no reclamen nada. Traguen veneno. Acepten la injusticia, que todo se equilibra al final. dios guarde este amor y amistad.' }
      ],
      frases4: [
        { text: 'Sé que estamos realmente enamorados uno del otro, pero es tal el amor que tengo por ti, que necesito la necesidad de recordártelo cada día mi amor. dios guarde este amor y amistad.' },
        { text: 'El amor es sabiduría en los locos, y locura en los sabios. dios guarde este amor y amistad.' },
        { text: 'Nos podemos quejar porque los rosales tienen espinas o alegrarnos porque los espinos tienen rosas. dios guarde este amor y amistad.' },
        { text: 'Nunca olvides que los grandes logros requieren tiempo y paciencia. dios guarde este amor y amistad.' },
        { text: 'Como me gustaría poder ser tus lágrimas, debido a que las mismas han podido pasar por tu corazón. Lo que daría por serlas, aunque solo fuese un segundo parte de tu corazón. dios guarde este amor y amistad.' }
      ],
      frases5: [
        { text: 'Las mejores amigas te motivan hasta cuando tú misma has dejado de creer en tus posibilidades. dios guarde este amor y amistad.' },
        { text: 'El secreto de la libertad humana es actuar bien, sin apego a los resultados. dios guarde este amor y amistad.' },
        { text: 'Es una locura odiar a todas las rosas sólo porque una te pinchó, como renunciar a todos tus sueños sólo porque uno de ellos no se cumplió. dios guarde este amor y amistad.' },
        { text: 'Si hay algo que más me gusta que tu sonrisa, es cuando sonríes el verme cariño. dios guarde este amor y amistad.' },
        { text: 'No te rindas, pues a menudo las personas tiran la toalla cuando están muy cerca del éxito. dios guarde este amor y amistad.' }
      ],
      frases6: [
        { text: 'Nuevo día, nuevos pensamientos, nuevas esperanzas y nuevas oportunidades. dios guarde este amor y amistad.' },
        { text: 'A la cima no se llega superando a los demás sino superándose a sí mismo. dios guarde este amor y amistad.' },
        { text: 'A tu lado las horas son segundo, pero sin tu compañía los segundos pasan a ser horas. dios guarde este amor y amistad.' },
        { text: 'Cuanto más grande es la dificultad, más gloria hay en superarla. dios guarde este amor y amistad.' },
        { text: 'Abre tu corazón y no tengas miedo de que te lo rompan. Los corazones rotos se curan. Los corazones protegidos acaban convertidos en piedra. dios guarde este amor y amistad.' }
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
    titleTemplate: 'Frases Bonitas cortas de amor y amistad <3 | %s',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frases Bonitas cortas de amor y amistad Citas, Mensajes, Poemas en Reyfrases.com'
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
