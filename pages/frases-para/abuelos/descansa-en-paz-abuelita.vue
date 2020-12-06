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
          <p>Frases para dedicar a tu abuelita querida que ha fallecido.</p>
          <p>Abuelas que ahora estan en el cielo cuidandonos y deseandonos lo mejor del mundo.</p>
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
              <h2>Frases para abuelas fallecidas</h2>
              <p>Perder a un ser querido es duro, y mas si son nuestras abuelas bellas.</p>
              <p>por eso hemos decidido recopilar pequeños mensajes y palabras para tu abuelita fallecida que ahora esta en una mejor vida.</p>
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
          <h2>bellas cartas y poemas para tu abuela fallecida</h2>
          <p>De por si, las abuelas son lo mas bello, son sabios y mucho mas.</p>
          <p>Son un poema convertidas en abuelitas. Por ello tambien tienes frases bonitas para tu abuela que ha fallecido.</p>
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
          <h2>Palabras para dedicar a tu abuela en el cielo</h2>
          <p>Dedicas esas sutiles palabras y mensajes a tus abuelas que han fallecido y ahora te miran desde el cielo.</p>
          <p>Sin pena, puedes publicarlas en las redes sociales.</p>
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
          <h2>Te amo abuelita</h2>
          <p>Te amo y te extraño como no tienes idea, quisiera que bajaras del cielo a abrazarme ahora mismo.</p>
          <p>Deseo que estes alla con diosito muy bien y muy feliz. Te mando muchos besos desde el fondo de mi coraon abuela preciosa.</p>
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
          <h2>Extraño a mi abuela y que puedo hacer?</h2>
          <p>Mis mas sinseras condolencias, pero la vida sigue, tratar de olvidar no es sencillo.</p>
          <p>Pero es una amarga tarea que debemos lograr. La vida sigue, solo quedan recuerdos de tus seres queridos cuando pasan a una mejor historia.</p>
          <p>Solo sigue tu vida, se feliz. Se que tu abuela a de querer eso desde donde este. ella quiere lo mejor para ti!</p>
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
          <h2>Las abuelas son eternas</h2>
          <p>Las abuelas son eternas en su maximo explendor, mientras esten con vida solo amenla, cuidenla.</p>
          <p>Sean bunos nietos con ellas.</p>
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
import Juego from '@/components/juegos/frases-abuelos/index.vue'
import Juego2 from '@/components/juegos/frases-abuelos/index2.vue'
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
      fraseClave: 'Descansa en paz abuelita. Frases, mensajes, palabras y quotes para abuelas',
      frases: [
        { text: 'Estoy convencida que uno de los tesoros que guardan los años es la dicha de ser abuela' },
        { text: 'La abuela sirve besos, galletas y consejos a diario.' },
        { text: 'Los abuelos son una deliciosa mezcla de risas, cuidados, historias maravillosas y amor' },
        { text: 'El juguete más simple, que incluso el niño más joven puede operar, se llama el abuelo' },
        { text: 'La abuela sostiene nuestras manecitas por un rato, pero nuestros corazones para siempre' },
        { text: 'Nadie puede hacer por los niños lo que hacen los abuelos: Salpican una especie de polvo de estrellas sobre sus vidas.' },
        { text: 'El corazón de toda abuela es un mosaico de amor' },
        { text: 'La abuela siempre te hace sentir que había estado esperando para verte sólo a ti todo el día y ahora el día está completo.' },
        { text: 'Los abuelos son los ángeles de los nietos. Pero tu abuela eres la reina de los ángeles. ¡Te quiero!' },
        { text: 'Un jardín de amor crece en el corazón de una abuela' },
        { text: 'Abuela, no hay frases que puedan expresar lo mucho que te quiero. Cuando termines de leer estas dos líneas, piensa que te mantienes siempre cerca de mi corazón' },
        { text: 'Los abuelos, como héroes son tan necesarios para los niños, como las vitaminas' },
        { text: 'Algunos de los mejores educadores del mundo son los abuelos' },
        { text: 'El mejor lugar para estar cuando estas triste es el regazo de tu abuelo' }
      ],
      frases2: [
        { text: 'Las relaciones entre abuelas y nietos son simples. Las abuelas critican poco y dan mucho amor' },
        { text: 'Los abuelos son magos que crean recuerdos maravillosos para sus nietos' },
        { text: 'Por su paciencia infinita y su amor incondicional, como los abuelos, no hay igual' },
        { text: 'Una abuela es una maravillosa madre con muchos años de práctica. Un abuelo es un hombre viejo por fuera pero que aún es un niño por dentro' },
        { text: 'El corazón de los abuelos siempre late junto al corazón de sus nietos, un lazo invisible de amor sublime que los mantendrá unidos por siempre y no habrá fuerza que pueda cortarlo' },
        { text: 'Gracias abuela, por darnos los mejores años de nuestra vida. Has sido nuestra amiga y segunda madre. ¡Te adoramos!' },
        { text: 'Abuela, gracias por ser luz en mi camino, alegría en mi día y quien me da todo su cariño. Te quiero' },
        { text: 'Abuela, gracias por ser luz en mi camino, alegría en mi día y quien me da todo su cariño. Te quiero' },
        { text: 'Una mamá sabe mucho, pero una abuelita lo sabe todo, ¡es la voz de la experiencia!' },
        { text: '¡Para la mejor abuela del mundo! Que Dios te permita muchos años más para que podamos seguir compartiéndolos a tu lado. ¡Te queremos!' },
        { text: 'Abuelita, tú siempre sostienes nuestras manos por un rato, pero nuestros corazones para siempre' },
        { text: 'Una madre puede dar la vida a un hijo, pero una abuela es capaz de dejar sin trabajo a los Ángeles de la Guarda' },
        { text: 'No existen palabras de agradecimiento para expresar todo el amor que siento por ti, abuela, te amo sin condiciones, igual que tú me amas a mi' },
        { text: 'Para ti, abuela, la mujer más importante en mi vida. Sin ti nunca habría sido quien soy ahora. Me lo enseñaste ¡TODO! Gracias por estar en mi vida' }
      ],
      frases3: [
        { text: 'Eres linda, cariñosa, amable, fuerte y decidida... además haces una tarta de chocolate que está deliciosa. ¿Qué más se puede pedir? ¡Eres la mejor abuela del mundo!' },
        { text: 'Cada día que pasa agradezco a la vida por ofrecerme una abuela tan maravillosa como tú. Tengo la mayor suerte del mundo, porque tengo la mejor abuela del universo' },
        { text: 'Abuelita, te quiero desde aquí a la Luna y de vuelta. ¡Te amo con el corazón!' },
        { text: 'Si me preguntan quién es la persona a la que más admiro, no dudaría ni un segundo en decir que eres tú, abuela' },
        { text: 'Cuando estoy cerca de ti y te miro, veo el maravilloso vínculo que nos une, el reflejo de toda una vida de demostraciones de amor incondicional. ¡Te amo abuela!' },
        { text: 'Gracias a ti sentí el amor de una madre por dos: dos veces de afecto, dos veces de comprensión, dos veces de guía y enseñanzas y dos veces de regañinas (aunque las tuyas siempre fueron más dulces) ¡Gracias abuela! ¡Te quiero mucho!' },
        { text: 'Sabemos que los abuelos son los ángeles de sus nietos, pero tú, abuela, eres la reina madre de todos los ángeles' },
        { text: 'Siempre que estoy contigo me siento en paz. Porque me entiendes y me aceptas como soy, porque siempre tienes un buen consejo que darme y porque contigo puedo hablar de cualquier cosa. ¡Te quiero abuela!' },
        { text: 'En la niñez me diste cuidados, alegría y amor, y ahora que soy adulta me estás dando lo mejor de ti, tu compañía. ¡Te quiero abuela!' },
        { text: 'Abuela, te regalaría todos los dulces más deliciosos y las flores más bellas del mundo, pero nada alcanzaría a ser tan bueno como el amor que siempre me has dado. ¡Te quiero mucho!' },
        { text: 'No hay dos sin tres: madre tengo una, abuela tengo dos, y a las tres os quiero con todo mi corazón' },
        { text: 'Toda la vida me has criado como una hija, ahora me toca a mí cuidarte como a una madre. ¡Te amo abuela!' },
        { text: 'Deseo abuela que sepas que toda la vida me has enseñado la lección más preciada: me has enseñado a amar de verdad, a amar con el corazón. Gracias por ser como eres! Te quiero' },
        { text: 'Un abuelo es alguien con plata en su cabello y oro en su corazón.' },
        { text: 'Una abuela es una maravillosa madre con muchos años de práctica. Un abuelo es un hombre viejo por fuera pero que aún es un niño por dentro.' },
        { text: 'Hay padres que no aman a sus hijos; no hay abuelo que no adore a sus nietos.-Victor Hugo.' },
        { text: 'Los abuelos son una deliciosa mezcla de risas, historias maravillosas y amor.' },
        { text: 'Una abuela es un poco madre, un poco maestra y un poco mejor amiga.' },
        { text: 'Un abuelo es viejo por fuera pero joven por dentro.' }
      ],
      frases4: [
        { text: 'Mi abuelo tiene la sabiduría de un búho y el corazón de un ángel.' },
        { text: 'No hay lugar como el hogar, excepto la casa de la abuela.' },
        { text: 'Los abuelos son maravillosos porque escuchan y muestran interés genuino en lo que tienes que decir.' },
        { text: 'El amor perfecto a veces no llega hasta el primer nieto.' },
        { text: 'Una casa necesita una abuela.' },
        { text: 'No entiendes nada realmente al menos que se lo puedas explicar a tu abuela.' },
        { text: 'Seguramente dos de las experiencias más satisfactorias de la vida son ser nieto o ser abuelo' },
        { text: 'Un niño necesita un abuelo, el de cualquiera, para crecer un poco más seguro en un mundo poco familiar.' },
        { text: 'Una abuela es una niñera que cuida a los niños en lugar de ver la televisión.' },
        { text: 'Los abuelos están para amar y arreglar cosas.' },
        { text: 'Lo que los niños necesitan más son los elementos que los abuelos proveen en abundancia. Dan amor incondicional, amabilidad, paciencia, humor, comodidad, lecciones de vida. Y lo más importante, galletas.' },
        { text: 'Todos deberíamos tener una persona que sabe bendecirnos a pesar de la evidencia. Mi abuelo fue esa persona para mi. ' },
        { text: 'Es natural que a menudo nos sentimos más cerca de las generaciones lejanas que de las que nos preceden inmediatamente.' },
        { text: 'Si nada va bien, llama a tu abuela.' },
        { text: 'Los abuelos siempre serán los ángeles de sus nietos.' },
        { text: 'Los abuelos son magos que crean recuerdos maravillosos para sus nietos.' },
        { text: 'Cuando los abuelos entran por la puerta, la disciplina vuela por la ventana.' },
        { text: 'El mejor lugar para estar cuando estas triste es el regazo de tu abuelo.' },
        { text: 'Toda generación se revela contra sus padres y hace amigos con sus abuelos.' },
        { text: 'Todo el mundo necesita tener acceso a abuelos y nietos para ser un ser humano completo.' },
        { text: 'Una abuela es una madre que tiene una segunda oportunidad.' },
        { text: 'Una abuela aparenta que no sabe quién eres en Halloween.' }
      ],
      frases5: [
        { text: 'Los abuelos, al igual que los héroes, son tan necesarios para el crecimiento de los niños como las vitaminas.' },
        { text: 'Las abuelas son voces del pasado y modelos de rol del presente. Son puertas abiertas del futuro.' },
        { text: 'Nadie puede hacer más por los niños que lo que hacen los abuelos. Los abuelos espolvorean polvo de estrellas sobre la vida de los niños pequeños.' },
        { text: 'Los abuelos tienen un lugar especial en la vida de los hijos de sus hijos. Pueden pasarlo bien y jugar con ellos de maneras que incluso no usan con sus propios hijos.' },
        { text: 'Las relaciones entre abuelas y nietos son simples. Las abuelas critican poco y dan mucho amor.' },
        { text: 'A ojos de sus nietos, los abuelos son bromistas profesionales y comediantes veteranos.' },
        { text: 'Los abuelos tienen la paciencia y el tiempo para enseñarte a navegar un barco o llevarte a un partido de fútbol.' },
        { text: 'El juguete más simple, uno que incluso el niño más pequeño puede usar, se llama abuelo.' },
        { text: 'Algunos de los mejores educadores del mundo son los abuelos' },
        { text: 'Los abuelos son simplemente niños pequeños antiguos.' },
        { text: 'Los abuelos pasan palabras de sabiduría a sus nietos.' },
        { text: 'Mi abuelo era tan maravilloso porque me dejaba ser un niño e incluso disfrutaba de la diversión.' },
        { text: 'Los amigos más cercanos que hice a lo largo de la vida han sido personas que también crecieron cerca de un abuelo o abuela.' },
        { text: 'No necesitas un libro de historia si eres lo suficientemente afortunado de tener un abuelo.' },
        { text: 'Uno de los apretones de mano más poderoso es el del nuevo nieto sobre el dedo de su abuelo.' },
        { text: 'Por su paciencia infinita y su amor incondicional, como los abuelos, no hay igual. ' },
        { text: 'Los abuelos que crían a sus nietos dejan huellas en sus almas.' },
        { text: 'Cuando Dios quiso crear algo lindo para todos los niños del mundo, creó a los abuelos.' },
        { text: 'Abuelos y nietos, dos generaciones totalmente diferentes capaces de comunicarse perfectamente a través del lenguaje del amor. ' },
        { text: 'Los abuelos son el ejemplo de que el amor, si lo cuidas, puede durar.' }
      ],
      frases6: [
        { text: 'Mi abuelo siempre me decía que el mayor regalo era la salud, yo sonreía pero por dentro siempre pensé que el mejor regalo era él.' },
        { text: 'El corazón de los abuelos siempre late junto al corazón de sus nietos, un lazo invisible de amor sublime que los mantendrá unidos por siempre y no habrá fuerza que pueda cortarlo.' },
        { text: 'Tal vez no hay un lugar real llamado infierno. Tal vez el infierno es sólo tener que escuchar a nuestros abuelos respirar por la nariz cuando están comiendo sandwiches' },
        { text: 'Si tienes la suerte de tener todavía abuelos, visítalos, cuídalos y celébralos mientras puedas.' },
        { text: 'Los abuelos son los únicos que a pesar de no tener Facebook, recuerdan tu cumpleaños.' },
        { text: 'La razón por la que nietos y abuelos se llevan tan bien es que tienen un enemigo común.' },
        { text: 'Las abuelas son madres pero bañadas en escarcha blanca.' },
        { text: 'Nunca tengas hijos, solo nietos.' },
        { text: 'Después de un tiempo, a Dios se le hizo muy difícil estar en todas; así que creó a las abuelas.' },
        { text: 'Convertirse en una abuela es maravilloso. En un momento eres sólo una madre. El siguiente eres sabia y prehistórica.' },
        { text: 'Ser abuelos nos elimina suficientemente las responsabilidades para que podamos ser amigos.' },
        { text: 'La abuela siempre te hace sentir que había estado esperando para verte sólo a ti todo el día y ahora el día está completo.' },
        { text: 'A las abuelas nunca se les acaban los abrazos ni las galletas.' },
        { text: 'Si hubiera sabido lo maravilloso que era tener nietos, los hubiera tenido a ellos primero.' },
        { text: 'Los abuelos están para amar y para reparar cosas.' },
        { text: 'Dicen que los genes saltan generaciones. Tal vez por eso los abuelos encuentran a sus nietos tan simpáticos.' },
        { text: 'Convertirse en abuelo es disfrutar de uno de los pocos placeres de la vida por los que ya se han pagado las consecuencias.' },
        { text: 'Mis nietos creen que yo soy la cosa más antigua del mundo, y tras 2 o 3 horas de jugar con ellos, yo también lo creo.' },
        { text: 'Mi abuela comenzó a caminar cinco millas al día cuando tenía sesenta años. Ahora tiene noventa y siete años, y no sabemos dónde demonios está.' },
        { text: 'Los nietos son la manera que tiene Dios de compensarnos por habernos vuelto viejos.' }
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
    titleTemplate: '🥇Descansa en paz abuelita frases, mensajes y palabras para abuelas | %s',
    htmlAttrs: {
      lang: 'es'
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
        content: '‎✅ Frases para las abuelas, ‎✅ Descansa en paz abuelita, aunque hayas fallecido y te encuentres en el cielo yo te seguire amando | Frases.me'
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
