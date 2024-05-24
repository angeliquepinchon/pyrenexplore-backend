import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const gypaete = await prisma.species.create({
    data: {
      category: "animale",
      type: "Oiseau",
      scientificName: "Gypaetus barbatus",
      name: "Gypaète barbu",
      habitat:
        "En France, le Gypaète barbu niche en haute montagne, de préférence dans les falaises et les parois rocheuses, entre 700 et 2 300 m d’altitude. Le territoire d’un couple s’étend sur plus 50 000 hectares, comprenant des sites de falaises et surtout de grandes zones de pâtures et éboulis où l’oiseau trouve sa nourriture. Son nid est généralement dans une petite cavité ou sous une vire.",
      findIt:
        "On peut observer le Gypaète barbu dans toutes les vallées du Parc national. Lors de journées ensoleillées, on pourra apercevoir sa silhouette longiligne aux ailes effilées et à la queue en losange haut dans le ciel, orbant au-dessus d’un sommet pour gagner de l’altitude.",
      description:
        "Le Gypaète barbu est le plus grand rapace d’Europe. Il est facilement reconnaissable à l’âge adulte grâce à la couleur rouille orangé de son plumage ventral. Ses plumes noires qui encadrent son bec puissant et recourbé, se prolongent pour lui donner l’air de porter une sorte de barbiche. Le reste de son plumage est blanc crème, parfois teinté de roux au niveau de son cou et de sa gorge. Ses épaules et ses ailes sont formées d’un plumage ardoisé. Chacune de ses plumes est ornée d’une raie blanche. Ses yeux sont colorés de trois cercles, un noir, un jaune, et un rouge, ce qui lui donne un air assez menaçant. Il peut peser de 5 à 7 kg. Son envergure peut atteindre les 3 m. Il se distingue par la forme de sa queue en losange.",
      behavior:
        "Le Gypaète barbu vit en couple, fidèle à son partenaire. Le couple peut parfois être accompagné d’un autre mâle ou d’une autre femelle. Les oiseaux patrouillent leur territoire à la recherche de nourritures en profitant des courants thermiques pour prospecter le long des falaises et prairies. Le jeune quitte le territoire vers la fin juillet et présente un fort erratisme qui l’entraîne sur toute la chaîne pyrénéenne avant de revenir progressivement s’installer le plus souvent près de son territoire de naissance. Chaque couple possède 3 à 8 nids, même si on le retrouve le plus souvent sur le même nid.",
      lifeCycle:
        "Le cycle de reproduction du Gypaète barbu est un des plus précoces et des plus longs de tous les rapaces européens. Le couple prépare le nid vers la mi-novembre. La femelle pond souvent 2 œufs début janvier. Seul un jeune s'envole vers la mi-juillet. Le jeune est nourri par les parents pendant encore 1 à 2 semaines après son envol. Puis, il se débrouille tout seul. Il atteint la maturité sexuelle vers 8-10 ans. Le taux d’échec de reproduction est fort. Seul un couple sur 3 ou 4 parvient à élever un jeune chaque année. Les adultes demeurent sur un territoire qu’ils défendent contre l'incursion d'autres Gypaètes barbus. L’espérance de vie est forte. Certains oiseaux peuvent vivre plus de 30 ans.",
      diet: 'Le Gypaète barbu contribue à l’élimination des carcasses en montagne. Il assure ainsi une fonction sanitaire dans la nature. Le Gypaète barbu est principalement ostéophage. Il se nourrit d’os, ce qui lui doit son surnom de "casseur d’os". En effet, sa nourriture est composée à 80% d’os, de pattes, de tendons et de ligaments d’isards, de brebis et autres animaux qu’il ingère grâce à un gosier élastique. La technique de cassage des os est très particulière. Il utilise des pierriers au-dessus desquels il laisse tomber l’os qu’il a transporté dans ses serres. Puis, il ramasse l\'os. Il recommence autant de fois que nécessaire, parfois jusqu’à vingt fois de suite.Durant l’élevage du jeune, il peut consommer des petits animaux morts (marmottes, lézards, oiseaux), apportant alors de la viande au nid',
      photo:
        "https://www.pyrenees-parcnational.fr/sites/pyrenees-parcnational.fr/files/styles/slide_1500_1000/public/thumbnails/image/00013996.jpeg?itok=Z8LdZlZF",
      status: "En danger",
      addInformation:
        "En France, il est présent dans les Pyrénées, en Corse. Il a été réintroduit avec succès dans les Alpes et récemment dans les Cévennes. Le Parc national a constitué, avec le Pays basque, la zone de sauvegarde du Gypaète barbu. Depuis 50 ans, le nombre de couples a augmenté, passant de 3 à 4 couples dans les années 1950 pour atteindre, en 2020, 14 couples dans le Parc national des Pyrénées.  Menacé de disparition, le Gypaète barbu fait l’objet d’un suivi scientifique important en France et en Espagne. ",
    },
  });
  const louna = await prisma.user.create({
    data: {
      firstName: "Louna",
      lastName: "Leroy",
      pseudo: "loulou64",
      email: "louna@gmail.com",
      password: "motdepasse",
      discoveries: {
        create: {
          type: "plante",
          name: "Aster",
          information:
            "j'ai trouver cette fleur en pleine montagne sur de la roche. J'étais à environ 700m d'altitude",
          species: {
            create: {
              category: "végétale",
              type: "plante",
              scientificName: "Aster pyrenaeus",
              name: "Aster des Pyrénées",
              habitat:
                "Plante des milieux ouverts et frais d’altitude, la belle est endémique des Pyrénées et des Monts cantabriques où on la trouve en quelques rares localités",
              findIt:
                "Sur le territoire du Parc national des Pyrénées, l’Aster des Pyrénées occupe une quinzaine de localités ou stations de l’aire optimale d’adhésion. Une seule et unique station se trouve en zone cœur, dans la vallée de Cauterets, au sein du site Natura 2000 « Péguère-Barbat-Cambalès ».",
              description:
                "Des fleurs centrales en forme de tube de couleur jaune entourées de fleurs ligulées c’est-à-dire en forme de languettes bleues lilas, de longues tiges pouvant atteindre 50 cm, elle fleurit entre mi-août et mi-octobre alors que la plupart des autres espèces sont fanées : vous êtes bien en présence de l’Aster des Pyrénées.",
              behavior: "",
              lifeCycle: "son espérance de vie est de 40 à 50 ans",
              diet: "",
              photo:
                "https://www.pyrenees-parcnational.fr/sites/pyrenees-parcnational.fr/files/styles/slide_1500_1000/public/aster-des-pyrenees-diapo_0.jpg?itok=Ssyxi3GB",
              status: "",
              addInformation:
                "Afin de contribuer à sa conservation, l'Aster des Pyrénées bénéficie d'un Plan national d’action piloté par le Conservatoire botanique national des Pyrénées et de Midi-Pyrénées (CBNPMP).",
            },
          },
        },
      },
      projects: {
        create: {
          title: "Abris à chauve-souris",
          location: "lembeye",
          numberParticipant: 7,
          description:
            "J'organise un atelier pour créer des abris à chauv-souris pour lutter contre l'invasion de moustiques. Vous aurez besoin de gants et de lunettes de protection.",
        },
      },
    },
  });
  const micka = await prisma.user.create({
    data: {
      firstName: "Mickaël",
      lastName: "Peña",
      pseudo: "MickaYep",
      email: "micka@gmail.com",
      password: "motdepasse",
      discoveries: {
        create: {
          type: "mammifère",
          name: "Ecureuil",
          latitude: 43.33333,
          longitude: -0.58333,
          information:
            "J'ai observé 2 écureuils qui jouaient dans les arbres. Il n'étaient pas farouches car j'ai pu les voir d'assez près",
          species: {
            create: {
              category: "Animale",
              type: "Mammifère",
              scientificName: "Sciurus Vulgaris",
              name: "Ecureuil",
              habitat:
                "Il fréquente les bois de feuillus et de conifères. Présent en région montagneuse dans la pineraie à crochets, on peut le rencontrer jusqu’à 2 000 mètres d’altitude environ. Son nid est rond et se trouve généralement à plus de six mètres de haut dans un arbre. Il est composé de branches feuillues et garni de mousse et d'herbes.",
              findIt: "",
              description:
                "Son pelage est de couleur variable passant du jaunâtre et du roux au brun foncé et au noir en été. Le dessous de son pelage est blanc en toutes saisons. Sa queue est très touffue. L'écureuil vit entre six et sept ans.",
              behavior:
                "L’écureuil, rongeur arboricole, est l’un des rares mammifères diurnes de nos régions. Toujours en activité, il mène une vie au ralenti l’hiver mais n’hiberne pas. Méfiant et farouche, il est difficile à apercevoir. C’est un grimpeur agile. Son ennemi principal est la Martre. Sa queue en panache, véritable balancier, lui permet de se déplacer de branche en branche en conservant son équilibre. La piste de l’Ecureuil commence et finit par un arbre. Il nage bien. A terre, il bondit rapidement entre deux arbres, parfois sur plusieurs dizaines de mètres.",
              lifeCycle:
                "Les écureuils naissent dans des nids, dépendent de leur mère dans leur jeunesse, deviennent indépendants en explorant, atteignent la maturité sexuelle, se reproduisent, vivent en tant qu'adultes dans leur habitat naturel, vieillissent et finalement meurent.",
              diet: "Il se nourrit essentiellement de bourgeons, de baies, de fruits et de champignons, auxquels s’ajoutent quelques petits animaux (escargots, insectes, oisillons). Il écorce les résineux, ouvre les noisettes et épluche les cônes d'épicéa.",
              photo:
                "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg",
              status: "Espèce protégée",
              addInformation:
                "L'accouplement se déroule de décembre à juillet. Selon la fructification, la femelle fait une à deux portées par an de trois petits. La gestation dure de 36 à 42 jours. Les petits sortent du nid à 7 semaines. Ils sont sevrés entre 7 et 10 semaines. Seule la femelle s'en occupe.",
            },
          },
        },
      },
      articles: {
        create: {
          title: "Donjon des aigles",
          content:
            "Si vous avez l'occasion de visiter le Donjon des Aigles, n'hésitez sutout pas ! C'est un endroit magnifique où vous pourrez voir de nombreux rapaces. Le site est accessible pour tous et pour un tarif raisonnable. ",
        },
      },
    },
  });
  const jeanine = await prisma.user.create({
    data: {
      firstName: "Jeanine",
      lastName: "Gilbert",
      pseudo: "Somolette",
      email: "jeanine@gmail.com",
      password: "motdepasse",
      projects: {
        create: {
          title: "Collecte de déchets",
          location: "Pont d'assat",
          numberParticipant: 20,
          description:
            "Afin de participer à le lutte contre la pollution dans notre région, j'organise le 25 mars 2024 , une collecte de déchet le long du gave. Des sacs poubelles et des gants seront à votre disposition. Si vous participez, vous devrez vous munir d'un gilet jaune de sécurité.",
        },
      },
      articles: {
        create: {
          title: "Présence de Sangliers",
          content:
            "Nous sommes allés en randonnée sur le chemin des orchydées et nous avons relevés de nombreuse traces de sangliers. Prenez vos précautions. ",
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
