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
      fraseClave: 'Frases Bonitas cortas de amigas',
      frases: [
        { text: 'En la amistad deja un pequeño hueco para los conflictos, y en los conflictos para la amistad. Dios cuide esta amistad.' },
        { text: 'Los amigos son compañeros de viaje que nos ayudan a caminar hacia la felicidad. Dios cuide esta amistad.' },
        { text: 'Ninguna amistad verdadera puede ser destruida, a no ser que esta no sea de verdad. Dios cuide esta amistad.' },
        { text: 'Un amigo es aquel que llega cuando el mundo te abandona. Dios cuide esta amistad.' },
        { text: 'La amistad es como la salud: no la valoras hasta que la pierdes. Dios cuide esta amistad.' },
        { text: 'La amistad es como las estrellas: aunque no puedas verlas, sabes que están ahí. Dios cuide esta amistad.' },
        { text: 'La amistad es aún más bonita que un rayo de sol. Dios cuide esta amistad.' },
        { text: 'La amistad sin confianza es como una flor sin perfume. Dios cuide esta amistad.' },
        { text: 'Una flor puede marchitarse, el mundo derrumbarse. Pero una amistad no puede romperse. Dios cuide esta amistad.' },
        { text: 'Por muchos océanos que nos separen nuestra amistad no morirá nunca.  Dios cuide esta amistad.' },
        { text: 'Si entras en la oscuridad yo seré tus ojos, y juntos superaremos cualquier adversidad. Dios cuide esta amistad.' },
        { text: 'En la necesidad se demuestra la amistad. Dios cuide esta amistad.' },
        { text: 'Planta una semilla de amistad para recoger un ramo de felicidad. Dios cuide esta amistad.' },
        { text: 'Las amistades que son ciertas mantienen las puertas abiertas. Dios cuide esta amistad.' }
      ],
      frases2: [
        { text: 'Los amigos se pueden decir lo que sea cuando son verdaderos amigos. Dios cuide esta amistad.' },
        { text: 'La amistad no se puede pesar pero tiene un gran peso en nuestras vidas. Dios cuide esta amistad.' },
        { text: 'Sin amigos nadie quisiera vivir, por muchos bienes que tuviera. Dios cuide esta amistad.' },
        { text: 'Lo más importante en la vida siempre ser la gente que está aquí, ahora. Dios cuide esta amistad.' },
        { text: 'Los cuatro elementos de la amistad son el amor, la comprensión, la ternura y el humor. Dios cuide esta amistad.' },
        { text: 'La amistad que une verdaderamente es más fuerte que cualquier lazo de sangre. Dios cuide esta amistad.' },
        { text: 'Si la amistad desaparece, la vida se convierte en un mundo en el que desaparece el sol. Dios cuide esta amistad.' },
        { text: 'La amistad pura sabe de placeres que nunca podrán conocer las almas mediocres. Dios cuide esta amistad.' },
        { text: 'La amistad es una de las principales fuentes de felicidad. Dios cuide esta amistad.' },
        { text: 'La amistad puede convertirse en amor. El amor, en amistad, nunca. Dios cuide esta amistad.' },
        { text: 'La verdadera amistad es un sentimiento de desarrollo lento. Dios cuide esta amistad.' },
        { text: 'La amistad, que es un lazo sagrado, se hace más sagrado con la adversidad. Dios cuide esta amistad.' },
        { text: 'La vida es demasiado corta para tener enemigos. Dios cuide esta amistad.' },
        { text: 'Cambia de opinión, de ropa, de novio. Pero a los amigos, consérvalos. Dios cuide esta amistad.' }
      ],
      frases3: [
        { text: 'El número de amigos que tengas da igual: uno es suficiente. Dios cuide esta amistad.' },
        { text: 'Los amigos de verdad no solo te escuchan, sino que te tienden su mano. Dios cuide esta amistad.' },
        { text: 'Una amistad es intocable, aunque más intocable se vuelve en tiempos de dolor. Dios cuide esta amistad.' },
        { text: 'La amistad es una misma alma en dos cuerpos. Dios cuide esta amistad.' },
        { text: 'La verdadera amistad no se pierde ni con el tiempo ni con la distancia. Dios cuide esta amistad.' },
        { text: 'Cuesta menos conocer a tu verdadero amor que a una bonita amistad. Dios cuide esta amistad.' },
        { text: 'La amistad y el dinero son lo mismo: sabemos que son un lujo aunque no los tengamos. Dios cuide esta amistad.' },
        { text: 'Si te has olvidado de tus amigos en los buenos momentos, no los busques en los malos. Dios cuide esta amistad.' },
        { text: 'Un amigo que nunca te falla es como una joya que nunca debes vender. Dios cuide esta amistad.' },
        { text: 'Los amigos de verdad discuten por estupideces. Dios cuide esta amistad.' },
        { text: 'Una amistad verdadera es una luz entre las tinieblas. Dios cuide esta amistad.' },
        { text: 'Para tener un buen amigo, demuestra que tú también lo eres. Dios cuide esta amistad.' },
        { text: 'Al igual que el hierro da forma al hierro, un amigo da forma a un amigo. Dios cuide esta amistad.' },
        { text: 'No puede haber amistad donde no hay libertad. Dios cuide esta amistad.' },
        { text: 'La mejor forma de destruir a una enemiga es hacerla tu amiga. Dios cuide esta amistad.' },
        { text: 'Amistades como la nuestra solo nacen en el cielo. Dios cuide esta amistad.' },
        { text: 'Un amigo es aquel que te quiere, te extraña, y pase lo que pase siempre está contigo. Dios cuide esta amistad.' },
        { text: 'Si la amistad es un tesoro, gracias por ser parte de mi fortuna. Dios cuide esta amistad.' },
        { text: 'Una de las razones de mi felicidad es contar con tu compañía. Dios cuide esta amistad.' }
      ],
      frases4: [
        { text: 'La amistad es uno de los dones más hermosos que Dios nos ha dado para compartir. Dios cuide esta amistad.' },
        { text: 'Un verdadero amigo viene a tiempo. Los demás, cuando tienen tiempo. Dios cuide esta amistad.' },
        { text: 'Los amigos verdaderos se critican a la cara y se defienden a las espaldas. Dios cuide esta amistad.' },
        { text: 'Un amigo es el que intenta levantarte cuando has caído. Y cuando no consigue levantarte, se tumba a tu lado para escucharte. Dios cuide esta amistad.' },
        { text: 'La amistad duplica nuestras alegrías y divide nuestras tristezas. Dios cuide esta amistad.' },
        { text: 'Amigas por siempre y para siempre, a pesar de todas nuestras locuras, a pesar de lo que piense la gente. Dios cuide esta amistad.' },
        { text: 'Cuando tus alas se duelan cansadas de volar, recurre a las alas poderosas de la amistad. Dios cuide esta amistad.' },
        { text: 'La casualidad nos hizo amigas pero el tiempo nos ha vuelto hermanas. Dios cuide esta amistad.' },
        { text: 'Gracias por darme el regalo de la amistad, el más grande que una persona pueda poseer jamás. Dios cuide esta amistad.' },
        { text: 'Amigas por siempre, unidas contra todo en la vida. Dios cuide esta amistad.' },
        { text: 'Ni la distancia ni el tiempo nos podrán separar, una amistad sincera nadie podrá quebrar. Dios cuide esta amistad.' },
        { text: 'Si realmente sabes lo que es la amistad, habrás perdido el corazón... por qué ya se lo habrás entregado a los demás. Dios cuide esta amistad.' },
        { text: 'Muchas personas conocen los beneficios de la cercanía, pero pocas conocen el valor de la verdadera amistad. Dios cuide esta amistad.' },
        { text: 'Dos amigas verdaderas son más que hermanas, dos amigas verdaderas comparten penas, alegrías, ilusiones y hasta las fantasías más secretas y privadas. Dios cuide esta amistad.' },
        { text: 'Solo con una amiga verdadera podemos ser sinceras y hasta pensar en alta voz. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que acepta a tus otras amigas, a tu pareja, tu profesión, sin criticar. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que conoce tus peores defectos y sigue siendo tu amiga. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que sabe cuándo reír contigo, cuando gritar, cuándo guardar silencio, cuando dejarte un rato sola o cuando llorar. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que te anima a hacer lo que es mejor para ti, cueste lo que cueste, valga lo que valga. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que no te usa para proyectar sus propias frustraciones y errores. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es esa que nunca te dice lo que tú quieres escuchar, siempre te dice la verdad. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que no siempre te da un consejo, pero siempre te apoya y te escucha, sin criticar. Dios cuide esta amistad.' }
      ],
      frases5: [
        { text: 'Una amiga verdadera es la que llamamos a las tres de la mañana por un problema y nos dice: ¡Ven para acá! Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es esa que cuando nos juntamos, somos un peligro para la sociedad. Dios cuide esta amistad.' },
        { text: 'Una amiga verdadera es aquella que está en las buenas y en las malas. ¡En todas! Dios cuide esta amistad.' },
        { text: '¡Para mí no hay mejor amiga que mi Mamá! Dios cuide esta amistad.' },
        { text: 'No todas las hermanas son de sangre, algunas son de corazón. Dios cuide esta amistad.' },
        { text: 'La amistad de una buena amiga, llena de colores nuestra vida. Dios cuide esta amistad.' },
        { text: 'No hay mejor espejo, que el ojo de una amiga. Dios cuide esta amistad.' },
        { text: 'Hay amigas para fiestas, para llorar, para reír, para platicar, hasta hay amigas para demostrarte que no todas pueden ser tus amigas. Dios cuide esta amistad.' },
        { text: 'El amor y la amistad son lo único que da sentido a una vida sin sentido. Dios cuide esta amistad.' },
        { text: 'Felicidad es hablar con una viejo amiga después de un tiempo y sentir que nada ha cambiado. Dios cuide esta amistad.' },
        { text: 'Una amiga me llamo para ayudarle a calmar su dolor. Puse el mío en mi bolso y fui... Para eso son las amigas. Dios cuide esta amistad.' },
        { text: 'Hay personas que la casualidad las hace amigas, pero el corazón las hace hermanas. Dios cuide esta amistad.' },
        { text: ' Las mejores amigas son como el oro: raro y valioso. Las amigas falsas son como las rocas, están en todas partes. Dios cuide esta amistad.' },
        { text: 'La amistad no se trata de quien llego a tu vida primero, ni de a quien conoces por más tiempo, se trata de quien llego y nunca se fue. Dios cuide esta amistad.' },
        { text: 'Te quiero amiga y te aprecio mucho, eres mi apoyo, mi confianza y tu amistad es para mí todo un tesoro, cada día. Gracias por ser mi amiga. Dios cuide esta amistad.' },
        { text: 'Gracias amiga por haber llegado cuando tenía razones para llorar y haberme dado motivos para sonreír. Dios cuide esta amistad.' },
        { text: 'Las amigas perfectas no existen, las verdaderas si, el mejor ejemplo eres tú. Gracias por ser mi amiga. Gracias por ser siempre sincera. Dios cuide esta amistad.' },
        { text: 'Gracias amiga por aparecer en mi vida. Dios cuando me permitió conocerte, sabía que necesitaba una buena amiga y me lo concedió. Dios cuide esta amistad.' },
        { text: 'Solo encontré tres palabras para expresarte mi amistad: ¡TE QUIERO MUCHO! Dios cuide esta amistad.' },
        { text: 'Gracias amiga por hacer desaparecer mis problemas, con tan solo estar a mi lado y por ser un bálsamo para mi dolor. Dios cuide esta amistad.' }
      ],
      frases6: [
        { text: 'Una amiga como tú le da color a mis días, no importa si llueve o si esta soleado. Dios cuide esta amistad.' },
        { text: 'Amiga, brindo por lo que tú y yo sabemos y los demás ni se imaginan. Gracias por tu complicidad y amistad. Dios cuide esta amistad.' },
        { text: 'Amiga te conocí como a cualquier otra sin buscar nada y termine queriéndote Dios cuide esta amistad.' },
        { text: ' Hacer una amiga es una gracia, tener una buena amiga es un don, conservar una amiga es una virtud y ser tu amiga es un honor. Dios cuide esta amistad.' },
        { text: 'Saber que tengo una amiga como tú, que me quiere y que daría cualquier cosa por verme feliz, me hace la vida mucho más fácil. Dios cuide esta amistad.' },
        { text: 'Mis lágrimas y sonrisas son demasiada valiosas para "regalárselas" a cualquiera, pero si a una amiga como tú, de verdad. Dios cuide esta amistad.' },
        { text: 'Aunque te he fallado miles de veces, aun sigues junto a mí. Gracias por tu amistad. Dios cuide esta amistad.' },
        { text: 'La amistad es un bonito presente, por eso te entrego la mía, hoy, mañana y siempre. Dios cuide esta amistad.' },
        { text: 'Mientras tenga una amiga como tú, que me quiere y camine a mi lado, vale la pena continuar. Dios cuide esta amistad.' },
        { text: 'Las amigas de verdad son esas que te dicen en tu cara: ¡eres una loca!, pero al final siempre te acompañan a hacer tus locuras. Dios cuide esta amistad.' },
        { text: 'Nunca desprecies el buen consejo de una amiga sincera, porque no sabes si es el ángel que Dios envió, para hacerte rectificar. Dios cuide esta amistad.' },
        { text: 'Una amiga de verdad siempre aceptará tu locura y nunca, nunca, te pedirá que cambies. Dios cuide esta amistad.' },
        { text: 'Las amigas francas y honestas, dicen cosas buenas de ti a tus espaldas y cosas malas en tu misma cara. Dios cuide esta amistad.' },
        { text: 'Ser buenas amigas es interpretar miradas, entender silencios, perdonar errores, guardar secretos, secar lágrimas y decir las cosas tal como son. Dios cuide esta amistad.' },
        { text: 'Una verdadera amiga es aquella que nunca se cansa de escuchar una y otra vez, tus dramas sin sentido. Dios cuide esta amistad.' },
        { text: 'Quien ama no ve defectos, quien odia no ve cualidades, pero una buenas amiga, ve ambas cosas en ti. Dios cuide esta amistad.' },
        { text: 'Las amigas cuando son leales y honestas, se separan en la distancia, pero no en el corazón. Dios cuide esta amistad.' },
        { text: 'La vida da muchas vueltas, pero una amiga que te quiere de verdad, las da todas contigo. Dios cuide esta amistad.' },
        { text: 'Hay personas que te oscurecen la vida, pero una amiga de verdad, lo da todo por verte brillar. Dios cuide esta amistad.' },
        { text: 'Una buena amistad es la magia de saber que aunque no veas a cierta persona, sabes que te llevan en el corazón. Dios cuide esta amistad.' }
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
    titleTemplate: 'Frases bonitas cortas de amigas | %s',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Frases bonitas cortas de amigas, para amigas y mejores amigas Citas, Mensajes, Poemas en Reyfrases.com'
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
