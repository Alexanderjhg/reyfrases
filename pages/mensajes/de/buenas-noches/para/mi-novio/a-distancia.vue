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
          <p>Si tienes a tu novio muy lejos de ti pero quieres dedicarle las mejores frases de buenas noches.</p>
          <p>Estas en el lugar correcto.! Dedicale estos mensajes, cartas, o frases romanticas para que no deje de pensar en ti.</p>
          <p>Para el amor no hay distancia que pueda perjudicar, Todo esta en la mente y en el corazon, Dedicale estas cartas de buenas noches a tu novio que esta lejos.</p>
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
              <h2>Cartas de buenas noches para mi novio que esta lejos</h2>
              <p>Si e has preguntado: "donde puedo conseguir cartas para mi novio que esta lejos".</p>
              <p>No te preocupes, se que amas tanto a tu novio y que te encanta dedicarles las buenas noches con pequeñas citas.</p>
              <p>Por eso hemos recopilado estas palabras tan sutiles para dedicar con buenas energias las buenas noches.</p>
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
          <h2>Mensajes de buenas noches para mi novio que esta lejos</h2>
          <p>Sean mensajes de texto, cartas, palabras, mensajes de voz, videos o una simple imagen. Lo que importa es la intencion.</p>
          <p>Siempre y cuando lo hagamos de corazon, todo sera mas sencillo de transmitir.</p>
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
          <h2>Frases de buenas noches para mi novio que esta lejos</h2>
          <p>No olvides que estamos para ayudarte a dedicar mensajes, guarda esta pagina web como tu favorita y asi podras acceder a ella mucho mas facil.</p>
          <p>Por lo tanto ampoco olvides que trabajamos duropara brindarte las mejores frases de buenas noches de todo internet.</p>
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
          <h2>Mensajes de buenas noches para mi novio a distancia</h2>
          <p>Envia un sutil mensaje a esa persona que se encuentra en una notable distancia, sea una distancia literal o este distanciado de ti moralmente.</p>
          <p>Sea la distancia que sea, al final es una distancia que esta evitando tenerlo a tu lado.</p>
          <p>Enviale estos mensajes cortos y largos para que esa distancia se pueda romper</p>
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
          <h2>Buenas noches para mi novio que esta lejos</h2>
          <p>A ver, dejame adivinar, tienes sueño pero tu pareja no esta en este momento contigo!</p>
          <p>Por lo tanto quieres abrazarlo, besarlo, tenerlo cerca de ti en este preciso instante pero no puedes.</p>
          <p>Piensas y piensas y llega la noche y la unica manera de poder estar en su mente es simplemente enviandole una buena frase de buenas noches.</p>
          <p>Elige una facilmente, hay muchas para dedicar. Comparte, inspira, siente.</p>
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
          <h2>Frases de buenas noches para mi esposo que esta lejos</h2>
          <p>Pero si se trata de tu esposo y no de tu novio? tranquila, que estos increibles mensajes son generalizados.</p>
          <p>Me refiero que que independientemente de que sea tu novio, marido, esposo, amante, amigo, amigo con derecho, Es igual, las puedes dedicar todas.</p>
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
          <div class="text-center"><h5>Frase.me</h5></div>
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
import Juego from '@/components/juegos/frases-novios/index.vue'
import Juego2 from '@/components/juegos/frases-novios/index2.vue'
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
      fraseClave: 'Frases carta y mensajes de buenas noches para mi novio a distancia',
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
      frases2: [
        { text: 'Cuando me voy a descansar por las noches cierro mis ojos y me pongo a soñar en una vida junto a ti, la cual estoy segura estaría llena de gratos momentos, alegrías, sorpresas y más.' },
        { text: 'Eres un hombre muy especial en mi vida a quien amare hasta el final de mi vida. Que descanses mi amor' },
        { text: 'Nunca pensé tesorito lindo que llegaría a amarte como te amo. Eres un hombre que poco a poco se fue robando mi corazoncito y ahora es solo tuyo.' },
        { text: 'Si el tiempo retrocediera le pediría al Señor volver a conocerte. Gracias por ser parte de mí. Hasta mañana' },
        { text: 'Tú eres el dueño de mis sentimientos entre otras cosas. Quiero que sepas que mi amor por ti no tiene límites. Con todo mi amor te deseo dulces sueños.' },
        { text: 'Que tengas dulces sueñitos mi tesorito lindo. Mañana a primera hora del día iré a buscarte y disfrutaremos de un hermoso día.' },
        { text: 'Tú eres mi razón de vivir y a tu lado siempre querré estar. Te adoro como no te puedes imaginar.' },
        { text: 'Estoy segura que hoy tendrás lindos sueños porque soñaras conmigo.' },
        { text: 'Imagínate que vivimos en un castillo lleno de flores, pequeños corriendo por el jardín y más.' },
        { text: 'Nuestro amor es tan grande que nos mantendrá unidos para siempre. Que duermas bien.' },
        { text: 'Que duermas muy bien amorcito mío, que la Virgen te colme de bendiciones y que las estrellas velen tu sueño.' },
        { text: 'Mañana será un nuevo día y estaré a tu lado para regalarte los mejores momentos de tu vida. Te adoro.' },
        { text: 'Tras un largo día de pasar lindos momentos al lado de tu novio, siempre llega la noche y, por ende, el momento de separarse para ir cada uno a sus casas a descansar.' },
        { text: 'Puede ser un momento triste pero sabes que será temporal porque luego lo volverás a ver, pero mientras pasan las horas de luna puedes seguir teniendo bellos detalles con él.' }
      ],
      frases3: [
        { text: 'Escríbele unas lindas palabras de amor justo antes de que se vaya a dormir, eso hará que piense en ti al descansar y que su día termine de la mejor manera.' },
        { text: 'Inclusive hasta puede que sueñe contigo y entonces seguirán acompañándose en los sueños, así que no pierdas tiempo y dedícale todo lo que tu corazón quiere decirle esta noche.' },
        { text: 'Si necesitas un poco de ayuda, aquí tenemos para ti unas lindas frases de buenas noches que puedes tomar de ejemplo. Esperamos que te gusten.' },
        { text: 'Amorcito lindo, mi mayor deseo en esta noche es que puedas tener los sueños más lindos y dulces de todos.' },
        { text: 'Espero poder aparecer en ellos para seguir cuidando de ti y brindándote todo mi amor. Hasta mañana, hombre de mi vida' },
        { text: 'Me encantaría que estas horas pasasen en solo segundos para que pronto llegue la hora de vernos, pero sé que has tenido un cansado día y que mereces descansar todo lo que puedas, así que espero que duermas muy feliz y que tengas muchas horas de sueño para que mañana te despiertes completamente renovado y listo para una nueva jornada.' },
        { text: 'Día, tarde y noche ocupas mis pensamientos, ternura. Hasta en mis sueños apareces y me llenas de tu hermoso amor.' },
        { text: 'Espero yo también aparecer en los tuyos para no estar separados ni por un instante. Abrígate muy bien que no deseo que el frío congele tu cuerpo e interrumpa tu descanso. Que duermas feliz, mi tesoro' },
        { text: 'No sabes cuánto quisiera estar a tu lado ahora para llenarte de besos y abrazos suaves hasta hacerte dormir junto a mí.' },
        { text: 'Me quedaría mirándote toda la noche hasta quedarme dormida con una sonrisa.' },
        { text: 'Por ahora eso no es posible así que te mando mis besos y abrazos a la distancia, te durarán toda la noche hasta la hora en que nos volvamos a ver. Que descanses, amado mío' },
        { text: 'Espero que ya estés acurrucado en tu cama y a punto de descansar.' },
        { text: 'Espero también que puedas leer este mensaje justo antes de cerrar tus ojitos para que veas que pienso en ti hasta esta hora y para que duermas feliz. Espero tener muchos sueños esta noche y que todos los protagonices tú' },
        { text: 'Espero no despertarte con mi mensaje, solo quería decirte que ya me iba a dormir y que te llevo conmigo en mis pensamientos para no sentir que duermo sola.' },
        { text: 'Que tengas dulces sueños y que Dios te cuide mientras duermes plácidamente. Jamás olvides que para mí eres súper importante' },
        { text: 'Me encantaría ser tu almohada para acariciar tus suaves cabellos toda la noche, para sentir tu aroma junto a mí, para hacerte masajitos a la cabeza y hacerte dormir lentamente. Duerme, mi dulce amor, descansa porque te lo mereces' },
        { text: 'Qué difícil se me hace estar lejos de ti, mi amor. Te imagino echada en tu cama, pensando en mí, del mismo modo en que yo pienso en ti, con amor, con ganas de viajar hasta ti y darte un beso en la frente y arrullar tu sueño. Te amo' },
        { text: 'Un día más que se va y yo solo deseo que las horas corran ágiles y desaparezcan para poder verte nuevamente. Te amo, mi amor. Y en mis sueños puedo estar a tu lado, durmiendo contigo, juntando nuestras manos y sintiéndonos eternos' },
        { text: 'Cuando el sueño se apodera de nosotros, mi alma viaja hasta ti y te canta la melodía del amor y la pasión. Y tú solo cierras los ojos y te dejas llevar por ella. En sueños te miro a los ojos y te lo digo todo sin decirte nada, porque las palabras no tienen cabida cuando los cuerpos lo dicen todo' }
      ],
      frases4: [
        { text: 'Un día esta distancia se deducirá tanto que podremos sentir nuestros alientos confabularse y hacerse uno solo. Te amo, mi niña. Que tengas hermosos sueños y que puedas descansar, para mañana comenzar un día maravilloso' },
        { text: 'Buenas noches, mi vida. Sabes que siempre me echo a tu lado, te abrazo y te pego a mí, siento tus cabellos en mi barbilla, acuestas tu cabeza sobre mi pecho, entrelazas tus manos con las mías, y nos dormimos siendo felices. Te amo y puede que no sea más que un soñador, pero siempre cumplo mis sueños' },
        { text: 'En esta noche del Señor, le ruego que nos regale un sueño compartido en donde podamos estar juntos, en donde nada ose separarnos. Y le pido que te cuide siempre, que no te deje sola jamás. Buenas noches, mi amor' },
        { text: 'No hay nada más bonito que dormirse escuchando la voz de tu pareja, o leyendo algo que te haya escrito, en donde te dice cuánto te ama y cuán importante eres en su vida. No dejes de sorprender a tu pareja con un detalle tan simple como el de desear buenas noches. Y tampoco dejes de pasar por acá, que siempre tenemos muchas frases para ti.' },
        { text: 'Se que has tenido un día muy atareado es por ello que quiero que te vayas a descansar y que no pienses en nada. Mañana te levantaras con más energía. Que duermas bien mi amorcito.' },
        { text: 'Quisiera tener alas para volar a tu lado todas las noches y hacerte dormir entre mis brazos. Para mi eres como una pequeña lucecita que alumbra nuestro camino. Contigo a mi lado todo es felicidad. Que sueñes conmigo mi tesoro' },
        { text: 'Para mi tu eres como una cenicienta que a las doce debe irse a dormir. Mañana desde muy temprano estaré contigo. Que tengas dulces sueños.' },
        { text: 'Quiero que esta noche te abraces fuerte al peluche que te regale y pienses que soy yo. Veras que así llenare las horas que no estás conmigo. Te envío un enorme beso y mi bendición. Descansa.' },
        { text: 'Quiero que disfrutes de la paz que trae consigo la noche y que puedas descansar sin pensar en nada. Duérmete y no te preocupes por nada que mi estrella te estará velando tu sueño.' },
        { text: 'Todas las noches me voy a dormir recordando tu tierna mirada y tu dulce sonrisa. Gracias por todos los días maravillosos que me das, por tu cariño y sobre todo por tu amor. No sé qué haría sin ti. Que duermas delicioso.' },
        { text: 'Cuando estás enamorado tratas de llenar a tu novia de lindos detalles para demostrarle lo mucho que la amas y lo feliz que te hace ella' },
        { text: 'Un buen detalle hacia tu novia es enviarle un mensaje de buenas noches para tu novia.' },
        { text: 'Para desearle las buenas noches a tu amor, tienes que dejarte llevar por tus sentimientos, algo que no es nada difícil cuando estás enamorado ¿verdad?' },
        { text: 'Si tu novia recibe un mensaje tuyo antes de dormir, se sentirá feliz y más enamorada de ti ya que se dará cuenta de que eres una persona detallista y soñará contigo.' },
        { text: 'Ten una buena noche amor. Espero pienses un poco en mi porque yo, ya te extraño' },
        { text: 'Buenas noches mi amor, recuerda que mi corazón solo sueña contigo.' },
        { text: 'Espero descanses bien princesa mía. Espero que sueñes con nuestro amor. Te amo.' },
        { text: 'Descansa bien tesoro Aunque no está tu lado no te sientas sola. Mi corazón siempre está contigo.' },
        { text: 'Buenas noches. Mientras estoy en mi cama solo puedo pensar en ti y en lo mucho que desearía tenerte conmigo. Te amo.' },
        { text: 'Que tengas una linda noche amor. Aunque no durmamos juntos sé que nos encontraremos en sueños. Descansa bien.' },
        { text: 'Te deseo una noche llena de hermosos sueños donde ambos seamos los protagonistas. Recuerda que te quiero mucho.' },
        { text: 'Hoy cuando el sol se apague y las estrellas iluminen el cielo, quiero dormir pensando en ti. En tu sonrisa, en tus gestos, en tu rostro. Buenas noches amor, gracias por hacerme tan feliz.' }
      ],
      frases5: [
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
      frases6: [
        { text: 'Estoy mirando a la luna esta noche y parece ser que intenta ser tan bella como lo eres tú, que inocente… si supiera que eso es imposible… Te deseo unas bonitas y buenas noches. Que descanses lindo.' },
        { text: 'Me gusta cuando me acuesto mirando al cielo imaginándome lo infinito que es, y saber que nuestro amor es todavía más grande. Me gusta descansar sintiéndome la persona más afortunada del mundo. ¡Buenas noches!' },
        { text: 'Eres increíble, tú eres la descripción de amistad en mi vida porque nunca jamás quise a una amiga más de lo que te quiero a ti. Por todo lo que eres para mí y por el bien que me haces, te deseo buenas noches. ¡Te quiero!' },
        { text: 'Otro día más de nuevo nuestro amor nos vuelve a hacer más fuertes, vuelve a hacer que nos querramos más. Otro día más marcho a dormir sintiendo ese orgullo de saber que nada puede romper nuestra relación. Gracias por existir.' },
        { text: 'Seguro que buscabas un novio que te quisiera y que te llenara de preciosos mensajes y lindas frases de buenas noches. Espero que te consuele que yo te quiera infinito, porque eso de escribir se me da muy mal… Feliz noche amor.' },
        { text: 'Me gusta mucho escribirte frases para desearte un cómodo y feliz descanso, pero odio que estés lejos de mí. Espero con deseo ese día de poder dormir contigo a tu lado muy feliz.' },
        { text: 'Desearía que en noches como esta pudiera despertarte a besos, acostarme a tu lado y poder decirte que eres el amor de mi vida y abrazarte y poder dormir contigo y no tener que soñar contigo para estar a tu lado. ¡Te amo!' },
        { text: 'La noche me sirve para pensar, para reflexionar, para recapacitar, para darme cuenta de la suerte que tengo de poder tenerte en mi vida. Quiero que sepas que a Dios le ruego cada noche por ti. Que descanses muy bien.' },
        { text: 'Soy de esas frases lindas de buenas noches que vienen a buscarte con ganas de abrazarte. Mi querido, espero que me recibas con los brazos abiertos. Deseo que esta noche disfrutes de lindos sueños y que descanses plácidamente.' },
        { text: 'No hay nada más lindo que irme a dormir recordando el sabor de tus labios luego d darte las buenas noches. Que tengas una feliz noche y un buen descanso.' },
        { text: 'Esta noche el cielo está plagado de estrellas que me inspiran a desearte la más feliz de las noches. Eres una mujer tan hermosa que haces palidecer a la misma luna, descansa mi amor.' },
        { text: 'No sabes cuánto me apena no tenerte en mis brazos cada noche, pero no desespero, porque al cerrar los ojos y abrazar ese peluche que me regalaste pienso que estoy a tu lado.' },
        { text: 'Feliz noche mi vida, quiero que esta sea una velada preciosa para ti, disfruta de la luna y de las estrellas, de la noche y su frescor. Yo estaré esperando por ti.' },
        { text: 'Sé que esta noche deseas salir, por eso le encargue a las estrellas que cuiden de ti. Que disfrutes mucho con tus seres queridos mi amor.' },
        { text: 'Que tengas una hermosa noche mi amor, cuento los segundos que faltan para que por fin pasemos nuestra primera noche juntos.' },
        { text: 'Amor, asómate por la ventana y mira el hermoso cielo que he traído para que vele tus sueños e inspire a tu alma. Hoy dormiré soñando solo contigo. Que tengas una noche feliz.' },
        { text: 'El mejor momento para pensar en cosas bonitas es en la noche, para que tus sueños solo estén llenos de sonrisas y de besos. Por eso, siempre te pienso antes de dormir.' },
        { text: 'Lo más hermoso que existe en mi día es llegar a mi hogar y prepararme para descansar pensando en ti y en tus ojos hermosos. Descansa mi amor, en nuestros sueños nos veremos.' },
        { text: 'Mi novio querido y adorado, quiero desearte una noche hermosa y llena de dulces sueños. No olvides que te amo.' },
        { text: 'Buenas noches mi amor, espero con ansias que amanezca para vernos otra vez. Que sueñes con los dulces angelitos.' }
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
    title: 'Frase.me',
    titleTemplate: '🥇 Frases mensajes y cartas de buenas noches para mi novio a distancia | %s',
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
        content: '‎✅ Frases de buenas noches para mi novio a distancia, ‎✅ cartas y tambien lindos mensajes para dedicar a esa persona que esta lejos | Frases.me'
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
