(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1019:function(e,t,o){"use strict";o.r(t);o(34);var nav=o(255),menu=o(256),r=o(261),n={components:{Menu:menu.default,Nav:nav.default,Juego:r.a},data:function(){return{count:4,fraseClave:"Frases Bonitas cortas de amor <3 ",frases:[{text:"Besa despacio, olvida rápido, toma riesgos y nunca, nunca te arrepientas... Te quiero amor."},{text:"Fue la forma en la que sonreíste... supe que siempre querría eso en mi vida. Te quiero amor."},{text:"Enamorarse es una sensación maravillosamente terrorífica. Te quiero amor."},{text:"Fue la forma en la que sonreíste... super que siempre querría eso en mi vida. Te quiero amor."},{text:"Amarse es comprender que somos dos seres individuales pero que decidieron compartir una vida juntos. Te quiero amor."}],frases2:[{text:"Anoche miré al cielo y empecé a dar a cada estrella una razón por la que te quiero tanto. Me faltaron estrellas. Te quiero amor."},{text:"Desearía poder hablarte, desearía poder sonreírte, desearía poder abrazarte, pero sobre todo desearía poder besarte. Te quiero amor."},{text:"Tus imperfecciones te convierten en la mujer perfecta. Te quiero amor."},{text:"Entrégame el tiempo que te sobre, y lo gastaré en hacerte la persona más feliz del planeta. Te quiero amor."},{text:"Un suspiro es el aire que nos sobra por alguien que nos falta. Te quiero amor."}],frases3:[{text:"El amor consta de un alma presente en dos cuerpos, y de un corazón que reside en dos almas. Te quiero amor."},{text:"Vivamos y que pase lo que tenga que pasar. Te quiero amor."},{text:"Si mi amor por ti fuera una flor, podría caminar en este jardín por siempre... Te quiero amor."},{text:"Estuviste ahí cuando más te necesitaba... y también cuando creía que no. Gracias por todo, amor. Te quiero amor."},{text:"No cambiaría un minuto de ayer contigo por cien años de vida sin ti. Te quiero amor."}],frases4:[{text:"Seré un ladrón de minutos para estar más tiempo a tu lado. Te quiero amor."},{text:"Unos ojos que jamás me cansaré de mirar, unos labios que siempre querré besar, pero lo mejor de todo, un corazón que jamás dejaré de amar. Te quiero amor."},{text:"Solo entendí qué era el amor cuando llegaste a mi vida y le diste sentido. Te quiero amor."},{text:"Si algún día no puedo mirarte, para mí será un día oscuro, porque tú eres mi único sol, el que me ilumina, amor mío. Te quiero amor."},{text:"Me cuesta pensar que has estado ahí siempre... y que he tardado tanto en encontrarte, amor. Te quiero amor."}],frases5:[{text:"Del cielo bajó un pintor para pintar tu figura, pero no encontró color para tanta hermosura. Te quiero amor."},{text:"Nada me parece más bello que observar el mundo a través de tus ojos. Te quiero amor."},{text:"Eres un lindo paisaje con el que me quiero deleitar, tus ojos las flores, tu rostro la pradera y tu boca el mar. Te quiero amor."},{text:"Nunca antes se había visto un amor igual al que siento por ti; no cabe en mi corazón, ni tampoco en este universo. Te quiero amor."},{text:"Cuenta la leyenda que desde tu cama se puede viajar a lo más alto del cielo. Te quiero amor."}],frases6:[{text:"El destino de nuestros labios es encontrarse, ¿para qué alargarlo más? Te quiero amor."},{text:"Un náufrago feliz sería, si tu boca fuese el mar y yo un marinero a la deriva. Te quiero amor."},{text:"Dios se endeudó conmigo, y por eso me trajo a ti. Te quiero amor."},{text:"Te amo en colores que aún no has visto. Te quiero amor."},{text:"Te amo en formas que jamás podrías adivinar. Te quiero amor."}]}},methods:{copiar:function(i){this.$bvModal.show("modal1");var e=document.createElement("input");e.setAttribute("value",document.getElementById(i).innerHTML),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),setTimeout(function(){this.$bvModal.hide("modal1"),this.$bvToast.toast("Frase Copiada Con exito.!!!",{title:"Exito.!!!",variant:"success",solid:!0})}.bind(this),5e3)}},head:{title:"Reyfrases.com",titleTemplate:"Frases Bonitas cortas de amor <3  <3 | %s",htmlAttrs:{lang:"es"},meta:[{hid:"description",name:"description",content:"Frases Bonitas cortas de amor <3  Citas, Mensajes, Poemas en Reyfrases.com"}],script:[{src:"https://cdn.jsdelivr.net/npm/vue/dist/vue.js",async:!0,defer:!0}]}},l=o(60),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Nav"),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h1",{staticClass:"h3"},[e._v(e._s(e.fraseClave)+" mensajes, citas, palabras y poemas")]),e._v(" "),o("p",[e._v("Estas buscando "+e._s(e.fraseClave)+" para dedicar, o para enviar a alguien o dar gratitud de esta forma?.")]),e._v(" "),o("p",[e._v("Citas, mensajes, poemas, versos y palabras para dedicar  y mas cuando se trata de "+e._s(e.fraseClave)+", son tan especiales")])])],1)],1)]),e._v(" "),o("div",[o("b-row",{staticClass:"justify-content-center",staticStyle:{margin:"0px"}},[o("b-col",{attrs:{xs:"12",sm:"8",md:"7",lg:"6"}},[o("div",{staticClass:"d-flex"},[o("Juego")],1)])],1)],1),e._v(" "),o("section",[o("div",{staticClass:"container-fluid"},[o("b-row",{staticClass:"mx-2"},e._l(e.frases,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",md:"3"}},[o("b-card",{staticClass:"text-center"},[o("blockquote",{staticClass:"blockquote grey-text",attrs:{cite:t.text}},[o("span",{staticClass:"text-center",attrs:{id:"frase"+t.text}},[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return e.copiar("frase"+t.text)}}},[e._v("Copiar")])],1)],1)})),1)],1)]),e._v(" "),o("section",[o("div",[o("div",{staticClass:"text-center py-5"},[o("div",{staticClass:"container"},[o("b-row",[o("b-col",[o("h2",[e._v("una pagina dedicada a las mejores frases y especialmente estas > "+e._s(e.fraseClave)+".!")]),e._v(" "),o("p",[e._v("Esta pagina se convertira en una red social muy grande, mientras tanto guarda esta pagina y sigue disfrutando de > "+e._s(e.fraseClave)+".")]),e._v(" "),o("p",[e._v("Dedica desde el corazon, dedica desde lo mas profundo de tu alma esas "+e._s(e.fraseClave))]),e._v(" "),o("p",[e._v("las "+e._s(e.fraseClave)+" que estas viendo exactamente ahora, son recopilaciones de todo internet. Te he trido todas las "+e._s(e.fraseClave)+" especialmente para ti.")])])],1)],1)]),e._v(" "),o("Menu")],1)]),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h2",[e._v("Deja volar tu imaginacion "+e._s(e.fraseClave)+" son especialmente para darle un espacio en las reflexiones que hacmos a diario")]),e._v(" "),o("p",[e._v("La reflexion se apodera de nosotros cuando leemos "+e._s(e.fraseClave)+", y la imaginacion no se queda atras.")]),e._v(" "),o("p",[e._v("Lo inportante aqui es que disfrutes de esta pagina, y por ello es que "+e._s(e.fraseClave)+" es especial para que disfrutes de este contenido exclusivo de la pagina.")]),e._v(" "),o("p",[e._v("Ama, valora, piensa, da ese amor y demuestralo con "+e._s(e.fraseClave)+" "),o("br"),e._v("\n        Da ese cariño a todas las personas que cumplen un dia mas de vida en tu corazon.")])])],1)],1),e._v(" "),o("div",[o("b-row",{staticClass:"mx-2"},e._l(e.frases2,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",md:"3"}},[o("b-card",{staticClass:"text-center"},[o("blockquote",{staticClass:"blockquote grey-text",attrs:{cite:t.text}},[o("span",{staticClass:"text-center",attrs:{id:"frase"+t.text}},[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return e.copiar("frase"+t.text)}}},[e._v("Copiar")])],1)],1)})),1)],1)]),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h2",[e._v("Si te ha de faltar un ser querido que esta en los cielos porque ha fallecido, dedica estas "+e._s(e.fraseClave)+".")]),e._v(" "),o("p",[e._v("Se que es doloroso para ti, pero no queda de otra que consolar nuestra alma dedicando "+e._s(e.fraseClave)+".")]),e._v(" "),o("p",[e._v("Las heridas sanan, y sanan mas rapido con el tiempo. pero si ves la oportunidad de dedicar "+e._s(e.fraseClave)+" mejor.")])])],1)],1),e._v(" "),o("div",[o("b-row",{staticClass:"mx-2"},e._l(e.frases3,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",md:"3"}},[o("b-card",{staticClass:"text-center"},[o("blockquote",{staticClass:"blockquote grey-text",attrs:{cite:t.text}},[o("span",{staticClass:"text-center",attrs:{id:"frase"+t.text}},[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return e.copiar("frase"+t.text)}}},[e._v("Copiar")])],1)],1)})),1)],1)]),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h2",[e._v("Hay frase de todo tipo, pero las "+e._s(e.fraseClave)+" tambien sirven para dedicar en el dia del cumpleaño de esa persona.")]),e._v(" "),o("p",[e._v("Espera a ese dia en especial para esa persona, asi es, espera hasa que cumpla años y dedicale "+e._s(e.fraseClave)+" justo cuando cumpla año.")]),e._v(" "),o("p",[e._v("Acompañala en su dia especial, dedicale una de las exelentes "+e._s(e.fraseClave)+" para su cumpleaños.")])])],1)],1),e._v(" "),o("div",[o("b-row",{staticClass:"mx-2"},e._l(e.frases4,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",md:"3"}},[o("b-card",{staticClass:"text-center"},[o("blockquote",{staticClass:"blockquote grey-text",attrs:{cite:t.text}},[o("span",{staticClass:"text-center",attrs:{id:"frase"+t.text}},[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return e.copiar("frase"+t.text)}}},[e._v("Copiar")])],1)],1)})),1)],1)]),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h2",[e._v(e._s(e.fraseClave)+" con amor, o para el amor.")]),e._v(" "),o("p",[e._v("El amor es muy bello, estas "+e._s(e.fraseClave)+" encajan perfectamente para alguien que esta vivo o ha fallecido, sea a esas maravillosas personas.")]),e._v(" "),o("p",[e._v("Ama de verdad con el corazon, ama a tus abuelos, a tu familia, a tus primos, a tu novio, a tu esposo, a todas las personas que esten a tu alrededor..")])])],1)],1),e._v(" "),o("div",[o("b-row",{staticClass:"mx-2"},e._l(e.frases5,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",md:"3"}},[o("b-card",{staticClass:"text-center"},[o("blockquote",{staticClass:"blockquote grey-text",attrs:{cite:t.text}},[o("span",{staticClass:"text-center",attrs:{id:"frase"+t.text}},[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return e.copiar("frase"+t.text)}}},[e._v("Copiar")])],1)],1)})),1)],1)]),e._v(" "),o("section",{staticClass:"text-center py-5"},[o("div",{staticClass:"container "},[o("b-row",[o("b-col",[o("h2",[e._v("Guarda esta pagina como tu favorita, pronto traere algo muy especial para ti.")]),e._v(" "),o("p",[e._v("Espero volverte a ver y gracias por visitar, espero que te hayan gustado "+e._s(e.fraseClave)+". Espero volver a verte por aca.")])])],1)],1),e._v(" "),o("div",[o("b-row",{staticClass:"mx-2"},e._l(e.frases6,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",md:"3"}},[o("b-card",{staticClass:"text-center"},[o("blockquote",{staticClass:"blockquote",attrs:{cite:t.text}},[o("span",{staticClass:"text-center",attrs:{id:"frase"+t.text}},[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-button",{attrs:{variant:"primary"},on:{click:function(o){return e.copiar("frase"+t.text)}}},[e._v("Copiar")])],1)],1)})),1)],1)]),e._v(" "),o("b-modal",{attrs:{id:"modal1","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("div",{staticClass:"text-center"},[o("h5",[e._v("Reyfrases.com")])])]},proxy:!0}])},[e._v(" "),o("div",{staticClass:"d-block text-center"},[o("p",{staticClass:"h5"},[e._v("Copiando Frase...")]),e._v(" "),o("b-spinner",{attrs:{variant:"success",type:"grow",label:"Spinning"}})],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Nav:o(255).default,Menu:o(256).default})},255:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{secciones:[{title:"Frases Bonitas",text:"Entra a la seccion de frases de amor.",link:"https://reyfrases.com/frases-bonitas/"},{title:"Frases de la vida",text:"Frases de la vida misma.",link:"https://reyfrases.com/frases-de/la-vida/"},{title:"Abuelos fallecidos",text:"Para los mas viejitos de la casa.",link:"https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo/"},{title:"Abuelitas fallecidas",text:"Sea whatsapp o facebook, puedes compartirlas todas.!",link:"https://reyfrases.com/frases-para/abuelos/descansa-en-paz-abuelita/"},{title:"Palabras con z",text:"Entre amigos y fiestas.",link:"https://reyfrases.com/palabras/con-/z-y-za-ze-zi-zo-zu/"},{title:"Amor a distancia",text:"Ese amor de tu vida.",link:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia/"},{title:"Frases largas",text:"Tan especial es tu novio, ¿Verdad?.",link:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos/"},{title:"Home",text:"Reyfrases",link:"https://reyfrases.com/"}]}}},n=o(60),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[o("b-navbar-brand",{attrs:{href:"/"}},[e._v("Frase.me")]),e._v(" "),o("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e._v(" "),o("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",{staticClass:"ml-auto"},e._l(e.secciones,(function(t){return o("b-nav-item",{key:t.key,attrs:{href:t.link}},[e._v(e._s(t.title))])})),1)],1)],1),e._v(" "),o("b-alert",{attrs:{show:""}},[e._v("Usamos cookies")])],1)}),[],!1,null,null,null);t.default=component.exports},256:function(e,t,o){"use strict";o.r(t);var r={data:function(){return{secciones:[{title:"Frases Bonitas",text:"Entra a la seccion de frases de amor.",link:"https://reyfrases.com/frases-bonitas/"},{title:"Frases de la vida",text:"Frases de la vida misma.",link:"https://reyfrases.com/frases-de/la-vida/"},{title:"Frases para abuelos fallecidos",text:"Para los mas viejitos de la casa.",link:"https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo/"},{title:"Frases para abuelas fallecidas",text:"Sea whatsapp o facebook, puedes compartirlas todas.!",link:"https://reyfrases.com/frases-para/abuelos/descansa-en-paz-abuelita/"},{title:"Palabras con za e zi zo zu",text:"Entre amigos y fiestas.",link:"https://reyfrases.com/palabras/con-/z-y-za-ze-zi-zo-zu/"},{title:"Frases para tu novio a distancia",text:"Ese amor de tu vida.",link:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia/"},{title:"Frases para tu novia largos",text:"Tan especial es tu novio, ¿Verdad?.",link:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos/"},{title:"Home",text:"Reyfrases",link:"https://reyfrases.com/"}]}}},n=o(60),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-row",{staticClass:"mx-2"},e._l(e.secciones,(function(t){return o("b-col",{key:t.key,staticClass:"py-2",attrs:{xs:"12",sm:"4",lg:"2"}},[o("b-card",{staticClass:"text-center",attrs:{title:t.title}},[o("p",{staticClass:"text-muted text-center"},[o("b",[e._v(e._s(t.text))])]),e._v(" "),o("hr"),e._v(" "),o("b-link",{staticClass:"card-link",attrs:{href:t.link}},[e._v(e._s(t.title))])],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports},257:function(e,t,o){var content=o(260);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(67).default)("956c74bc",content,!0,{sourceMap:!1})},258:function(e,t,o){"use strict";var r=o(60),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-card",{staticClass:" my-2 targeta-amor text-center",attrs:{title:"Descubre cual es la frase que te envia tu abuelo desde el cielo."}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/frases-para/abuelos/frases-para-mi-abuelo-fallecido-que-esta-en-el-cielo/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-de-la-vida text-center",attrs:{title:"Cual es la frase que te define en la vida?"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/frases-bonitas/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-seres-queridos text-center",attrs:{title:"Descubre que frase hara a tu novia mas feliz"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novia/largos/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-que-hablan text-center",attrs:{title:"Descubre la frase que tu novio te guarda en silencio aun es la distancia!"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/mensajes/de/buenas-noches/para/mi-novio/a-distancia/"}},[e._v("Descubre aqui")])],1),e._v(" "),o("b-card",{staticClass:" my-2 targeta-de-amigos text-center",attrs:{title:"Que tan buen amigo eres segun la frase que escojas"}},[o("b-link",{staticClass:"btn btn-warning",attrs:{href:"https://reyfrases.com/frases-de/la-vida/"}},[e._v("Descubre aqui")])],1)],1)}),[],!1,null,null,null);t.a=component.exports},259:function(e,t,o){"use strict";o(257)},260:function(e,t,o){(t=o(66)(!1)).push([e.i,".card-juego{background:#000}.blockquotes{border-bottom:1px solid grey;padding:5px;border-radius:5px}.blockquotes:hover{background:#ffc107;cursor:pointer}.targeta{background:#8be8a8}.targeta-amor{background:#eb3b3b;color:#fff}.targeta-de-la-vida{background:#6751e4;color:#fff}.targeta-de-amigos{background:#eb3bc8;color:#fff}.targeta-que-hablan{background:#eba53b;color:#fff}.targeta-seres-queridos{background:#eb3bdc;color:#fff}.resultado{background:#e68541;color:#fff;border-radius:5px}",""]),e.exports=t},261:function(e,t,o){"use strict";o(34);var r={components:{Tests:o(258).a},data:function(){return{resultadoFrase:null,x:!0,tabIndex:0,disabled1:!1,disabled2:!0,disabled3:!0,disabled4:!0,result:!0,aleatorio:0,frases:[{text:"LA MAGIA DEL PRIMER AMOR ES LA IGNORANCIA DE QUE PUEDE TENER UN FINAL"},{text:"LAS RELACIONES BASADAS EN LA OBLIGACIÓN CARECEN DE DIGNIDAD"},{text:"TODO AMANTE ES UN SOLDADO EN GUERRA"},{text:"SOLO PODEMOS APRENDER A AMAR AMANDO"},{text:"LOS AMANTES CÉLEBRES DE LA HISTORIA VIVIERON SIEMPRE SEPARADOS "},{text:"ES MÁS FÁCIL QUEDAR BIEN COMO AMANTE QUE COMO MARIDO, YA QUE ES MÁS FÁCIL SER OPORTUNO E INGENIOSO DE VEZ EN CUANDO QUE TODOS LOS DÍAS"},{text:"Te necesito como el aire para respirar."},{text:"Todo es muy difícil antes de ser fácil."},{text:"No creas todo lo que piensas."},{text:"Si el amor aprieta, no es tu talla."},{text:"No debes pensar si eres feliz, tan solo serlo."},{text:"Nunca es demasiado tarde para hacer lo que ames."},{text:"Cuando llevas el sol por dentro no importa si afuera llueve."},{text:"Si quieres ser feliz; ama, perdona y olvida."},{text:"Aprovecha el tiempo o aprende a detenerlo."},{text:"No eres lo que logras, eres lo que superas."},{text:"Da siempre lo mejor de ti, lo que plantes ahora, lo cosecharás mas tarde."},{text:"Sin locura no hay felicidad."},{text:"Hazlo y si te da miedo, hazlo con miedo."}],colorFavorito:[{text:"Negro"},{text:"Azul"},{text:"Morado"},{text:"Plateado"},{text:"Rosado"},{text:"blanco"},{text:"Lila"},{text:"Amarillo"},{text:"Rojo"},{text:"Beige"},{text:"Maron"},{text:"Turquesa"},{text:"Gris"},{text:"Anaranjado"}],tiempo:[{text:"De 1 a 2 dias"},{text:"De 3 a 4 dias"},{text:"De 5 a 7 dias"},{text:"De 1 a 2 semanas"},{text:"De 3 a 4 semanas"},{text:"Hace un mes o mas"}],fraseDefinicion:[{text:"SIEMPRE TENEMOS MIEDO DE INTERESARNOS DEMASIADO, POR TEMOR A QUE EL OTRO NO SE INTERESE NADA"},{text:"NUNCA POR ENCIMA DE TI, NUNCA POR DEBAJO DE TI, SIEMPRE A TU LADO"},{text:"QUIEN AMA, DELIRA"},{text:"Cuando estoy contigo nada me molesta y todo es perfecto a tu alrededor, te adoro"},{text:"Mi vida, mi corazón ya tiene dueña. Eres tú"},{text:"No se lo que vi en ti pero no lo veo en nadie más."},{text:"Te conocí como a cualquiera, sin buscar nada, y terminé queriéndote como a nadie, encontrándolo todo."},{text:"Gracias por siempre ser mi arco iris al final de la tormenta."},{text:"Eres el mejor novio del mundo, la luz que alumbra mi camino."},{text:"Amo cada parte de ti desde tu cabeza hasta tus pies, te amo como eres, te amo a ti completo."},{text:"Te amo de aquí a la luna, al infinito, hasta el fin del universo."},{text:"Los momentos mas felices son aquellos cuando estamos juntos."},{text:"Si pudiera escoger dos momentos para estar contigo serían: Ahora y por siempre."},{text:"Un amor como el nuestro, está en las manos de Dios."},{text:"Tú eres mi novio, mi amigo, mi confidente, mi hermano, mi todo."},{text:"No hay mal que 100 años dure ni tristeza que una amiga no cure."},{text:"Detrás de una gran mujer como tú hay una amiga loca que la anima constantemente."},{text:"Una buena amiga conoce todas tus historias, una mejor amiga las ha vivido contigo."},{text:"Lo divertido del camino es perderse con amigas."},{text:"Con amigas como tú a mi lado, hay diversión para rato."}],resultadoTest:["Somos lo que hacemos reiteradamente. La excelencia, entonces, no es una acción sino un hábito.","El único lugar donde tus sueños se vuelven imposibles es en tu propio pensamiento","Si sólo veo mi objetivo, los obstáculos deben hacerse a un lado","Primero sueño mi pintura, y luego pinto mi sueño","Todo lo que somos es el resultado de nuestros pensamientos","Aquel que mira hacia afuera sueña; aquel que mira hacia adentro despierta.","Si quieres triunfar, no te quedes mirando la escalera. Empieza a subir, escalón por escalón, hasta que llegues arriba.","Los grandes espíritus siempre han tenido que luchar contra la oposición feroz de mentes mediocres","Toda crítica tiene algo de verdad … sobre quien lo dice","Es duro fracasar en algo, pero es mucho peor no haberlo intentado","Saber no es suficiente; tenemos que aplicarlo. Tener voluntad no es suficiente: tenemos que implementarla.","Avanza tan lejos como puedas; Cuando llegues hasta ahi veras como llegar mas lejos.","La única forma de conocer nuestros limites es dando nuestro mejor esfuerzo, el cual siempre puede ser superado","La vida no se trata de que tan fuerte golpees sino de que tan fuerte seas golpeado y no te des por vencido","Solo una cosa convierte un sueño en imposible: el miedo a fracasar","Es mejor estar preparado para una oportunidad y no tenerla, que tener una oportunidad y no estar preparado","Encuentra aquello que mas te gusta hacer y ve tras ello como si tu vida dependiera de eso … porque depende!","Si puedes soñarlo… puedes hacerlo","La inspiración existe pero ella tiene que encontrarte trabajando","Felicidad no es hacer lo que uno quiere sino querer lo que uno hace","La vida es lo que ocurre a tu lado mientras haces otros planes","Quiero y puedo. Espera lo mejor de ti mismo","Las dificultades preparan a personas comunes para destinos extraordinarios","No permitas que el ruido de las opiniones ajenas silencie tu voz interior","El éxito llega cuando tus sueños superan tus excusas","Piensa, cree, sueña y atrevéte","El dolor es inevitable, el sufrimiento es cuestión de elección","El pesimista se queja del viento, el optimista espera que cambie, pero el realista acomoda las velas"," Lo que no se empieza nunca tendrá un final","Cuando dejas de soñar dejas de vivir","No me voy a limitar a mí misma sólo porque otras personas no aceptarán el hecho de que yo puedo hacer otra cosa","Las tristezas no se quedan para siempre cuando caminamos en dirección a lo que siempre deseamos.","Elige un trabajo que te guste, y nunca tendrás que volver a trabajar en tu vida"]}},methods:{set:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado"),this.disabled1=!0,this.disabled2=!1}.bind(this),5e3)},set2:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.disabled2=!0,this.disabled3=!1,this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado")}.bind(this),5e3)},set3:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado"),this.disabled3=!0,this.disabled4=!1}.bind(this),5e3)},set4:function(e){this.$bvModal.show("resultado"),this.x=!1,setTimeout(function(){this.disabled4=!0,this.result=!1,this.tabIndex=this.tabIndex+1,this.$bvModal.hide("resultado"),this.x=!0,this.aleatorio=Math.floor(29*Math.random())+1,console.log(this.aleatorio)}.bind(this),5e3)},frasex:function(e){this.resultadoFrase="Hurtado",console.log(e)},Resetear:function(){this.tabIndex=0,this.result=!0,this.disabled1=!1}}},n=(o(259),o(60)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"px-2"},[o("b-card",{staticClass:"targeta text-center",attrs:{title:"Cual es la frase que te define en la vida?","sub-title":"Frases bonitas"}},[o("button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-scrollable",modifiers:{"modal-scrollable":!0}}],staticClass:"btn btn-warning",attrs:{type:"button"}},[e._v("Abrir test")])]),e._v(" "),o("b-modal",{staticClass:"warning",attrs:{id:"modal-scrollable",scrollable:"",size:"xl",title:"Elige una frase bonita"}},[o("b-tabs",{attrs:{small:"",card:""},model:{value:e.tabIndex,callback:function(t){e.tabIndex=t},expression:"tabIndex"}},[o("b-tab",{attrs:{disabled:e.disabled1,title:"Test 1"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Elije la frase que mas te guste")])]),e._v(" "),e._l(e.frases,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set(i.text)}}},[e._v("\n                "+e._s(i.text)+"\n            ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled2,title:"Test 2"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Elige el color tu color favorito")])]),e._v(" "),e._l(e.colorFavorito,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set2(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled3,title:"Test 3"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("hace cuanto regalaste algo?")])]),e._v(" "),e._l(e.tiempo,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set3(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.disabled4,title:"Test 4"}},[o("div",{staticClass:"my-4 text-center"},[o("h5",{staticClass:"success pa-4"},[e._v("Elige una frase que te defina")])]),e._v(" "),e._l(e.fraseDefinicion,(function(i){return o("blockquote",{key:i.key,staticClass:"my-4 blockquote blockquotes",attrs:{cite:""},on:{click:function(t){return e.set4(i.text)}}},[e._v("\n              "+e._s(i.text)+"\n          ")])}))],2),e._v(" "),o("b-tab",{attrs:{disabled:e.result,title:"Resultado"}},[o("div",{staticClass:"text-center mb-4 pb-4 resultado"},[o("h3",{staticClass:"mt-3"},[e._v("Tu resultado")]),e._v(" "),o("div",{staticClass:"text-center p-4 resultado"},[o("p",{staticClass:"blockquote"},[e._v(e._s(e.resultadoTest[e.aleatorio]))]),e._v(" "),o("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(t){e.Resetear()}}},[e._v("Jugar Otra Vez")])])]),e._v(" "),o("Tests")],1)],1)],1),e._v(" "),o("b-modal",{attrs:{id:"resultado","hide-footer":""},scopedSlots:e._u([{key:"modal-title",fn:function(){return[o("div",{staticClass:"text-center"},[o("h5",[e._v("Frase.me")])])]},proxy:!0}])},[e._v(" "),o("div",{staticClass:"d-block text-center"},[e.x?o("pre",{staticClass:"h5"},[e._v(e._s(e.resultadoFrase))]):o("div",[o("p",{staticClass:"h5"},[e._v("Espera un momento...")]),e._v(" "),o("b-spinner",{attrs:{variant:"success",type:"grow",label:"Spinning"}})],1)]),e._v(" "),o("b-button",{staticClass:"mt-3",attrs:{block:""},on:{click:function(t){return e.$bvModal.hide("resultado")}}},[e._v("Cerrar")])],1)],1)}),[],!1,null,null,null);t.a=component.exports}}]);