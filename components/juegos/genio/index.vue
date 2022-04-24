<template>
    <div class="px-2">
        <b-card title="Descubre que tan genio eres segun este test de genialidad!" class="targeta text-center" sub-title="Eres Genio?">
            <button type="button" v-b-modal.modal-scrollable class="btn btn-warning">Descubrir Aqui!</button>
        </b-card>
        <b-modal id="modal-scrollable" scrollable size="xl" title="Elige una frase bonita" class="warning">
        <b-tabs v-model="tabIndex" small card>
            <b-tab :disabled="disabled1" title="Test 1">
                <div class="my-4 text-center">
                  <h5 class="success pa-4">Cual frase es la mejor para ti?</h5>
                </div>
                <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in frases" :key="i.key" @click="set(i.text)">
                    {{ i.text }}
                </blockquote>
            </b-tab>
            <b-tab :disabled="disabled2" title="Test 2">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Elije el mejor color para ti</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in colorFavorito" :key="i.key" @click="set2(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="disabled3" title="Test 3">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Con que frecuencia tienes problemas</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in tiempo" :key="i.key" @click="set3(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="disabled4" title="Test 4">
              <div class="my-4 text-center">
                <h5 class="success pa-4">Que es mas importante en la vida?</h5>
              </div>
              <blockquote cite="" class="my-4 blockquote blockquotes" v-for="i in fraseDefinicion" :key="i.key" @click="set4(i.text)">
                  {{ i.text }}
              </blockquote>
            </b-tab>
            <b-tab :disabled="result" title="Resultado">
              <div class="text-center mb-4 pb-4 resultado">
                <h3 class="mt-3">Tu resultado</h3>
                <div class="text-center p-4 resultado">
                  <p class="blockquote">{{ resultadoTest[aleatorio] }}</p>
                  <button type="button" @click="(Resetear())" class="btn btn-success">Jugar Otra Vez</button>
                </div>
              </div>
              <tests></tests>
            </b-tab>
        </b-tabs>
        </b-modal>
        <b-modal id="resultado" hide-footer>
            <template #modal-title>
                <div class="text-center"><h5>Reyfrases.com</h5></div>
            </template>
            <div class="d-block text-center">
            <pre class="h5" v-if="x">{{ resultadoFrase }}</pre>
            <div v-else>
                <p class="h5">Espera un momento...</p>
                <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
            </div>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('resultado')">Cerrar</b-button>
        </b-modal>
    </div>
</template>

<script>
import Tests from '@/components/juegos/tests-menu/index.vue'
export default {
  components: {
    Tests
  },
  data () {
    return {
      resultadoFrase: null,
      x: true,
      tabIndex: 0,
      disabled1: false,
      disabled2: true,
      disabled3: true,
      disabled4: true,
      result: true,
      aleatorio: 0,
      frases: [
        { text: 'No somos producto de nuestras circunstancias. Somos producto de nuestras decisiones.' },
        { text: 'No hagas lo que los demás hacen. Haz lo que los demás quisieran hacer pero no se atreven.' },
        { text: 'Si buscas resultados distintos, no hagas siempre lo mismo.' },
        { text: 'No te conformes con lo que necesitas, lucha por lo que te mereces.' },
        { text: 'La diferencia entre donde estuviste ayer y donde estarás mañana es lo que pienses digas y hagas hoy.' },
        { text: 'Las cosas buenas pasan a quienes las esperan. ¿Las mejores? A quienes van a por ellas.' },
        { text: 'Seamos realistas. ¡ Hagamos lo imposible!' },
        { text: 'Hoy voy a conseguir todo lo que me proponga.' },
        { text: 'Si la vida te pone obstáculos, tu reto es superarlos.' },
        { text: 'No le llames sueño, llámale plan.' },
        { text: 'Ponte de frente al sol y las sombras quedarán detrás de ti.' },
        { text: 'Todo va a salir bien.' },
        { text: 'Ten el suficiente coraje para creer en el amor una vez más.' },
        { text: 'Para poder seguir, a veces hay que empezar de nuevo.' }
      ],
      colorFavorito: [
        { text: 'Negro' },
        { text: 'Azul' },
        { text: 'Morado' },
        { text: 'Plateado' },
        { text: 'Rosado' },
        { text: 'blanco' },
        { text: 'Lila' },
        { text: 'Amarillo' },
        { text: 'Rojo' },
        { text: 'Beige' },
        { text: 'Maron' },
        { text: 'Turquesa' },
        { text: 'Gris' },
        { text: 'Anaranjado' }
      ],
      tiempo: [
        { text: 'Poco' },
        { text: 'Mucho' },
        { text: 'Mas o menos' },
        { text: 'Lo normal' },
        { text: 'Tengo muchos problemas' },
        { text: 'Pocos pero insistentes' },
        { text: 'Mucho pero los soluciono rapido' },
        { text: 'Bastantes de hecho' },
        { text: 'no tengo problemas' }
      ],
      fraseDefinicion: [
        { text: 'Los amigos' },
        { text: 'La comida' },
        { text: 'La familia' },
        { text: 'Los hermanos' },
        { text: 'La libertad' },
        { text: 'La escuela' },
        { text: 'El matrimonio' },
        { text: 'La salud' },
        { text: 'La vida' },
        { text: 'El mundo' },
        { text: 'Los presidentes' },
        { text: 'Las galaxia' },
        { text: 'Caminar' }
      ],
      resultadoTest: [
        'Waoo, Eres un genio!!! El destino del genio es ser un incomprendido, pero no todo incomprendido es un genio.',
        'Waoo, Eres un genio!!! El genio en el arte consiste en saber hasta donde podemos caminar demasiado lejos.',
        'Waoo, Eres un genio!!! El genio se compone del dos por ciento de talento y del noventa y ocho por ciento de perseverante aplicación.',
        'Waoo, Eres un genio!!! El secreto de la genialidad es el de conservar el espíritu del niño hasta la vejez, lo cual quiere decir nunca perder el entusiasmo.',
        'Waoo, Eres un genio!!! Sólo en las regiones de la fantasía es dado crear; crear es la misión del genio.',
        'Waoo, Eres un genio!!! Cuando en el mundo aparece un verdadero genio puede reconocérsele por este signo: todos los necios se conjuran contra él.',
        'Waoo, Eres un genio!!! El genio es un uno por ciento de inspiración y un noventa y nueve por ciento de sudor.',
        'Waoo, Eres un genio!!! Un genio es el que es capaz de ver la idea en el fenómeno.',
        'Waoo, Eres un genio!!! No existe ningún gran genio sin un toque de demencia.',
        'Waoo, Eres un genio!!! Como no fue genial, no tuvo enemigos.',
        'Waoo, Eres un genio!!! Genio es aquel que, en todo instante, sabe plasmar en hechos sus pensamientos.',
        'Waoo, Eres un genio!!! El genio se descubre en la fortuna adversa; en la prosperidad se oculta.',
        'Waoo, Eres un genio!!! El genio es un rayo cuyo trueno se prolonga durante siglos.',
        'Waoo, Eres un genio!!! A Picasso, hasta los que le detestan, le soportan, porque nunca usa el talento. Sólo usa el genio. Sus obras nunca son pensamientos. Son actos.',
        'Waoo, Eres un genio!!! Un hombre de genio no se equivoca. Sus errores son los umbrales del descubrimiento.',
        'Waoo, Eres un genio!!! Genio y figura hasta la sepultura.',
        'Waoo, Eres un genio!!! No hay genio sin un gramo de locura.',
        'Waoo, Eres un genio!!! En la adversa fortuna suele descubrirse al genio, en la prosperidad se oculta.',
        'Waoo, Eres un genio!!! Hay mujeres que son alocadas y hay mujeres de talento: ninguna tiene esa locura del talento que se llama genio.',
        'Waoo, Eres un genio!!! Los genios son peligrosos para los talentos jóvenes, pues no hacen más que reproducirlos creyendo reproducirse a sí mismo.'
      ]
    }
  },
  // updated () {
  //   console.log(this.vor)
  // },
  methods: {
    set (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
        this.disabled1 = true
        this.disabled2 = false
      }.bind(this), 5000)
    },
    set2 (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.disabled2 = true
        this.disabled3 = false
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
      }.bind(this), 5000)
    },
    set3 (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
        this.disabled3 = true
        this.disabled4 = false
      }.bind(this), 5000)
    },
    set4 (x) {
      this.$bvModal.show('resultado')
      this.x = false
      setTimeout(function () {
        this.disabled4 = true
        this.result = false
        this.tabIndex = this.tabIndex + 1
        this.$bvModal.hide('resultado')
        this.x = true
        this.aleatorio = Math.floor(Math.random() * (17 - 1)) + 1
        console.log(this.aleatorio)
      }.bind(this), 5000)
    },
    frasex (x) {
      this.resultadoFrase = 'Hurtado'
      console.log(x)
    },
    Resetear () {
      this.tabIndex = 0
      this.result = true
      this.disabled1 = false
    }
  }
  // computed: {
  //   vor () {
  //     if (this.x) {
  //       console.log(true, 'desde computed')
  //       return true
  //     } else {
  //       console.log(false, 'desde computed')
  //       return false
  //     }
  //   }
  // }
}
</script>

<style>
.card-juego{
    background:black
}
.blockquotes{
    border-bottom: 1px solid grey;
    padding:5px;
    border-radius:5px
}
.blockquotes:hover{
    background: #ffc107;
    cursor:pointer;
}
.targeta{
    background: #8be8a8
}
.targeta-amor{
    background: #eb3b3b;
    color: white
}
.targeta-de-la-vida{
    background: #6751e4;
    color: white
}
.targeta-de-amigos{
    background: #eb3bc8;
    color: white
}
.targeta-que-hablan{
    background: #eba53b;
    color: white
}
.targeta-seres-queridos{
    background: #eb3bdc;
    color: white
}
.resultado{
    background: #e68541;
    color: white;
    border-radius: 5px;
}
</style>
