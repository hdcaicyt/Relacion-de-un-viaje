// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('section')
  this.addField('subtitle')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  subtitle: "página 1",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \n Relación del viajeLa inclinación que siempre tuve a viajar, me hizo abandonar siendo muy joven la casa de mi padre, y puedo asegurar que no me impulsaba tanto a ello la mera curiosidad de ver países extraños, cuanto la esperanza que abrigaba de adquirir conocimientos y desarrollar mi inteligencia, lo que en el futuro podría serme provechoso no sólo en mis negocios particulares, sino también haciéndome más útil a mi Rey y a mi patria, el cual declaro fue el principal móvil de mi viaje. Fui primero a España, donde permanecí el tiempo suficiente para aprender el idioma, particularmente en Cádiz. \n\n\n\n\n",
  id: 0
});
index.addDoc({
  subtitle: "página 2",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nDominábame el deseo de ir a las Indias Occidentales, posesión de los españoles; con frecuencia había oído hablar de la belleza y fertilidad del país y de las grandes riquezas que se extraían de él; pero ocurrió que tuve muchas dificultades para poner en práctica mi proyecto, porque es muy difícil para un extranjero trasladarse a aquellas regiones. Pero se presentó una oportunidad que favoreció mis designios y me dio ocasión de llevarlos adelante, de la siguiente manera.En el año 1654, Oliverio Cromwell, a la sazón Protector de la Comunidad de Inglaterra, envió al Almirante Blake con una flota de buques de guerra hacia las costas de Algarve y Andalucía, a esperar los galeones españoles que vienen anualmente de las Indias. Habiendo sido advertidos de ello los españoles, resolvieron equipar una flota con toda rapidez para oponerse a los ingleses y frustrar sus designios. Con ese fin enviaron veintiocho buques de guerra y seis brulotes, bajo el mando de Don Pablo de Contreras, cuyo Vice-Almirante era el Almirante Castana a bordo de cuyo buque me hallaba.Las dos escuadras se avistaron mutuamente cerca del Cabo San Vicente, donde permanecieron muchos días;\n\n\n\n\n",
  id: 1
});
index.addDoc({
  subtitle: "página 3",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \n mas los ingleses, dándose cuenta de que no obtendrían nada con ello, se retiraron hacia Lisboa y los españoles pusieron la proa hacia Cádiz, adonde todos los galeones llegaron felizmente a comienzos del año 1655, excepto el Vice-Almirante, quien se perdió en el Canal de Bahama, sobre las costas de la Florida.Algún tiempo después de esto, por haber declarado los ingleses más abiertamente la guerra a los españoles con la toma de Jamaica, la navegación a las Indias Occidentales estuvo largo tiempo interrumpida por los cruceros de aquellos, que rondaban entre Cádiz y Sanlúcar, donde interceptaron varios buques que volvían de las Indias ricamente cargados, se apoderaron de uno de los mayores, quemaron otros dos y pusieron en fuga a los restantes; después fueron a las Canarias, donde quemaron la mayor parte de la flota que había llegado de Nueva España y esperaba órdenes de Madrid acerca de la ruta a tomar para escapar de las manos de los ingleses.Mientras sucedían estas cosas, los holandeses, que trataron de sacar provecho de las dificultades en que se hallaba envuelta España, enviaron varios buques al Río de la Plata, cargados con mercaderías y negros, los cuales habían embarcado en Angola y el Congo. Habiendo llegado estos buques a dicho río y remontándolo hasta Buenos Aires,\n\n\n\n\n",
  id: 2
});
index.addDoc({
  subtitle: "página 4",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nlos habitantes de la plaza, que durante largo tiempo se habían visto desprovistos de las mercancías que estaban acostumbrados a recibir por los galeones españoles (a quienes los ingleses impedían hacer sus constantes viajes) y que por otra parte carecían de negros y otras cosas, trabajaron tanto al Gobernador, que, a cambio de un presente que obligaron a los holandeses a hacerle y satisfaciendo el pago de los derechos debidos al Rey de España, se les permitió desembarcar y comerciar allí.Entretanto los ministros españoles, temiendo que la interrupción del comercio y la escasez de mercaderías europeas en aquellas regiones indujera a los habitantes a negociar con extranjeros, cosa que en interés de ellos está impedir cuanto pudiesen, creyeron conveniente otorgar licencia a varios de sus súbditos particulares para comerciar con las Indias por su propia cuenta y riesgo. Cierto caballero tomó una de dichas licencias y aparejó un buque en Cádiz, donde yo residía a la sazón; resolví embarcarme en él, y eso con la mejor buena voluntad, porque tiempo atrás tuve algunos negocios con dicho caballero. Muy amistosamente consintió en dejarme ir bajo su apellido, como sobrino suyo, para que pudiera yo ocultar mi calidad de extranjero,\n\n\n\n\n",
  id: 3
});
index.addDoc({
  subtitle: "página 5",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nque, de saberse, hubiera impedido mi viaje, porque en España no permiten sino que los españoles nativos vayan en sus buques a las Indias. Izamos velas a fines de diciembre de 1657, en un buque de cuatrocientas cincuenta toneladas, y en ciento cinco días llegamos a la desembocadura del Río de la Plata, donde nos encontramos con una fragata francesa, cuyo comandante era el Capitán Foran, y luchamos con ella durante algún tiempo. Nos libramos de la fragata y continuamos nuestra ruta hasta que llegamos frente a Buenos Aires, donde encontramos veinte buques holandeses y dos ingleses, cargados de regreso con cueros de toro, plata en láminas y lana de vicuña, que habían recibido en cambio de sus mercaderías. Pocos días después, tres de los buques holandeses, saliendo de la rada, se encontraron con el Capitán Foran y otra fragata denominada La Mareschale, comandada por el Caballero De Fontenay. Después de dura lucha, los holandeses abordaron y se apoderaron de La Mareschale, pasaron al filo de la espada a todos sus hombres y al caballero junto con los demás.Este accidente alarmó a los de Buenos Aires e hizo que se pusieran en guardia, imaginándose que había una escuadra francesa que venía al río para realizar una intentona contra su país.\n\n\n\n\n",
  id: 4
});
index.addDoc({
  subtitle: "página 6",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nPor lo tanto resolvieron mandar pedir auxilio al Conde Alba de Liste, Virrey de todas las posesiones españolas en la América del Sur y residente en Lima, en el Perú, quien hizo reclutar con mucha dificultad y alguna violencia un centenar de hombres, los cuales no fueron enviados hasta ocho o nueve meses después, bajo las órdenes de Don Sebastián Comacho.Pero antes de seguir más adelante, es conveniente que anote mis observaciones acerca del Río de la Plata y los países a través de los cuales corre. En aquellas regiones es llamado el Paraguay, aunque más vulgarmente el Gran Paraná, probablemente porque el río Paraná desemboca en él arriba de la Villa de las Corrientes. Su boca (que se encuentra a los treinta y cinco grados de latitud sur de aquel lado de la línea ecuatorial) está entre el Cabo de Castillos y el Cabo de San Antonio, alrededor de ochenta leguas del uno y del otro. Aunque sea lo bastante profundo en todas partes, la ruta más común en él, y la más utilizada por los marinos, está del lado norte, desde Castillos hasta Montevideo, el cual está a medio camino de Buenos Aires, y a pesar de que hay un canal en el mismo lado norte desde Montevideo a Buenos Aires, cuya menor profundidad es de tres brazas,\n\n\n\n\n",
  id: 5
});
index.addDoc({
  subtitle: "página 7",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nsin embargo, para mayor seguridad, cruzan frente a Montevideo hacia el Canal Sur, porque es más ancho y tiene tres brazas y media de agua en el lugar menos profundo. Todo el fondo es fangoso, hasta dos leguas de Buenos Aires, donde se halla un banco de arena; allí toman prácticos para que los conduzcan hasta un lugar llamado El Pozo, justamente frente a la ciudad, distante un cañonazo de la playa, adonde no pueden llegar más buques que los que tengan licencia del Rey de España; aquellos que no tengan semejante permiso, están obligados a anclar una legua más abajo. El río está lleno de peces, pero de todos ellos apenas hay siete u ocho clases que sean comestibles. Hay abundancia de esas ballenas llamadas Gibars y lobos marinos, que comúnmente paren sus cachorros en la playa, y cuya piel es adecuada para varios usos. Me contaron que cinco o seis años antes de que yo llegara allí, el río se quedó casi en seco durante algunos días, no conservando más agua que una poca en el canal central, y en realidad tan poca que la podían atravesar a caballo, como uno puede hacerlo en cualquiera de los ríos que desembocan en el de La Plata, en los cuales hay también muchísimas nutrias, con cuyas pieles se visten los salvajes.\n\n\n\n\n",
  id: 6
});
index.addDoc({
  subtitle: "página 8",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nLa región del norte del Río de la Plata es de gran extensión, habitada tan sólo por salvajes, llamados charrúas. La mayor parte de las islitas diseminadas a lo largo del río y las playas, están cubiertas de bosques infestados de cerdos salvajes. Desde el cabo de Castillos arriba hasta el Río Negro, lo mismo que desde dicho cabo hasta San Pablo, limítrofe con el Brasil, las costas están deshabitadas, aunque el país, especialmente a lo largo del río, parece ser muy bueno, atravesado por arroyuelos que bajan de los cerros hasta las llanuras. Los españoles se establecieron allí al principio, pero después se trasladaron a Buenos Aires, a causa de las dificultades que presentaba el cruce del Gran Paraná para ir al Perú.Desembarqué con frecuencia más allá del Río Negro, pero nunca me interné más de tres cuartos de legua hacia el interior. Se ven pocos salvajes, ya que tienen sus viviendas bastante lejos, hacia el interior. Aquellos con quienes me encontré eran bien formados, gastaban largos cabellos y muy escasa barba; no vestían más que una gran piel, formada de pequeños trozos unidos, que les colgaba desde el cuello hasta los talones, y un pedazo de cuero bajo los pies, atado con tiras a los tobillos. Como adorno usan en la cabeza una vincha de género,\n\n\n\n\n",
  id: 7
});
index.addDoc({
  subtitle: "página 9",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nla cual les cubre la frente y les mantiene los cabellos hacia atrás. Las mujeres no tienen otro vestido que esas pieles, que se atan a la cintura, y se cubren la cabeza con una especie de sombrerito hecho de juncos de diversos colores.Desde el Río Negro hasta Las Corrientes y el río Paraná, el país está bien poblado de toros y vacas; hay también muchísimos ciervos, cuyas pieles se venden por legítima piel de ante. Los salvajes de la región del Río Negro son los únicos, desde el mar hasta allí, que mantienen correspondencia con los de Buenos Aires, y los Caciques y Curacas, sus jefes, rinden homenaje al gobernador de la plaza, de la cual están sólo a veinte leguas. Una de las principales poblaciones españolas de esa banda es Las Siete Corrientes, situada cerca del punto donde se encuentran el Paraguay y el Paraná. Sobre el Paraná se hallan tres o cuatro aldeas, bastante alejadas unas de las otras y escasamente pobladas, aunque la región es muy apropiada para los viñedos y ya tiene plantados bastantes como para abastecer de vino a los pueblos vecinos. Los habitantes están bajo la jurisdicción de un gobernador residente en Asunción,\n\n\n\n\n",
  id: 8
});
index.addDoc({
  subtitle: "página 10",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nque es la plaza más importante que tienen los españoles en aquel lugar, y se encuentra aguas arriba del río Paraguay, sobre la banda del norte. Es la ciudad metropolitana, sede de un Obispo; tiene varias iglesias y conventos muy limpios, y está bien poblada de habitantes, porque muchas gentes ociosas, tales como las que han dilapidado sus fortunas y ya no pueden vivir en España o en el Perú, se reúnen allí como en su último refugio. La tierra abunda en maíz, mijo, azúcar, tabaco, miel, ganados, madera de roble apropiada para construcciones navales, pinos para mástiles y particularmente en esa yerba llamada yerba del Paraguay, con la cual realizan un gran negocio en todas las Indias Occidentales. Esto obliga a los comerciantes de Chile y del Perú a mantener correspondencia con los del Paraguay, porque sin esa yerba (con la cual preparan una bebida refrescante, con agua y azúcar, que debe beberse tibia) los habitantes del Perú, salvajes y otros, especialmente los que trabajan en las minas, no podrían subsistir, porque el suelo está lleno de vetas minerales y los vapores que se desprenden los sofocarían y nada sino ese brebaje puede restaurarlos, ya que los hace revivir\n\n\n\n\n",
  id: 9
});
index.addDoc({
  subtitle: "página 11",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \ny los devuelve a su antiguo vigor.En esta ciudad de Asunción los indios nativos, lo mismo que los españoles, son muy corteses y obsequiosos con los extranjeros. Se entregan a los goces con muchísima libertad, aun con respecto a las mujeres, de suerte que, siéndoles necesario con frecuencia dormir al aire libre (a causa del excesivo calor) tienden sus mantas en las calles y pasan la noche allí acostados, hombres y mujeres juntos, sin que nadie se escandalice por ello. Teniendo abundancia de toda clase de cosas buenas para comer y beber, se entregan a los placeres y a la holganza, sin preocuparse de comerciar con el exterior, ni juntar dinero, el cual, por esta causa, es muy escaso entre ellos, contentándose con cambiar sus propios productos por otros que les son más necesarios o más útiles.Más hacia el interior del país, es decir hacia el nacimiento del río Uruguay, existen muchos establecimientos de colonias, transplantadas allí por los misioneros jesuitas, quienes influyeron sobre los salvajes de aquellas regiones, que son naturalmente tratables, para que abandonaran sus bosques y montañas y se fueran\n\n\n\n\n",
  id: 10
});
index.addDoc({
  subtitle: "página 12",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \na vivir juntos, en aldeas, en una comunidad civil, donde los instruyeron en la religión cristiana, enseñándoles mecánica, a tocar instrumentos musicales y otras artes convenientes a la vida humana. De suerte que los misioneros, que vinieron por un motivo religioso, se ven ampliamente recompensados por las ventajas temporales que pueden cosechar aquí. La noticia de que existían minas de oro en esta región no se pudo tener tan secreta que los españoles no tuvieran conocimiento de ella, y entre otros, Don Jacinto de Lariz, Gobernador de Buenos Aires, quien hacia el año 1653 recibió órdenes del Rey de España de ir a visitar esos establecimientos y examinar su riqueza. Al principio fue bien recibido, pero advirtiendo que empezaba a inspeccionar sus riquezas y buscar oro, tomaron las armas, obligándolo, a él y sus acompañantes, en número de cincuenta, a abandonar el país. El Gobernador que le sucedió se informó más particularmente del asunto y para hacer mejor uso de sus conocimientos, entró en una estricta alianza con los jesuitas de su jurisdicción, quienes mantenían correspondencia\n\n\n\n\n",
  id: 11
});
index.addDoc({
  subtitle: "página 13",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \ncon el resto de la fraternidad. Y habiendo recibido una considerable suma de los holandeses, para que los dejaran comerciar en Buenos Aires, convino con los jesuitas en que le proporcionaran cien mil coronas en oro en cambio de plata, por la mayor facilidad del transporte. Pero este mismo Gobernador fue arrestado por orden del Rey de España, por permitir el comercio de los holandeses con Buenos Aires, y se apoderaron de su oro, que le fue confiscado, oro que, una vez probado, resultó ser mucho más fino que el del Perú, y por estas y por otras circunstancias, descubrieron que procedía de las minas halladas por los jesuitas en estas regiones.En la banda sur del Río de la Plata, desde el Cabo San Antonio hasta treinta leguas de Buenos Aires, la navegación es peligrosa, a causa de los bancos que hay en el camino; por lo tanto van siempre por la banda norte, como lo dije antes, hasta llegar a cierta altura; entonces cruzan a la banda sur, la cual es muy segura, especialmente cuando el viento sopla contra la corriente del río y lo hincha; porque cuando sopla el viento del oeste, del lado de tierra, bajan las aguas; sin embargo, cuando el agua está en su más bajo nivel, alcanza a tres brazadas y media de profundidad, tanto en el caudal del norte como en el del sur. Cuando entramos\n\n\n\n\n",
  id: 12
});
index.addDoc({
  subtitle: "página 14",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nen el canal del sur, avistamos esas extensas llanuras que llegan hasta Buenos Aires y desde allí hasta el río Saladillo, a sesenta leguas antes de Córdoba, las cuales están tan pobladas de toda clase de ganados que a pesar de que multitud de animales se matan diariamente para aprovechar los cueros, no hay señal de su disminución.Tan pronto como llegamos al Cabo de Buenos Aires dimos noticia de ello al Gobernador, quien entendiendo que teníamos la licencia del Rey de España para ir allí (sin la cual no nos hubiera podido permitir la entrada en la plaza, salvo que hubiera quebrantado sus órdenes) envió los oficiales del Rey a bordo para que visitaran nuestro buque, de acuerdo con la práctica; hecho lo cual, desembarcamos las mercaderías y las guardamos en un depósito alquilado por el tiempo de nuestra permanencia. Consistían principalmente en tela de hilo, particularmente de la fabricada en Rouen, que se vende muy bien en aquellos países; así también sedas, cintas, hilo, agujas, espadas, herraduras y otros artículos de hierro, herramientas de trabajo de todas clases, drogas, especias, medias de seda y lana, paños, sargas y otras mercaderías de lana y generalmente todo artículo\n\n\n\n\n",
  id: 13
});
index.addDoc({
  subtitle: "página 15",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \ndestinado al vestido, lo cual, según estábamos informados, eran las mercaderías más propias para esas regiones. Ahora bien, es costumbre que cada vez que un buque con licencia llega a Buenos Aires (es decir, que tiene comisión para ello del Rey de España), el Gobernador de la plaza o el Capitán del buque despache un mensajero al Perú, con las cartas de España, si es que hay alguna, y también para advertir a los comerciantes de su llegada, con lo cual algunos de ellos salen inmediatamente para Buenos Aires o bien envían órdenes a sus corresponsales para que compren las mercaderías que creen convenientes. Me tocó en suerte ser enviado para cumplir ambos encargos, porque junto con una gran cantidad de cartas que habíamos traído con nosotros había un paquete grande de su Católica Majestad para el Perú, guardado en un cajón de plomo, como suelen ir todos los despachos de la Corte Española para las Indias, con el objeto de que si el buque que los lleva estuviera en inminente peligro de caer en manos de los enemigos, puedan arrojarlo por encima de la borda y que se hunda. Este paquete fue confiado a mis cuidados: contenía muchas cartas para el Virrey del Perú y otros funcionarios principales de aquellas regiones, anunciándoles el nacimiento del\n\n\n\n\n",
  id: 14
});
index.addDoc({
  subtitle: "página 16",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nPríncipe de España; llevaba también un inventario, certificado por los oficiales del Rey en Buenos Aires, de la mayor parte de nuestra carga, para hacerlo conocer a los comerciantes de Potosí. Estos daban crédito a las condiciones de las mercaderías, tales como estaban especificadas en el inventario, y así podían comprar lo que más les gustaba; pero los efectos no llegaban a su poder hasta siete u ocho meses después.Descripción de Buenos AiresAntes de decir algo acerca de mi viaje al Perú, quiero dejar constancia de las cosas más notables que observé en Buenos Aires mientras permanecí allí. El aire es bastante templado, muy semejante al de Andalucía, aunque no tan cálido; las lluvias caen casi con tanta frecuencia en verano como en invierno y la lluvia que cae en tiempo bochornoso produce diversas clases de sapos, animales que son muy comunes en estas regiones, pero no son venenosos.El pueblo está situado sobre un terreno elevado, a orillas del Río de la Plata, a tiro de mosquete del canal, en un ángulo de tierra formado por\n\n\n\n\n",
  id: 15
});
index.addDoc({
  subtitle: "página 17",
  chapter: "Relación del viaje",
  layout: "textoporpagina",
  content: "\n    \nun riacho, llamado Riachuelo, el cual desemboca en el río, a un cuarto de legua de la ciudad: esta comprende cuatrocientas casas, no tiene empalizada, ni muralla, ni foso, y nada la defiende sino un fortín de tierra, circundado por un foso, que domina el río, y tiene diez cañones de hierro, el mayor de los cuales es de a doce. Allí reside el Gobernador, que no tiene sino ciento cincuenta hombres de guarnición, los cuales están formados en tres compañías comandadas por tres capitanes, a los que nombra a voluntad; y efectivamente los cambia con tanta frecuencia que difícilmente hay un ciudadano rico que no haya sido capitán. Estas compañías no están siempre completas, porque los soldados son atraídos por la baratura de la vida en esas regiones y desertan frecuentemente, a pesar de los empeños en mantenerlos en el servicio por medio de una abundante paga, que es de cuatro reales diarios, que equivalen a un chelín y seis peniques ingleses, y un pan que es cuanto puede comer un hombre. Mas el Gobernador mantiene para su servicio ordinario, en una llanura inmediata, mil doscientos caballos mansos, para montar en caso de necesidad a los habitantes de la plaza y formar un pequeño cuerpo de caballería. Además de este fuerte, hay un pequeño bastión en la\n\n\n\n\n",
  id: 16
});
index.addDoc({
  subtitle: "página 18",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \ndesembocadura del riacho, donde mantienen una guardia; no hay sino dos cañones de hierro montados, de a tres. Este domina el lugar donde atracan las barcas para desembarcar las mercaderías o cargarlas, estando sujetas a la visita de los oficiales del bastión mientras cargan y descargan.Las casas del pueblo están hechas de barro, porque hay poca piedra en todas estas regiones hasta el Perú; están techadas con paja y cañas y no tienen pisos altos; todas las habitaciones son de un sólo piso y muy espaciosas; tienen grandes patios y detrás de las casas amplias huertas, llenas de naranjos, limoneros, higueras, manzanos, perales y otros frutales, con abundancia de hortalizas, zapallos, cebollas, ajo, lechuga, alberjas y habas; y especialmente sus melones son excelentes, pues la tierra es muy fértil y buena. Viven muy cómodamente y a excepción del vino, que es algo caro, tienen en abundancia toda clase de vituallas, como ser carne de vaca y ternera, de carnero y venado, liebres, conejos, gallinas, patos, gansos silvestres, perdices, palomas, tortugas y toda clase de aves silvestres, y tan baratas que se pueden comprar perdices a un penique la pieza\n\n\n\n\n",
  id: 17
});
index.addDoc({
  subtitle: "página 19",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \ny el resto en proporción. Asimismo abundan los avestruces, que andan en tropillas como el ganado y aunque su carne es buena, sin embargo nadie la come sino los salvajes. Hacen sombrillas con sus plumas, las cuales son muy cómodas para el sol. Sus huevos son buenos y todos los comen, aunque dicen que son de difícil digestión. Observé en estos animales una cosa muy notable y es que mientras las hembras están echadas sobre los huevos, tienen un instinto que les hace prever por la mantención de los polluelos: así, cinco o seis días antes de que salgan del cascarón, colocan un huevo en cada uno de los ángulos del lugar donde están y luego los rompen, de modo que cuando se pudren se crían gusanos y moscas en número prodigioso, los cuales sirven para alimentar a los pichones de avestruz desde el momento que nacen hasta que son capaces de ir más lejos en busca de alimento.Las casas de los habitantes de la clase elevada están adornadas con colgaduras, cuadros y otros ornamentos y muebles decorosos, y todos aquellos que tienen un pasar tolerable son servidos en vajilla de plata y tienen muchos sirvientes, negros, mulatos, mestizos, indios, cafres o zambos, los cuales son todos esclavos. Los negros provienen\n\n\n\n\n",
  id: 18
});
index.addDoc({
  subtitle: "página 20",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \nde la Guinea; los mulatos son hijos de un español con una negra; los mestizos son nacidos de un español y una india; los zambos de un indio y una mestiza: todos se pueden distinguir por su color y sus cabellos. Emplean a estos esclavos en sus casas o para cultivar sus campos, porque tienen grandes estancias, abundantemente sembradas con granos, como ser trigo, cebada y mijo o para cuidar sus caballos y mulas, que no se alimentan sino de pasto durante todo el año; o para matar toros salvajes; o, en fin, para hacer cualquier otra clase de trabajo.Toda la riqueza de estos habitantes consiste en ganados, que se multiplican tan prodigiosamente en esta provincia que las llanuras están casi totalmente cubiertas de ellos, particularmente toros, vacas, ovejas, caballos, yeguas, mulas, asnos, cerdos, venados y otros, de tal manera que si no fuera por el vasto número de perros que devoran los terneros y otros animales jóvenes, devastarían el país. Sacan tanto provecho de las pieles y cueros de estos animales, que un solo ejemplo será suficiente para demostrar hasta que punto podría ser aumentado en buenas manos. Los veintidós buques holandeses que encontramos en Buenos Aires, estaban cargados cada uno con 13 o 14.000 cueros de toro,\n\n\n\n\n",
  id: 19
});
index.addDoc({
  subtitle: "página 21",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \ncuando menos, cuyo valor asciende a 300.000 livers o sean 33.500 libras esterlinas, comprados como lo fueron por los holandeses a siete u ocho reales cada uno, esto es, menos de una corona inglesa, y vueltos a vender en Europa por veinticinco chelines ingleses al menos. Cuando expresé mi asombro a la vista de tan infinito número de cabezas de ganado, me contaron la estratagema de que se valen a veces, cuando temen el desembarco de algún enemigo, y que es cosa de maravillarse mucho; consiste en lo siguiente: arrean tal rebaño de toros, vacas, caballos y otros animales hasta la playa, que resulta completamente imposible a cierto número de hombres, aunque no tengan miedo de la furia de dichos animales, abrirse paso a través de tan inmensa tropa de bestias. Los primeros habitantes de esta plaza pusieron cada uno su marca sobre los animales que pudieron atrapar y los metieron dentro de sus cercados, pero se multiplicaron tan pronto que se vieron obligados a soltarlos, y ahora van y los matan a medida que los necesitan o tienen ocasión de vender cueros en una cantidad notable. En la actualidad sólo marcan aquellos caballos y mulas que atrapan para domar y amaestrar, para servirse de ellos. Algunas personas hacen un gran negocio enviándolos al\n\n\n\n\n",
  id: 20
});
index.addDoc({
  subtitle: "página 22",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \nPerú, donde producen cincuenta patacones o sean 11 libras, 13 chelines y 4 peniques la yunta. La mayor parte de los vendedores de ganados son muy ricos, pero de todos los comerciantes, los de mayor importancia son los que comercian con mercaderías europeas, muchos de los cuales tienen fama de poseer de doscientas a trescientas mil coronas, o sean 67.000 libras esterlinas. De modo que un comerciante que no tenga bienes por más de quince o veinte mil coronas es considerado como un mero vendedor al menudeo. De estos últimos hay cerca de doscientas familias en el pueblo, lo que hacen quinientos hombres de armas llevar, además de sus esclavos, que son tres veces en número, aunque no se les cuenta para la defensa, porque no se les permite llevar armas.De esta suerte, los españoles, los portugueses y sus hijos (entre los cuales los nacidos en el país son llamados criollos, para distinguirlos de los nativos de España) y algunos mestizos, forman la milicia, que, con los soldados de la guarnición, componen un cuerpo de más de seiscientos hombres, como los computé en varias revistas, porque tres veces al año, en días festivos, desfilan a caballo en las inmediaciones de la ciudad. Observé que había entre ellos muchos viejos que no llevaban armas de fuego, sino una espada pendiente al costado, una lanza en la mano y una rodela\n\n\n\n\n",
  id: 21
});
index.addDoc({
  subtitle: "página 23",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \nsobre el hombro. También la mayor parte de ellos son casados y padres de familia y en consecuencia no tienen mucho estómago para los combates. Les gusta su tranquilidad y el placer y son enteramente devotos de Venus. Confieso que en cierta medida son disculpables en este punto, porque la mayor parte de las mujeres son extremadamente hermosas, bien formadas y blancas, y con todo tan fieles a sus maridos, que ninguna tentación puede inducirlas a aflojar el nudo sagrado, pero también si los maridos transgreden, a menudo son castigados con el veneno o el puñal. Las mujeres son más en número que los hombres. Además de los españoles hay unos pocos franceses, holandeses y genoveses, pero todos pasan por españoles; de otro modo no podrían residir aquí, especialmente aquellos que difieren en su religión de la Católica Romana, porque aquí está establecida la Inquisición.La renta del Obispado alcanza a tres mil patacones por año o sean 700 libras esterlinas. Su diócesis comprende este pueblo y Santa Fe, con las estancias pertenecientes a ambos. Ocho o diez sacerdotes ofician en la Catedral, que está hecha de barro, lo mismo que las casas. Los jesuitas tienen un colegio; los dominicos, los recoletos\n\n\n\n\n",
  id: 22
});
index.addDoc({
  subtitle: "página 24",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \ny los religiosos de la Merced, tienen cada uno un convento. También hay un hospital, pero hay tan pocos pobres en estos países, que sirve de poco.Viaje desde Buenos Aires hasta el PerúSalí de Buenos Aires y tomé el camino de Córdoba, dejando a Santa Fe a mi derecha, de cuyo lugar recibí esta noticia.Es una población española dependiente de Buenos Aires: el Comandante no es más que un Teniente y no hace nada sino por orden del Gobernador de Buenos Aires. Es un pueblito que comprende veinticinco casas, sin murallas, fortificaciones ni guarnición, distante ochenta leguas hacia el norte de Buenos Aires, situado sobre el Río de la Plata: hasta allí podrían llegar grandes buques si no fuera por un enorme banco que obstruye el paso un poco más arriba de Buenos Aires. A pesar de todo es una posta muy ventajosa porque es el único paso desde el Perú, Chile y Tucumán hacia el Paraguay y en cierta manera el depósito de las mercaderías\n\n\n\n\n",
  id: 23
});
index.addDoc({
  subtitle: "página 25",
  chapter: "Descripción de Buenos Aires",
  layout: "textoporpagina",
  content: "\n    \nque se traen desde allí, particularmente esa yerba de la cual ya hablé, sin la cual no pueden pasarse en esas provincias. El suelo es aquí tan bueno y tan fértil como en Buenos Aires, y no teniendo la población nada notable que difiera de lo que observé en Buenos Aires, la dejo y continúo con mi viaje.Se cuentan ciento cuarenta leguas de Buenos Aires hasta Córdoba y como algunas partes del camino están deshabitadas en largos trechos, me proveí antes de la partida de todo aquello que me informaron que me sería necesario. Así partí, llevando por guía a un salvaje, con tres caballos y tres mulas, unos para llevar el equipaje y el resto para cambiar en el camino, cuando se cansara el que montaba.Desde Buenos Aires hasta el río Luján y aun más lejos, hasta el río Arrecifesrefiere al Río Arrecifes., en treinta leguas pasé por varias poblaciones y estancias cultivadas por españoles, pero más allá del Arrecife, hasta el río Saladillo, no vi ninguna. Haré observar de paso que estos ríos, como todos los demás de las provincias de Buenos Aires, Paraguay y Tucumán que desembocan en el Río de la Plata, son vadeables a caballo; pero cuando las lluvias u otro\n\n\n\n\n",
  id: 24
});
index.addDoc({
  subtitle: "página 26",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \naccidente los hace crecen, el viajero las debe atravesar a nado o bien colocarse sobre un bulto por el estilo de una balsa, que un salvaje arrastra hasta el otro lado. Yo no sabía nadar, así que me vi obligado a hacer uso de este expediente dos o tres veces, cuando no pude hallar un vado. El sistema fue así: mi indio mató un toro salvaje, le quitó el cuero, lo rellenó de paja y lo ató con tientos del mismo cuero, formando un gran bulto, sobre el cual me coloqué con mi equipaje; el indio pasó nadando, arrastrándome tras él por medio de una cuerda atada al bulto, y luego repasó el río e hizo pasar nadando los caballos y mulas hasta donde yo estaba.Todo el país entre el río Arrecifes y el Saladillo, aunque deshabitado, abunda en ganado y en toda clase de árboles frutales, excepto nogales y castaños. Hay bosques íntegros de durazneros, de tres o cuatro leguas de extensión, que producen excelente fruta, que no solamente comen cruda sino que también cocinan o secan al sol, para conservarla, como hacemos en Francia con las ciruelas. Raras veces usan otra madera que la de este árbol para el fuego, en Buenos Aires y sus alrededores. Los salvajes que viven en estas regiones se dividen en dos clases: los que voluntariamente\n\n\n\n\n",
  id: 25
});
index.addDoc({
  subtitle: "página 27",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nse someten a los españoles se llaman Pampistas y el resto Serranos; ambos se visten con pieles, pero los últimos caen sobre los Pampistas como sobre sus mortales enemigos, en cualquier lugar donde los encuentren. Todos pelean a caballo, ya sea con lanzas con punta de hierro o huesos afilados o también con arcos y flechas. Llevan un cuero de toro, con la forma de un jubón sin mangas, para protegerse el cuerpo. Los jefes que mandan sobre ellos en la guerra y en la paz, se llaman Curacas. Cuando se apoderan de un enemigo, vivo o muerto, se reúnen, y después de haberle reprochado que él o sus parientes fueron los causantes de la muerte de sus parientes o amigos, lo cortan y parten en pedazos, que asan un poco y los comen, haciendo con sus cráneos recipientes para beber. Se alimentan principalmente de carne, ya cruda ya preparada, y particularmente de potrillo, que prefieren a la ternera. Además pescan en abundancia en sus ríos. No tienen lugares fijos de residencia, sino que vagan de un punto a otro, varias familias juntas, viviendo en toldos.No pude informarme exactamente acerca de la religión que practicaban, pero me contaron que consideraban al Sol y a la Luna\n\n\n\n\n",
  id: 26
});
index.addDoc({
  subtitle: "página 28",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \ncomo deidades, y mientras viajaba vi a un salvaje arrodillado con la cara hacia el sol, gritando y haciendo gestos extraños con las manos y brazos. Me enteré por el salvaje que me acompañaba que era uno de esos que llaman Papas, que por la mañana se arrodillan hacia el Sol y por la noche hacia la Luna, para suplicar a esas caprichosas divinidades que les fueran propicias, que les dieran buen tiempo y la victoria sobre sus enemigos.No usan de grandes ceremonias en sus casamientos; pero cuando muere un pariente, después de haber frotado el cadáver con una tierra que lo consume todo menos los huesos, los guardan, y llevan de ellos tantos como convenientemente pueden, en una especie de cofres; y esto lo hacen en prueba de su afecto por sus parientes. Realmente no les dejan faltar sus buenos oficios durante la vida, ni en la enfermedad ni en la muerte.A lo largo del río Saladillo advertí muchísimos loros o papagayos, como los llaman los españoles, y ciertos pájaros llamados guacamayos, que son de diversos colores y dos o tres veces más grandes que un loro. El río mismo está lleno\n\n\n\n\n",
  id: 27
});
index.addDoc({
  subtitle: "página 29",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nde un pez que llaman dorado, que es muy bueno para comer. Hay un animal en él cuya carne nadie sabe si es comestible o venenosa; tiene cuatro patas y una cola larga, como un lagarto.Desde el Saladillo completamente hasta Córdoba se marcha a lo largo de un hermoso río, que abunda en pescado; no es ni ancho ni profundo, por lo que puede ser vadeado. En sus orillas se encuentra uno pequeñas plantaciones a cada tres o cuatro leguas; son como casas de campo habitadas por los españoles, los portugueses y los nativos, quienes tienen todas las comodidades necesarias para vivir y son muy educados y caritativos con los extranjeros. Su principal riqueza consiste en caballos y mulas, con los cuales comercian con los habitantes del Perú.Córdoba es un pueblo situado en una amena y fértil llanura, a orillas de un río, mayor y más ancho que aquellos de los que he hablado hasta ahora. Está compuesta de alrededor de cuatrocientas casas, construidas como las de Buenos Aires. No tiene ni fosos, ni fuerte para su defensa; el comandante de ella es Gobernador de todas las provincias de Tucumán y aunque es el lugar de su residencia ordinaria, con todo se marcha de cuando en cuando, en cuanto ve ocasión,\n\n\n\n\n",
  id: 28
});
index.addDoc({
  subtitle: "página 30",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \npara ir a pasar un tiempo en Santiago del Estero, en San Miguel de Tucumán (que es la ciudad capital de la provincia), en Salta y en Jujuy. En cada una de estas villas hay un Teniente, que tiene bajo sus órdenes a un Alcalde y a algunos Oficiales para la administración de justicia. El Obispo de Tucumán del mismo modo reside en Córdoba, donde la Catedral es la única iglesia parroquial de toda la ciudad; pero hay diversos conventos de monjes, a saber de dominicos, recoletos, y de los de la orden de la Merced, y uno de monjas. Los jesuitas tienen allí un colegio y su capilla es la más hermosa y más rica de todas.Los habitantes tienen riquezas en oro y plata, que adquieren por el comercio que tienen con las mulas, de las cuales proveen al Perú y otras regiones, comercio que es tan considerable que venden alrededor de 28 o 30.000 animales por año, los cuales crían en sus estancias. Generalmente los tienen hasta que llegan más o menos a los dos años y entonces los ponen en venta y reciben alrededor de seis patacones por cada una de ellas. Los traficantes que vienen a comprarlas las llevan a Santiago, a Salta y a Jujuy, donde las dejan durante tres años, hasta que se han desarrollado bien y hecho fuertes y,\n\n\n\n\n",
  id: 29
});
index.addDoc({
  subtitle: "página 31",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \ndespués las llevan al Perú, donde actualmente tienen salida para ellas, porque allí, lo mismo que en el resto de las regiones occidentales de América, la mayor parte del transporte se hace a lomo de mula. La gente de Córdoba también se dedica a comerciar en vacas, que se procuran en la campaña de Buenos Aires y llevan al Perú, donde, sin este medio de subsistencia, es seguro que tendrían mucha dificultad para vivir. Esta clase de tráfico hace de este pueblo el más considerable de la provincia de Tucumán, tanto por sus riquezas y productos como por el número de sus habitantes, los cuales suman al menos quinientas o seiscientas familias, además de los esclavos, que son tres veces más, pero la generalidad de ellos, de todas las clases, no tienen otras armas que la espada y el puñal y son soldados muy diferentes: el aire de la región y la abundancia de que gozan los hacen perezosos y cobardes.Desde Córdoba tomé el camino de Santiago del Estero, que dista noventa leguas de allí. Durante mi viaje, de cuando en cuando, esto es cada siete u ocho leguas, me encontré con casas aisladas de españoles y portugueses, quienes viven muy solitarios;\n\n\n\n\n",
  id: 30
});
index.addDoc({
  subtitle: "página 32",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nestán todas situadas sobre arroyuelos, algunas de ellas al amparo de bosques, con los cuales se encuentra uno frecuentemente en la región, y son en su mayor parte de algarrobos, cuyo fruto sirve para hacer una bebida que es dulce y picantita, y que sube a la cabeza como el vino; otras casas están en campo abierto y no tan dotadas de ganado como las de Buenos Aires; pero, sin embargo, hay suficiente y en realidad más aun del que se necesita para la subsistencia de los habitantes, quienes también comercian con mulas, algodón y cochinilla para teñir, que produce la zona.Santiago del Estero es un pueblo de alrededor de trescientas casas, sin fosos ni murallas, emplazado en terreno llano y rodeado de bosques de algarrobos; está situado sobre un río medianamente ancho, navegable por botes y ricamente dotado de peces. El aire es muy cálido y bochornoso, que hace de los habitantes unos perezosos y afeminados. Tienen el rostro muy moreno, son sumamente dados a sus diversiones y les importa muy poco el comercio. Hay trescientos hombres capaces de llevar armas, contando también los salvajes y los esclavos; y están todos muy mal armados y no son sino soldados mezquinos.\n\n\n\n\n",
  id: 31
});
index.addDoc({
  subtitle: "página 33",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nLa mayor parte de las mujeres son bastante guapas, pero tienen generalmente una especie de hinchazón en el cuello, que llaman coto en el idioma del país, y parece ser casi lo mismo que nosotros llamamos «wen». La región está suficientemente dotada de aves silvestres, venados, trigo, centeno, cebada y frutas tales como higos, duraznos, manzanas, peras, ciruelas, cerezas, uvas, etc. Abundan los tigres, que son muy feroces y voraces; leones que son muy mansos y guanacos grandes como caballos, con el cuello muy largo y cabeza pequeña y cola muy corta; en el estómago de estos animales se encuentra la piedra bezoar. En este pueblo hay cuatro iglesias, a saber: la iglesia parroquial, la de los jesuitas, la de los frailes recoletos y una más. Aquí tiene su residencia el Inquisidor de la provincia de Tucumán; es un sacerdote secular y tiene a sus órdenes comisarios o diputados, a quienes coloca en todas las otras poblaciones de la provincia.Después de haber pasado tres días en Santiago, me fui a Salta, que dista cien leguas; y dejando San Miguel de Tucumán a la mano izquierda, que es una población bajo la jurisdicción\n\n\n\n\n",
  id: 32
});
index.addDoc({
  subtitle: "página 34",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nde Santiago, tomé el camino de Esteco, encontrando en el viaje algunas aldeas de españoles acá y allá y muy pocos salvajes. La región es llana y consiste principalmente en fértiles llanura y bosques llenos de algarrobos y palmeras que producen dátiles algo menores a los de los países orientales, y también muchas otras clases de árboles y plantas, entre otras la que produce la brea, la cochinilla y el algodón.Hay diversos lagos pequeños alrededor de los cuales se forman grandes cantidades de sal, la cual utilizan los pobladores del país. Me quedé un día en Esteco, para prepararme algunas provisiones para el viaje. Está situado sobre un hermoso y ancho río, que con todo puede ser vadeado a caballo. Este pueblo fue antiguamente tan grande y tan importante como Córdoba, pero ahora está arruinado, no habiendo quedado en él arriba de treinta familias, porque las demás lo abandonaron a causa del gran número de tigres que lo infestaban, devorando a sus niños y algunas veces a los hombres, cuando podían sorprenderlos; además hay un número increíble de moscas venenosas que pican agudamente, de las cuales está lleno el país en una extensión de cuatro o cinco leguas alrededor del\n\n\n\n\n",
  id: 33
});
index.addDoc({
  subtitle: "página 35",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \npueblo, así que no hay modo de salir de él sino enmascarado. Esta zona también es muy productiva de trigo, cebada, viñas y otros árboles frutales; y abundaría en ganado si los tigres no lo devoraran.Desde Esteco a Salta hay quince leguas, y esta extensión sería igual a la que he descrito hasta ahora, pero es pedregosa en algunos lugares. Se puede distinguir fácilmente a Salta a unas dos leguas antes de llegar a ella, porque se encuentra en medio de una hermosa llanura, fértil en maíz, uvas y otras clases de frutas, ganado y otras cosas necesarias para la vida; está rodeada por algunas partes de cerros y algunas montañas bastante altas. El pueblo está a la orilla de un pequeño río, sobre el cual hay un puente; contendrá unas cuatrocientas casas y cinco o seis iglesias y conventos, cuya construcción es semejante a la de los que he descrito antes. No está rodeada con murallas, ni fortificaciones, ni fosos, pero las guerras que los habitantes han tenido con sus vecinos los han adiestrado en la disciplina militar, haciéndolos más cuidadosos que anteriormente en la atención de sus armas. Son alrededor de quinientos hombres,\n\n\n\n\n",
  id: 34
});
index.addDoc({
  subtitle: "página 36",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \ntodos los cuales portan armas, además de los esclavos, mulatos y negros, que suman tres veces más. Es un lugar muy concurrido en razón del considerable comercio que tiene en maíz, carne, ganado, vino, carne salada, sebo y otras mercaderías, con las cuales trafican con los habitantes del Perú.A doce leguas más allá se encuentra Jujuy, que es la última población de Tucumán por el lado del Perú. En los altibajos del camino hay muchísimas casas de campo o estancias y muchas más que en cualquier otra parte, aunque la región no es tan agradable ni tan fértil, no siendo casi otra cosa que cerros y montañas. Este pueblo de Jujuy comprende alrededor de trescientas casas: no está muy poblado a causa de las continuas guerras que sus habitantes, lo mismo que los de Salta, sostienen con los salvajes del Valle Calchaquí, quienes están continuamente acosándolos. La causa que provocó estas guerras es la que sigue: el Gobernador de Tucumán, Don Alonso de Mercado y de Villa Corta, habiendo recibido informes de que la casa de los últimos Incas, o Reyes del Perú, que se llamaba Casa Blanca, estaba en ese valle y que había allí una gran cantidad de tesoros que\n\n\n\n\n",
  id: 35
});
index.addDoc({
  subtitle: "página 37",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nlos nativos conservaban como prenda de su antigua grandeza, dio aviso de ella a su Majestad Católica y le suplicó le permitiera hacer la conquista del mismo y someterlo a su gobierno, como lo había hecho con tantos otros lugares, cosa que obtuvo.Para cumplir su designio pensó emplear a Don Pedro Bohoriers, moro, nativo de Extremadura, ya que siendo una persona acostumbrada a tratar con salvajes y capaz de llevar adelante entre ellos una intriga, era por lo tanto más a propósito que otro para hacer triunfar su plan. Pero el negocio tuvo un desenlace completamente contrario: porque este Bohoriers, cuando llegó entre los salvajes del valle y se ganó el afecto de los mismos, en lugar de cumplir con su comisión, trató de establecerse él mismo en el poder entre ellos, en lo cual tuvo tanto éxito que por su astucia y buenas medidas hizo que lo eligieran y reconocieran por su Rey. Después de lo cual se declaró contra este Gobernador español y comenzó con él una guerra hacia fines de 1638, y varias veces lo derrotó a él y a sus fuerzas, lo que dio ocasión a que algunos de los indios nativos, que estaban bajo el dominio\n\n\n\n\n",
  id: 36
});
index.addDoc({
  subtitle: "página 38",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nde los españoles, arrojaran su yugo y se unieran al pueblo de ese valle, que por medio de esas adiciones se convirtió en algo formidable. Allí también huían los esclavos del Perú, particularmente aquellos que sirven en las minas, cuando se les presentaba oportunidad de fugarse; y el escondrijo seguro que encuentran allí lleva a gran número de ellos a ese lugar, hasta tal punto que los españoles no tendrían ni la mitad de los hombres necesarios para trabajar las minas si no consiguieran negros del Congo, Angola y otros puntos de la costa de Guinea por medio de varios genoveses que van hasta allá a buscarlos y se los venden a un precio convenido entre ellos.Desde Jujuy a PotosíEn la época, conocida como villa imperial de Potosí. se cuentan cien leguas; el viaje es muy molesto y no hay sino este camino para ir desde Tucumán al Perú. A dos leguas de Jujuy comencé a internarme en las montañas, entre las cuales hay un pequeño y estrecho valle, que llega hasta Humahuaca, que está veinte leguas más lejos, y a lo largo de él corre un riacho, que uno se ve obligado a pasar y repasar con frecuencia. Antes de haber avanzado cuatro leguas por este camino, se encuentran volcanes o montañas ardientes,\n\n\n\n\n",
  id: 37
});
index.addDoc({
  subtitle: "página 39",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nllenas de substancias sulfurosas, que estallan en llamaradas de cuando en cuando y a veces revientan y arrojan cantidades de tierra al valle, lo cual hace el camino tan barroso cuando cae una lluvia poco después, como sucede casi siempre, que a veces uno se siente forzado a quedarse cinco o seis meses o hasta que llegue el verano a secarlo, para hacerlo transitable. Estos volcanes continúan durante dos leguas a lo largo del camino y en toda la extensión no hay casas ni de españoles ni de salvajes, pero más allá, a todo lo largo hasta Humahuaca, hay muchísimas casitas de campo, habitadas solo por indios y dependientes de algunas ciudades de ellos, las cuales están gobernadas por sus jefes, a los que llaman Curacas, quienes a su vez tienen un Cacique sobre ellos, cuyas órdenes obedecen y cuya residencia está en Humahuaca, la cual es una población de doscientas casas, construidas de tierra y diseminadas sin orden. La tierra de los contornos no es de las mejores; sin embargo allí siembran trigo y gran cantidad de mijo, el cual utilizan ordinariamente los indios. En cuanto a ganado, tienen muy poco, y generalmente comen carne secada al sol, que les traen aquellos que comercian con ellos; tienen también cabras y\n\n\n\n\n",
  id: 38
});
index.addDoc({
  subtitle: "página 40",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \novejas de su propia producción.La mayor parte de estos salvajes son católicos y viven de acuerdo con los mandamientos de la religión Católica Romana. Tienen una iglesia en Humahuaca, dotada de sacerdotes, quienes van de cuando en cuando a celebrar misa allí. Estos sacerdotes residen en Socchoa, que es la hacienda de Don Pablo de Obando, que es español, pero nacido en este país, y es dueño y señor de él, el cual comprende no sólo todo el Valle Humahuaca, sino también una gran extensión de tierras más allá, y es una zona de alrededor de sesenta u ochenta leguas de superficie, donde hay muchísima vicuña, de cuya lana este propietario saca considerable provecho. Se apodera de estos animales con muchísima facilidad, por medio de sus súbditos los indios, quienes no tienen más trabajo que hacer un gran cercado con redes de poco más o menos un pie y medio de alto, a las cuales atan gran número de plumas, que son agitadas a un lado y a otro por el viento; después de lo cual los salvajes persiguen a esos animales y los arrean dentro de las redes, como lo hacen con los jabalíes en Europa, en los lazos. Una vez hecho esto, algunos van a caballo dentro de la extensión de tierra en que están encerrados, y mientras\n\n\n\n\n",
  id: 39
});
index.addDoc({
  subtitle: "página 41",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nlos pobres animales no se atreven a acercarse a las redes por temor de las plumas que se mueven sobre ellas, aquellos con ciertas bolas atadas a cuerdas, los derriban y matan, tantos como quieren.De Humahuaca hasta Mayo cuentan treinta leguas y no se encuentra uno con nada a lo largo de este camino, sino unas pocas haciendas de salvajes, porque hace aquí tanto frío en invierno que es duro tener que soportarlo.El camino desde Mayo hasta Toropalca es a través de muy agradables llanuras; hay doscientas casas en el pueblo, habitadas por salvajes católicos; sólo un portugués vive allí con su familia.Más allá de Toropalca está la región de los Chichas, que es muy montañosa y está dotada de algunas minas de oro y plata y establecimientos para preparar el metal. Hay veinticinco leguas de distancia hasta Potosí, adonde llegué después de un viaje de sesenta y tres días.Descripción de la ciudad de Potosí y sus minasTan pronto como descendí de mi caballo en la casa del comerciante a quien había sido recomendado, cuando fui conducido por él al Presidente de las provincias de Los Charcas, al que iba dirigido el mandamiento del Rey que yo llevaba, como principal director de los negocios de Su Majestad en esta provincia, en la cual está situada Potosí, que es el lugar ordinario de su residencia, aunque la Ciudad de La Plata es la capital. Después de haberle entregado el mandamiento, fui llevado al Corregidor, para entregarle el que le pertenecía, y después a aquellos otros oficiales para quienes traía órdenes. Todos ellos me recibieron muy bien, particularmente el Presidente, quien me obsequió con una cadena de oro por las buenas noticias que le había llevado.Pero antes de seguir más adelante, es conveniente que haga alguna descripción de la ciudad de Potosí, como lo hice con las otras.\n\n\n\n\n",
  id: 40
});
index.addDoc({
  subtitle: "página 42",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nDescripción de la ciudad de Potosí y sus minasTan pronto como descendí de mi caballo en la casa del comerciante a quien había sido recomendado, cuando fui conducido por él al Presidente de las provincias de Los Charcas, al que iba dirigido el mandamiento del Rey que yo llevaba, como principal director de los negocios de Su Majestad en esta provincia, en la cual está situada Potosí, que es el lugar ordinario de su residencia, aunque la Ciudad de La Plata es la capital. Después de haberle entregado el mandamiento, fui llevado al Corregidor, para entregarle el que le pertenecía, y después a aquellos otros oficiales para quienes traía órdenes. Todos ellos me recibieron muy bien, particularmente el Presidente, quien me obsequió con una cadena de oro por las buenas noticias que le había llevado.Pero antes de seguir más adelante, es conveniente que haga alguna descripción de la ciudad de Potosí, como lo hice con las otras.\n\n\n\n\n",
  id: 41
});
index.addDoc({
  subtitle: "página 43",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \nLos españoles la llaman Ciudad Imperial, pero nadie supo decirme por qué razón. Está situada al pie de una montaña llamada Arazassou y dividida en medio por un río que viene de un lago encerrado con murallas, que se halla a un cuarto de legua hacia arriba de la ciudad y es una especie de recipiente para conservar el agua que se necesita para las casas de labor de esta parte de la ciudad, que está de este lado de acá del río, contra la montaña, y se levanta sobre un cerro, siendo la parte mayor y más habitada; porque en aquellas que está sobre la ladera de la montaña apenas hay otra cosa que máquinas y las casas de los que trabajan en ellas. La ciudad no tiene ni murallas ni fosos, ni fuertes para su defensa. Se calcula que hay cuatro mil casas bien construidas de buena piedra, con varios pisos, a la manera de las de España. Las iglesias están bien hechas y todas ellas ricamente adornadas con platería, tapices y otros ornamentos, sobre todo las de los monjes y monjas, de los cuales hay varios conventos de diferentes órdenes, los que están muy bien equipados. No es esta la menos populosa ciudad del Perú, con españoles, mestizos, extranjeros\n\n\n\n\n",
  id: 42
});
index.addDoc({
  subtitle: "página 44",
  chapter: "Viaje desde Buenos Aires hasta el Perú",
  layout: "textoporpagina",
  content: "\n    \ny nativos (a estos últimos los españoles llaman indios), con mulatos y negros. Cuentan que hay entre tres y cuatrocientos españoles naturales capaces de llevar armas, quienes tienen fama de ser hombres muy fornidos y buenos soldados. El número de mestizos no es mucho menor, ni son menos expertos en el manejo de las armas; pero la mayor parte de ellos son perezosos, inclinados a la riña y traicioneros; por ello generalmente visten tres o cuatro justillos de cuero de ante, uno sobre otro, que no permiten el paso de la punta de la espada, para asegurarse contra estocadas. Los extranjeros no son sino pocos: hay algunos holandeses, irlandeses y genoveses, y algunos franceses, la mayoría de los cuales son de St. Malo, Provenza o Bayona y pasan por gente de Navarra y Vizcaya.En cuanto a los indios, se calcula que suman cerca de diez mil, además de los mulatos y los negros: pero no se les permite usar ni espada ni armas de fuego, ni siquiera a sus Curacas o Caciques, aunque todos ellos pueden aspirar a cualquier grado de las hermandades y a los beneficios, a los cuales son elevados con frecuencia por sus acciones laudables o buenos servicios. También les está prohibido usar el traje español, siendo obligados\n\n\n\n\n",
  id: 43
});
index.addDoc({
  subtitle: "página 45",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \na vestirse de manera diferente, con una túnica ceñida, sin mangas, que llevan sobre la camisa, a la cual van sujetos el cuello y los puños de encaje. Sus pantalones son anchos abajo, a la moda francesa; van desnudos de pie y pierna. Los negros y mulatos, estando al servicio de los españoles, se visten según la moda española y pueden llevar armas; y todos los indios esclavos, después de diez años de servicio son puestos en libertad y tienen los mismos privilegios que los otros.El gobierno de esta ciudad es muy prolijo, por el cuidado que se toman veinticuatro magistrados, quienes están constantemente observando que se cumplan las buenas ordenanzas, además del Corregidor y Presidente de Los Charcas, quien manda a los oficiales a la manera de España. Es de observar que, a excepción de esos dos oficiales principales, tanto en Potosí como en cualquier otra parte de las Indias, todas las personas, ya sean señores, caballeros, oficiales u otros, se dedican al comercio, con el cual algunos hacen tan gran provecho que en la ciudad de Potosí se calcula que hay algunos que tienen dos, algunos tres y algunos cuatro millones de coronas; y muchísimos tienen fortunas por valor de dos, tres\n\n\n\n\n",
  id: 44
});
index.addDoc({
  subtitle: "página 46",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \no cuatrocientas mil coronas. El pueblo bajo vive muy a sus anchas, pero son todos orgullosos y altivos y van siempre muy elegantes, ya sea en tisú de oro y plata, o de escarlata, o de seda con abundantes encajes de oro y plata. El menaje de sus casas es muy rico, porque generalmente son servidos en vajilla de plata. Las esposas tanto de los caballeros como de los ciudadanos están muy encerradas, hasta un grado mucho mayor que en España: jamás salen, salvo para ir a misa, o para hacer alguna visita o a algún festejo público, y esto sólo raras veces. Las mujeres son excesivamente aficionadas a tomar coca: ésta es una planta que viene del lado del Cuzco, la cual, enrollada y seca, mastican como hacen algunos con el tabaco. Están tan excitadas, y a veces tan absolutamente embriagadas con ella, que carecen de todo dominio sobre ellas mismas. Asimismo es usada con frecuencia por los hombres y tiene sobre ellos los mismos efectos. De otro modo son muy sobrios en la comida y en la bebida, aunque están bien provistos con toda clase de vituallas, tales como carne vacuna y de carnero, aves, carne de venado, frutas frescas y desecadas, maíz y vino, las cuales\n\n\n\n\n",
  id: 45
});
index.addDoc({
  subtitle: "página 47",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nles llevan allí desde otras partes, y algunas desde gran distancia, lo que hace que estas mercaderías sean caras, así que la clase más humilde de los habitantes, especialmente aquellos que tienen muy pocos recursos, encontraría muy difícil la vida allí, sino fuera tan abundante el dinero y fácil de ganar por aquellos que tienen buena voluntad para trabajar.La mejor y más fina plata de todas las Indias es la de las minas del Perú, la principal de las cuales se encuentra en la montaña de Aranzasse, donde además de las prodigiosas cantidades de plata que se han extraído de las venas, en las cuales el metal aparecía a la vista, y que ahora están agotadas, se encuentran cantidades casi tan grandes del mismo en lugares que no habían excavado antes, es más, de parte de la tierra que antes habían desechado cuando abrieron las minas e hicieron pozos y atajos en las montañas, han extraído plata, habiendo comprobado con esto que la plata se ha formado allí desde entonces, lo que demuestra lo apropiada que es la calidad de este terreno para la producción del metal. Pero a la verdad esta tierra no produce tanto como las minas que se encuentran en venas entre las rocas. Hay, además de estas,\n\n\n\n\n",
  id: 46
});
index.addDoc({
  subtitle: "página 48",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \notra clase de venas en la tierra, que llaman Paillaco, que son duras como una piedra, del color de la arcilla, que eran despreciadas hasta ahora, y como lo ha enseñado la experiencia desde entonces, no eran tan despreciables como se suponía, desde que a poco costo se puede extraer plata de ellas, de modo que no es inconsiderable el provecho que rinde el trabajo. Además de las minas de esta montaña, hay muchas otras en la región, a gran distancia, que son muy buenas: entre otras las de Lippes, de Carangas y de Porco; pero las de Oruro, que han sido descubiertas últimamente, son las mejores.El Rey de España no obliga a que alguna de estas minas sea trabajada por su propia cuenta, sino que las deja a las personas que hagan el descubrimiento, las que quedan como dueñas de ellas después que el Corregidor las ha visitado, declarándolas propietarias, bajo las acostumbradas condiciones y privilegios. El mismo Corregidor describe y señala la superficie de terreno en el cual les está permitido abrir las minas al exterior, cosa que no hace para limitar o restringir el trabajo subterráneo, pues todo hombre tiene libertad para seguir la vena\n\n\n\n\n",
  id: 47
});
index.addDoc({
  subtitle: "página 49",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nque ha encontrado, sea mucha su extensión o profundidad, y aunque cruce por la que otro haya excavado cerca. Todo lo que el Rey se reserva para sí, además de los derechos de que hablaremos después, es el de dar una reglamentación general por medio de sus oficiales, para todo el trabajo de las minas, y disponer el número de salvajes que se emplearán en ellas, para prevenir los desórdenes que se producirían si cada propietario de mina tuviera libertad para hacer trabajar tantos como quisiera, lo que con frecuencia daría ocasión para que aquellos que son más poderosos y ricos los aumentaran y tuvieran tan elevado número de salvajes que quedarían pocos o ninguno para que los emplearan los otros para mantener en marcha su trabajo. Porque esto estaría en contra de los intereses del Rey, que están en proveer para que haya suficiente número de esclavos para todas las minas que se abran. Con este fin obliga a todos los Curacas o jefes de los salvajes a proporcionar un cierto número, que siempre deben conservar completo o de lo contrario están obligados a entregar dos veces la cantidad de dinero que se les habría pagado por su trabajo a aquellos que faltan.Los destinados a las minas de Potosí\n\n\n\n\n",
  id: 48
});
index.addDoc({
  subtitle: "página 50",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nno pasan de 2200 a 2300. Los traen y los ponen en un gran cercado, situado al pie de la montaña, donde el Corregidor hace distribución de ellos a los conductores de las minas, de acuerdo con el número que necesitan; y después de seis días de trabajo constante, el conductor los trae de vuelta al mismo sitio el sábado siguiente, donde el Corregidor hace hacer una revista de todos ellos, para que los propietarios de las minas les paguen los jornales que les están señalados y para ver cuántos de ellos han muerto, para obligar -a los Curucas a suplir los que faltan, porque no pasa semana sin que mueran algunos, ya sea a causa de los diversos accidentes que ocurren, como ser el desprendimiento de una gran cantidad de tierra o la caída de piedras, o por las enfermedades y otras contingencias. En ocasiones los molestan mucho los vientos que se encajonan en las minas, el frío de los cuales, unido al que hay en algunas partes de la tierra, los enfría excesivamente, y salvo que mastiquen coca, que los calienta y embriaga, les resultaría intolerable. Otra de las molestias que sufren es que en otros sitios los vapores sulfurosos y minerales\n\n\n\n\n",
  id: 49
});
index.addDoc({
  subtitle: "página 51",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nson tan abundantes que los secan en una forma extraña, al punto de impedirles la libre respiración, y para esto no tienen otro remedio que la bebida que se hace con la yerba del Paraguay, de la cual preparan grandes cantidades para refrescarse y humedecerse cuando salen de las minas a las horas señaladas para comer y dormir. Esta bebida también les sirve de medicina, para hacerles vomitar y arrojar cualquier cosa que les incomode en el estómago. Entre estos salvajes ordinariamente eligen los mejores obreros para separar la ganga entre las rocas, lo que hacen con barras de hierro que los españoles llaman palancas, y otros instrumentos de hierro; otros sirven para acarrear lo que excavan en canastitas, hasta la entrada de la mina; otros para ponerlo en sacos y cargarlos sobre una especie de grandes ovejas, que llaman «carneros de la tierra»: son más altos que los asnos y comúnmente llevan un peso de doscientas libras. Estos animales sirven para llevar el mineral a las casas de laboreo que están en la ciudad a lo largo del río, que viene del lago del cual he hablado antes.En estas casas, que son ciento veinte en total, es refinada la ganga, para lo cual adoptan el siguiente sistema:\n\n\n\n\n",
  id: 50
});
index.addDoc({
  subtitle: "página 52",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nla baten bien sobre yunques con unos grandes martillos, que un molino mantiene continuamente en movimiento. Cuando está bastante bien reducida a polvo, lo pasan a través de un fino cedazo y lo desparraman por el suelo, formando una capa de medio pie de espesor, en un sitio cuadrado que es muy liso, preparado con ese propósito: entonces arrojan una gran cantidad de agua sobre él, después de lo cual, con un cedazo desparraman una cierta cantidad de mercurio sobre el polvo, mercurio que es proporcionado por los oficiales de la casa de moneda, y también una substancia líquida de hierro, que es preparada por dos piedras de molino, una de las cuales está fija y la otra continuamente girando: entre las dos ponen un viejo yunque o cualquier otro trozo de hierro macizo, que es triturado y consumido con agua por las piedras de molino, hasta quedar todo reducido a una cierta materia líquida. Así preparada la ganga, la revuelven y la mezclan, como hacen los hombres cuando preparan la argamasa, durante una quincena ininterrumpida, templándola cada día con agua. Y después de esto la ponen varias veces en una cubeta, dentro de la cual hay un molinillo, cuyo movimiento separa toda la tierra con el agua, arrojándolas juntas;\n\n\n\n\n",
  id: 51
});
index.addDoc({
  subtitle: "página 53",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nde modo que no queda sino la masa metálica en el fondo, la cual se pone después al fuego en crisol, para separar de ella el mercurio, lo que se hace por evaporación: en cuanto a la substancia de hierro, ésta no se evapora, sino que permanece mezclada con la plata, por cuya razón siempre hay en ocho onzas (pongamos por ejemplo) tres cuartos de onza, poco más o menos de falsa aleación.La plata, una vez así refinada, se lleva a la casa de moneda, donde la ensayan, para comprobar si tiene la debida aleación; después de lo cual es fundida en barras o lingotes, que son pesados y deducida una quinta parte de ellos, que pertenecen al Rey y son sellados con su marca; el resto pertenece al mercader, quien del mismo modo aplica su sello y se los lleva de allí adonde quiera, en barras o acuñados en reales u otra moneda. Esta quinta parte es el único provecho que el Rey obtiene de las minas, la cual es estimada con todo en varios millones. Pero aparte de esto, extrae considerables sumas por los impuestos ordinarios sobre las mercaderías, sin contar lo que obtiene del mercurio, tanto del que\n\n\n\n\n",
  id: 52
});
index.addDoc({
  subtitle: "página 54",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nse obtiene de las minas de Guancavelica, que están situadas entre Lima y Cuzco, y del que se trae de España, con el cual son cargados dos buques por año, porque el que se saca de las minas no es suficiente para todas las Indias.Para transportar la plata que anualmente se produce en Potosí hasta España, utilizan diversos medios. Primero la cargan en mulas, para llevarlas hasta Arica, que es un puerto del Mar del Sur, desde donde la transportan en pequeñas embarcaciones hasta el Fuerte de Lima, o Los Reyes, que es un fuerte sobre el mismo mar, a dos leguas de Lima. Aquí la embarcan, con toda la que viene de otras partes del Perú, en dos grandes galeones que pertenecen a su Majestad Católica, cada uno de los cuales lleva mil toneladas y están armados cada uno con cincuenta o sesenta piezas de artillería. Estos generalmente son acompañados por gran número de pequeños buques mercantes tan ricamente cargados, que no tienen cañones, sino unos pocos petareroes para hacer salvas, y ponen rumbo hacia Panamá, teniendo siempre el cuidado de enviar una pequeña pinaza ocho o diez leguas por delante, para que vaya a la descubierta. Pueden hacer este viaje en unos quince días, teniendo siempre\n\n\n\n\n",
  id: 53
});
index.addDoc({
  subtitle: "página 55",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nla ayuda del viento del sur, que es el único que reina en este mar; sin embargo nunca lo hacen en menos de un mes, porque con este retraso el comandante del galeón hace un gran negocio, proveyendo de naipes a aquellos que quieren jugar a bordo durante la travesía; ganancia que se eleva a una suma considerable, tanto porque el tributo que recibe es de diez patacones por cada baraja de naipes, y porque es prodigiosa la cantidad de ellas que se consumen, ya que están jugando continuamente; y apenas hay alguien a bordo que no esté interesado en grandes sumas. Cuando los galeones llegan a Panamá, en el continente, desembarcan su carga y esperan la llegada de los que vienen de España, para recibir noticias, ya que comúnmente poco más o menos al mismo tiempo, o un poco después, llegan a Portobello, que está a dieciocho leguas en el mar del norte. Mientras tanto llevan hacia allá parte del oro, plata y otras mercaderías de esta flota que están consignadas a Europa, a lomo de mula, por tierra, y otra parte por agua por el río de Chiagre, en botes hechos de un trozo entero de madera, llamados piraguas. Pocos días más tarde son descargados, y después que han llegado los galeones que venían de España,\n\n\n\n\n",
  id: 54
});
index.addDoc({
  subtitle: "página 56",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nse celebra una gran feria durante una quincena seguida, durante la cual venden y cambian toda clase de mercaderías necesarias para cada país: negocios que son realizados con tanta honradez que las ventas se hacen sólo por los inventarios, sin abrir los bultos, y sin que haya el menor fraude. Terminada la feria, se retiran todos a su respectivo destino. Los galeones que se dirigen a España, van a Habana, en la Isla de Cuba, donde esperan la llegada de la flota de La VeraCruz en Nueva España; tan pronto como se les unieron, continúan su curso juntas, pasando el canal de Bahama junto a la costa de Florida, amarran en la isla de Bermudos, donde normalmente se encuentran con el consejo de asuntos de Estado en Europa y con órdenes que les indican cómo evitar desastres y realizar con seguridad el viaje.En cuanto a los galeones del Perú, después de haber recibido un nuevo cargamento en Panamá vuelven a Lima, navegando por distintos rumbos, debido a las contrariedades del viento, que los tiene dos o tres meses en el mar. Llegados allá, venden lo que tienen para el Perú y el resto de las mercaderías es adquirido por los comerciantes\n\n\n\n\n",
  id: 55
});
index.addDoc({
  subtitle: "página 57",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nde Chile, que entregan una gran cantidad de productos de su país en cambio de ellas, tales como cueros de cabra, que en el lenguaje del país se llaman «cordobán», cuerdas, cáñamo, pez y alquitrán, aceite, olivas y almendras, y sobre todo una gran cantidad de oro en polvo, que se extrae de los ríos de Copiapó, Coquimbo, Valdivia y otros, que desembocan en el Mar del Sur.Y ahora que estamos hablando de los productos de Chile, debe decirse algo relacionado con esta gran provincia o Reino. En la boca de estos ríos de que acabo de hablar, hay buenos puertos y pueblos, cada uno de los cuales consiste en cuatrocientas casas y esas suficientemente ocupadas por la gente. Las ciudades más importantes sobre la costa del mar son Valdivia, La Concepción, Copiapó y Coquimbo. Valdivia está fortificada y tiene guarnición, generalmente compuesta sólo de hombres desterrados y malhechores de las Indias; las otras tres son ciudades comerciales. Más arriba está Santiago de Chile, la cual es capital de todo Chile, donde también hay una fuerte guarnición y algunas tropas regulares, en razón de la continua guerra que tienen con los salvajes\n\n\n\n\n",
  id: 56
});
index.addDoc({
  subtitle: "página 58",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nllamados Araucanos. Más allá, en las montañas, se halla la pequeña provincia de Chucuito, de la cual las principales plazas son San Juan de la Frontera y Mendoza. Alrededor de esos pueblos crece gran cantidad de maíz y abundancia de viñas que proveen al país de Chile y la provincia de Tucumán y hasta Buenos Aires.Tres semanas después de mi llegada a Potosí tuvieron lugar grandes regocijos por el nacimiento del Príncipe de España, que duraron una quincena, durante cuyo tiempo cesó todo trabajo en la ciudad, en la ciudad, en las minas y en las poblaciones adyacentes, y todo el pueblo, grandes y pequeños, ya fueran españoles o extranjeros, indios o negros, no tuvieron más cuidado que hacer algo extraordinario para la solemnización de las fiestas. Comenzó con una cabalgata, hecha por el Corregidor, los veinticuatro magistrados de la ciudad, los otros oficiales, lo principal de la nobleza y los caballeros, y los comerciantes más eminentes de la ciudad, todos ricamente vestidos: todo el resto del pueblo y particularmente las señoras, estaban a las ventanas y arrojaban abundancia de aguas perfumadas y gran cantidad\n\n\n\n\n",
  id: 57
});
index.addDoc({
  subtitle: "página 59",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nde dulces secos. Los días siguientes tuvieron varias diversiones, algunas de las cuales llaman «Juegos de Toros» y otras «Juegos de cañas», varias clases de mascaradas, comedias, bailes con música vocal e instrumental y otras diversiones que eran celebradas un día por los caballeros y otro por los ciudadanos; un poco por los plateros y otro por los mineros; algunas por gentes de diversas naciones y otras por los indios; y todas con gran magnificencia y prodigiosos gastos.Los regocijos de los indios merecen una nota particular: porque además de estar ricamente vestidos según una manera diferente, y esa bastante cómica, con sus arcos y flechas, en una noche y una mañana, en la principal plaza pública de la ciudad prepararon un jardín en forma de laberinto, cuyas parcelas estaban adornadas con fuentes que arrojaban agua; provistos de toda clase de árboles y flores, llenos de pájaros y toda clase de bestias salvajes, como leones, tigres y otras especies; en medio de los cuales expresaban su alegría de mil diferentes maneras, con extraordinarias ceremonias.El penúltimo día una cosa sobrepasó a todas las demás, y fue una\n\n\n\n\n",
  id: 58
});
index.addDoc({
  subtitle: "página 60",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nCarrera de Sortija, que se realizó por cuenta de la ciudad con máquinas muy sorprendentes. Primero apareció allí un buque arrastrado por salvajes, con carga de unas cien toneladas, con sus cañones y tripulación de hombres vestidos con curiosos uniformes; sus anclas, cuerdas y velas agitadas por el viento, que felizmente soplaba a lo largo de la calle por la cual lo llevaban hacia la gran plaza pública, donde tan pronto como llegó, saludaron a la compañía con la descarga de todos sus cañones. Al mismo tiempo un caballero español, representando a un emperador del Oriente llegado para felicitar por el nacimiento del Príncipe, descendió del bajel escoltado por seis caballeros y un hermoso cortejo de criados que conducían sus caballos, en los que montaron para ir a saludar al Presidente de Los Charcas; y mientras estaban haciendo sus cumplimientos, sus caballos se arrodillaron y se mantuvieron en esa postura, ya que antes les enseñaron esa prueba. Fueron después a saludar al Corregidor y a los jueces de Campo, de quienes, una vez que obtuvieron licencia para correr la sortija contra los defensores,\n\n\n\n\n",
  id: 59
});
index.addDoc({
  subtitle: "página 61",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nse despidieron con gran bizarría, recibiendo muy hermosos premios distribuidos por las damas. Terminada la carrera de sortija, el buque y muchísimas otras barcas que habían sido llevadas hasta allí, avanzaron para atacar un gran castillo, en cuyo interior se fingía estar encerrado Cromwell el Protector, quien a la sazón estaba en guerra con el Rey de España; y después de un combate bastante largo de fuegos artificiales, el fuego se apoderó del buque, de las pequeñas barcas y del castillo, y todo junto se consumió. Después de esto fueron distribuidas y arrojadas al pueblo en nombre de su Católica Majestad, gran número de piezas de oro y plata, habiendo algunas personas particulares que tuvieron la prodigalidad de arrojar dos o tres mil coronas cada una entre la multitud. Al día siguiente estos regocijos terminaron con una procesión hecha desde la iglesia mayor hasta la de los recoletos, en la cual fue llevado el Santísimo Sacramento acompañado por toda la clerecía y el laicado; y como el camino de una de estas iglesias a la otra había sido despojado del pavimento para la celebración de otros regocijos, lo volvieron a pavimentar para esta procesión con barras de plata, con\n\n\n\n\n",
  id: 60
});
index.addDoc({
  subtitle: "página 62",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nlas cuales estaba cubierto todo el trayecto. El altar donde la Hostia iba a ser depositada en la iglesia de los recoletos, estaba tan adornada con imágenes, vasos y planchas de oro y plata, perlas, diamantes y otras piedras preciosas, que difícilmente alguien podría haber visto algo más rico: porque los ciudadanos llevaron allí todas las joyas más raras que tenían. Los extraordinarios gastos de todo este tiempo de regocijos fueron calculados en una suma que sobrepasaba las quinientas mil coronas.Terminadas estas diversiones, el resto del tiempo que permanecí en Potosí lo empleé en completar la venta de las mercaderías, cuyos inventarios llevara conmigo; y me obligué a hacer que esas mercaderías fueran entregadas en un tiempo determinado en Jujuy, y a pagar todos los gastos de transporte hasta allá. Recibí la mayor parte de los pagos en plata, principalmente en patacones, plata labrada, barras y piñas, esto es plata virgen, y el resto en lana de vicuña. Cuando hube concluido por completo el negocio para el cual fui enviado a Potosí, abandoné el lugar para volver a Buenos Aires por el mismo camino por donde viniera. Cargué mis fardos a lomo de mula, que es el modo ordinario de transporte,\n\n\n\n\n",
  id: 61
});
index.addDoc({
  subtitle: "página 63",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \npara pasar las montañas que dividen el Perú de Tucumán. Pero cuando llegué a Jujuy juzgué conveniente hacer uso de carretas, las cuales son mucho más cómodas, y de este modo continué mi viaje: y después de una travesía de cuatro meses, felizmente llegué al río de Luján, que está a cinco leguas de Buenos Aires, donde me encontré con Ignacio Maleo, que había llegado allí antes que yo. Llegó por el río, en un botecito del cual resolvimos hacer uso para transportar secretamente hasta nuestro buque, la mayor parte de la plata que llevaba conmigo. Pensamos que era mejor adoptar este sistema, para evitar el riesgo que podíamos correr de ser confiscados si hubiéramos llevado nuestro buque cerca de Buenos Aires, a causa de la prohibición de exportar oro y plata, aunque esta orden no se observa siempre con regularidad, pues el Gobernador tolera que algunas veces sea llevada privadamente, consintiendo en ello por algún obsequio, o también no siendo muy estricto en la vigilancia de ello.No debo omitir aquí la razón por la cual los españoles no toleran que la plata del Perú, y de las provincias vecinas, sea transportada por el Río de la Plata, ni que toda suerte de barcos vayan\n\n\n\n\n",
  id: 62
});
index.addDoc({
  subtitle: "página 64",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \na comerciar allí sin licencia: es por esta consideración, que si dieran franquicias al comercio libre por este lado, donde el país es bueno y fértil, la tierra abundante en frutos, el aire saludable y hay comodidad de transportes, los mercaderes que comercian en el Perú, Chile y Tucumán pronto abandonarían la ruta de los galeones y el pasaje ordinario a través de los mares del norte y del sur y a través del Continente, que es difícil e incómodo, y tomarían la ruta de Buenos Aires. Esto sería infaliblemente causa de que la mayor parte de las ciudades del continente fueran abandonadas, pues en ellas el aire es malo y las necesidades y comodidades de la vida no se pueden tener en tanta abundancia.Una vez que aseguramos nuestra plata con la precaución que tuvimos, fui a Buenos Aires con el resto de nuestras mercaderías; apenas había llegado cuando fue resuelto nuestro regreso a España. Pero para que no fuera hallado a bordo nada que pudiera dar ocasión a un secuestro, cuando los oficiales del Rey hicieran su visita acostumbrada a nuestro barco, antes de salir del puerto, pensamos que era conveniente embarcar primero sólo aquellas mercaderías\n\n\n\n\n",
  id: 63
});
index.addDoc({
  subtitle: "página 65",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nque ocupaban más lugar, como la lana de vicuña, cuero de varias clases, entre otros, 16.000 cueros de toros, con muchos otros bultos y cofres pertenecientes a los pasajeros que volvían con nosotros, y alrededor de treinta mil coronas en plata, que es la suma más grande que se permite llevar, para pagar todos los gastos necesarios que pueden ocurrir durante el viaje y abonar el barco. Pero después de hecha la visita, acabamos con el embarque de la plata que teníamos escondida, la cual, con el resto del cargamento, podría alcanzar alrededor de tres millones de libras.Partimos de Buenos Aires en el mes de mayo de 1659, en compañía de un barco holandés, comandado por Isaac de Brac, que iba también ricamente cargado. Nos comprometió a que siguiéramos la ruta con él, porque su barco hacía agua y como este defecto aumentó con la prosecución del viaje, nos vimos obligados a entrar en la isla de Fernando de Noroña, a tres grados y medio al sur de la Línea. Resultó bueno para nosotros, tanto como para el holandés, que nos hubiéramos detenido aquí, porque habiéndosenos ocurrido, por temer lo peor, tomar una nueva provisión de agua dulce, comprobamos que la mayor parte de la que habíamos tomado en Buenos Aires se había derramado, y de cien barriles que creíamos que nos quedaban en nuestro almacén, no nos quedaban sino treinta:\n\n\n\n\n",
  id: 64
});
index.addDoc({
  subtitle: "página 66",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \npor lo tanto, aunque el agua que encontramos allí tenía muy mal sabor y era de mala calidad, lo que hace que los que la beben sufran de cólicos, nos vimos necesitados sin embargo a llenar nuestros barriles con ella: y a aquellos de nuestros hombres que fueron a buscarla de la roca de la cual brotaba, les sucedió un accidente bastante infeliz; porque habiéndose desvestido hasta casi quedar desnudos para trabajar con más comodidad, el calor del sol los quemó tan intensamente que les puso el cuerpo totalmente rojo y después aquellas partes sobre las cuales el sol alcanzó con sus rayos con la mayor violencia, se llenaron de bubas y pústulas, las que eran muy molestas y los tuvieron muy incómodos durante una quincena.Yo desembarqué para ver la isla, que tiene alrededor de una legua y media de circunferencia y está deshabitada. Uno de nuestros pilotos me dijo que los holandeses la poseyeron mientras fueron dueños de Pernambuco, en el Brasil, y que tenían allí un pequeño fuerte, del cual quedan todavía algunos restos; que sembraban mijo y frijoles, de los cuales tenían una cosecha mediana y que criaban muchas aves, cabras y cerdos. Vimos una gran cantidad de pájaros de los cuales algunos eran buenos para comer. Permanecimos allí cuatro días; pero cuando vimos que el holandés no estaría pronto en condiciones de continuar\n\n\n\n\n",
  id: 65
});
index.addDoc({
  subtitle: "página 67",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nsu viaje, puesto que se vio obligado a desembarcar su cargamento y recostar su barco sobre uno de los costados para calafatearlo, izamos velas, y después de un viaje bastante perturbado por las tormentas que sufrimos, las cuales algunas veces nos arrojaban hacia la costa de Florida y algunas veces sobre otras, por fin descubrimos las costas de España. En lugar de ir hacia Cádiz, porque temíamos encontrarnos con los ingleses que estaban todavía en guerra con España, creímos conveniente hacer rumbo hacia Santander, adonde llegamos felizmente a mediados de agosto. Inmediatamente nos informamos de que la flota española venía a amarrar al mismo puerto a su regreso de México, por la misma razón que nos trajo a nosotros allí, y que habían izado velas sólo dos días antes de nuestro arribo. Y como los oficiales del Rey de España que habían sido enviados, allí estaban todavía, pensamos que lo mejor era tratar con ellos, lo mismo para salvar la multa en que habíamos incurrido por no volver al mismo punto desde donde habíamos partido que para no ser molestados con su visita: y por cuatro mil patacones que les obsequiamos, fuimos excusados y declarados exentos de la revisación. Por lo tanto desembarcamos nuestra plata y otras mercaderías, parte de las cuales fueron enviadas después a Bilbao y parte a San Sebastián, donde en poco tiempo fueron vendidas y\n\n\n\n\n",
  id: 66
});
index.addDoc({
  subtitle: "página 68",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \ndistribuidas entre varios comerciantes, quienes las transportaron a diversos puntos para venderlas.Cuando terminamos la venta de todas nuestras mercaderías, se hizo una declaración exacta entre todos los que tenían intereses en el barco, tanto de los gastos como de las ganancias de este viaje, acerca de cuyo detalle no me ocuparé. Solo diré, para dar de ello una idea en globo, que los gastos consistían primero en doscientas noventa mil coronas, empleadas en adquirir las mercaderías con las cuales fue cargado nuestro barco en Cádiz y en pagar los derechos de exportación desde España; 74.000 libras por el flete del buque durante diecinueve meses, a razón de 3.200 libras por mes; 43.000 libras más por el pago de setenta y seis marineros, grandes y pequeños, por ese mismo tiempo, a razón de diez coronas por mes, uno con otro; treinta mil coronas gastadas en abastecer el buque durante ese tiempo, tanto para la tripulación cuanto para los pasajeros, ya que hay que hacer muy buenas provisiones, porque en esos largos viajes más allá de la línea, los marineros deben tener buena alimentación y los pasajeros deben tener mucha abundancia de confituras, buenos licores y otras cosas costosas. Dos mil coronas más por los derechos de entrada a Buenos Aires y en presentes para los oficiales de la plaza; y mil coronas de derechos de aduana al salir de allí: más en gastos, impuestos y fletes\n\n\n\n\n",
  id: 67
});
index.addDoc({
  subtitle: "página 69",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \npara transportar nuestras mercaderías desde Buenos Aires a Potosí y desde Potosí a Buenos Aires, a razón de veinte coronas por quintal; cuatro mil coronas más para procurar evitar ser registrados y visitados a nuestro regreso a España; y, en fin, algunos otros gastos, tanto en impuestos de entrada cuando desembarcamos nuestras mercaderías en España, cuanto por otras cosas imprevistas, que no llegaban a sumas importantes.Estos fueron casi todos los principales renglones de nuestros gastos, los cuales fueron deducidos y pagados, comprobándose entonces que el provecho había sido del doscientos cincuenta por ciento, comprendiendo lo obtenido por los cueros, que llegó a 15 libras cada uno, siendo ese el precio ordinario, aunque no costaban sino una corona de primera mano; y también lo que se obtuvo de los pasajeros, de los cuales llevábamos más de cincuenta a bordo, tanto de ida como de vuelta, lo que no era poco considerable: porque un hombre que no tenía más que su cofre pagaba ochocientas coronas y los demás pagaban proporcionalmente a su pasaje y dieta.Nos dijeron en Santander que los barcos holandeses que habíamos visto en Buenos Aires, llegaron felizmente a Amsterdam: pero que el embajador español, habiendo sido informado que venían del Río de la Plata y que traían de allá una prodigiosa cantidad de plata y otros productos, tanto por\n\n\n\n\n",
  id: 68
});
index.addDoc({
  subtitle: "página 70",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nel relato de algunos mercaderes holandeses, cuanto por algunos españoles que habían aprovechado la oportunidad del regreso de esos barcos para volver a Europa, y habían remitido su dinero desde Amsterdam a Cádiz y Sevilla, por letras de cambio, además de las mercaderías holandesas que habían enviado allí; había advertido al Consejo de Indias de Madrid que juzgaba que esa moneda y esas mercaderías eran pasibles de confiscación, porque todos los españoles tenían prohibido comerciar por medio de barcos extranjeros y transportar plata a cualquier otro punto que no fuera España; y de acuerdo con ello se había apoderado y confiscado la mayor parte de ellos, habiéndose salvado el resto por las precauciones que tomaron algunos de los comerciantes, que no tuvieron tanta prisa como los otros.Habiendo reconvenido al mismo tiempo el embajador cuáles serían las consecuencias de tolerar a los extranjeros que continuaran el comercio con el Río de la Plata sin poner coto a ello, el Consejo tuvo muy en cuenta la advertencia, hasta el punto de equipar un barco con toda prisa en San Sebastián, el cual cargaron con armas y hombres para enviarle a Buenos Aires, con la orden estricta tanto de apoderarse de la persona del Gobernador, por haber tolerado que los barcos holandeses entraran y comerciaran en el país, cuanto para que tomaran una cuenta exacta de las relaciones y conocimientos que los holandeses\n\n\n\n\n",
  id: 69
});
index.addDoc({
  subtitle: "página 71",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nhabían conseguido allí, y también para restablecer allá las cosas en forma, fortificando las guarniciones y armándolas mejor de lo que habían estado en tiempos pasados, para que en el futuro pudieran estar en condiciones de resistir a los extranjeros e impedir su desembarco y comunicación con el país. Poco después de nuestra llegada, Ignacio Maleo, el capitán de nuestro barco, recibió una orden de la corte de España de ir a Madrid, para informar al Consejo de Indias acerca de las condiciones cómo halló y dejó las cosas en Buenos Aires. Estaba deseoso de que yo lo acompañara allá, cosa que hice. Tan pronto como llegamos a Madrid entregó los memoriales, no sólo de todo lo que había observado en el Río de la Plata, sino también acerca de los medios que se podrían usar para lograr que los extranjeros tuvieran menos idea de comerciar allí: y lo primero era mantener dos buenos buques de guerra a la boca del río, para disputar e impedir el paso de tales buques mercantes que trataran de ir hasta Buenos Aires; en segundo lugar, enviando cada año dos barcos cargados con todas las cosas que los habitantes de esas regiones necesitan; porque estando así suficientemente abastecidos, no tendrían ocurrencia de favorecer el desembarco y entrada de extranjeros, cuando llegaran allá. Más todavía, hizo una propuesta\n\n\n\n\n",
  id: 70
});
index.addDoc({
  subtitle: "página 72",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nde cambiar el acostumbrado camino de llevar las mercaderías, que eran enviadas por el Perú y traídas por vía de los galeones; les aconsejaba que se estableciera en el Río de la Plata, desde entonces, el acarreo por tierra al Perú, lo que se realizaría mucho más convenientemente y a un costo menor, y con menos riesgos que por cualquier otra ruta. Pero de todas estas propuestas, el Consejo de España realizó sólo la de enviar a Buenos Aires dos barcos cargados con mercaderías adecuadas para el país. Y habiendo obtenido Maleo un permiso y una comisión con ese propósito, bajo su seguridad, regresamos a Guipúzcua, para hacer los preparativos de este viaje y poner nuestros asuntos en orden; los cuales despachamos tan bien, que en poco tiempo tuvimos un barco listo para hacerse a la vela, el cual Maleo ordenó que fuera comprado en Amsterdam y llevado al puerto desde donde partiríamos, siendo cargado en parte con mercaderías holandesas y con otras adquiridas en Bayona, San Sebastián y Bilbao, compradas al por mayor y a nuestro riesgo, en cuyo negocio fui empleado, habiéndome encargado de la comisión de Maleo.Durante estos preparativos y mientras esperábamos el despacho del permiso que le había sido prometido por el Consejo de España, sucedió que el Barón de Vateville,\n\n\n\n\n",
  id: 71
});
index.addDoc({
  subtitle: "página 73",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nteniendo prisa por trasladarse a Inglaterra, en calidad de Embajador de su Católica Majestad y teniendo órdenes de hacer uso del primer buque que estuviera listo para zarpar, tomó el buque de Maleo; el cual con todo sólo sirvió para llevar su equipaje, porque el Rey de Gran Bretaña le envió al mismo tiempo una fragata, en la cual cruzó el mar. Durante la estadía que Maleo se vio obligado a hacer en Inglaterra, hizo nuevas provisiones para el viaje a las Indias; y viendo que el permiso todavía no le había sido enviado, juzgó conveniente aceptar una comisión del Barón de Vateville, como Capitán General de la Provincia de Guipúzcua, a mi nombre y al de Pascual Hiriarte, comendando su barco para ir en persecución de los portugueses en la costa del Brasil; que eso nos serviría de pretexto para ir al Río de la Plata. Fortalecidos con estas órdenes y habiéndonos de tenido en el Havre de Grace para dejar a N... en la costa, quien creyó conveniente regresar a Madrid, para solicitar también una comisión del Consejo de España, para los dos buques con los cuales habíamos convenido que vendrían a reunírsenos en Buenos Aires; continuamos nuestro curso y después de muchos vientos contrarios llegamos al Río de la Plata. Al entrar en él, nos encontramos con dos barcos holandeses que venían de Buenos Aires; los capitanes de los cuales nos informaron\n\n\n\n\n",
  id: 72
});
index.addDoc({
  subtitle: "página 74",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nque uno de ellos no pudo obtener por ningún medio licencia para comerciar allí, pero que el otro, habiendo llegado antes, en una oportunidad en que el gobierno se veía obligado a enviar un mensaje muy importante a su Católica Majestad, relacionado con el servicio, tuvo la suerte, por la promesa que hizo de llevar a su bordo el correo que se despachaba a España, de encontrar medios de disponer de todas sus mercaderías y de traer de vuelta un rico cargamento. Con lo cual decía la verdad pura; porque tuvo la prudencia, antes de llegar al puerto, de desembarcar sus mercancías más ricas y dejarlas en una isla más abajo, reservándose sólo aquellas de más bulto para ser expuestas a la vista de los oficiales; de las cuales había hecho una factura falsa al precio del país, separada de la general, habiendo hecho que el valor de su cargamento ascendiera a 270.000 coronas. Convino con el Gobernador en dejarle esas mercaderías, siempre y cuando le proveyera en cambio de 22.000 cueros a una corona la pieza, 12.000 libras de lana de vicuña a 4 libras 10 sueldos por libra y 30.000 coronas de plata para pagar los gastos de equipar su barco; lo que se realizó satisfactoriamente. Pero bajo el pretexto del trato y mientras cargaban en su barco el cuero, el capitán por bajo mano vendió sus más ricas mercancías\n\n\n\n\n",
  id: 73
});
index.addDoc({
  subtitle: "página 75",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \npor su justo precio, que sumaba 100.000 coronas, y obtuvo por lo menos 400.000. Así el capitán del barco y el gobernador obtuvieron un gran provecho; pero este Gobernador, cuyo nombre es don Alonso de Mercado y de Villacorta, siendo un hombre muy desinteresado, y nada apegado al dinero, declaró que la utilidad de ese negocio era para el Rey su amo y le dio cuenta de ello por el correo.Separados de esos barcos, fuimos a anclar frente a Buenos Aires; pero a pesar de todas las instancias y ofrecimientos que pudimos hacer una vez tras otra a este Gobernador, no pudimos obtener nunca su autorización para desembarcar nuestras mercaderías y exponerlas a la venta al pueblo de la plaza, porque para ello no teníamos licencia de España. Sólo consintió en dejarnos bajar a la ciudad de tanto en tanto, para procurar víveres para nuestros hombres y otras cosas por el estilo que necesitáramos. Nos trató con este rigor durante once meses, después de los cuales se presentó una ocasión que le obligó a tratarnos mejor y a entrar en una especie de arreglo con nos otros. Había otro barco español en el puerto, el mismo que un año antes había traído soldados y armas de España para reforzar las guarniciones de Buenos Aires y Chile, del cual\n\n\n\n\n",
  id: 74
});
index.addDoc({
  subtitle: "página 76",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nhe hablado más arriba, el cual permaneció allá todo este tiempo atendiendo a su negocio particular; pero el capitán que lo comandaba no pudo realizar sus negocios con tantísimo secreto, sino que llegó a oídos del Gobernador que tenía pensado, en contra de la prohibición que se había hecho, llevarse una gran cantidad de plata y en efecto se apoderó de una suma de 113.000 coronas, que estaban precisamente listas para ser llevadas, de las cuales el capitán no consiguió que se le hiciera restitución: y temiendo un mayor disgusto, principalmente que él mismo fuera apresado, izó velas para regresar a España, sin aguardar ninguna carta para su Católica Majestad, las cuales el Gobernador le habría confiado; junto con la información que había recibido de las relaciones que los holandeses habían conseguido en el país, que tenía el propósito de enviar a España con toda prisa, como así también algunas personas que había apresado por ser culpables de mantener correspondencia con los holandeses, entre los cuales se hallaba un capitán holandés llamado Alberto Janson. La fuga del navío español, por lo tanto, obligó al Gobernador a alterar su conducta para con nosotros, y a facilitar el retorno de nuestro barco, del cual creyó bueno hacer uso, por falta de otro, para llevar sus cartas y prisioneros a España; bajo la condición de que tomaríamos sobre nosotros\n\n\n\n\n",
  id: 75
});
index.addDoc({
  subtitle: "página 77",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \nsu encargo, nos toleró, por tácito consentimiento, que hiciéramos nuestro negocio, y que nos lleváramos cuatro mil cueros; pero teniendo nosotros grandes relaciones con los comerciantes de la plaza, hicimos nuestros negocios tan bien, que bajo la sombra de ese permiso, vendimos todas nuestras mercaderías y trajimos de vuelta un rico cargamento, en plata, cueros y otros productos: después de lo cual, sin pérdida de tiempo, emprendimos viaje a España.A nuestra llegada a la ría de la Coruña, en Galicia, recibimos aviso por las cartas que N... nos envió a los puertos de toda la costa, que había una orden del Rey de España de apresarnos a nuestro regreso, porque habíamos estado en Buenos Aires sin licencia. Al saberlo resolvimos (después de haber enviado las cartas y prisioneros que nos habían sido encomendados al Gobernador de la Coruña, por conducto del sargento mayor de Buenos Aires, que vino por los asuntos de aquel país en nuestro barco) salir de aquella ría y marchar a seis leguas de allí, a la rada de Vares, donde encontré un buquecito en el cual embarqué la mayor parte de las cosas que me pertenecían y las de mis amigos. Habiendo recibido aviso de ello el Gobernador de la Coruña, despachó una chalupa detrás de mí, para detenerme; pero usé de tanta precaución y diligencia que nunca\n\n\n\n\n",
  id: 76
});
index.addDoc({
  subtitle: "página 78",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \npudo dar conmigo: así que felizmente llegué a Francia, al puerto de Socoa, donde por este medio salvé el fruto de mis trabajos y largo viaje. El buque grande que dejé en la rada de Vares no tuvo suerte tan favorable y se puede decir que fue hundido en el mismo puerto: porque habiendo dejado la rada para ganar rápidamente la de Santurce, a fin de asegurar todas las mercaderías que llevaba a bordo, excepto cuatro mil cueros, de los cuales daba cuenta su permiso de desembarco, y habiendo comenzado a poner seiscientos cueros a bordo de un barco holandés que encontró allí, el mal tiempo le obligó a entrar al puerto de donde primero saliera, donde le fue confiscado todo el cargamento para uso del Rey de España, bajo el pretexto ya citado de que no tenía permiso de su Católica Majestad para el viaje.Mientras sucedían estas cosas, el sargento mayor de Buenos Aires llegó a Madrid; y el Rey de España, habiendo hecho examinar las informaciones que traía, las cuales insistían principalmente en la necesidad que existía de que se enviaran nuevos suministros de hombres y municiones para aumentar las guarniciones de Buenos Aires y de Chile, asegurando mejor el país contra las empresas extranjeras y también contra las tentativas de los salvajes de Chile,\n\n\n\n\n",
  id: 77
});
index.addDoc({
  subtitle: "página 79",
  chapter: "Descripción de la ciudad de Potosí y sus minas",
  layout: "textoporpagina",
  content: "\n    \ninmediatamente ordenó que fueran equipados tres navíos con ese propósito, el mando de los cuales fue dado a N... Había buena provisión de municiones embarcadas en ellos, pero del reclutamiento de soldados no había más que trescientos hombres, de los cuales la mayor parte fueron mandados a Chile. En el mismo barco fueron enviados letrados para formar una corte de justicia, que llaman audiencia, en Buenos Aires, donde sólo había antes algunos oficiales para la decisión de asuntos pequeños, siendo remitidas las causas mayores a la audiencia que está establecida en Chuquisaca, llamada por otra parte La Plata, en la provincia de los Charcas, a quinientas leguas de Buenos Aires.Cuando N... volvió de este viaje, vino a Oyarson, en la provincia de Guipúzcua, su país natal, desde donde me envió un informe de su trabajo, y convinimos en tener una entrevista secreta en la frontera. De acuerdo con ello, nos encontramos y nos dimos cuenta de los negocios, en los cuales estábamos ambos interesados, resultando de las cuentas deberme él 60.000 libras, que aún no me ha pagado.\n\n\n\n\n",
  id: 78
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "subtitle": "página 1",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0001.html",
},
{
  "subtitle": "página 2",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0002.html",
},
{
  "subtitle": "página 3",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0003.html",
},
{
  "subtitle": "página 4",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0004.html",
},
{
  "subtitle": "página 5",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0005.html",
},
{
  "subtitle": "página 6",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0006.html",
},
{
  "subtitle": "página 7",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0007.html",
},
{
  "subtitle": "página 8",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0008.html",
},
{
  "subtitle": "página 9",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0009.html",
},
{
  "subtitle": "página 10",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0010.html",
},
{
  "subtitle": "página 11",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0011.html",
},
{
  "subtitle": "página 12",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0012.html",
},
{
  "subtitle": "página 13",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0013.html",
},
{
  "subtitle": "página 14",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0014.html",
},
{
  "subtitle": "página 15",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0015.html",
},
{
  "subtitle": "página 16",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0016.html",
},
{
  "subtitle": "página 17",
  "chapter": "Relación del viaje",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0017.html",
},
{
  "subtitle": "página 18",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0018.html",
},
{
  "subtitle": "página 19",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0019.html",
},
{
  "subtitle": "página 20",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0020.html",
},
{
  "subtitle": "página 21",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0021.html",
},
{
  "subtitle": "página 22",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0022.html",
},
{
  "subtitle": "página 23",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0023.html",
},
{
  "subtitle": "página 24",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0024.html",
},
{
  "subtitle": "página 25",
  "chapter": "Descripción de Buenos Aires",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0025.html",
},
{
  "subtitle": "página 26",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0026.html",
},
{
  "subtitle": "página 27",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0027.html",
},
{
  "subtitle": "página 28",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0028.html",
},
{
  "subtitle": "página 29",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0029.html",
},
{
  "subtitle": "página 30",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0030.html",
},
{
  "subtitle": "página 31",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0031.html",
},
{
  "subtitle": "página 32",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0032.html",
},
{
  "subtitle": "página 33",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0033.html",
},
{
  "subtitle": "página 34",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0034.html",
},
{
  "subtitle": "página 35",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0035.html",
},
{
  "subtitle": "página 36",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0036.html",
},
{
  "subtitle": "página 37",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0037.html",
},
{
  "subtitle": "página 38",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0038.html",
},
{
  "subtitle": "página 39",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0039.html",
},
{
  "subtitle": "página 40",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0040.html",
},
{
  "subtitle": "página 41",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0041.html",
},
{
  "subtitle": "página 42",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0042.html",
},
{
  "subtitle": "página 43",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0043.html",
},
{
  "subtitle": "página 44",
  "chapter": "Viaje desde Buenos Aires hasta el Perú",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0044.html",
},
{
  "subtitle": "página 45",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0045.html",
},
{
  "subtitle": "página 46",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0046.html",
},
{
  "subtitle": "página 47",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0047.html",
},
{
  "subtitle": "página 48",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0048.html",
},
{
  "subtitle": "página 49",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0049.html",
},
{
  "subtitle": "página 50",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0050.html",
},
{
  "subtitle": "página 51",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0051.html",
},
{
  "subtitle": "página 52",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0052.html",
},
{
  "subtitle": "página 53",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0053.html",
},
{
  "subtitle": "página 54",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0054.html",
},
{
  "subtitle": "página 55",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0055.html",
},
{
  "subtitle": "página 56",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0056.html",
},
{
  "subtitle": "página 57",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0057.html",
},
{
  "subtitle": "página 58",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0058.html",
},
{
  "subtitle": "página 59",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0059.html",
},
{
  "subtitle": "página 60",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0060.html",
},
{
  "subtitle": "página 61",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0061.html",
},
{
  "subtitle": "página 62",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0062.html",
},
{
  "subtitle": "página 63",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0063.html",
},
{
  "subtitle": "página 64",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0064.html",
},
{
  "subtitle": "página 65",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0065.html",
},
{
  "subtitle": "página 66",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0066.html",
},
{
  "subtitle": "página 67",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0067.html",
},
{
  "subtitle": "página 68",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0068.html",
},
{
  "subtitle": "página 69",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0069.html",
},
{
  "subtitle": "página 70",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0070.html",
},
{
  "subtitle": "página 71",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0071.html",
},
{
  "subtitle": "página 72",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0072.html",
},
{
  "subtitle": "página 73",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0073.html",
},
{
  "subtitle": "página 74",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0074.html",
},
{
  "subtitle": "página 75",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0075.html",
},
{
  "subtitle": "página 76",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0076.html",
},
{
  "subtitle": "página 77",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0077.html",
},
{
  "subtitle": "página 78",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0078.html",
},
{
  "subtitle": "página 79",
  "chapter": "Descripción de la ciudad de Potosí y sus minas",
  "layout": "textoporpagina",
  "link": "/acarete_pages/pg_0079.html",
},
]

//Query

var url = window.location.href;
if (url.lastIndexOf("?q=") > 0) {
  // get the index of the parameter, add three (to account for length)
  var stringloc = url.lastIndexOf("?q=") + 3;
  // get the substring (query) and decode
  var searchquery = decodeURIComponent(url.substr(stringloc));
}

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No se encontraron resultados.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  } else {
    resultdiv.append('<p class="">'+result.length+' resultados</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="/Relacion-de-un-viaje'+store[ref].link+'?q='+query+'">'+store[ref].chapter+' - '+store[ref].subtitle+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (searchquery) {
    $('input#search').val(searchquery);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
