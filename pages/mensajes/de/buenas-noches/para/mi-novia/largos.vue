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
          <p>A continuacion, mensajes de buenas noches para tu novia largos.</p>
          <p>Quiero decir, que a partir de ahora encontraras mensajes largos especiales para dedicar a tu novia y totalmente nuevos.</p>
          <p>Frases nuevas, frases antiguas, Da igual. Igualmenteson las mejores palabras para dedicarle a tu novia.</p>
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
              <h2>Frases nuevas para dedicarle a tu novia</h2>
              <p>Cada ves son mas las frases que se añaden a este sitio web.</p>
              <p>Por lo tanto las frases son nuevas siempre. Comparte con tu novia las frases que mas te gusten, de seguro te amara aun mas.</p>
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
          <h2>Mensajes y textos para la novia mas bella del mundo</h2>
          <p>A tu novia la catalogas como la mejor del mundo, por eso es que esta seccion es especialmente para ti y ella.</p>
          <p>La mejor pareja del mundo son ustedes, amense uno al otro con todo el amor del universo y de sus corazones.</p>
          <p>Las frases largas son mejores, porque expresan mucho mas y dejamos aun mas claro lo que sentimos hacia esa persona.</p>
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
          <h2>Los mensajes largos son mejores</h2>
          <p>Hay quienes prefieren mensajes cortos, y otros mensajes largos. Pero a mi parecer los mensajes largos son mejores por estas razones.</p>
          <ol>
            <li>Expresan con mas palabras lo que sentimos.</li>
            <li>El sentimiento es mas detallado.</li>
            <li>Logramos que nuestra pareja nos ame aun mas.</li>
            <li>Logramos que esa persona piense mas en nosotros.</li>
          </ol>
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
          <h2>Enamora a tu novia con estas palabras</h2>
          <p>Enamora a tu novia de una manera antigua. A muchas mujeres les gusta eso, que le dediquen frases de amor.</p>
          <p>Les gusta saber que de alguna manera estas pensando en ella, y ellas saben agradecer el esfuerzo que tuviste al buscar estas frases para ella.</p>
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
          <h2>Buenas noches a mi novia</h2>
          <p>Sabias que todas las frases que tu envias en el transcurso del dia, las de buenas noches son las mejores?</p>
          <p>Si, porque son justamente las ultimas que leemos antes de dormir. Por eso nuestro cerebro le tomara mas importancia a esa ultima frase que hemos leido.</p>
          <p>Dedica mas frases de buenas noches.</p>
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
          <h2>Como decirle buenas noches a mi novia</h2>
          <p>Bien, decirle buenas noches a tu novia te pone nervioso o no sabes como hacerlo?</p>
          <p>No te preocupes, tenemos frases donde ser (lanzado) no es lo correcto pero tampoco (anticuado)</p>
          <p>Las frases correctas son las siguientes.</p>
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
      fraseClave: 'Mensajes de buenas noches para mi novia largos, frases, palabras y poemas',
      frases: [
        { text: 'Parecías un sueño lejano, pero las esperanzas de conquistar tu difícil corazón hacen que te sienta más cerca de lo que imaginaba. Que tengas una feliz noche' },
        { text: 'Eres como un sueño que no encuentra su noche para ser soñado.... que difícil es conquistar tu corazón...yo te amo intensamente..' },
        { text: 'Que me perdone el tiempo sé que es muy valioso pero debo ir a dormir porque tengo un encuentro contigo. Feliz Noche' },
        { text: 'Mi vida, sabes que me encantaría que duermas junto a mí pero por el momento no es posible y quiero que sepas que así físicamente no te encuentres en mi habitación, espiritualmente te llevo en mi corazón y tu amor me acompañará toda la noche. Que duermas bien' },
        { text: 'Amor, quiero que cuando duermas pienses que eres una bella princesa y que cuando estés profundamente dormida yo apareceré en tus sueños para que tu despertar sea dulce como si yo te estuviera dando un beso. Que descanses como un angelito' },
        { text: 'Mi dulce amada, duerme como un angelito, que ningún ruido de la noche ose despertarte de tu letargo, yo desde donde me encuentro trataré de pensar tanto en ti hasta que mis pensamientos lleguen a tu mente y nos podamos conectar en ese mundo onírico donde podremos continuar amándonos. Te veré en tus dulces sueños' },
        { text: 'Mi Reina hace unas horas nos despedimos pero solo es algo momentáneo porque en cuanto llegue la hora de dormir estoy seguro que nos volveremos a reunir en nuestros sueños. Buenas noches, preciosa' },
        { text: 'Duerme mi cielo, quiero que no pienses más en este día que fue fatal para ti, es mejor que voltees la página porque debes llenar tu espíritu de esperanzas de que las cosas van a mejora parta ti y yo rezaré por ti para que ello suceda. Buenas noches amor' },
        { text: 'Mi dulce amada, que la oscuridad de la noche te invite a tener el mejor de los sueños y que mientras duermas tengas la suerte de soñar conmigo. Desde mi habitación yo haré lo mismo porque nunca dejo de pensar en ti. Que tengas una noche feliz' },
        { text: 'Mi amor, prométeme que vas a descansar cuando llegues a casa y que no vas a ver televisión hasta tarde, las pocas horas que quedan para que vuelva a amanecer debes emplearlas en dormir porque de lo contrario vas a despertar de mal humor y soñoliento. Buenas noches' },
        { text: 'Mi Reina, duérmete ya, para que no te dé insomnio te perdonaré que no pienses en mí antes de dormir, porque a mí me ha ocurrido muchas veces que por pensar tanto en ti me he pasado en vela toda la noche. Duerme tranquila y confiada en que mi amor por ti es puro y sincero. Buenas noches' },
        { text: 'Amor te dejo este mensaje en tu casilla de voz porque sé que a estas horas ya debes estar durmiendo como un angelito y quiero que mañana muy temprano cuando veas tus mensajes sepas que a esta hora todavía estaba despierto y pensando en lo mucho que te amo.' },
        { text: 'Que duermas como un dulce angelito' },
        { text: 'Amorcito, has llegado rendido del trabajo, te he preparado algo ligero para que puedas dormir bien, no te preocupes por los chicos yo me encargo de todo para y no hay nada que no pueda hacer sin tu ayuda. Trataré de hacer el menor ruido porque quiero que descanses mi rey' }
      ],
      frases2: [
        { text: 'Eres fascinante como el misterio de la noche, será porque eres el sueño que siempre me mantiene despierto porque día y noche solo pienso en ti' },
        { text: 'Buenas noches, no puedo seguir esperando pero tengo que dormir porque es la unica forma de saber si te volveré a ver ' },
        { text: 'Cada noche vuelvo a entrar a un mundo donde las cosas pudieron ser pero no fueron. Es ahí donde viven mis deseos más profundos por ti' },
        { text: 'Quisiera que vengas con el pretexto de darme un beso de buenas noches y que no quieras regresar de donde viniste' },
        { text: 'Si el mundo se acabara mañana no me perdonaría el no haberte dado un beso de buenas noches' },
        { text: 'Aunque no estés fisicamente mis sueños encienden la esperanza de volver a verte esta noche' },
        { text: 'La oscuridad de la noche será el unico espía de nuestros sueños más profundos,te adoro mi Reina' },
        { text: 'Cuando en la noche las luces se apagan tu mantienes encendido mi corazón,te quiero muchisimo mi Rey' },
        { text: 'No quisiera decirte hasta mañana, si pudiera permanecería despierta toda la noche. Prométeme que soñarás conmigo' },
        { text: 'Buenas noches amor, esta noche te buscaré en todos mis sueños, entre los pliegues de mis sábanas, en el perfume de mi almohada porque sé que algo de ti esta aquí' },
        { text: 'Hacer las pases con quien estas enemistado debe ser una obligación para que tengas una noche serena' },
        { text: 'Buenas noches amor, Nunca debe ser tarde para ir a dormir pero siempre parece muy temprano para despertar... Nos vemos en mis sueños vida mia..' },
        { text: 'Para que no te sientas sola ten como mejor amiga a tu almohada. Buenas noches' },
        { text: 'Descansa bien porque no quiero que mañana despiertes de mal humor. Buenas noches' }
      ],
      frases3: [
        { text: 'Pido a Morfeo que pueda acompañarte en tu reposo hasta el amancer, que te arrulle entre su brazos para que cuando despiertes te entregue a mi que soy el único dueño de tu cuerpo y tu alma' },
        { text: 'Es hermoso entregarse a los brazos de Morfeo cuando tienes la esperanza de soñar con el ser amado' },
        { text: 'La oscuridad de la noche toma de la mano tu alma y la transporta a un mundo donde espero encontrarte' },
        { text: 'Te espero más allá de los brazos de Morfeo, esta noche quiero estar entre tus sábanas' },
        { text: 'Deja que la noche tome su forma más delicada, casi mágica. Todo es dulce y se atenua hasta la pasión más profunda del alma' },
        { text: 'Si fuera invisible iriía a darte un beso de buenas noches, acariciando tus cabellos con mis dedos escucharía tu respiración' },
        { text: 'Deja que me acurruque a tu lado y que mis labios hagan lo que invita el silencio de esta noche estrellada' },
        { text: 'Es de noche, las flores cierran sus capullos porque el cielo se torna oscuro cuando el sol se oculta. Llévate en tus sueños mi amor por ti' },
        { text: 'No tengas miedo de las sombras. Significa que estoy cerca, en cualquier lugar aunque no me veas soy como una luz que te ilumina. Buenas noches' },
        { text: 'Cuando llega la noche no hago más que ponerme muy romántico y pensar en ti sabiendo que estás a mi lado descansando y no puedo dejar de contemplar tu rara belleza pero no tengo prisa en dormir porque no me canso de admirarte y sentirme afortunado de pasar todas las noches a tu lado. Que duermas como un dulce angelito' },
        { text: 'Me agrada saber que eres de las personas que son muy metódicas al momento de dormir e imagino que antes de que caigas en un profundo sueño piensas mucho sobre nuestro amor, así como yo no dejo de tenerte en mis pensamientos porque eres la única persona capaz de distraer mi mente hasta cuando me siento muy cansado. Que tengas una feliz noche y ojalá sueñes conmigo mi Reina' },
        { text: 'Amor, agradezco a la noche que nos invita a querer estar más juntitos mientras vamos cayendo en los brazos de Morfeo para descansar y recuperarnos de este día tan agitado. Que tengas un dulce sueño y cualquier cosa que necesites sabes que estoy a tu lado' },
        { text: 'Buenas noches,mi cielo : Recuerda que permanentemente estas en mi pensamiento porque eres parte de mi vida. Te amo !!' },
        { text: 'Amor, no pienses en la noche como algo que nos separa por el contrario trata de admirar la belleza que una persona enamorada puede encontrar en la oscuridad que envuelve el cielo que se tiñe de oscuro para invitarte a que te entregues a un dulce sueño en el que yo apareceré para acompañarte y de esta forma sienas que estuviste conmigo mientras dormías. Hasta mañana amor' },
        { text: 'Amor de mi vida ,ùnica dueña de mi corazòn... que tengas un bello descanso . Haré lo posible para que cuando duerma mi espíritu entre en tus dulces sueños' },
        { text: 'Mi amor, ten paciencia porque es solo por unos días que no podré dormir junto a ti, prométeme que dormirás temprano y que te vas a portar bien. A mi regreso te premiaré con muchos besos y caricias interminables. Buenas noches mi cielo' },
        { text: 'Solo quería volver a despedirme de ti, desearte que tengas una buena noche, que descanses como un bella durmiente. Te agradezco por haber pasado contigo un día de San Valentín inolvidable' },
        { text: 'Amor la verdad que contigo duermo como un angelito pero hoy como es 14 de febrero estoy con insomnio y me parece que podríamos aprovechar para seguir celebrando nuestro día de San Valentín' },
        { text: 'Buenas noches mi cielo, hemos pasado un hermoso día de San Valentín. Me iré a dormir y hasta que pesque sueño seguiré pensando en los momentos más intensos que hemos tenido en este día en que me has demostrado la profundidad de tus sentimientos' }
      ],
      frases4: [
        { text: 'Si me dijeran que me pueden conceder un deseo, pediría para que pronto se pueda hacer realidad que podamos dormir juntos todas las noches. Verte siempre al final del día y despedirte con un tierno beso. Que descanses mi cielo, gracias por haber celebrado contigo un maravilloso día de los enamorados' },
        { text: 'Mi vida, veo que estás cansada y no sería justo de mi parte que te siga reteniendo a mi lado cuando sé que tienes que despertarte temprano para ir a trabajar. Hemos tenido un día de San Valentín muy intenso y si te parece mañana podemos continuar celebrando nuestro amor' },
        { text: 'Mi cielo todo lo que teníamos planeado para este día de San Valentín salió perfecto, espero que te haya gustado el regalo que te hice y yo enloquecí con el que me diste. Es hora de dormir, que tengas un buen descanso y gracias por haberme dado un feliz 14 de febrero' },
        { text: 'Buenas noches, mi cielo. Qué pena que tengamos que despedirnos en este día del amor porque todavía no compartimos la misma cama, sería maravilloso si pudiera abrazarte mientras te quedas dormidita y sigues soñando conmigo' },
        { text: 'Mi vida, espero que este día de San Valentín que hemos pasado juntos haya sido muy especial para ti porque merecías todos los detalles que con mucho amor preparé para verte sonreír de felicidad' },
        { text: 'Buenas noches mi Reina, que tengas dulce sueños, y cuando vuelvas a despertar te darás cuenta que la celebración que tuvimos por el día del amor no fue una fantasía y es por ello que me encontrarás durmiendo a tu costado' },
        { text: 'Por el momento estamos despidiendo otro día más de San Valentín y podemos tener la satisfacción de que hemos tenido un día muy romántico donde ambos nos hemos lucido para intercambiar detalles, gestos y caricias de amor que denotas lo enamorado que estamos. Gracias por tanta felicidad recibida en este día y que tengas muy buenas noches' },
        { text: 'Buenas noches amor, que Dios siga bendiciendo a una persona tan buena como tú con la que comparto el mismo sentimiento de amor. Espero que la emoción de este lindo día de San Valentín que hemos celebrado juntos te permita conciliar el sueño rápidamente. ¡Qué descanses!' },
        { text: 'Mis más dulces buenas noches amor mío, espero que tu paciencia y comprensión me acompañen para siempre y me den la serenidad que necesito.' },
        { text: '¡Buenas noches sol que ilumina mis días! Eres la estrelle que me protege mientras duermo, reposa rápido que la vida es breve y nuestro amor muy largo.' },
        { text: 'Cuando llega la noche me gusta dormirme pensando en ti, dulces sueños mi amor.' },
        { text: 'Te protegeré siempre, incluso en los momentos más oscuros, quisiera ser tu luz para siempre. ¡Qué duermas bien!' },
        { text: 'Incluso esta noche me gustaría llegar a la estrella más luminosa para desde allí velar en la larga noche de tus sueños.' },
        { text: 'Antes de meterme en la cama, me gustaría darte las gracias por todas las cosas bonitas que me has regalado en este esplendido día. En realidad, son bonitas porque las he pasado junto a ti.' },
        { text: 'Amo la noche, sin sus tinieblas nunca hubiese podido ver tan claramente la luz de tu rostro, que brilla mientras me mira fijamente, sugiriéndome bajar al infierno de tus caderas.' },
        { text: 'Tengo la impresión, aunque en realidad es más bien un deseo, de que la luna brilla solo para nosotros. Te quiero mi amor.' },
        { text: 'Solo quiero desearte buenas noches. A ti y a todos los ángeles que te rodean cuando te vas a la cama, volando a tu alrededor mientras te cantan dulces nanas.' },
        { text: 'No importa lo lejos que estés, siempre inundas mis pensamientos más profundos. Buenas noches amor mío.' },
        { text: 'El amor quizá sea uno de los más simples sentimientos, pero el más difícil de controlar y, además, imposible de contener, ni siquiera cuando te vas a la cama… ¡Te amo!' },
        { text: 'Otro día llega a su final. Me gusta saber que tengo a alguien como tú, que convertirá cada uno de mis días en algo especial. Gracias mi corazón, cada segundo a tu lado es único.' },
        { text: 'De todo lo que he vivido en este mundo, solo me quedan los recuerdos que vienen del corazón. Buenas noches.' },
        { text: 'No hay dificultad alguna en sacrificar algo por alguien, lo difícil es encontrar a una persona capaz de pagar el sacrificio de estar con un ángel.' }
      ],
      frases5: [
        { text: 'Feliz noche mi amor, esta noche me tienes de guardián protector de tus sueños.' },
        { text: 'Por muy agotador que haya sido tu día, ya llegó a su fin, ahora solo tienes que descansar. Feliz noche mi amor.' },
        { text: 'Mi último mensaje de hoy lo escribo desde lo más profundo de mi corazón para desearte que tengas una feliz noche.' },
        { text: 'Buenas noches mi cielo, agradece a Dios todo lo que lograste hoy y tendrás un feliz descanso.' },
        { text: 'No le temas a la oscuridad, yo estaré aquí cuidándote. Feliz noche amor.' },
        { text: 'Antes de dormir, libérate de todas las cargas, deja este día atrás y prepárate para recibir lo mejor que está por venir.' },
        { text: 'Feliz noche mi amor, recibe un beso en la frente y un abrazo cargado de ternura.' },
        { text: 'Tomaré tu mano mientras duermes, ni se te ocurra soltarte' },
        { text: 'Sé que será una feliz noche mi amor, porque te tengo al otro lado de la cama.' },
        { text: 'Aunque estamos en sitios distintos, la luna es testigo de cuanto nos pensamos. Feliz noche mi amor.' },
        { text: 'Feliz noche mi amor, nos encontramos en un par de horas en nuestros sueños.' },
        { text: '¡Qué bonita es la vida cuando nos permite dormir con la persona amada!' },
        { text: 'Feliz noche mi amor, te diría que sueñes con los ángeles, pero eso implica que vas a soñar contigo misma.' },
        { text: 'Tengo todo lo que siempre he soñado, un hogar y un valiente hombre durmiendo mi lado. Feliz noche mi amor.' },
        { text: 'Contemplarte dormir me encanta, con tu cabello revuelto y esos brazos musculosos, eres la combinación perfecta entre un niño travieso y un hombre fuerte. Feliz noche mi amor.' },
        { text: 'Feliz noche mi amor, antes de dormir quiero recordarte lo mucho que te quiero y decirte que estar contigo es la mejor de todas las maravillas del mundo.' },
        { text: 'Estamos lejos el uno del otro, pero esta noche sé que aparecerás en mis sueños, no cierres la puerta de tu corazón, déjame entrar en él.' },
        { text: 'Ahora mismo, me gustaría transformarme en un rayo de luna que entrara por tu ventana suavemente, me gustaría serlo solo para susurrarte “buenas noches mi vida”.' },
        { text: 'Desde que te conocí, perdí el miedo a la oscuridad, ¿sabes por qué? Porque eres la luz qué ilumina todas mis noches.' },
        { text: 'Cuando no estás aquí conmigo siempre miro al firmamento para buscar de la estrella que más brille de todas, nunca la encuentro, porque esa estrella solo puedes ser tú.' }
      ],
      frases6: [
        { text: 'Cada noche que paso sin ti es una noche triste y oscura, solo hay espacio para la añoranza de dormir entre tus brazos mientras escucho el tierno latir de tu corazón. ¡Siempre me quedarán los sueños!' },
        { text: 'Buenas noches mi vida, nos vemos en un rato en nuestros sueños.' },
        { text: 'En la profundidad de la noche, mientras todos duermen, yo solo puedo pensar en ti, eres el calor en el frío húmedo de la soledad, el resplandor en la casa de los olvidos.' },
        { text: 'Como cada noche, llega el momento de ir a dormir, a mí me gusta llamarlo el momento en el que sales de mis pensamientos par a entrar en mis sueños: buenas noches vida mía.' },
        { text: 'Dulces sueños tesoro mío, no veo el momento de qué sea ya mañana para poder darte los buenos días con un beso húmedo que me de la energía que necesito.' },
        { text: 'Llevo tiempo preguntándome si me gusta más pensar en ti o soñar contigo. Ya ves, la vida a veces puede plantear cuestiones muy crueles… ¡te quiero!' },
        { text: 'Irme a la cama con la certeza de que mañana te volveré a ver me llena de esperanza, y la esperanza es siempre una fuente de vida para cualquier persona.' },
        { text: 'Recibe mi más afectuosa caricia virtual antes de ir a la cama. Buenas noches preciosa.' },
        { text: 'Buenas noches mi vida: cierra los ojos y sueña mucho conmigo, porque yo ya estoy soñando en soñar contigo.' },
        { text: 'Cuando anochece y el cielo se vuelve oscuro del todo, es porque está buscando a la estrella más bonita, así que ya sabes, hasta que no te encuentre estaremos a oscuras.' },
        { text: 'Esta noche volaré en tus sueños mientras te acariciará el primer rayo de sol, y yo, siempre tan fugaz, te besaré con la sonrisa que solo alguien inmensamente feliz puede tener.' },
        { text: 'Si todo esto ha sido un sueño, no me despiertes, prefiero vivir en él 100 años que en un mundo real sin ti. Felices sueños.' },
        { text: 'Yo que siempre he adorado el sol y la luz del día, hoy quisiera que la noche no acabara nunca para seguir soñando contigo' },
        { text: 'Cuando pienso en ti mi corazón se calienta, y mi felicidad es solo comparable a la de un niño al que le han regalado su primera pelota. Dulces sueños mi niña.' },
        { text: 'Siento tus manos sobre mi piel realizando un dulce movimiento, mientras tanto, miro al cielo y veo una estrella que resalta entre todas las demás, si pudiera cogerla con la mano te la regalaría a ti amor mío… ¡Dulces sueños!' },
        { text: 'Buenas noches corazón mío, alma y vida mía, aire del que respiro… te echo tanto de menos que apareces en todos mis sueños, en todos mis pensamientos, todos los días a todas las horas. Te quiero hasta al punto que ni siquiera yo sé cuánto.' },
        { text: 'Ojalá las estrellas del cielo bajaran para besar tus dulces labios mientras que el reflejo de la luna te arropase en esta bonita noche. Ojalá mis brazos pudieran abrazar tus sueños.' },
        { text: 'Qué duermas como vives, como te veo yo. Qué duermas como un ángel mi vida.' },
        { text: 'Felices sueños mi vida, espero qué duermas bien, mañana te contaré en que magnífico sueño te me has aparecido. Te quiero.' },
        { text: 'Dulces noches pequeño rayo de luna que ilumina mis sueños, solo tú los sabes transformar en fantásticos cuentos que recordaré para siempre.' }
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
    titleTemplate: '🥇 Mensajes de buenas noches para mi novia largos, frases y palabras | %s',
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
        content: '‎✅ Frases, palabras y mensajes de buenas noches para mi novia largos, ‎✅ Las mejores cartas y poemas para dedicar | Frases.me'
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
