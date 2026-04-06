export const levelData = {
  airport: {
    French: [
      {
        npcSpeech:
          "Puis-je voir votre passeport et votre billet, s'il vous plaît ?",
        choices: [
          { id: "b", text: "Oui, les voici.", isCorrect: true },
          { id: "a", text: "Le chat est sur la table.", isCorrect: false },
          { id: "c", text: "Je voudrais un croissant.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "À quelle heure part le vol pour Paris ?",
        choices: [
          { id: "b", text: "La porte est fermée.", isCorrect: false },
          { id: "c", text: "C'est à gauche du chat.", isCorrect: false },
          { id: "a", text: "Il part à dix heures.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "Avez-vous des liquides dans votre sac ?",
        choices: [
          { id: "c", text: "C'est mon sac à dos.", isCorrect: false },
          { id: "a", text: "Non, je n'ai rien.", isCorrect: true },
          { id: "b", text: "Oui, j'aime l'eau.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Où se trouve la porte d'embarquement B12 ?",
        choices: [
          { id: "b", text: "Le vol est annulé.", isCorrect: false },
          {
            id: "a",
            text: "C'est tout droit, après la sécurité.",
            isCorrect: true,
          },
          { id: "c", text: "Je cherche mon chapeau.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Quel est l'objet de votre voyage ?",
        choices: [
          { id: "b", text: "J'ai faim.", isCorrect: false },
          { id: "c", text: "Il fait beau aujourd'hui.", isCorrect: false },
          { id: "a", text: "C'est pour le travail.", isCorrect: true },
        ],
      },
    ],
    Italian: [
      {
        npcSpeech: "Dove posso trovare il ritiro bagagli?",
        choices: [
          { id: "b", text: "È al piano terra.", isCorrect: true },
          { id: "c", text: "Mi piace la pizza.", isCorrect: false },
          { id: "a", text: "Ho bisogno di un caffè.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Il suo volo è in ritardo di due ore, mi dispiace.",
        choices: [
          { id: "a", text: "Dov'è il bagno?", isCorrect: false },
          { id: "b", text: "Non c'è problema, aspetterò.", isCorrect: true },
          { id: "c", text: "Arrivederci, Roma.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Per favore, metta il vassoio sul nastro trasportatore.",
        choices: [
          { id: "c", text: "Vorrei un gelato.", isCorrect: false },
          { id: "a", text: "Certamente, ecco fatto.", isCorrect: true },
          { id: "b", text: "Non parlo inglese.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "È questo il suo bagaglio a mano?",
        choices: [
          { id: "b", text: "Sì, è mio.", isCorrect: true },
          { id: "a", text: "No, è di mia sorella.", isCorrect: false },
          { id: "c", text: "Il treno è in orario.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Quanto tempo rimarrà nel paese?",
        choices: [
          { id: "b", text: "Mi chiamo Giovanni.", isCorrect: false },
          { id: "a", text: "Rimango per una settimana.", isCorrect: true },
          { id: "c", text: "Abito vicino al mare.", isCorrect: false },
        ],
      },
    ],
    Spanish: [
      {
        npcSpeech: "¿Tiene alguna maleta para facturar?",
        choices: [
          { id: "b", text: "Me gusta bailar.", isCorrect: false },
          { id: "a", text: "Sí, tengo dos maletas.", isCorrect: true },
          { id: "c", text: "El aeropuerto es grande.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Su puerta de embarque ha cambiado a la B12.",
        choices: [
          { id: "c", text: "Soy un humano normal.", isCorrect: false },
          { id: "b", text: "La cuenta, por favor.", isCorrect: false },
          { id: "a", text: "Gracias por la información.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "¿Cuál es el motivo de su viaje?",
        choices: [
          { id: "a", text: "Estoy de vacaciones.", isCorrect: true },
          { id: "c", text: "Tengo mucho sueño.", isCorrect: false },
          { id: "b", text: "Como pescado crudo.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Por favor, quítese los zapatos y el cinturón.",
        choices: [
          { id: "a", text: "Diga 'miau'.", isCorrect: false },
          { id: "c", text: "No tengo dinero.", isCorrect: false },
          { id: "b", text: "De acuerdo, un momento.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "¿Dónde está la parada de taxis?",
        choices: [
          { id: "b", text: "El taxi es amarillo.", isCorrect: false },
          { id: "a", text: "Está justo afuera de la salida.", isCorrect: true },
          { id: "c", text: "Quiero ir a la playa.", isCorrect: false },
        ],
      },
    ],
  },
  date: {
    French: [
      {
        npcSpeech: "Tu es très élégant ce soir. Tu viens souvent ici ?",
        choices: [
          { id: "b", text: "Je cherche une souris.", isCorrect: false },
          { id: "a", text: "Non, c'est ma première fois.", isCorrect: true },
          { id: "c", text: "Il pleut dehors.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Qu'est-ce que tu veux boire ? Je vais prendre un verre de vin.",
        choices: [
          { id: "c", text: "La table est en bois.", isCorrect: false },
          { id: "b", text: "Je bois seulement du lait.", isCorrect: false },
          {
            id: "a",
            text: "Un jus d'orange pour moi, s'il vous plaît.",
            isCorrect: true,
          },
        ],
      },
      {
        npcSpeech: "Tu travaille dans quel domaine ?",
        choices: [
          { id: "c", text: "J'aime le fromage.", isCorrect: false },
          {
            id: "a",
            text: "Je suis ingénieur en informatique.",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Je dors dix-huit heures par jour.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech:
          "Désolée, j'ai un peu froid. Est-ce qu'on peut changer de table ?",
        choices: [
          { id: "b", text: "J'ai une fourrure épaisse.", isCorrect: false },
          { id: "a", text: "Bien sûr, demandons au serveur.", isCorrect: true },
          { id: "c", text: "Il est minuit.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "J'ai passé une excellente soirée, on se revoit bientôt ?",
        choices: [
          { id: "c", text: "Au revoir, maman.", isCorrect: false },
          {
            id: "a",
            text: "Avec plaisir, je t'appelle demain.",
            isCorrect: true,
          },
          { id: "b", text: "Le poisson était bon.", isCorrect: false },
        ],
      },
    ],
    Italian: [
      {
        npcSpeech:
          "Sei molto gentile a offrirmi la cena. Cosa prendi di primo?",
        choices: [
          { id: "c", text: "La sedia è comoda.", isCorrect: false },
          {
            id: "a",
            text: "Penso che prenderò gli spaghetti.",
            isCorrect: true,
          },
          { id: "b", text: "Prendo una scatola di tonno.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Ti piace la musica jazz? C'è un concerto dopo cena.",
        choices: [
          { id: "a", text: "Sì, mi piacerebbe molto andare.", isCorrect: true },
          { id: "c", text: "Oggi è lunedì.", isCorrect: false },
          {
            id: "b",
            text: "Preferisco rincorrere le luci rosse.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech: "Raccontami di te, hai dei fratelli o delle sorelle?",
        choices: [
          { id: "b", text: "Ho sette vite.", isCorrect: false },
          { id: "c", text: "Il mio cane è grande.", isCorrect: false },
          { id: "a", text: "Sì, ho un fratello minore.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "Questo ristorante è bellissimo, vero?",
        choices: [
          { id: "c", text: "Non parlo con gli sconosciuti.", isCorrect: false },
          { id: "a", text: "Sì, l'atmosfera è fantastica.", isCorrect: true },
          {
            id: "b",
            text: "C'è troppa polvere sotto il divano.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech: "Vuoi dividere il dolce con me?",
        choices: [
          {
            id: "b",
            text: "No, preferisco le ossa di pollo.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Ottima idea, prendiamo il tiramisù.",
            isCorrect: true,
          },
          { id: "c", text: "Dov'è la mia bicicletta?", isCorrect: false },
        ],
      },
    ],
    Spanish: [
      {
        npcSpeech: "¡Hola! Perdona por llegar tarde, había mucho tráfico.",
        choices: [
          { id: "c", text: "El gato está en la cocina.", isCorrect: false },
          {
            id: "a",
            text: "No te preocupes, acabo de llegar.",
            isCorrect: true,
          },
          { id: "b", text: "Miau, digo... hola.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Tienes unos ojos muy bonitos, ¿de qué color son?",
        choices: [
          { id: "b", text: "Brillan en la oscuridad.", isCorrect: false },
          { id: "a", text: "Son de color castaño.", isCorrect: true },
          { id: "c", text: "Tengo dos ojos.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "¿Qué tipo de películas te gusta ver?",
        choices: [
          {
            id: "b",
            text: "Me gusta ver documentales de pájaros.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Me encantan las comedias románticas.",
            isCorrect: true,
          },
          { id: "c", text: "La película es larga.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Hace una noche preciosa, ¿quieres dar un paseo por el parque?",
        choices: [
          { id: "b", text: "No, hay perros en el parque.", isCorrect: false },
          {
            id: "a",
            text: "Claro, me encantaría caminar un poco.",
            isCorrect: true,
          },
          { id: "c", text: "Mi casa es roja.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "¿Me podrías pasar la sal, por favor?",
        choices: [
          { id: "c", text: "No me gusta la sopa.", isCorrect: false },
          {
            id: "b",
            text: "La tiré al suelo para verla caer.",
            isCorrect: false,
          },
          { id: "a", text: "Sí, aquí tienes.", isCorrect: true },
        ],
      },
    ],
  },
  cop: {
    French: [
      {
        npcSpeech: "Bonjour. Vous savez pourquoi je vous ai arrêté ?",
        choices: [
          { id: "c", text: "J'aime beaucoup votre chapeau.", isCorrect: false },
          {
            id: "a",
            text: "Je suis désolé, je roulais trop vite ?",
            isCorrect: true,
          },
          { id: "b", text: "Parce que j'ai vu un oiseau ?", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Papiers du véhicule et permis de conduire, s'il vous plaît.",
        choices: [
          {
            id: "b",
            text: "Je n'ai pas de mains, seulement des pattes.",
            isCorrect: false,
          },
          { id: "a", text: "Les voici, Monsieur l'agent.", isCorrect: true },
          {
            id: "c",
            text: "Le moteur fait un bruit bizarre.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech: "Avez-vous bu de l'alcool ce soir ?",
        choices: [
          {
            id: "b",
            text: "Seulement un grand bol de lait.",
            isCorrect: false,
          },
          { id: "c", text: "Le vin est rouge.", isCorrect: false },
          { id: "a", text: "Non, je n'ai bu que de l'eau.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "Veuillez descendre du véhicule, Monsieur.",
        choices: [
          {
            id: "c",
            text: "Il y a un chat sous la voiture.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "D'accord, je sors tout de suite.",
            isCorrect: true,
          },
          {
            id: "b",
            text: "C'est difficile car nous sommes trois... je veux dire, j'ai mal au dos.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech: "Je vais vous donner un avertissement cette fois. Circulez.",
        choices: [
          { id: "b", text: "Ronron... merci !", isCorrect: false },
          { id: "a", text: "Merci beaucoup, bonne journée !", isCorrect: true },
          { id: "c", text: "Où est la souris ?", isCorrect: false },
        ],
      },
    ],
    Italian: [
      {
        npcSpeech: "Patente e libretto, per favore.",
        choices: [
          { id: "c", text: "La macchina è rossa.", isCorrect: false },
          { id: "b", text: "Sono un gatto molto bravo.", isCorrect: false },
          { id: "a", text: "Eccoli, mi scusi tanto.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "Andava a 100 all'ora in una zona da 50.",
        choices: [
          {
            id: "b",
            text: "Stavo inseguendo un raggio laser.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Mi dispiace, avevo fretta di tornare a casa.",
            isCorrect: true,
          },
          { id: "c", text: "Il limite è troppo basso.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Cosa c'è in quel sacco sul sedile posteriore?",
        choices: [
          { id: "b", text: "Dieci chili di erba gatta.", isCorrect: false },
          { id: "c", text: "Non guardare lì dentro!", isCorrect: false },
          { id: "a", text: "È solo la mia spesa.", isCorrect: true },
        ],
      },
      {
        npcSpeech: "Spegni il motore e metti le mani sul volante.",
        choices: [
          { id: "c", text: "Dov'è la chiave?", isCorrect: false },
          { id: "a", text: "Certamente, subito.", isCorrect: true },
          {
            id: "b",
            text: "Preferisco graffiare il sedile.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech: "Questa multa è di ottanta euro.",
        choices: [
          { id: "b", text: "Posso pagare con dei pesci?", isCorrect: false },
          { id: "a", text: "Posso pagare online?", isCorrect: true },
          { id: "c", text: "Non ho soldi con me.", isCorrect: false },
        ],
      },
    ],
    Spanish: [
      {
        npcSpeech: "Buenas noches. ¿Sabe por qué le he parado?",
        choices: [
          { id: "b", text: "Porque soy muy guapo.", isCorrect: false },
          { id: "c", text: "Miau.", isCorrect: false },
          {
            id: "a",
            text: "Lo siento, ¿me salté un semáforo?",
            isCorrect: true,
          },
        ],
      },
      {
        npcSpeech: "Su luz trasera izquierda está rota.",
        choices: [
          { id: "c", text: "No necesito luces.", isCorrect: false },
          {
            id: "a",
            text: "Vaya, no lo sabía. La arreglaré mañana.",
            isCorrect: true,
          },
          { id: "b", text: "La golpeé con mi cola.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "¿Hacia dónde se dirige con tanta prisa?",
        choices: [
          {
            id: "a",
            text: "Voy a mi casa, vivo cerca de aquí.",
            isCorrect: true,
          },
          { id: "c", text: "A la tienda de mascotas.", isCorrect: false },
          { id: "b", text: "Voy al tejado a cantar.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Por favor, sople en este dispositivo.",
        choices: [
          { id: "c", text: "Tengo mucho sueño.", isCorrect: false },
          { id: "b", text: "Prefiero morderlo.", isCorrect: false },
          {
            id: "a",
            text: "De acuerdo, espero que esté todo bien.",
            isCorrect: true,
          },
        ],
      },
      {
        npcSpeech: "Mantenga la calma y no haga movimientos bruscos.",
        choices: [
          { id: "b", text: "¡Mira! ¡Una mosca!", isCorrect: false },
          { id: "a", text: "Entiendo, me quedaré quieto.", isCorrect: true },
          { id: "c", text: "No me gusta su actitud.", isCorrect: false },
        ],
      },
    ],
  },
  taxi: {
    French: [
      {
        npcSpeech:
          "Alors, vous avez vu le match de foot hier soir ? Quel désastre !",
        choices: [
          { id: "c", text: "Le stade est vert.", isCorrect: false },
          {
            id: "a",
            text: "Oui, ils ont très mal joué en défense.",
            isCorrect: true,
          },
          {
            id: "b",
            text: "J'aime courir après la balle aussi.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech:
          "Vous travaillez dans le quartier ou vous êtes juste de passage ?",
        choices: [
          {
            id: "b",
            text: "Je chasse des souris dans la cave.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Je travaille dans une agence pas loin d'ici.",
            isCorrect: true,
          },
          { id: "c", text: "La voiture va vite.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Quelle météo affreuse, n'est-ce pas ? On dit qu'il va grêler.",
        choices: [
          {
            id: "b",
            text: "Je déteste avoir les pattes mouillées.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Tant que je suis à l'abri, ça me va.",
            isCorrect: true,
          },
          { id: "c", text: "Le ciel est gris.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Je vous dépose au coin de la rue ou devant la porte principale ?",
        choices: [
          {
            id: "a",
            text: "L'entrée principale sera parfaite, merci.",
            isCorrect: true,
          },
          { id: "c", text: "Je n'ai pas de chaussures.", isCorrect: false },
          {
            id: "b",
            text: "Déposez-moi près de la poubelle.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech:
          "On prend l'autoroute ou on passe par les petits boulevards ?",
        choices: [
          { id: "b", text: "Évitez les chiens dans la rue.", isCorrect: false },
          {
            id: "a",
            text: "Prenez le chemin le plus rapide, s'il vous plaît.",
            isCorrect: true,
          },
          { id: "c", text: "Le tunnel est sombre.", isCorrect: false },
        ],
      },
    ],
    Italian: [
      {
        npcSpeech:
          "Hai sentito le notizie stamattina? L'economia sta crollando!",
        choices: [
          {
            id: "b",
            text: "Non mi importa, io mangio gratis.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Sì, la situazione sembra molto complicata.",
            isCorrect: true,
          },
          { id: "c", text: "La radio è troppo alta.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "C'è un traffico terribile oggi, spero che non abbia fretta.",
        choices: [
          { id: "c", text: "Il semaforo è rosso.", isCorrect: false },
          {
            id: "b",
            text: "Voglio saltare fuori dal finestrino.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Non si preoccupi, ho tutto il tempo.",
            isCorrect: true,
          },
        ],
      },
      {
        npcSpeech: "Lei sembra un tipo colto, cosa ne pensa del nuovo sindaco?",
        choices: [
          {
            id: "a",
            text: "Spero che faccia un buon lavoro per la città.",
            isCorrect: true,
          },
          { id: "c", text: "Il sindaco vive in una casa.", isCorrect: false },
          {
            id: "b",
            text: "Dovrebbe vietare gli aspirapolvere.",
            isCorrect: false,
          },
        ],
      },
      {
        npcSpeech: "Ti dispiace se abbasso un po' il finestrino? Fa caldo.",
        choices: [
          {
            id: "b",
            text: "No! Il vento mi spettina il pelo.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Certo, faccia pure, serve un po' d'aria.",
            isCorrect: true,
          },
          { id: "c", text: "L'acqua è fresca.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Siamo arrivati. Sono ventidue euro, preferisce pagare in contanti?",
        choices: [
          { id: "b", text: "Le do un gomitolo di lana.", isCorrect: false },
          {
            id: "a",
            text: "Pago con la carta di credito, grazie.",
            isCorrect: true,
          },
          { id: "c", text: "Arrivederci, signore.", isCorrect: false },
        ],
      },
    ],
    Spanish: [
      {
        npcSpeech: "¿Qué le parece la nueva ley de impuestos? ¡Es un robo!",
        choices: [
          {
            id: "b",
            text: "Yo no pago impuestos, soy un gato.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Es un tema muy polémico, la verdad.",
            isCorrect: true,
          },
          { id: "c", text: "El dinero es papel.", isCorrect: false },
        ],
      },
      {
        npcSpeech:
          "Oiga, ¿usted cree que va a ganar el equipo local el domingo?",
        choices: [
          {
            id: "b",
            text: "Solo si hay premios de pescado.",
            isCorrect: false,
          },
          {
            id: "a",
            text: "Tienen posibilidades si juegan como la semana pasada.",
            isCorrect: true,
          },
          { id: "c", text: "El domingo es festivo.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "¿Le molesta que ponga un poco de música rock?",
        choices: [
          { id: "c", text: "La guitarra tiene cuerdas.", isCorrect: false },
          {
            id: "a",
            text: "No hay problema, me gusta el rock.",
            isCorrect: true,
          },
          { id: "b", text: "Me asustan los ruidos fuertes.", isCorrect: false },
        ],
      },
      {
        npcSpeech: "Ese restaurante de ahí tiene la mejor paella de la ciudad.",
        choices: [
          { id: "b", text: "Prefiero comer del suelo.", isCorrect: false },
          { id: "c", text: "El arroz es blanco.", isCorrect: false },
          {
            id: "a",
            text: "Ah, gracias por la recomendación, la probaré.",
            isCorrect: true,
          },
        ],
      },
      {
        npcSpeech: "Se ve usted muy cansado, ¿ha tenido un día largo?",
        choices: [
          { id: "c", text: "Mañana será otro día.", isCorrect: false },
          {
            id: "a",
            text: "Sí, he tenido muchas reuniones hoy.",
            isCorrect: true,
          },
          {
            id: "b",
            text: "Es que acabo de despertarme de mi siesta.",
            isCorrect: false,
          },
        ],
      },
    ],
  },
};
