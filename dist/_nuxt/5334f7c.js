(window.webpackJsonp=window.webpackJsonp||[]).push([[746],{1023:function(e,t,o){"use strict";o.r(t);var nav=o(255),n=(o(34),o(257)),r={components:{Tests:n.a},data:function(){return{resultadoFrase:null,x:!0,tabIndex:0,disabled1:!1,disabled2:!0,disabled3:!0,disabled4:!0,result:!0,aleatorio:0,frases:[{text:"No somos producto de nuestras circunstancias. Somos producto de nuestras decisiones."},{text:"No hagas lo que los demás hacen. Haz lo que los demás quisieran hacer pero no se atreven."},{text:"Si buscas resultados distintos, no hagas siempre lo mismo."},{text:"No te conformes con lo que necesitas, lucha por lo que te mereces."},{text:"La diferencia entre donde estuviste ayer y donde estarás mañana es lo que pienses digas y hagas hoy."},{text:"Las cosas buenas pasan a quienes las esperan. ¿Las mejores? A quienes van a por ellas."},{text:"Seamos realistas. ¡ Hagamos lo imposible!"},{text:"Hoy voy a conseguir todo lo que me proponga."},{text:"Si la vida te pone obstáculos, tu reto es superarlos."},{text:"No le llames sueño, llámale plan."},{text:"Ponte de frente al sol y las sombras quedarán detrás de ti."},{text:"Todo va a salir bien."},{text:"Ten el suficiente coraje para creer en el amor una vez más."},{text:"Para poder seguir, a veces hay que empezar de nuevo."}],colorFavorito:[{text:"Negro"},{text:"Azul"},{text:"Morado"},{text:"Plateado"},{text:"Rosado"},{text:"blanco"},{text:"Lila"},{text:"Amarillo"},{text:"Rojo"},{text:"Beige"},{text:"Maron"},{text:"Turquesa"},{text:"Gris"},{text:"Anaranjado"}],tiempo:[{text:"Poco"},{text:"Mucho"},{text:"Mas o menos"},{text:"Lo normal"},{text:"Tengo muchos problemas"},{text:"Pocos pero insistentes"},{text:"Mucho pero los soluciono rapido"},{text:"Bastantes de hecho"},{text:"no tengo problemas"}],fraseDefinicion:[{text:"Los amigos"},{text:"La comida"},{text:"La familia"},{text:"Los hermanos"},{text:"La libertad"},{text:"La escuela"},{text:"El matrimonio"},{text:"La salud"},{text:"La vida"},{text:"El mundo"},{text:"Los presidentes"},{text:"Las galaxia"},{text:"Caminar"}],resultadoTest:["Waoo, Eres un genio!!! El destino del genio es ser un incomprendido, pero no todo incomprendido es un genio.","Waoo, Eres un genio!!! El genio en el arte consiste en saber hasta donde podemos caminar demasiado lejos.","Waoo, Eres un genio!!! El genio se compone del dos por ciento de talento y del noventa y ocho por ciento de perseverante aplicación.","Waoo, Eres un genio!!! El secreto de la genialidad es el de conservar el espíritu del niño hasta la vejez, lo cual quiere decir nunca perder el entusiasmo.","Waoo, Eres un genio!!! Sólo en las regiones de la fantasía es dado crear; crear es la misión del genio.","Waoo, Eres un genio!!! Cuando en el mundo aparece un verdadero genio puede reconocérsele por este signo: todos los necios se conjuran contra él.","Waoo, Eres un genio!!! El genio es un uno por ciento de inspiración y un noventa y nueve por ciento de sudor.","Waoo, Eres un genio!!! Un genio es el que es capaz de ver la idea en el fenómeno.","Waoo, Eres un genio!!! No existe ningún gran genio sin un toque de demencia.","Waoo, Eres un genio!!! Como no fue genial, no tuvo enemigos.","Waoo, Eres un genio!!! Genio es aquel que, en todo instante, sabe plasmar en hechos sus pensamientos.","Waoo, Eres un genio!!! El genio se descubre en la fortuna adversa; en la prosperidad se oculta.","Waoo, Eres un genio!!! El genio es un rayo cuyo trueno se prolonga durante siglos.","Waoo, Eres un genio!!! A Picasso, hasta los que le detestan, le soportan, porque nunca usa el talento. Sólo usa el genio. Sus obras nunca son pensamientos. Son actos.","Waoo, Eres un genio!!! Un hombre de genio no se equivoca. Sus errores son los umbrales del descubrimiento.","Waoo, Eres un genio!!! Genio y figura hasta la sepultura.","Waoo, Eres un genio!!! No hay genio sin un gramo de locura.","Waoo, Eres un genio!!! En la adversa fortuna suele descubrirse al genio, en la prosperidad se oculta.","Waoo, Eres un genio!!! Hay mujeres que son alocadas y hay mujeres de talento: ninguna tiene esa locura del talento que se llama genio.","Waoo, Eres un genio!!! Los genios son peligrosos para los talentos jóvenes, pues no hacen más que reproducirlos creyendo reproducirse a sí mismo."]}},methods:{set:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado"),this.disabled1=!0,this.disabled2=!1}.bind(this),5e3)},set2:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.disabled2=!0,this.disabled3=!1,this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado")}.bind(this),5e3)},set3:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado"),this.disabled3=!0,this.disabled4=!1}.bind(this),5e3)},set4:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.disabled4=!0,this.result=!1,this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado"),this.x=!0,this.aleatorio=Math.floor(16*Math.random())+1,console.log(this.aleatorio)}.bind(this),5e3)},frasex:function(e){this.resultadoFrase="Hurtado",console.log(e)},Resetear:function(){this.tabIndex=0,this.result=!0,this.disabled1=!1}}},l=(o(281),o(60)),c=Object(l.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"px-2"},[o("b-card",{staticClass:"targeta text-center",attrs:{title:"Descubre que tan genio eres segun este test de genialidad!","sub-title":"Eres Genio?"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-scrollable",modifiers:{"modal-scrollable":!0}}],staticClass:"btn btn-warning",attrs:{type:"button"}},[e._v("Descubrir Aqui!")])]),e._v(" "),o("b-modal",{staticClass:"warning",attrs:{id:"modal-scrollable",scrollable:"",size:"xl",title:"Elige una frase bonita"}},[o("b-tabs",{attrs:{small:"",card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[o("b-tab",{attrs:{disabled:e.disabled1,title:"Test 1"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Cual frase es la mejor para ti?")])]),e._v(" "),e._l(e.frases,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set(i.text)}}},[e._v("\n                "+e._s(i.text)+"\n            ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled2,title:"Test 2"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Elije el mejor color para ti")])]),e._v(" "),e._l(e.colorFavorito,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set2(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled3,title:"Test 3"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Con que frecuencia tienes problemas")])]),e._v(" "),e._l(e.tiempo,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set3(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled4,title:"Test 4"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Que es mas importante en la vida?")])]),e._v(" "),e._l(e.fraseDefinicion,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set4(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.result,title:"Resultado"}},[o("div",{staticClass:"text-center mb-4 pb-4 resultado"},[o("h3",{staticClass:"mt-3"},[e._v("Tu resultado")]),e._v(" "),o("div",{staticClass:"text-center p-4 resultado"},[o("p",{staticClass:"blockquote"},[e._v(e._s(e.resultadoTest[e.aleatorio]))]),e._v(" "),o("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){e.Resetear()}}},[e._v("Jugar Otra Vez")])])]),e._v(" "),o("tests")],1)],1)],1),e._v(" "),o("b-modal",{attrs:{id:"resultado","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("div",{staticClass:"text-center"},[o("h5",[e._v("Frase.me")])])]},proxy:!0}])},[e._v(" "),o("div",{staticClass:"d-block text-center"},[e.x?o("pre",{staticClass:"h5"},[e._v(e._s(e.resultadoFrase))]):o("div",[o("p",{staticClass:"h5"},[e._v("Espera un momento...")]),e._v(" "),o("b-spinner",{attrs:{variant:"success",type:"grow",label:"Spinning"}})],1)]),e._v(" "),o("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(t){return e.$bvModal.hide("resultado")}}},[e._v("Cerrar")])],1)],1)}),[],!1,null,null,null).exports,d={components:{Tests:n.a},data:function(){return{resultadoFrase:null,x:!0,tabIndex:0,disabled1:!1,disabled2:!0,disabled3:!0,disabled4:!0,result:!0,aleatorio:0,frases:[{text:"No somos producto de nuestras circunstancias. Somos producto de nuestras decisiones."},{text:"No hagas lo que los demás hacen. Haz lo que los demás quisieran hacer pero no se atreven."},{text:"Si buscas resultados distintos, no hagas siempre lo mismo."},{text:"No te conformes con lo que necesitas, lucha por lo que te mereces."},{text:"La diferencia entre donde estuviste ayer y donde estarás mañana es lo que pienses digas y hagas hoy."},{text:"Las cosas buenas pasan a quienes las esperan. ¿Las mejores? A quienes van a por ellas."},{text:"Seamos realistas. ¡ Hagamos lo imposible!"},{text:"Hoy voy a conseguir todo lo que me proponga."},{text:"Si la vida te pone obstáculos, tu reto es superarlos."},{text:"No le llames sueño, llámale plan."},{text:"Ponte de frente al sol y las sombras quedarán detrás de ti."},{text:"Todo va a salir bien."},{text:"Ten el suficiente coraje para creer en el amor una vez más."},{text:"Para poder seguir, a veces hay que empezar de nuevo."}],colorFavorito:[{text:"Negro"},{text:"Azul"},{text:"Morado"},{text:"Plateado"},{text:"Rosado"},{text:"blanco"},{text:"Lila"},{text:"Amarillo"},{text:"Rojo"},{text:"Beige"},{text:"Maron"},{text:"Turquesa"},{text:"Gris"},{text:"Anaranjado"}],tiempo:[{text:"Poco"},{text:"Mucho"},{text:"Mas o menos"},{text:"Lo normal"},{text:"Tengo muchos problemas"},{text:"Pocos pero insistentes"},{text:"Mucho pero los soluciono rapido"},{text:"Bastantes de hecho"},{text:"no tengo problemas"}],fraseDefinicion:[{text:"Los amigos"},{text:"La comida"},{text:"La familia"},{text:"Los hermanos"},{text:"La libertad"},{text:"La escuela"},{text:"El matrimonio"},{text:"La salud"},{text:"La vida"},{text:"El mundo"},{text:"Los presidentes"},{text:"Las galaxia"},{text:"Caminar"}],resultadoTest:["Waoo, Eres un genio!!! El destino del genio es ser un incomprendido, pero no todo incomprendido es un genio.","Waoo, Eres un genio!!! El genio en el arte consiste en saber hasta donde podemos caminar demasiado lejos.","Waoo, Eres un genio!!! El genio se compone del dos por ciento de talento y del noventa y ocho por ciento de perseverante aplicación.","Waoo, Eres un genio!!! El secreto de la genialidad es el de conservar el espíritu del niño hasta la vejez, lo cual quiere decir nunca perder el entusiasmo.","Waoo, Eres un genio!!! Sólo en las regiones de la fantasía es dado crear; crear es la misión del genio.","Waoo, Eres un genio!!! Cuando en el mundo aparece un verdadero genio puede reconocérsele por este signo: todos los necios se conjuran contra él.","Waoo, Eres un genio!!! El genio es un uno por ciento de inspiración y un noventa y nueve por ciento de sudor.","Waoo, Eres un genio!!! Un genio es el que es capaz de ver la idea en el fenómeno.","Waoo, Eres un genio!!! No existe ningún gran genio sin un toque de demencia.","Waoo, Eres un genio!!! Como no fue genial, no tuvo enemigos.","Waoo, Eres un genio!!! Genio es aquel que, en todo instante, sabe plasmar en hechos sus pensamientos.","Waoo, Eres un genio!!! El genio se descubre en la fortuna adversa; en la prosperidad se oculta.","Waoo, Eres un genio!!! El genio es un rayo cuyo trueno se prolonga durante siglos.","Waoo, Eres un genio!!! A Picasso, hasta los que le detestan, le soportan, porque nunca usa el talento. Sólo usa el genio. Sus obras nunca son pensamientos. Son actos.","Waoo, Eres un genio!!! Un hombre de genio no se equivoca. Sus errores son los umbrales del descubrimiento.","Waoo, Eres un genio!!! Genio y figura hasta la sepultura.","Waoo, Eres un genio!!! No hay genio sin un gramo de locura.","Waoo, Eres un genio!!! En la adversa fortuna suele descubrirse al genio, en la prosperidad se oculta.","Waoo, Eres un genio!!! Hay mujeres que son alocadas y hay mujeres de talento: ninguna tiene esa locura del talento que se llama genio.","Waoo, Eres un genio!!! Los genios son peligrosos para los talentos jóvenes, pues no hacen más que reproducirlos creyendo reproducirse a sí mismo."]}},methods:{set:function(e){this.$bvModal.show("resultado2"),this.x=!1,setTimeout(function(){this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado2"),this.disabled1=!0,this.disabled2=!1}.bind(this),5e3)},set2:function(e){this.$bvModal.show("resultado2"),this.x=!1,setTimeout(function(){this.disabled2=!0,this.disabled3=!1,this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado2")}.bind(this),5e3)},set3:function(e){this.$bvModal.show("resultado2"),this.x=!1,setTimeout(function(){this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado2"),this.disabled3=!0,this.disabled4=!1}.bind(this),5e3)},set4:function(e){this.$bvModal.show("resultado2"),this.x=!1,setTimeout(function(){this.disabled4=!0,this.result=!1,this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado2"),this.x=!0,this.aleatorio=Math.floor(16*Math.random())+1,console.log(this.aleatorio)}.bind(this),5e3)},frasex:function(e){this.resultadoFrase="Hurtado",console.log(e)},Resetear:function(){this.tabIndex=0,this.result=!0,this.disabled1=!1}}},v=(o(283),Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"px-2"},[o("b-card",{staticClass:"targeta text-center",attrs:{title:"Descubre que tan genio eres segun este test de genialidad!","sub-title":"Eres genio?"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-scrollable",modifiers:{"modal-scrollable":!0}}],staticClass:"btn btn-warning",attrs:{type:"button"}},[e._v("Descubrir Aqui!")])]),e._v(" "),o("b-modal",{staticClass:"warning",attrs:{id:"modal-scrollable2",scrollable:"",size:"xl",title:"Elige una frase bonita"}},[o("b-tabs",{attrs:{small:"",card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[o("b-tab",{attrs:{disabled:e.disabled1,title:"Test 1"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Cual frase es la mejor para ti?")])]),e._v(" "),e._l(e.frases,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set(i.text)}}},[e._v("\n                "+e._s(i.text)+"\n            ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled2,title:"Test 2"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Elije el mejor color para ti")])]),e._v(" "),e._l(e.colorFavorito,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set2(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled3,title:"Test 3"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Con que frecuencia tienes problemas")])]),e._v(" "),e._l(e.tiempo,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set3(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled4,title:"Test 4"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Que es mas importante en la vida?")])]),e._v(" "),e._l(e.fraseDefinicion,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set4(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.result,title:"Resultado"}},[o("div",{staticClass:"text-center mb-4 pb-4 resultado"},[o("h3",{staticClass:"mt-3"},[e._v("Tu resultado")]),e._v(" "),o("div",{staticClass:"text-center p-4 resultado"},[o("p",{staticClass:"blockquote"},[e._v(e._s(e.resultadoTest[e.aleatorio]))]),e._v(" "),o("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){e.Resetear()}}},[e._v("Jugar Otra Vez")])])]),e._v(" "),o("Tests")],1)],1)],1),e._v(" "),o("b-modal",{attrs:{id:"resultado2","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("div",{staticClass:"text-center"},[o("h5",[e._v("Frase.me")])])]},proxy:!0}])},[e._v(" "),o("div",{staticClass:"d-block text-center"},[e.x?o("pre",{staticClass:"h5"},[e._v(e._s(e.resultadoFrase))]):o("div",[o("p",{staticClass:"h5"},[e._v("Espera un momento...")]),e._v(" "),o("b-spinner",{attrs:{variant:"success",type:"grow",label:"Spinning"}})],1)]),e._v(" "),o("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(t){return e.$bvModal.hide("resultado2")}}},[e._v("Cerrar")])],1)],1)}),[],!1,null,null,null).exports),_={components:{Nav:nav.default,Juego1:c,Juego2:v},data:function(){return{fraseClave:"Palabras con za ze zi zo zu por orden"}},head:{title:"Reyfrases.com",titleTemplate:"🥇 Palabras con za ze zi zo zu ordenadas alfabeticamente | %s",htmlAttrs:{lang:"es"},meta:[{hid:"description",name:"description",content:"✅ Encantado de presentarte las palabras con za ze zi zo zu, ✅ palabras con za zo zu, palabras con ze zi y palabras con zo y zu | Frases.me"}],script:[{src:"https://cdn.jsdelivr.net/npm/vue/dist/vue.js",async:!0,defer:!0}]}},m=Object(l.a)(_,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Nav"),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h1",{staticClass:"h3"},[e._v(e._s(e.fraseClave))]),e._v(" "),o("p",[o("b",[e._v("La letra z (zeta)")]),e._v(" es la ultima en el abecedario, y tenemos un listado de "),o("b",[e._v("palabras que comienzan con z")]),e._v(",\n          "),o("b",[e._v("palabras que terminan con z")]),e._v(" y tambien "),o("b",[e._v("palabras que tienen za zo zu")]),e._v(". Encuentra tu palabra correcta.!")]),e._v(" "),o("p",[e._v("Las "),o("b",[e._v("palabras con ze zi")]),e._v(" y las "),o("b",[e._v("palabras con zo y zu")]),e._v(" estan tambien en este listado, espero y todas las palabras con za ze zi zo zu te puedan gustar.")])])],1)],1),e._v(" "),o("Juego1")],1),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con za zo zu")]),e._v(" "),o("p",[e._v("Yo a veces me pregunto porque las personas buscan este tipo de palabras con esta letra tan dificil, El trabajdo de nosotros es buscarlas y la suya encontrarlas.")]),e._v(" "),o("p",[e._v("No es nada facil pensar en una palabra con za, con ze o con zu, y menos una con za ze zu o zo y zu.! Pero no te preocupes, aqui de seguro la tenemos a la mano.!")]),e._v(" "),o("p",[e._v("Sea para la escuela, para el famoso juego o para los niños, sea para quien sea, o sea como sea, TE LO TENEMOS!!")])])],1)],1)]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con ze, zi, zo y zu")]),e._v(" "),o("p",[e._v('Bien, estas buscando palabras desde la "za" hasta la "zu", en hora buena.! Te tengo un listado y en orden para que las puedas copiar y compartir con tus amigos.')]),e._v(" "),o("p",[e._v("Son pocas las palabras con estas letra, por eso se me ha complicado un poco escribir ese articulo, pero al final de todo, las he encontrado.!")])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con za")]),e._v(" "),o("p",[e._v('Si te han mandado de tarea, o has venido a jugar, estas de suerte. Porque aqui te mostramos las mejores palabras con "za".')]),e._v(" "),o("ul",[o("li",[e._v("zapato")]),e._v(" "),o("li",[e._v("zamboa")]),e._v(" "),o("li",[e._v("zaca ")]),e._v(" "),o("li",[e._v("Zar")]),e._v(" "),o("li",[e._v("Zarandear")]),e._v(" "),o("li",[e._v("Zarpar")]),e._v(" "),o("li",[e._v("Zarpazo")]),e._v(" "),o("li",[e._v("Zarzuela")]),e._v(" "),o("li",[e._v("zafa")]),e._v(" "),o("li",[e._v("zamuro")]),e._v(" "),o("li",[e._v("zarca")]),e._v(" "),o("li",[e._v("zaga")]),e._v(" "),o("li",[e._v("zarco")]),e._v(" "),o("li",[e._v("zaleo")]),e._v(" "),o("li",[e._v("zalvo")])])])],1)],1)])]),e._v(" "),o("Juego2")],1),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con ze")]),e._v(" "),o("p",[e._v('Si tambien te has preguntado si existen las palabras con "ze" o que contengan la palabra "ze" en su trayecto. Aqui estan.!.')]),e._v(" "),o("ul",[o("li",[e._v("zebra ")]),e._v(" "),o("li",[e._v("zeda")]),e._v(" "),o("li",[e._v("zenda ")]),e._v(" "),o("li",[e._v("zeta")]),e._v(" "),o("li",[e._v("zedilla")]),e._v(" "),o("li",[e._v("zelandés")]),e._v(" "),o("li",[e._v("zendal ")]),e._v(" "),o("li",[e._v("zeugma")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con zi")]),e._v(" "),o("p",[e._v('Palabras con "zi", Estas son las palabras con estas vocales o silabas.')]),e._v(" "),o("ul",[o("li",[e._v("zigofilácea")]),e._v(" "),o("li",[e._v("zigofiláceo")]),e._v(" "),o("li",[e._v("zigomorfa")]),e._v(" "),o("li",[e._v("zigomorfo")]),e._v(" "),o("li",[e._v("zigoto")]),e._v(" "),o("li",[e._v("zigurat")]),e._v(" "),o("li",[e._v("zigzag")]),e._v(" "),o("li",[e._v("zigzaguear")]),e._v(" "),o("li",[e._v("zinc")]),e._v(" "),o("li",[e._v("zingiberácea")]),e._v(" "),o("li",[e._v("zingiberáceo")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con zo")]),e._v(" "),o("p",[e._v("Anota muy bien estas palabras con zo, son dificiles de recordar..")]),e._v(" "),o("ul",[o("li",[e._v("zoca")]),e._v(" "),o("li",[e._v("zorro")]),e._v(" "),o("li",[e._v("zoologico")]),e._v(" "),o("li",[e._v("zoilo")]),e._v(" "),o("li",[e._v("zona")]),e._v(" "),o("li",[e._v("zoncería")]),e._v(" "),o("li",[e._v("zonchiche")]),e._v(" "),o("li",[e._v("zoncho")]),e._v(" "),o("li",[e._v("zon")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con zu")]),e._v(" "),o("p",[e._v("Mas y mas palabras aun para recordar o escribir, Ten cuidado en tratar de memorizar todas las palabras, JAJA es broma....")]),e._v(" "),o("ul",[o("li",[e._v("zuavo")]),e._v(" "),o("li",[e._v("zubia")]),e._v(" "),o("li",[e._v("zucarina")]),e._v(" "),o("li",[e._v("zucarino")]),e._v(" "),o("li",[e._v("zucrería")]),e._v(" "),o("li",[e._v("zucurco")]),e._v(" "),o("li",[e._v("zuda")]),e._v(" "),o("li",[e._v("zueca")]),e._v(" "),o("li",[e._v("zueco")]),e._v(" "),o("li",[e._v("zuela")]),e._v(" "),o("li",[e._v("zuindá")]),e._v(" "),o("li",[e._v("zuiza")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("10 Palabras con z al principio")]),e._v(" "),o("p",[e._v("Empecemos con las primeras 10 palabras con z y esas las tiene al principio, se usan mucho para jugar el popolar juego de "),o("b",[e._v("stop, tutti fruti o parada")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("Zapato")]),e._v(" "),o("li",[e._v("Zapatero")]),e._v(" "),o("li",[e._v("Zafiro")]),e._v(" "),o("li",[e._v("zambullir")]),e._v(" "),o("li",[e._v("Zanahoria")]),e._v(" "),o("li",[e._v("Zancudo")]),e._v(" "),o("li",[e._v("Zacarias")]),e._v(" "),o("li",[e._v("zacate")]),e._v(" "),o("li",[e._v("Zamba")]),e._v(" "),o("li",[e._v("Zumbido")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con z al final")]),e._v(" "),o("p",[e._v("Las palabras a continuacion tienen la letra z (zeta) al final de la palabra.")]),e._v(" "),o("ul",[o("li",[e._v("Acidez")]),e._v(" "),o("li",[e._v("Adoratriz")]),e._v(" "),o("li",[e._v("Adultez")]),e._v(" "),o("li",[e._v("Ajedrez")]),e._v(" "),o("li",[e._v("Algidez")]),e._v(" "),o("li",[e._v("Altivez")]),e._v(" "),o("li",[e._v("Andaluz")]),e._v(" "),o("li",[e._v("Aprendiz")]),e._v(" "),o("li",[e._v("Arcabuz")]),e._v(" "),o("li",[e._v("Arroz")]),e._v(" "),o("li",[e._v("Audaz")]),e._v(" "),o("li",[e._v("Automotriz")]),e._v(" "),o("li",[e._v("Avestruz")]),e._v(" "),o("li",[e._v("Barniz")]),e._v(" "),o("li",[e._v("Belez")]),e._v(" "),o("li",[e._v("Buz")]),e._v(" "),o("li",[e._v("Calidez")]),e._v(" "),o("li",[e._v("Candidez")]),e._v(" "),o("li",[e._v("Capataz")]),e._v(" "),o("li",[e._v("Capaz")]),e._v(" "),o("li",[e._v("Cruz")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Palabras con z en el medio o (intermedio)")]),e._v(" "),o("p",[e._v("Las palabras con z intermedia, o con z en el medio, son las que llevan la letra z justo en el medio, una letra antes o despues del medio.")]),e._v(" "),o("ul",[o("li",[e._v("Abalanzarse")]),e._v(" "),o("li",[e._v("Abazón")]),e._v(" "),o("li",[e._v("Abrazadera")]),e._v(" "),o("li",[e._v("Acechanza")]),e._v(" "),o("li",[e._v("Acomodadizo")]),e._v(" "),o("li",[e._v("Acorazar")]),e._v(" "),o("li",[e._v("Aiza")]),e._v(" "),o("li",[e._v("Alfabetizar")]),e._v(" "),o("li",[e._v("Alzada")]),e._v(" "),o("li",[e._v("Azabache")]),e._v(" "),o("li",[e._v("Azafrán")]),e._v(" "),o("li",[e._v("Azahar")]),e._v(" "),o("li",[e._v("Azar")]),e._v(" "),o("li",[e._v("Azotar")]),e._v(" "),o("li",[e._v("Azteca")]),e._v(" "),o("li",[e._v("Azucena")]),e._v(" "),o("li",[e._v("Bautizar")]),e._v(" "),o("li",[e._v("Bocaza")]),e._v(" "),o("li",[e._v("Cabeza")]),e._v(" "),o("li",[e._v("Cabizbajo")]),e._v(" "),o("li",[e._v("Calabaza")]),e._v(" "),o("li",[e._v("Cambiazo")]),e._v(" "),o("li",[e._v("Cañonazo")]),e._v(" "),o("li",[e._v("Caracterizar")])])])],1)],1)])])]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("Listado de 20 palabras con z para jugar o hacer la tarea de la escuela")]),e._v(" "),o("p",[e._v("Hecha un vistazo a las palabras a continuacion, son 20 de las mas buscadas.")]),e._v(" "),o("ul",[o("li",[e._v("Zanquear")]),e._v(" "),o("li",[e._v("Zapateo")]),e._v(" "),o("li",[e._v("Zapote")]),e._v(" "),o("li",[e._v("Zar")]),e._v(" "),o("li",[e._v("Zarandear")]),e._v(" "),o("li",[e._v("Zarpar")]),e._v(" "),o("li",[e._v("Zarpazo")]),e._v(" "),o("li",[e._v("Zarzuela")]),e._v(" "),o("li",[e._v("Zeta")]),e._v(" "),o("li",[e._v("Zona")]),e._v(" "),o("li",[e._v("Zoológico")]),e._v(" "),o("li",[e._v("Zorra")]),e._v(" "),o("li",[e._v("Zorzal")]),e._v(" "),o("li",[e._v("Zozobrar")]),e._v(" "),o("li",[e._v("Zumba")]),e._v(" "),o("li",[e._v("Zumbar")]),e._v(" "),o("li",[e._v("Zurcir")]),e._v(" "),o("li",[e._v("Zurdo")]),e._v(" "),o("li",[e._v("Zurrón")]),e._v(" "),o("li",[e._v("zoologico")])])])],1)],1)])])])],1)}),[],!1,null,null,null);t.default=m.exports;installComponents(m,{Nav:o(255).default})},255:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{secciones:[{title:"Frases Bonitas",text:"Entra a la seccion de frases de amor.",link:"https://reyfrases.com/frases-bonitas/"},{title:"Frases de la vida",text:"Frases de la vida misma.",link:"https://reyfrases.com/frases-de/la-vida/"},{title:"Abuelos fallecidos",text:"Para los mas viejitos de la casa.",link:"https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo/"},{title:"Abuelitas fallecidas",text:"Sea whatsapp o facebook, puedes compartirlas todas.!",link:"https://reyfrases.com/frases-para/abuelos/descansa-en-paz-abuelita/"},{title:"Palabras con z",text:"Entre amigos y fiestas.",link:"https://reyfrases.com/palabras/con-/z-y-za-ze-zi-zo-zu/"},{title:"Amor a distancia",text:"Ese amor de tu vida.",link:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia/"},{title:"Frases largas",text:"Tan especial es tu novio, ¿Verdad?.",link:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos/"},{title:"Home",text:"Reyfrases",link:"https://reyfrases.com/"}]}}},r=o(60),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[o("b-navbar-brand",{attrs:{href:"/"}},[e._v("Frase.me")]),e._v(" "),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},e._l(e.secciones,(function(t){return o("b-nav-item",{key:t.key,attrs:{href:t.link}},[e._v(e._s(t.title))])})),1)],1)],1),e._v(" "),o("b-alert",{attrs:{show:""}},[e._v("Usamos cookies")])],1)}),[],!1,null,null,null);t.default=component.exports},257:function(e,t,o){"use strict";var n=o(60),component=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-card",{staticClass:" my-2 targeta-amor text-center",attrs:{title:"Descubre cual es la frase que te envia tu abuelo desde el cielo."}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-de-la-vida text-center",attrs:{title:"Cual es la frase que te define en la vida?"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/frases-bonitas/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-seres-queridos text-center",attrs:{title:"Descubre que frase hara a tu novia mas feliz"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-que-hablan text-center",attrs:{title:"Descubre la frase que tu novio te guarda en silencio aun es la distancia!"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-de-amigos text-center",attrs:{title:"Que tan buen amigo eres segun la frase que escojas"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/frases-de/la-vida/"}},[e._v("Descubre aqui")])],1)],1)}),[],!1,null,null,null);t.a=component.exports},263:function(e,t,o){var content=o(282);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("1377a772",content,!0,{sourceMap:!1})},264:function(e,t,o){var content=o(284);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("52941b07",content,!0,{sourceMap:!1})},281:function(e,t,o){"use strict";o(263)},282:function(e,t,o){(t=o(66)(!1)).push([e.i,".card-juego{background:#000}.blockquotes{border-bottom:1px solid grey;padding:5px;border-radius:5px}.blockquotes:hover{background:#ffc107;cursor:pointer}.targeta{background:#8be8a8}.targeta-amor{background:#eb3b3b;color:#fff}.targeta-de-la-vida{background:#6751e4;color:#fff}.targeta-de-amigos{background:#eb3bc8;color:#fff}.targeta-que-hablan{background:#eba53b;color:#fff}.targeta-seres-queridos{background:#eb3bdc;color:#fff}.resultado{background:#e68541;color:#fff;border-radius:5px}",""]),e.exports=t},283:function(e,t,o){"use strict";o(264)},284:function(e,t,o){(t=o(66)(!1)).push([e.i,".card-juego{background:#000}.blockquotes{border-bottom:1px solid grey;padding:5px;border-radius:5px}.blockquotes:hover{background:#ffc107;cursor:pointer}.targeta{background:#8be8a8}.targeta-amor{background:#eb3b3b;color:#fff}.targeta-de-la-vida{background:#6751e4;color:#fff}.targeta-de-amigos{background:#eb3bc8;color:#fff}.targeta-que-hablan{background:#eba53b;color:#fff}.targeta-seres-queridos{background:#eb3bdc;color:#fff}.resultado{background:#e68541;color:#fff;border-radius:5px}",""]),e.exports=t}}]);