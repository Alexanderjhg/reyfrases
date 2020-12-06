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
          <p>Hola amigo/a, Lamento mucho tu perdida. Yo tambien he perdido a mi abuelo.</p>
          <p>Es algo que se siente muy raro, bueno, con un abuelo fallecido quien no se sentiria de lo mas vacio.</p>
          <p>Yo le dedico estas frases para abuelos a mi abuelito querido que se que esta en el cielo cuidandome en cada momento!</p>
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
    <div class="text-center container">
      <h2 class="my-4">Mira este video de como puedes superar el adios</h2>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/TbqiOetBoqQ"
        allowfullscreen
      ></b-embed>
    </div>
    <section>
      <div>
        <div class="text-center py-5">
          <div class="container">
          <b-row>
            <b-col>
              <h2>Mensajes para abuelos</h2>
              <p>Le dedico estos mensajes cortos a mi abuelo para que sepa que no lo he olvidado y no lo alvidare nunca.</p>
              <p>Lo ame mucho, aunque a veces me regañaba pero es parte de crecer. Nunca te olvidare abuelito de mi corazon.</p>
              <p>Yo quiero que estas frases bellas te sirvan a ti, se que extrañas a tu abuelo. Dedicale la mejor frase del mundo.</p>
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
          <h2>Estas en el cielo abuelo, y te dedico estas frases para que sepas que te amo.</h2>
          <p>Si sientes que estas solo, no lo pienses mas, dejame decirte que compartimos el mismo dolor aunque no lo parezca, yo tambien ame mucho a mi abuelo.</p>
          <p>Grita: Te extraño abuelo, gritalo con todas tus fuerzas, desahogate, y hazle saber que l extrañas mucho.</p>
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
          <h2>Frases interminables para abuelos</h2>
          <p>Pequeñas citas son necesarias para expresar lo que sentimos en nuestos corazones, pequeñas frases cortas que describen exactamente el dolor que sentimos.</p>
          <p>Descanza en paz abuelo, se que pasaste a una mejor vida.</p>
          <p>El dia de hoy los abuelos bajan del cielo para decirnos que nos aman, asi tambien como nosotros con estas frases le decimos a ellos que lo amamos con todo el corazon.</p>
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
          <h2>Como no va a estar bonito el cielo si mi abuelo esta ahi</h2>
          <p>El cielo debe estar bello, bonito despues de que mi abuelo llegara en el. El era el mejor abuelo del mundo y por eso lo extraño tanto.</p>
          <p>Con sus risas, regaños, enseñanzas, consejos que el me daba, logre comprender que luego de su muerte nada volveria a ser igual. sin el.</p>
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
          <h2>Frases y abuelos</h2>
          <p>Son muchas las frases que ya he escrito y recopilado de internet, pero es que se quedan muy cortas para describir lo que en realidad quiero decirle a mi abuelo.</p>
          <p>Te amo tanto mi abuelito fallecido, por eso te dedico estas frases, para que me recuerdes desde el cielo.</p>
          <p>Te dedico mensajes, frases, canciones, poemas, todo te lo dedico a ti mi abuelo hermoso.</p>
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
          <h2>Si se te ha muerto un abuelo y no lo conocias o acaba de fallecer no importa</h2>
          <p>El amor hacia un abuelo es unico, porque un abuelo te da muchos consejos bellos, ademas que son un ejemplo a seguir.</p>
          <p>y aunque no lo hayas conocido, las frases y el sentimiento es el mismo, es un abuelo. Es tu abuelo!</p>
          <p>Por eso debes amar a tus abuelitos lo conoscas o no.! solo quedara en nuestros pensamientos. Cuidame desde el cielo abuelo.</p>
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
      fraseClave: 'Frases mensajes y palabras para mi abuelo fallecido que esta en el cielo',
      frases: [
        { text: 'El vacío que has dejado con tu partida, jamás podremos llenar, pues sólo con tu presencia nos podremos aliviar. Guardo tu voz en mi interior entonando día a día tus bellas palabras de amor.' },
        { text: 'Si tuviera poderes sobrenaturales daría lo que sea con tal de poder regresar el tiempo atrás y volver a experimentar los bellos momentos que hemos pasado juntos.' },
        { text: 'Tú me enseñaste que en la vida sólo existe el día de hoy para hacer lo que nos hiciera felices, y que era esa la única forma en la que nuestra existencia en esta tierra se justificaba, gracias por enseñarme a vivir.' },
        { text: 'En el momento de tu despedida cada palabra quedó grabada en mi corazón, y ahí estará por siempre el recuerdo de lo grande que fue tu amor.' },
        { text: 'Adiós Abuelo y gracias, porque me dejaste el mejor legado, una familia grande y hermosa a la que siempre he amado.' },
        { text: 'Estoy feliz porque ahora no serás mi abuelo, te has convertido en el ángel que cuida de mí desde el cielo.' },
        { text: 'Al mirarme al espejo te veo porque sé que tengo rasgos de ti, esos genes que marcaron tu vida, tu siempre vivirás en mí.' },
        { text: 'Nuestras alas ya estaban listas para volar, pero mi corazón nunca estuvo listo para verlos partir ' },
        { text: 'Mando un saludo especial a mis abuelos, gracias a ellos soy una persona llena de valores. Felicidades en el día del abuelo' },
        { text: 'Un abuelo es viejo por fuera pero joven por dentro ' },
        { text: 'Los abuelos tienen la paciencia y el tiempo para enseñarte a navegar un barco o llevarte a un partido de fútbol ' },
        { text: 'Algunos de los mejores educadores del mundo son los abuelos ' },
        { text: 'Los abuelos son magos que crean recuerdos maravillosos para sus nietos' },
        { text: 'Los nietos son la maravillosa compensación que Dios nos da por ser viejos' }
      ],
      frases2: [
        { text: 'La abuela sirve besos, galletas y consejos a diario' },
        { text: 'Los abuelos siempre serán los ángeles de sus nietos' },
        { text: 'Una casa necesita una abuela' },
        { text: 'La abuela sostiene nuestras manos por un rato, pero nuestros corazones para siempre' },
        { text: 'El amor perfecto a veces no llega hasta el primer nieto' },
        { text: 'Las personas que dan mejores consejos son los que tienen más problemas, salvo los abuelos, que ya los han vivido todos ' },
        { text: 'Dicen que los genes se saltan una generación. Tal vez por eso a los abuelos les parece que sus nietos son muy agradables' },
        { text: 'Mi abuela comenzó a caminar cinco millas al día cuando tenía sesenta años. Ahora tiene noventa y siete años, y no sabemos dónde demonios está' },
        { text: 'En mi pequeño corazón aun guardo la luz de esperanza que tengo por ti. Sé que algún día volveré a verte y te abrazaré muy muy fuerte. Así tengan que pasar muchos años, siempre te tendré en mi corazón, abuelito ✅ bello.' },
        { text: 'Dios te bendiga, abuelo. Aquí en la tierra, en el cielo y en donde te encuentres. Siempre te tendremos en nuestros corazones como la bella persona que fuiste. Te quiero' },
        { text: 'Tener un abuelo como tú es una dicha y me siento realmente agradecida y bendecida de haber compartido tantos años contigo. Sé que lloraré y sufriré porque te extraño, pero en mi corazón siempre guardaré tu luz de esperanza. Descansa en paz abuelo.' },
        { text: 'Daría todo lo que tengo en este momento para poder abrazarte una vez más y decirte cuanto te quiero abuelito lindo.' },
        { text: 'Abuelito, han pasado días desde que te fuiste y me apena no haber podido despedirme de ti ni haberte dicho cuán importante eres en mi vida. Te extraño, abuelito.' },
        { text: 'No puedo retroceder el tiempo, solo que me queda recordar cada momento que pasamos juntos en familia, extrañaré mucho tus historias que me contabas. Te quiero abuelo.' }
      ],
      frases3: [
        { text: 'En el cielo ya disfrutan de tu bondad y alegría, mientras aquí en la Tierra te echamos muchísimo de menos abuelo mío.' },
        { text: 'Aparte de ser mi abuelo y padre, fuiste mi consejero y mi mejor amigo. No sabes cuánto te extrañaré, pero sé que estás en un mejor lugar.' },
        { text: 'Tu fallecimiento cambió mi vida, pero mucho más lo hizo el tiempo que pasaste a mi lado. ¡Te extraño abuelito!' },
        { text: 'Sé que sigues y guías mis pasos desde allí arriba. Abuelo, la huella que has dejado en mí y de la que tan orgullosa me siento, hace que siempre te note muy cerca, como una parte más de mi ser.' },
        { text: 'Hoy estoy buscando la mejor manera de decirte adiós y al mirarte siento que el dolor despierta en mi corazón. ' },
        { text: 'Abuelo, escápate un momento del cielo y ven a abrazarme.' },
        { text: 'Por ese amor incondicional, por esas manos de consuelo, por ese abrazo protector levanto una oración al cielo.' },
        { text: 'Te recuerdo y se llena mi alma de gozo por todo lo que me diste mientras estuviste junto a mí.' },
        { text: 'Se acabó tu recorrido por este mundo, nos has dejado desolados y llenos de dolor. Con el consuelo de que empiezas una nueva vida al lado del Señor.' },
        { text: 'Abuelo, eres como la luz de un paisaje. Siempre estás en el lugar correcto, en el momento correcto, listo para ayudarme cuando lo necesito.' },
        { text: 'Si tiene plata en el cabello y oro en el corazón, no hay duda... es un abuelo.' },
        { text: 'Fuiste tú, abuelo/a, quien me enseñó el significado de amor verdadero.' },
        { text: 'Hay padres que no quieren a sus hijos, pero no existe un solo abuelo que no adore a su nieto.' },
        { text: 'Nadie puede hacer por los niños lo que hacen sus abuelos... pues los abuelos son aquellos que rocían polvos de estrella sobre la vida de los niños pequeños.' },
        { text: 'Cada vez que pienso en la persona que más me ha inspirado en el mundo, pienso en mi abuelo.' },
        { text: 'Ahora que soy mayor, me doy cuenta de lo que significa realmente tener un mejor amigo. Y me doy cuenta, también, de que el mío ha sido mi abuelo.' },
        { text: 'Cuando te miro a los ojos veo sabiduría, compasión y el amor más puro del mundo.' },
        { text: 'Lo que recuerdo con más cariño de mi formación como humano, fue sin ningún lugar a duda lo que me enseñaron mis abuelos.' },
        { text: 'Los nietos son la maravillosa compensación que Dios nos da por ser viejos.' }
      ],
      frases4: [
        { text: 'De los padres recibí la formación ética, práctica y académica; pero de los abuelos aprendí a amar y ser amado.' },
        { text: 'Un día despertarás y ya no habrá tiempo para hacer las cosas que siempre has querido hacer, así que hazlas ahora.' },
        { text: 'Sé que ahí donde estés, nunca me faltará tu protección; eres mi ángel de la guarda.' },
        { text: 'Una abuela es un poco madre, un poco maestra y un poco mejor amiga. Lo fuiste todo para mí, abuela.' },
        { text: 'Mientras has vivido, siempre te has preocupado de que no me faltara nunca una sonrisa. Ahora que no estás, seguiré sonriendo para hacerte feliz.' },
        { text: 'Siempre serás mi ejemplo a seguir en la vida, abuelo/a.' },
        { text: 'Solo tú has sabido transformar las peores situaciones en momentos inolvidables.' },
        { text: 'Ojalá pudieras escaparte un rato del cielo y venir a abrazarme.' },
        { text: 'Pasaré el resto de mis días echándote de menos, pero con la certeza de que aproveché lo mejor de ti.' },
        { text: 'Merecías más de lo que obtuviste; contigo nunca nos faltó de nada.' },
        { text: 'Ahora que ya no estás entre nosotros, espero que en el cielo sepan valorar tu bondad y tu sonrisa.' },
        { text: 'Si los abuelos y los nietos se llevan tan bien, es porque tienen un enemigo en común.' },
        { text: 'Cuando los abuelos entran por la puerta, la disciplina se va por la ventana.' },
        { text: 'Cada generación se rebela contra sus padres... ¡y se hace amiga de sus abuelos!' },
        { text: 'Quiero morir placenteramente, igual que mi abuelo. No gritando y llorando como los que iban en el coche con él.' },
        { text: 'Llévate una rebequita por si refresca.' },
        { text: 'Los abuelos son simplemente niños pequeños... antiguos.' },
        { text: '¿Cómo que no quieres otro plato? ¡Pero si no has comido nada!' },
        { text: 'Mis nietos me hacen sentir como si fuera la persona más vieja del mundo... después de dos horas con ellos, yo también lo pienso.' },
        { text: 'Abuela, gracias por recordar todos mis logros y olvidar mis errores.' },
        { text: 'Nadie nunca me ha hecho tan feliz como tú, gracias por el apoyo incondicional, abuelo/a.' },
        { text: 'Abuelo/a, siempre tuviste tiempo para hablar y hacerme sentir especial; gracias por todos esos momentos.' }
      ],
      frases5: [
        { text: 'Todos deberíamos contar con una persona que sepa cómo bendecirnos... incluso en los peores momentos. Para mí, esa persona siempre ha sido mi abuela.' },
        { text: 'Son los abuelos los que hacen que el mundo sea un poco más suave, un poco más bondadoso y bastante más cálido.' },
        { text: 'La primera vez que rodeé tu dedo con mi diminuta mano, supe que quería quedarme aferrado/a a ti para siempre.' },
        { text: 'Todo hogar necesita una buena abuela.' },
        { text: 'Eres el Sol, abuela, el sol que ilumina mi vida.' },
        { text: 'Un abuelo puede parecer mayor, pero lo cierto es que por dentro son los más jóvenes de todos.' },
        { text: 'Si nada va bien... llama a tu abuelo/a.' },
        { text: 'Mi abuelo era tan maravilloso porque me dejaba ser un niño e incluso disfrutaba de la diversión' },
        { text: 'Mi abuelo era tan maravilloso porque me dejaba ser un niño e incluso disfrutaba de la diversión' },
        { text: 'Hay padres que no aman a sus hijos; no hay abuelo que no adore a sus nietos' },
        { text: 'Uno de los apretones de mano más poderoso es el del nuevo nieto sobre el dedo de su abuelo' },
        { text: 'Todos deberíamos tener una persona que sabe bendecirnos a pesar de la evidencia. Mi abuelo fue esa persona para mi' },
        { text: 'Los amigos más cercanos que hice a lo largo de la vida han sido personas que también crecieron cerca de un abuelo o abuela' },
        { text: 'Es natural que a menudo nos sentimos más cerca de las generaciones lejanas que de las que nos preceden inmediatamente' },
        { text: 'El amor perfecto a veces no llega hasta el primer nieto' },
        { text: ' Los abuelos pasan palabras de sabiduría a sus nietos' },
        { text: 'No necesitas un libro de historia si eres lo suficientemente afortunado de tener un abuelo' },
        { text: 'El mejor lugar para estar cuando estás triste es el regazo de tu abuelo' },
        { text: 'Una casa necesita una abuela' },
        { text: 'Mi abuelo tiene la sabiduría de un búho y el corazón de un ángel' }
      ],
      frases6: [
        { text: 'No entiendes nada realmente a menos que se lo puedas explicar a tu abuela' },
        { text: ' Los abuelos son simplemente niños pequeños antiguos' },
        { text: 'Todos necesitamos un abuelo para para crecer más seguros en el mundo' },
        { text: 'Las abuelas nunca se escapan de abrazos o galletas' },
        { text: 'Algunos de los mejores educadores del mundo son los abuelos' },
        { text: 'Si nada va bien, llama a tu abuela' },
        { text: 'Los abuelos son magos que crean recuerdos maravillosos para sus nietos' },
        { text: 'Es algo grande ser una madre de una madre – es por eso que el mundo le llama abuela' },
        { text: 'Los abuelos son una deliciosa mezcla de risas, historias maravillosas y amor' },
        { text: 'Una abuela aparenta que no sabe quién eres en Halloween' },
        { text: 'Un amor incondicional abuelos son el mayor tesoro de la familia, los fundadores de un legado de amor, los mejores contadores de historias' },
        { text: ' Cuando los abuelos entran por la puerta, la disciplina vuela por la ventana' },
        { text: 'Un abuelo es alguien con plata en su cabello y oro en su corazón' },
        { text: 'Todo el mundo necesita tener acceso a abuelos y nietos para ser un ser humano completo' },
        { text: 'Un nieto siempre representa la oportunidad para desahogar el cariño que faltó por darles a los hijos' },
        { text: 'Toda generación se revela contra sus padres y hace amigos con sus abuelos' },
        { text: 'Una abuela es una madre que tiene una segunda oportunidad' },
        { text: 'Una abuela es un poco madre, un poco maestra y un poco mejor amiga' },
        { text: 'Los abuelos son maravillosos porque escuchan y muestran interés genuino en lo que tienes que decir' },
        { text: 'Un abuelo es viejo por fuera pero joven por dentro' }
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
    titleTemplate: 'Frases para mi abuelo fallecido que esta en el cielo | %s',
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
        content: 'Frases para mi abuelo fallecido que esta en el cielo, con todo el amor del mundo dedico estos mensajes y frases para abuelos | Frases.me'
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
