import { tr } from "framer-motion/client";

export const productos = [
  {
    id: 3,
    nombre: "SKIN1004 - Madagascar Centella Air-Fit Suncream Light",
    precio: 379,
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
    id: 4,
    nombre: "Celimax - The Real Noni Starter Kit - 20ml+10ml+10ml",
    precio: 529,
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
    id: 5,
    nombre:
      "SKIN1004 Madagascar Centella Travel Kit | Kit Hidratante y Calmante",
    precio: 679,
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
    id: 6,
    nombre: "Unleashia - Tanghulu Glaze Tint - Amberose",
    precio: 249,
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
    id: 7,
    nombre: "ANUA - Rice 70 Glow Milky Toner - 40ml",
    precio: 339,
    categoria: "todo_tipo",
    masVendido: true,
    descripcionCorta:
      "Tónico hidratante y nutritivo con 70% de extracto de arroz, niacinamida y ceramidas que hidrata profundamente, ilumina la piel y deja un acabado radiante tipo “glass skin”, sin sensación grasosa.",
    paraQueSirve: `
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
  {
    id: 8,
    nombre:
      "SKIN1004 - Madagascar Centella Double Cleansing Duo - 1 set (2 artículos)",
    precio: 669,
    categoria: "todo_tipo",
    masVendido: true,
    descripcionCorta:
      "Rutina de limpieza vital para mantener una buena salud de la piel.",
    paraQueSirve:
      "Aceite limpiador ligero Centella (200 ml) para derretir suavemente el maquillaje y otras impurezas. Una vez que se hayan eliminado las partículas no deseadas, siga con la espuma limpiadora en ampolla Centella (125 ml) para limpiar profundamente los poros y rejuvenecer la piel.",
    comoUsar: `- Aplique unas cuantas dosis del aceite limpiador ligero sobre el rostro seco con las manos secas. 
      - Masajear suavemente con movimientos circulares. Emulsionar con agua para crear una sensación lechosa antes de enjuagar completamente con agua tibia. 
      - A continuación, aplica una pequeña cantidad del limpiador Ampoule Foam en tus manos y frota para crear una textura espumosa. 
      - Frote la piel con movimientos circulares antes de enjuagar completamente con agua tibia. Continúe con un tónico o el siguiente paso en su rutina personal de cuidado de la piel.`,
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769575517/cetella_nfcuwv.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769575528/centella2_i69afz.jpg",
    ],
  },
  {
    id: 9,
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
    id: 10,
    nombre: "medicube - Collagen Jelly Cream - 110ml",
    precio: 459,
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
    id: 11,
    nombre: "VT - Reedle Shot 100 - 50ml",
    precio: 659,
    categoria: "todo_tipo",
    masVendido: true,
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
    id: 12,
    nombre: "Purito Oat-In Calming Gel Cream - 100ml",
    precio: 419,
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
    id: 13,
    nombre: "Celimax - The Vita A Retinal Shot Tightening Booster - 15ml",
    precio: 359,
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
    id: 14,
    nombre: "ETUDE - Drawing Eye Brow - No.02 Grey Brown",
    precio: 149,
    categoria: "maquillaje",
    descripcionCorta:
      "Un lápiz de cejas de trazo preciso para conseguir unas cejas de aspecto más natural.",
    paraQueSirve:
      "Un lápiz de cejas de trazo preciso para conseguir unas cejas de aspecto más natural. Su vitamina E proporciona hidratación y una aplicación suave para crear la forma de ceja deseada.",
    comoUsar:
      "Peine su ceja con el cepillo, para un acomodo uniforme. Después utilice el extremo delgado del plumón para crear ceja y lado grueso para rellenar. De nuevo use el cepillo para el peinado de su ceja.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://m.media-amazon.com/images/I/41oF65EhQFL._SY300_SX300_QL70_FMwebp_.jpg",
      "https://skinlovers.com.mx/cdn/shop/files/230908_drawing_eye_brow_21ad_sub_03_1.jpg?v=1702239894",
    ],
  },

  {
    id: 15,
    nombre: "TOCOBO - Bio Watery Sun Cream SPF50 PA++++ - 50ml",
    precio: 349,
    categoria: "protector_solar",
    descripcionCorta: "Crema solar de textura ligera y ligera.",
    paraQueSirve:
      "Crema solar de textura ligera y ligera que ofrece una protección UVA y UVB gracias a su SPF 50+ y PA+++, su fórmula ligera y acuosa que se absorbe rápidamente sin dejar sensación pegajosa. Hidrata la piel y la mantiene fresca.",
    comoUsar:
      "	Aplica la cantidad equivalente a dos dedos sobre la piel limpia, en toda la cara, cuello y orejas.",
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://tocobo.mx/cdn/shop/files/Bio-Watery-Sun-Cream.jpg?v=1757362297&width=1280",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770950001/TOCOBO_SUN_7819_z7moht.jpg",
    ],
  },
  {
    id: 16,
    nombre:
      "SKIN1004 - Madagascar Centella Probio-Cica Glow Sun Ampoule SPF50+ PA++++ - 50ml",
    precio: 409,
    categoria: "protector_solar",
    descripcionCorta:
      "Un protector solar súper hidratante con Centella fermentada y pantenol",
    paraQueSirve:
      "Probio-Cica Glow Sun - Una ampolla solar suave que repone las barreras cutáneas dañadas y la hidratación y elasticidad - Contiene 5.000 ppm de pantenol y betaína para hidratar la piel y fortalecer la barrera rota causada por la falta de humedad - Contiene Chostro Fito, compuesto por 5 ingredientes naturales, elimina el exceso de calor de la piel y ayuda a hidratarse. calma y estabiliza la piel",
    comoUsar:
      "En el último paso del cuidado básico de la piel, aplica de forma uniforme en las zonas expuestas a rayos UV, como cara, braozos y piernas",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770950299/skin1004-50ml-probio-cica-glow-sun-ampoule-41175245684982_1440x_cttlfh.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770950329/skin1004-50ml-probio-cica-glow-sun-ampoule-41157186257142_1440x_soechr.jpg",
    ],
  },
  {
    id: 17,
    nombre: "Dr. Althea - 345 Relief Cream - 50ml",
    precio: 622,
    categoria: "piel_sensible",
    masVendido: true,
    descripcionCorta:
      "Segura y suave para pieles propensas al acné, por lo que es ideal para su uso diario en su rutina de cuidado del acné.",
    paraQueSirve: `Probada clínicamente como no comedogénica, la crema 345 Relief Cream (Ver.2) es segura y suave para pieles propensas al acné, por lo que es ideal para su uso diario en su rutina de cuidado del acné.
Es una pomada vegana rica en nutrientes y regeneradora en gel formulada para tratar imperfecciones, nutrir la piel y ofrecer un cuidado calmante para una solución completa de cuidado de la piel.`,
    comoUsar: `
    1. Lava tu cara con un limpiador suave adaptado a tu tipo de piel.
2. Aplica primero productos de cuidado de la piel menos viscosos, como el tónico.
3. Aplica una cantidad adecuada de la Crema de Alivio 345 como último o semifinal en tu rutina de cuidado de la piel.`,
    stock: false,
    cantidadDisponible: 0,
    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770950451/DR.ALTHEA345ReliefCream_j7kjzo.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770950557/260202___345___1200_-03_xeqgex.jpg",
    ],
  },
  {
    id: 18,
    nombre: "AXIS-Y - Vegan Collagen Eye Serum - 10ml",
    precio: 429,
    categoria: "piel_sensible",
    descripcionCorta: "Tu aliado para una mirada radiante y revitalizada",
    paraQueSirve: `
      Este suero innovador está diseñado para brindar un cuidado ocular excepcional que atenúa arrugas, ojeras y bolsas, devolviéndole a tu piel luminosidad y frescura. Disfruta de una fórmula enriquecida con Colágeno Vegano y un Complejo de 5 Péptidos que mejorarán notablemente la elasticidad de tu piel, dándole un aspecto rejuvenecido y firme. 
      Disminuye arrugas, ojeras y bolsas en el contorno de ojos.
Mejora la elasticidad de la piel, devolviéndole firmeza y juventud.
      `,
    comoUsar:
      "Aplica una cantidad moderada alrededor de los ojos y da golpecitos suaves para ayudar a la absorción.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770951111/AXIS-Y---Vegan-Collagen-Eye-Serum-10-ML--2_hjvfxd.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770951147/AXIS-Y_-_Vegan_Collagen_Eye_Serum_10_ML_5_kpzvtr.png",
    ],
  },
  {
    id: 19,
    nombre: "Innisfree - Green Tea Seed Hyaluronic Serum - 80ml",
    precio: 722,
    categoria: "piel_seca",
    descripcionCorta:
      "Suero hidratante diario combina extracto de té verde de Jeju ",
    paraQueSirve: `
      Este suero hidratante diario combina extracto de té verde de Jeju con ácido hialurónico encapsulado, ofreciendo una hidratación profunda y duradera. Su fórmula ligera y sin fragancia ni alcohol es ideal para todo tipo de piel, incluyendo las sensibles.

 Beneficios principales:

Hidratación inmediata y prolongada.

Refuerza la barrera cutánea.

Aporta luminosidad y suavidad.

Textura ligera que se absorbe rápidamente.

Libre de parabenos, sulfatos y fragancias artificiales.
      `,
    comoUsar:
      "Después de la limpieza y tonificación, aplica 2-3 dosis sobre el rostro y cuello. Masajea suavemente y da golpecitos para mejorar la absorción. Úsalo por la mañana y por la noche.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770951503/615XCiKOJ6L._AC_SL1500__t0cmon.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770951542/715VG5u-QfL._AC_SL1500__mvmzz7.jpg",
    ],
  },
  {
    id: 20,
    nombre: "COSRX - Acne Pimple Master Patch",
    categoria: "piel_acne",
    precio: 139,
    descripcionCorta:
      "Actúan como barrera contra bacterias y evitan infecciones secundarias. Su acabado mate y discreto",
    paraQueSirve:
      "Los parches COSRX Clear Fit Master están hechos de hidrocoloide ultra delgado que extrae impurezas y crea un ambiente húmedo para acelerar la cicatrización. Actúan como barrera contra bacterias y evitan infecciones secundarias. Su acabado mate y discreto",
    comoUsar:
      "Coloque los parches bajo los ojos sobre la piel limpia y seca. Deje actuar entre 15 y 20 minutos. Retire y masajee suavemente el exceso de producto",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770952024/8809598455672_20PARCHE_20MAESTRO_20AJUSTE_20ORIGINAL_2024PZ_20COSRX_3_cd5e9d36-6714-4273-be9f-0a708b55cde3_avgogy.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770952024/8809598455672_20PARCHE_20MAESTRO_20AJUSTE_20ORIGINAL_2024PZ_20COSRX_3_cd5e9d36-6714-4273-be9f-0a708b55cde3_avgogy.jpg",
    ],
  },
  {
    id: 21,
    nombre: "Dr. Althea - 15% calamine Spot Powder - 15ml",
    precio: 399,
    categoria: "piel_grasa",
    masVendido: true,
    descripcionCorta:
      "Su sistema de doble capa combina una capa de esencia calmante con una capa de polvo concentrado para un cuidado localizado y eficaz.",
    paraQueSirve: `
      El polvo de calamina es una solución específica para el cuidado puntual formulada con calamina de alta pureza al 15% para ayudar a calmar las zonas problemáticas y equilibrar el exceso de grasa.

Su sistema de doble capa combina una capa de esencia calmante con una capa de polvo concentrado para un cuidado localizado y eficaz.
      `,
    comoUsar:
      "No agites el envase; deja que el polvo se asiente en el fondo para separar las fases. Con la piel limpia, utiliza la punta de silicona integrada para aplicar el polvo rosa directamente sobre las imperfecciones o zonas afectadas, dejando actuar durante la noche y enjuagando por la mañan",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770952236/15_calaminespotpowder_93c3254c-4f29-4876-921a-477b59f86752_pdbxri.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770952273/240411___15___-5_ozt1bf.jpg",
    ],
  },
  {
    id: 22,
    nombre: "Mixsoon - Bean Sun Serum SPF50+ PA++++ - 50ml",
    precio: 419,
    categoria: "protector_solar",
    masVendido: true,
    descripcionCorta:
      "Bts - Un protector solar seguro para los arrecifes, enriquecido con ingredientes patentados de soja fermentada que hidratan la piel en profundidad y bloquean los rayos UVA y UVB con un FPS 50+ PA++++.",
    paraQueSirve:
      "Enriquecido con cuatro tipos de ingredientes, como ingredientes de fermentación vegetal, extracto de corteza de alcornoque, ácido hialurónico, niacinamida y adenosina, ofrece tres efectos en una sola aplicación: bloquea los rayos UV, blanquea y reduce las arrugas.",
    comoUsar:
      "Tome una cantidad adecuada y distribúyala uniformemente sobre la piel expuesta a la luz solar, como la cara, el cuello y los brazos.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770952637/fea4a7c1ea15e24affbc162f2ac826b8_vyvugi.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1770952677/541e430dc60708a923107218bbaa338f_ngxrk8.jpg",
    ],
  },
  {
    id: 23,
    nombre: "Farm Stay - Collagen Water Full Moist Peeling Gel - 180ml",
    precio: 319,
    categoria: "piel_acne",
    masVendido: true,
    descripcionCorta:
      "MASCARILLA PEEL OFF. Este tratamiento de mascarilla en gel aclara y suaviza la piel áspera.",
    paraQueSirve:
      "AYUDA A ELIMINAR LAS CÉLULAS MUERTAS DE LA PIEL. Este tratamiento exfolia suavemente para revelar una piel más suave y luminosa, eliminando las células muertas de la piel y otras impurezas sobrantes sin irritar el cutis",
    comoUsar:
      "Tomar una cantidad adecuada en la mano y masajear suavemente el producto con movimientos envolventes sobre el rostro limpio y seco después de limpiarlo para exfoliarlo. Aclarar con agua tibia.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1771017702/61oxWGfbYfL._AC_SL1500__czrqav.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1771017819/61u8mBwroyL._AC_SL1500__tns4ds.jpg",
    ],
  },
  {
    id: 24,
    nombre: "Purito SEOUL - Mighty Bamboo Panthenol Cream - 100ml",
    precio: 419,
    categoria: "piel_acne",
    descripcionCorta:
      "Pantenol y Extracto de Bambú que mantienen tu piel fresca e hidratada mientras refuerzan tu barrera cutánea",
    paraQueSirve:
      "Esta crema crea una barrera de humectación que protege y sana tu piel. Está formulada con Pantenol y Extracto de Bambú que mantienen tu piel fresca e hidratada mientras refuerzan tu barrera cutánea. Además, su fórmula es vegana, hipoalergénica y libre de fragancia, perfecta para todos los tipos de piel, incluyendo piel sensible y con brotes.",
    comoUsar:
      "Aplica una cantidad adecuada sobre el rostro y masajea suavemente hasta su absorción. Ideal para mañana y noche.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769581771/1-PuritoSeoul-MightyBambooPanthenolCream100ml_vtidjg.png",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1769581739/3-PuritoSeoul-MightyBambooPanthenolCream100ml_ktsfyx.png",
    ],
  },
  {
    id: 25,
    nombre: "FarmStay - Collagen Water Full Moist Cleansing Tissue - 30piezas",
    precio: 90,
    categoria: "piel_acne",
    descripcionCorta: "	¡Elimina fácilmente los residuos de piel de tu rostro!",
    paraQueSirve: `
     • Elimina la suciedad y los restos
de maquillaje 
• Repone la humedad de la piel con colágeno
hidrolizado 
• Deja la piel con sensación de frescura y limpieza`,
    comoUsar:
      "Abra la pegatina y saque el pañuelo, limpie suavemente toda la cara para eliminar el maquillaje y los desechos.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1771018932/b10e974e3f86fc30fcde04c96594caee_ebtcbz.jpg",
    ],
  },
  {
    id: 26,
    nombre: "Mary&May - Tranexamic Acid + Glutathione Eye Cream - 12g",
    precio: 209,
    categoria: "todo_tipo",
    masVendido: true,
    descripcionCorta:
      "Crema de contorno de ojos para reducir ojeras oscuras, igualar el tono y revitalizar la piel delicada alrededor de los ojos.",
    paraQueSirve: `
      Crema de contorno de ojos iluminadora que combina ácido tranexámico y glutatión para reducir ojeras oscuras, igualar el tono y revitalizar la piel delicada alrededor de los ojos.

- Aclara las ojeras y la pigmentación gracias a los 1 000 ppm de ácido tranexámico y glutatión. 
- Proporciona acción antioxidante para proteger la zona ocular de daños causados por radicales libres. 
- Hidrata y mejora la elasticidad del contorno con niacinamida, pantenol y ácido hialurónico.
      `,
    comoUsar:
      "Aplica una pequeña cantidad con el dedo anular con toquecitos suaves en el contorno de los ojos mañana y noche.",
    stock: false,
    cantidadDisponible: 0,

    imagenes: [
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1771019614/6_d231563b-8636-4a65-8f19-72b4e29e5077_brin1k.jpg",
      "https://res.cloudinary.com/dnppruwh4/image/upload/v1771019643/2_654bbb83-38b6-44cd-b1ae-b97056e24165_pwagwm.jpg",
    ],
  },
];
