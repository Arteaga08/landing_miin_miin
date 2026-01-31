import { tr } from "framer-motion/client";

export const productos = [
  {
    id: 1,
    nombre:
      "SKIN1004 - Madagascar Centella Poremizing Quick Clay Stick Mask - 27g",
    categoria: "todo_tipo",
    descripcionCorta:
      "Una mascarilla en barra suave con 5 tipos de arcillas (18% de caolín) y polvo fino de frijol rojo para absorber el exceso de sebo y cerrar los poros dilatados.",
    paraQueSirve: "Absorber el exceso de sebo y cerrar los poros dilatados",
    comoUsar:
      "Despues de bañar, aplicar en el rostro evitando los ojos y la boca, limpiar con agua tibia despues de 3 o 5 minutos",
    stock: true,
    cantidadDisponible: 2,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769566725/skin1004-mask-pad-poremizing-quick-clay-stick-mask-40032146948342_1440x_c7domi.webp",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769568372/skin1004-poremizing-quick-clay-stick-mask-39362357330166_1440x_tlynlx.webp",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769568413/skin1004-poremizing-quick-clay-stick-mask-39362357297398_1440x_y976dx.webp",
    ],
  },
  {
    id: 2,
    nombre: "SKIN1004 - Tone Brightening Capsule Ampoule",
    categoria: "todo_tipo",
    
    descripcionCorta:
      "Ampolla iluminadora de uso diario diseñada para piel normal, sensible y mixta. ",
    paraQueSirve:
      "Corrección de manchas, Acción antimelanina, Luminosidad natural, Calma y protege, Hidratación profunda.",
    comoUsar:
      "Aplica unas gotas directamente sobre la piel limpia. Extiende de manera uniforme en rostro y cuello y da suaves toques con los dedos para favorecer la absorción.",
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769567713/capsuleAmpoule_wnevec.webp",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769567728/capsuleAmpoule2_uxgnhk.webp",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769569359/29_28aaeec4-b356-447d-b11d-e9141d8b2329_mrkn3e.webp",
    ],
  },
  {
    id: 3,
    nombre:
      "SKIN1004 - Madagascar Centella Probio-Cica Bakuchiol Eye Cream - 20ml",
    categoria: "todo_tipo",
    descripcionCorta:
      " Centella Asiática para desinflamar y relajar la piel, Bakuchiol para mejorar la apariencia de líneas finas y aumentar la elasticidad, así como Colágeno y Ácido Hialurónico que mantienen la piel hidratada. ",
    paraQueSirve:
      "Está formulada con Fermento Filtrado de Centella Asiática para desinflamar y relajar la piel, Bakuchiol para mejorar la apariencia de líneas finas y aumentar la elasticidad, así como Colágeno y Ácido Hialurónico que mantienen la piel hidratada.",
    comoUsar: `
      - Después de aplicar tónico en toda la cara, toma un poco de la crema y aplícala sobre el contorno de ojos.
- Deja que el producto se absorba dando ligeros toquecitos y continúa con el resto de tu rutina.
- Puedes usarlo de día y de noche.
      `,
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769576535/Madagascar_Centella_Probio-Cica_Bakuchiol_Eye_Cream_1_wmep8b.webp",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769576535/Madagascar_Centella_Probio-Cica_Bakuchiol_Eye_Cream_2_dkmpbp.webp",
    ],
  },
  {
    id: 4,
    nombre:
      "SKIN1004 - Madagascar Centella Double Cleansing Duo - 1 set (2 artículos)",
    categoria: "todo_tipo",
    
    descripcionCorta:
      "Rutina de limpieza vital para mantener una buena salud de la piel.",
    paraQueSirve:
      "Aceite limpiador ligero Centella (200 ml) para derretir suavemente el maquillaje y otras impurezas. Una vez que se hayan eliminado las partículas no deseadas, siga con la espuma limpiadora en ampolla Centella (125 ml) para limpiar profundamente los poros y rejuvenecer la piel.",
    comoUsar: `- Aplique unas cuantas dosis del aceite limpiador ligero sobre el rostro seco con las manos secas. 
      - Masajear suavemente con movimientos circulares. Emulsionar con agua para crear una sensación lechosa antes de enjuagar completamente con agua tibia. 
      - A continuación, aplica una pequeña cantidad del limpiador Ampoule Foam en tus manos y frota para crear una textura espumosa. 
      - Frote la piel con movimientos circulares antes de enjuagar completamente con agua tibia. Continúe con un tónico o el siguiente paso en su rutina personal de cuidado de la piel.`,
    stock: true,
    cantidadDisponible: 1,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769575517/cetella_nfcuwv.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769575528/centella2_i69afz.jpg",
    ],
  },
  {
    id: 5,
    nombre: "Mixsoon - Bean Essence - 50ml",
    categoria: "todo_tipo",
    
    descripcionCorta:
      "Elimina las células muertas de la piel y controla el sebo para una piel perfecta",
    paraQueSirve:
      "Protege de rayos UVA/UVB con extractos de arroz y probióticos.",
    comoUsar: `
      - Aplique la ESENCIA DE FRIJOL sobre la piel y enróllela en círculos.
- Cuando haya caído el residuo después de masajear su piel, bombee la ESENCIA DE FRIJOL una vez más y luego masajee su piel intensamente.
- Lave el residuo con agua o límpielo con una almohadilla. Puedes sentir la piel más húmeda después de lavarte la cara con agua.
* Se recomienda usarlo de 2 a 3 veces por semana.
      `,
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769577214/BeanEssence30ml1_lap6iu.webp",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769577205/4-Mixsoon-BeanEssence30ml_p8gj6l.webp",
    ],
  },
  {
    id: 6,
    nombre: "SKIN1004 - Centella Light Cleansing Oil - 200ml",
    categoria: "todo_tipo",
    descripcionCorta:
      "Disuelve el maquillaje y los residuos en la piel con aceite de Centella",
    paraQueSirve:
      "Aceite limpiador ligero que disuelve suavemente el maquillaje, el protector solar, las impurezas y los aceites sin irritar el área de los ojos. Contiene centella asiática y antioxidantes para calmar la piel sensible, reponer la hidratación de la piel y combatir los daños por agentes ambientales externos. Deja la piel con una sensación hidratada, suave y fresca sin resercarla ni efecto grasoso.",
    comoUsar:
      "Aplica algunas bombas de aceite limpiador sobre la cara seca con las manos secas. Masajea suavemente con movimientos circulares. Emulsiona con agua para crear una emoción lechosa antes de enjuagar completamente con agua tibia.",
    stock: true,
    cantidadDisponible: 3,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769577549/skin1004-cleanser-centella-light-cleansing-oil-42321970594038_1440x_sdjogi.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769577586/skin1004-cleanser-centella-light-cleansing-oil-38409133490422_1440x_gliol7.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769577633/skin1004-cleanser-madagascar-centella-light-cleansing-oil-36440241078518_1440x_ktozlw.jpg",
    ],
  },
  {
    id: 7,
    nombre: "SKIN1004 - Madagascar Centella Poremizing Fresh Ampoule - 100ml",
    categoria: "todo_tipo",
    
    descripcionCorta:
      "ULTRA HIDRATANTE Debido a su alta concentración de extracto, esta ampolla para la piel penetra profundamente en la piel y la deja flexible y suave durante todo el día.",
    paraQueSirve:
      "Si quieres mejorar la elasticidad de tu piel, reafirmarla y minimizar la apariencia de los poros, este suero es para ti. Está formulado con Centella Asiática y un complejo de 9 Péptidos que limpian las impurezas y promueven la elasticidad de la piel para que los poros se reduzcan a un tamaño menor. ",
    comoUsar: `
      - Después de lavar tu rostro y usar un tónico, aplica una pipeta de este suero con masaje sobre tu piel, de día y/o noche.
- Sigue con el resto de tu rutina: Contorno de ojos, crema hidratante y protector solar (en el día).
      `,
    stock: true,
    cantidadDisponible: 5,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769578002/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38642870780150_1440x_lpqgqu.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769578114/skin1004-ampoule-serum-100ml-poremizing-fresh-ampoule-38609117708534_1440x_ta1brz.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769578153/skin1004-ampoule-serum-100ml-coming-soon-poremizing-fresh-ampoule-37221265637622_1440x_sgh9t3.png",
    ],
  },
  {
    id: 8,
    nombre: "VT - Reedle Shot 100 - 50ml",
    categoria: "todo_tipo",
    
    descripcionCorta:
      "Sérum facial avanzado y especializado en renovación dérmica",
    paraQueSirve: `Si tu piel tiene textura o poros marcados, este suero nocturno estimula la renovación celular y mejora la absorción de otros productos para una piel más lisa y uniforme.Suaviza la textura de la piel
- Ayuda a minimizar la apariencia de poros
- Potencia la absorción de activos
- Estimula la renovación celular
- Da una sensación de firmeza y suavidad`,
    comoUsar:
      "Aplicar por la noche sobre piel limpia, 2–3 veces por semana. Masajear suavemente y presionar para absorber. No combinar con exfoliantes fuertes o retinoides la misma noche.",
    stock: true,
    cantidadDisponible: 1,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769578720/reedle-shot-100-essence_dbtryq.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769578755/reedle-shot-100-essence_wfzbns.jpg",
    ],
  },
  {
    id: 9,
    nombre: "medicube - Collagen Jelly Cream - 110ml",
    categoria: "todo_tipo",
    descripcionCorta:
      "Crema en gel enriquecida con 98% de colágeno hidrolizado, con efecto antiedad para mejorar la elasticidad de la piel.",
    paraQueSirve:
      "Revierte los signos del envejecimiento con esta crema en gel enriquecida con colágeno y elastina para mejorar la elasticidad de la piel y reducir arrugas. La niacinamida y el extracto de arándano ayudan a lograr una tez más luminosa, mientras que el ácido hialurónico y el escualano fortalecen la barrera de hidratación de la piel. Formulada sin colorantes artificiales, el tono rosado de la crema proviene de varios ingredientes ricos en vitaminas.",
    comoUsar:
      "En el último paso de tu rutina de cuidado facial, aplica una cantidad moderada en todo el rostro y da golpecitos suaves para que se absorba.",
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769579133/CollagenJellyCream_1_2048x2048_k5he9c.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769579179/CollagenJellyCream_2_2048x2048_zbjb4d.jpg",
    ],
  },
  {
    id: 10,
    nombre: "Purito Oat-In Calming Gel Cream - 100ml",
    categoria: "piel_seca",
    descripcionCorta:
      "Perfecta para quienes buscan hidratar sin saturar, equilibrar sin agredir y devolverle a su piel ese suspiro de alivio que tanto necesita",
    paraQueSirve:
      "Imagina una caricia fresca, ligera y reconfortante… justo eso siente tu piel al aplicar esta cremita tipo gel, formulada con 77% de extracto de avena —sí, esa misma que ha sido famosa desde siempre por calmar, hidratar y proteger hasta las pieles más sensibles.",
    comoUsar:
      "plícala mañana y noche sobre tu piel limpia, después del tónico y el sérum.",
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769579547/1_04c7cb6d-fd4d-4b05-b5cf-8b6d7c9a253f_uesh8q.png",
      "https://www.pielcoreana.com/cdn/shop/files/2_2a1afda6-9f84-413c-90c8-ecaa2ac5dbd7.png?v=1747538264",
    ],
  },
  {
    id: 11,
    nombre: "SKIN1004 - Probio-Cica Enrich Cream",
    categoria: "piel_seca",
    descripcionCorta:
      "Repara la barrera cutánea dañada para evitar la evaporación de la humedad y proporciona cuidado a la piel seca y sensible",
    paraQueSirve:
      "La Crema Enriquecida con Centella Probio-Cica de Madagascar SKIN1004 repara la barrera cutánea dañada para evitar la evaporación de la humedad y proporciona cuidado a la piel seca y sensible. El extracto de Centella Asiática calma eficazmente la piel, mientras que el ProBio-Cica vegano (Centella fermentada con TECA), cuida las barreras cutáneas débiles y sensibles. La crema tiene una textura suave y mantecosa para una hidratación duradera, dejando la piel sedosa y suave.",
    comoUsar:
      "Aplicar y extender suavemente sobre la piel en el último paso de su rutina de cuidado de la piel, y dar ligeros golpecitos para que se absorba en la piel.",
    stock: true,
    cantidadDisponible: 2,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769579989/skin1004-cream-probio-cica-enrich-cream-40032154747126_1440x_gjlofa.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769580029/skin1004-cream-50-ml-probio-cica-enrich-cream-39172404379894_1440x_tyqk23.png",
    ],
  },
  {
    id: 12,
    nombre: "Im From - Rice Toner - 150ml",
    categoria: "piel_seca",
    descripcionCorta:
      "Elasticidad y firmeza, antiedad, reduce arrugas, purifica, calma, unifica tono, ilumina, limpia.",
    paraQueSirve:
      "Ayuda a aclarar y limpiar el rostro eliminando residuos de impurezas que puedan estar opacando la piel. Calma y alivia el enrojecimiento y la inflamación.",
    comoUsar: `
    - Agita el producto para unificar el agua con la emulsión. 
    - Sobre tu rostro limpio, aplica con un algodón sobre cara y cuello.
    `,
    stock: false, // true = hay stock, false = agotado
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769580354/rice-toner_lp7hfc.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769580318/rice-toner_voa5q2.jpg",
      "",
    ],
  },
  {
    id: 13,
    nombre: "Purito Seoul - Mighty Bamboo Panthenol Cream - 100ml",
    categoria: "piel_acne",
    descripcionCorta:
      "Ayuda a mantener la piel suave y fresca con un acabado saludable.",
    paraQueSirve:
      "Esta crema crea una barrera de humectación que protege y sana tu piel. Está formulada con Pantenol y Extracto de Bambú que mantienen tu piel fresca e hidratada mientras refuerzan tu barrera cutánea. Además, su fórmula es vegana, hipoalergénica y libre de fragancia, perfecta para todos los tipos de piel, incluyendo piel sensible y con brotes.",
    comoUsar: `
      - Aplica la cantidad equivalente a un chícharo (o un poco más si lo necesitas) en todo tu rostro después del suero y antes del protector solar, o como último paso antes de dormir.
- Puedes usarla de día y/o de noche.
      `,
    stock: false, // true = hay stock, false = agotado
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769581739/3-PuritoSeoul-MightyBambooPanthenolCream100ml_ktsfyx.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769581771/1-PuritoSeoul-MightyBambooPanthenolCream100ml_vtidjg.png",
    ],
  },
  {
    id: 14,
    nombre:
      "SKIN1004 - Madagascar Centella Hyalu-Cica Water-Fit Sun Serum SPF50 PA++++ - 50ml",
    categoria: "protector_solar",
    descripcionCorta:
      "SPF 50+ y PA++++ tiene el balance perfecto entre hidratación y protección",
    paraQueSirve:
      "Este protector solar químico con SPF 50+ y PA++++ tiene el balance perfecto entre hidratación y protección. Su fórmula con Ácido Hialurónico, Centella Asiática y Matcha (Té Verde) mejoran la salud de tu piel y la hidratan mientras le dan beneficios antioxidantes. Además, su textura ligera deja tu piel jugosa y glowy.",
    comoUsar: `
    - Aplica la cantidad equivalente a dos dedos sobre la piel limpia, en toda la cara, cuello y orejas.
- Reaplica cada 2 a 4 horas durante el día.
      `,
    stock: true,
    cantidadDisponible: 3,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769582135/skin1004-sun-50ml-hyalu-cica-water-fit-sun-serum-spf50-pa-38409244737782_1440x_g6rylh.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769582170/skin1004-sun-hyalu-cica-water-fit-sun-serum-spf50-pa-39366328811766_1440x_g5fwej.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769582203/skin1004-sun-hyalu-cica-water-fit-sun-serum-spf50-pa-37102207860982_1440x_nbwiq7.png",
    ],
  },
  {
    id: 15,
    nombre: "Celimax - oil control light sunscreen spf 50+ pa++++",
    categoria: "protector_solar",
    descripcionCorta:
      "Hidratante, Refrescante, Protección, Contra las manchas, Matificante y Reequilibrante",
    paraQueSirve:
      "Este protector solar híbrido químico y mineral ofrece protección solar de amplio espectro con FPS 50+ PA++++ y beneficios seborreguladores. Su fórmula, enriquecida con el ingrediente patentado Anti Sebum-P, controla eficazmente la producción excesiva de sebo. Su textura suave y sedosa proporciona un acabado refrescante y sin manchas blancas. El producto, probado dermatológicamente, es hipoalergénico. Adecuado para varios tipos de piel, incluidos",
    comoUsar:
      "Agita, aplica como último paso de cuidado. Deja unos minutos secar y continúa con maquillaje si deseas. Reaplica cada 2 h bajo exposición solar intensa.",
    stock: true,
    cantidadDisponible: 1,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769735647/864_magnify_028_wzzdia.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769735691/df7fbcfd37d34b53_boi710.jpg",
    ],
  },
  {
    id: 16,
    nombre:
      "Celimax - Pore + Dark Spot Brightening Care Sunscreen SPF50+ PA++++ - 50ml",
    categoria: "protector_solar",
    descripcionCorta:
      "Protección solar, iluminante, suavizante, efecto hidratante",
    paraQueSirve:
      "Si te preocupan manchas solares, poros visibles o tono desigual, este protector solar combina alta protección con ingredientes que iluminan, suavizan textura y dejan la piel confortable.",
    comoUsar:
      "Aplica generosamente como último paso de la rutina matinal. Repite cada 2 horas si estás al sol o después de nadar.",
    stock: true,
    cantidadDisponible: 3,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769736552/61pukBgeUVL._AC_SL1500__pvkre3.jpg",
    ],
  },
  {
    id: 17,
    nombre: "Celimax - The Vita A Retinal Shot Tightening Booster - 15ml",
    categoria: "todo_tipo",
    masVendido: true,
    descripcionCorta:
      "Favorece la textura de la piel. Promueve la firmeza. Cuidado suave para la noche.",
    paraQueSirve:
      "0,1% Retinal: derivado de la vitamina A que ayuda a apoyar la apariencia de una textura de piel más refinada y uniforme. 1% Pantenol: conocido por ayudar a hidratar la piel y a mantener su equilibrio natural de hidratación. 3% Matrixyl® 3000: complejo de péptidos que contribuye a mejorar la apariencia de una piel más firme y resistente. Ingredientes adicionales: Niacinamida, Tocoferol (Vitamina E), Esponja Hidrolizada, Palmitoyl Tripeptide-1 y Palmitoyl Tetrapeptide-7, que aportan una base nutritiva para el acondicionamiento y el confort de la piel.",
    comoUsar: `
    Aplicar por la noche sobre la piel limpia y seca, como parte de tu rutina nocturna.

Utiliza una pequeña cantidad y extiéndela suavemente por el rostro y el cuello, evitando el contacto directo con los ojos. Deja que el sérum se absorba antes de continuar con tu hidratante habitual.

Para una mayor comodidad, introdúcelo de forma gradual y úsalo de manera constante por la noche, permitiendo que tu piel se adapte de forma natural dentro de una rutina tranquila y cuidada.`,
    stock: true,
    cantidadDisponible: 1,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769824194/8_ql5rgy.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769824271/celimax-vita-a-retinal-shot-product-tube_dwzbxf.png",
    ],
  },
  {
    id: 18,
    nombre: "Celimax - Oil Control Mattifying Sun Stick SPF50+ PA++++ - 19g",
    categoria: "protector_solar",
    descripcionCorta:
      "Controla el brillo de tu carita a lo largo del día mientras la proteges con este protector solar ",
    paraQueSirve:
      "Controla el brillo de tu carita a lo largo del día mientras la proteges con este protector solar en barra con SPF50+ y PA++++. Está formulado con ingredientes no comedogénicos, así como Calamina y Centella Asiática que ayudan a disminuir la inflamación y Anti Sebum P que controla la producción de sebo. Además, su aplicador tiene forma de gota para aplicarlo más fácilmente alrededor de ojos y nariz.",
    comoUsar:
      "En el último paso de tu rutina de skincare de día pasa el sun stick de 3 a 4 veces por cada zona de tu rostro para asegurar una protección uniforme.",
    stock: true,
    cantidadDisponible: 3,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769739170/Oil_Control_Mattifying_Sun_Stick_19g_1_tziwka.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769739217/Oil_Control_Mattifying_Sun_Stick_19g_2_bnzizd.jpg",
    ],
  },
  {
    id: 19,
    nombre: "Arencia - Fresh Green Rice Mochi Cleanser - 120g",
    categoria: "piel_acne",
    descripcionCorta:
      "Este limpiador mantiene tu piel hidratada mientras remueve el polvo y las impurezas de los poros. ",
    paraQueSirve:
      "Este limpiador mantiene tu piel hidratada mientras remueve el polvo y las impurezas de los poros. Está formulada con Polvo de Arroz y Kaolina que ayudan a exfoliar la piel y a remover puntos negros, además de Extracto de Hamamelis que le da un efecto glowy a la piel. Su textura de mochi la vuelve perfecta para usarse como mascarilla.",
    comoUsar: `
  Como limpiador de diario:
    - Aplica la cantidad equivalente a una moneda pequeña sobre tu rostro húmedo.
- Masajea suavemente para crear una espuma y deja actuar por 30 segundos.
- Enjuaga con agua tibia.

Como mascarilla limpiadora:
- Aplica una capa delgada de mascarilla de arcilla en el rostro limpio y seco, evitando el área de los ojos y los labios.
- Masajea la arcilla de acuerdo a las necesidades de tu piel y deja que actúe por 1-2 min aproximadamente.
- Una vez que la mascarilla se haya secado, retírala con agua tibia.
    `,

    stock: true,
    cantidadDisponible: 3,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769739633/1FreshGreenRiceMochiCleanser_qunioo.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769739674/2_-_Fresh_Green_Cleanser_120g_d0omag.png",
    ],
  },
  {
    id: 20,
    nombre: "Centellian24 - Madeca Cream Time Reverse (Season7) 50ml",
    categoria: "todo_tipo",
    descripcionCorta:
      "Contra el envejecimiento, Calmante, Reafirmante, Hidratante, Hidratante, Regenerador, Revitalizante y Fortalecimiento",
    paraQueSirve:
      "La Centellian24 Madeca Cream Time Reverse (Season 7) es la versión más innovadora de la reconocida línea Madeca, diseñada para reparar profundamente la piel, mejorar su elasticidad y reducir los signos del envejecimiento. Enriquecida con TECA (Extracto Purificado de Centella Asiática) y un complejo de ingredientes antiedad, actúa directamente sobre arrugas, firmeza y textura irregular.",
    comoUsar: `
 - Diariamente: Aplicar suavemente como último paso del cuidado facial, mañana y noche. 

- Especial: Aplicar una capa gruesa por la noche para un cuidado intensivo y mejores resultados.
    `,

    stock: true,
    cantidadDisponible: 3,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769740218/CENTELLIAN-24-Madeca-Cream-Time-Reverse-50-ML_gjzhe9.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769740259/CENTELLIAN24MadecaCreamTimeReverse50ML3_fx46nk.png",
    ],
  },
  {
    id: 21,
    nombre: "SKIN1004 - Madagascar Centella Air-Fit Suncream Light",
    categoria: "protector_solar",
    masVendido: true,
    descripcionCorta: "Protector solar mineral ligerísimo con SPF30 PA++++",
    paraQueSirve:
      "Más allá de proteger, esta crema solar cuidará tu piel. Su fórmula cuenta con extractos de centella asiática y Houttuynia Cordata, dos ingredientes vegetales conocidos por sus propiedades calmantes y antiinflamatorias.",
    comoUsar:
      "En el último paso de tu rutina de día, aplica dos dedos del protector de manera uniforme sobre la piel de tu rostro. Puedes aplicarlo también en el cuello y en cualquier otra parte de tu cuerpo que vaya a estar expuesta al sol.",
    stock: true,
    cantidadDisponible: 2,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825129/skin1004-sun-50ml-centella-air-fit-suncream-light-spf30-pa-38642815467766_1440x_fjbagm.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825167/skin1004-sun-madagascar-centella-air-fit-suncream-light-spf30-pa-37102167884022_1440x_qzy3rp.png",
    ],
  },
  {
    id: 22,
    nombre: "Celimax - The Real Noni Starter Kit - 20ml+10ml+10ml",
    categoria: "piel_sensible",
    masVendido: true,
    descripcionCorta:
      "Un set pensado para introducir tu piel a la rutina iluminadora y revitalizante de noni",
    paraQueSirve: `
      - 20 ml The Real Noni Balancing Toner (mini): Tonifica e hidrata con extracto de noni y aceite de semilla de noni. Mejora la elasticidad y suaviza la textura.

- 10 ml The Real Noni Energy Ampoule (mini): Suero concentrado que calma, hidrata y revitaliza la piel estresada.

- 10 ml The Real Noni Repair Cream (mini): Crema enriquecida con ceramidas que repara la barrera cutánea y sella la hidratación para un acabado juicy.
      `,
    comoUsar: `
 The Real Noni Moisture Balancing Toner
- Humedece un pad de algodón con el extracto y aplica suavemente sobre la cara recién lavada como primer paso de tu rutina.

The Real Noni Energy Ampule 
- Después de limpiar tu rostro y aplicar tónico, utiliza un pump de este suero facial.
- Masajea suavemente sobre la piel, de día y/o noche.
- Completa tu rutina con contorno de ojos, crema hidratante y protector solar durante el día.

The Real Noni Energy Repair Cream
- Aplica la cantidad equivalente a un chícharo (o un poco más si lo necesitas) en todo tu rostro después del suero y antes del protector solar, o como último paso antes de dormir.
    `,

    stock: true,
    cantidadDisponible: 1,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825716/NoniStarterKit1_un4uh9.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825760/NoniStarterKit3_ijglfl.jpg",
    ],
  },
  {
    id: 23,
    nombre:
      "SKIN1004 Madagascar Centella Travel Kit | Kit Hidratante y Calmante",
    categoria: "todo_tipo",
    masVendido: true,
    descripcionCorta:
      "Un set completo de rutina de cuidado facial de Centella con 5 productos mini para viajar o probar la línea Centella.",
    paraQueSirve: `
    Este set incluye 5 minis de la línea calmante de Centella Asiática ideal para probar o llevar de viaje.

- 20 ml Espuma de ampolla Centella	Elimina hasta el 92.69% de Ultra-Microdust
- 30 ml Aceite limpiador ligero Centella	Potente limpieza profunda y acabado fresco
- 30 ml Tóner tonificante Centella	pH ligeramente ácido de 5.5 para crear una capa protectora y mantener el equilibrio de pH de la piel
- 30 ml Ampolla Centella	100% centella asiática proporciona un fuerte cuidado calmante para cuidar la piel sensible y fortalecer las barreras de la piel
- 30 ml Crema calmante Centella	72% de extracto de centella asiatica calma la piel irritada inmediatamente
    `,
    comoUsar: `
1. Doble limpieza: inicia con el Light Cleansing Oil, emulsiona con agua; continúa con el Ampoule Foam.
2. Tonifica con el Toning Toner, aplica con algodón o palmas.
3. Sella la barrera con el Ampoule aplicando unas gotas en todo el rostro.
4. Finaliza con Soothing Cream para mantener hidratación y protección.
    `,
    stock: true,
    cantidadDisponible: 1,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825870/skin1004-others-centella-travel-kit-40800422625526_1440x_uldbri.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825914/skin1004-others--madagascar-centella-travel-kit-36440453349622_1440x_jv61vx.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769825949/skin1004-others--madagascar-centella-travel-kit-36440491786486_1440x_byjpdw.jpg",
    ],
  },
  {
    id: 24,
    nombre: "Unleashia - Tanghulu Glaze Tint - Amberose",
    categoria: "maquillaje",
    masVendido: true,
    descripcionCorta:
      "Una tinta para labios de larga duración con un acabado ultrabrillante",
    paraQueSirve:
      "Una tinta para labios de larga duración con un acabado ultrabrillante como un tanghulu, contiene una textura ligera que no se siente pesada ni pegajosa además esta formulada con oléoactif que hidrata profundamente y brinda volumen en tus labios.",
    comoUsar:
      "Aplica directamente sobre los labios limpios y secos con el aplicador incluido, comenzando desde el centro hacia afuera. Para obtener el máximo efecto de brillo tanghul (jugoso y voluminoso), espera unos segundos y aplica una segunda capa, lo que realza el efecto de labios carnosos. ",

    stock: true,
    cantidadDisponible: 1,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769826888/Unleashia_Tanghulu_Glaze_Tint_j37zoo.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769826752/Unleashia_Tanghulu_Glaze_Tint_02-Amberose_pb8fft.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769826794/520942853_18064721009272745_4975599290811345148_n_o5nsuz.jpg",
    ],
  },
  {
    id: 25,
    nombre: "ANUA - Rice 70 Glow Milky Toner - 40ml",
    categoria: "todo_tipo",
    masVendido: true,
    descripcionCorta:
      "Tónico hidratante y nutritivo con 70% de extracto de arroz, niacinamida y ceramidas que hidrata profundamente, ilumina la piel y deja un acabado radiante tipo “glass skin”, sin sensación grasosa.",
    paraQueSirve:
      `
      - Hidrata profundamente y mantiene el balance de la piel. 

- Ilumina y unifica el tono gracias a la niacinamida. 

- Fortalece la barrera cutánea con ceramidas AP/NP. 

- Fórmula suave y sin fragancia ni alcohol — ideal para pieles sensibles. 

- Textura tipo emulsión lechosa que se absorbe rápido sin dejar residuo pegajoso.
      `,
    comoUsar:
      "Aplica después de la limpieza: usa tus manos o un algodón, da palmaditas suaves hasta absorción. Puedes usarlo mañana y noche.",
    stock: true,
    cantidadDisponible: 1,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769828229/RICE70GLOWMILKYTONER_bvoiio.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769828303/ANUA_Rice_Toner-KB4_ovug3d.png",
      
    ],
  },
];
