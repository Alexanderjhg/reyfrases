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
      fraseClave: 'Frases Bonitas cortas de amistad',
      frases: [
        { text: 'Los verdaderos amigos son esas personas que, sin importar donde estén, pueden llegar a tocar tu corazón y moverán cielo y mar para apoyarte en lo que necesites. Dios cuide esta amistad' },
        { text: 'Los amigos y amigas pelean, es algo muy común, pero una verdadera amistad jamás terminará por una absurda discusión, el vínculo que une a dos amigos verdaderos es irrompible. Dios cuide esta amistad' },
        { text: 'Encontrar una verdadera amistad es un privilegio y una suerte mayor que encontrar el amor, por eso, los amigos sinceros valen su peso en oro. Dios cuide esta amistad' },
        { text: 'Lo que hace que nuestra amistad sea indestructible y hermosa es la confianza y la certeza de que siempre nos tendremos el uno al otro sin importar las dificultades. Dios cuide esta amistad' },
        { text: 'Los buenos amigos son la mejor manera de descubrir el mundo, no necesitas viajar para experimentarlo todo, a veces, una conversación con un amigo puede enseñarte mucho más de lo que crees. Dios cuide esta amistad' },
        { text: 'Un verdadero amigo es esa persona que tiene una paleta de colores y nos presta un poco cuando nota que nuestro mundo está perdiendo color. Dios cuide esta amistad' },
        { text: 'Una de las más dulces experiencias que nos regala la amistad es el entender y ser entendidos aun cuando creemos que la locura que habita nuestra mente es incomprensible. Dios cuide esta amistad' },
        { text: 'Las mejores conversaciones entre amigos están definidas por los silencios, por esos momentos donde solo la presencia del otro basta para expresarlo todo. Dios cuide esta amistad' },
        { text: 'Eres mi mejor amigo, solo tú me has visto crecer, llorar, reír, fracasar y alcanzar el éxito sin juzgarme, brindando consejo cuando lo necesitaba y siendo mi compañero de aventuras cuando no quería ir solo, gracias por estar siempre a mi lado. Dios cuide esta amistad' },
        { text: 'No eres solo una persona con la que salgo y comparto risas, de esas hay muchas, eres mi amigo del alma, el hermano que elegí para vivir esta vida, esa persona que mi madre adora y que considera como un hijo más. Dios cuide esta amistad' }
      ],
      frases2: [
        { text: 'Tengo mucho que agradecerte amigo mío, porque después de conocer todos mis defectos, mis fallas y ver mis fracasos en primera fila, sigues a mi lado, animándome y amándome, gracias por ser mi mejor amigo. Dios cuide esta amistad' },
        { text: 'Juntos hemos compartido todo tipo de experiencias, algunas maravillosas, otras tristes, algunas con sonrisas y otras con lágrimas, somos inseparables, incluso en la distancia. Dios cuide esta amistad' },
        { text: 'Eres una de esas personas especiales que hacen del mundo un lugar mejor solo por existir, gracias amiga mía por estar siempre a mi lado, te quiero muchísimo. Dios cuide esta amistad' },
        { text: 'La amistad supera al amor en muchos sentidos, ella ofrece certeza donde el amor solo deja dudas y por si fuera poco, la verdadera amistad construye sonrisas donde el amor deja lágrimas y corazones rotos. Dios cuide esta amistad' },
        { text: 'En mi vida siempre quise personas como tú a mi lado, especiales, que siempre hacen de cada pequeño momento que compartimos algo único y especial, solo a tu lado amiga he creado los mejores recuerdos. Dios cuide esta amistad' },
        { text: 'Eurípides nos recuerda que uno de los mejores momentos para comprender el amor que sienten tus amigos por ti son los malos momentos, esas situaciones donde sin importa las consecuencias, se mantendrán a tu lado. Dios cuide esta amistad' },
        { text: 'Los amigos muestran su amor en los momentos de problemas» Eurípides. Dios cuide esta amistad' },
        { text: 'La mejor forma de destruir un enemigo es hacerlo mi amigo Dios cuide esta amistad' },
        { text: 'La amistad es una inclinación fuerte y habitual en dos personas por promover el bien y el gozo en cada uno de los dos Dios cuide esta amistad' },
        { text: 'Un amigo es alguien quien nos conoce, pero nos ama de todas formas.» Fr. Jerome Cummings. Dios cuide esta amistad' }
      ],
      frases3: [
        { text: 'Decir amistad es decir entendimiento cabal, confianza rápida y larga memoria; es decir, fidelidad. Dios cuide esta amistad' },
        { text: 'Debes reprender en secreto a tu amigo y alabarlo en público. Dios cuide esta amistad' },
        { text: 'No necesito amigos que cambien cuando yo cambio y asientan cuando yo asiento. Mi sombra lo hace mucho mejor. Dios cuide esta amistad' },
        { text: 'Los lazos de la amistad son más estrechos que los de la sangre y la familia. Dios cuide esta amistad' },
        { text: 'Lo que hace indisoluble a las amistades y dobla su encanto, es un sentimiento que le falta al amor, la certeza.” Dios cuide esta amistad' },
        { text: 'Los amigos verdaderos también son los que te empujan para que sigas adelante. Dios cuide esta amistad' },
        { text: 'Cuando la amistad es verdadera, es fuerte como la roca e infinita como el mar. Dios cuide esta amistad' },
        { text: 'Solo un amigo verdadero es capaz de hacer que veas luz donde tu solo ves oscuridad. Dios cuide esta amistad' },
        { text: 'Busca amigos que se rían, pues ellos te harán reír hasta en el peor de los días. Dios cuide esta amistad' },
        { text: 'Quédate con los amigos de primaria, ellos te conocieron antes de que incluso tú supieras quién eras. Dios cuide esta amistad' }
      ],
      frases4: [
        { text: 'Levantemos las copas por esos amigos que nos invitan a hacer locuras, y luego no se recuerdan de nada. Dios cuide esta amistad' },
        { text: 'Ser amigo es un don y lamentablemente no todas las personas lo tienen. Dios cuide esta amistad' },
        { text: 'Solo quien tiene una amiga de verdad, tiene novelas y películas de terror gratis. Dios cuide esta amistad' },
        { text: 'Viajar con un amigo siempre será la mejor solución a cualquier problema. Dios cuide esta amistad' },
        { text: 'Mejor amiga, tu amistad es tan importante para mí que recorrería el mundo solo para visitarte. Dios cuide esta amistad' },
        { text: 'Amiga, nuestra amistad es tan grande que sé que si un día me faltases, me sentiría una persona incompleta. Dios cuide esta amistad' },
        { text: 'Cuida como un diamante la amistad verdadera, pues con los años se hace más valiosa. Dios cuide esta amistad' },
        { text: 'Aprendamos a ser buenos amigos, de esos que llamas y enseguida están a tu lado. Dios cuide esta amistad' },
        { text: 'La amistad que nos une será siempre un apoyo en nuestro camino. ¡Buenas noches, amiga! Dios cuide esta amistad' },
        { text: 'Amiga, te tengo un regalo para que celebremos la navidad, ¡No te preocupes por el mío porque mi mayor regalo es tu amistad! Dios cuide esta amistad' }
      ],
      frases5: [
        { text: 'El amor es ciego; la amistad cierra sus ojos. Dios cuide esta amistad' },
        { text: 'El mayor regalo de la vida es la amistad y yo la he recibido. Dios cuide esta amistad' },
        { text: 'Los amigos muestran su amor en tiempos de problemas, no de felicidad. Dios cuide esta amistad' },
        { text: 'Caminar con un amigo en la oscuridad es mejor que caminar solo en la luz. Dios cuide esta amistad' },
        { text: 'Demos gracias a las personas que nos hacen felices, ellos son los encantadores jardineros que hacen florecer nuestra alma. Dios cuide esta amistad' },
        { text: 'Los amigos son verdaderos gemelos del alma. Uno no es feliz sin el otro, ni puede cualquiera de ellos ser miserable solo. Dios cuide esta amistad' },
        { text: 'No hay nada en esta tierra más preciado que la verdadera amistad. Dios cuide esta amistad' },
        { text: 'La amistad es una mente en dos cuerpos. Dios cuide esta amistad' },
        { text: 'Una de las más bellas cualidades de la verdadera amistad es entender y ser entendido. Dios cuide esta amistad' },
        { text: 'Un verdadero amigo es alguien que te ayuda a superar tus fracasos y tolera tus éxitos. Dios cuide esta amistad' }
      ],
      frases6: [
        { text: 'El amigo ha de ser como el dinero, que antes de necesitarlo, se sabe el valor que tiene. Dios cuide esta amistad' },
        { text: 'Son los amigos que puedes llamar a las cuatro de la mañana los que importan. Dios cuide esta amistad' },
        { text: 'Un amigo para todos es un amigo de ninguno. Dios cuide esta amistad' },
        { text: 'No puedo ni imaginar dónde estaría hoy si no fuera por ese puñado de amigos que me han llenado el corazón de alegría. Seamos realistas, los amigos hacen la vida mucho más divertida. Dios cuide esta amistad' },
        { text: 'Un verdadero amigo es alguien que está allí para ti cuando podría estar en otro sitio. Dios cuide esta amistad' },
        { text: 'Un amigo es lo que el corazón necesita todo el tiempo. Dios cuide esta amistad' },
        { text: 'De todas las posesiones la más valiosa es un amigo inteligente y con buenas intenciones. Dios cuide esta amistad' },
        { text: 'Una de las bendiciones de los viejos amigos es que puedes permitirte el lujo de ser estúpido con ellos. Dios cuide esta amistad' },
        { text: 'Nunca te hagas amigo de gente que esté por encima o por debajo de ti en posición social. Dichas amistades no te darán felicidad ninguna. Dios cuide esta amistad' },
        { text: 'Recuerde que un gesto de amistad, por pequeña que sea, siempre es de agradecer. Dios cuide esta amistad' }
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
    titleTemplate: 'Frases Bonitas cortas de amistad <3 | %s',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frases Bonitas cortas de amistad o amistades Citas, Mensajes, Poemas en Reyfrases.com'
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
