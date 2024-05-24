# PyrenExplore Backend - Projet de Développement Junior sur la Découverte de la Biodiversité dans les Pyrénées
***

PyrenExplore est un projet dédié à la découverte de la biodiversité dans les Pyrénées. Ce backend, développé avec Express, Node.js, Prisma, et PostgreSQL, fournit les services nécessaires pour gérer les utilisateurs, les espèces recensées, et les futures découvertes de la biodiversité.

## Technologies et dépendances Utilisées 

- Node.js
- Express
- Prisma
- PostgreSQL
- bcrypt
- dotenv
- jsonwebtoken
- Joi
- pg

## Fonctionnalités Actuelles

- Inscription des utilisateurs
- Connexion des utilisateurs
- Accès aux espèces recensées

## Routes

- **/signup** : Inscription d'un utilisateur
- **/login** : Connexion d'un utilisateur
- **/species** : Consultation des espèces recensées

## Installation

1. Clonez le dépôt :
   ``` sh
   git clone https://github.com/votre-utilisateur/pyrenexplore-backend.git
   cd pyrenexplore-backend
   
2. Installer les dépendances : 
   ``` sh
   npm install
3. Configurez les variables d'environnement dans un fichier .env  : 
   ``` js
   DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
   PORT=3000
   SECRET_KEY= "your_jwt_secret"
4. Initialisez la base de données avec Prisma :
   ``` sh
   npx prisma migrate
5. Si vous le souhaitez, vous pouvez populer la bdd pour tester : 
   ``` sh
   npm run seed
6. Lancez le serveur :
   ``` sh
   nodemon run ou npm start

## Fonctionnalités Futures
- Création de découvertes par les utilisateurs avec la possibilité de prendre des photos
- Création et participation à des projets d'action autour de la biodiversité
- Création d'une communauté avec un forum de discussion
- Organisation et participation à des randonnées
- Quizz pour apprendre la biodiversité

## Contribution
#### Comment Contribuer 
**Fournir des Astuces (Tips) :** Les astuces et les conseils sont les bienvenus ! Si vous avez des conseils ou des bonnes pratiques à partager, vous pouvez les ajouter dans la section des commentaires des issues pertinentes ou dans les discussions générales.

**Partager des Exemples de Code :** Si vous avez des exemples de code ou des patterns à partager, vous pouvez les inclure dans les commentaires des issues ou dans les discussions générales. Les snippets de code peuvent être une excellente façon d'illustrer des concepts ou de résoudre des problèmes spécifiques.

**Faire des Suggestions :** Si vous avez des idées d'amélioration ou des suggestions pour le projet, vous pouvez les partager dans la section des problèmes (Issues). Assurez-vous de fournir autant de détails que possible pour décrire votre suggestion.

#### Remarque 
Pour le moment, je préfère ne pas accepter de contributions directes au code, étant donné mon niveau d'expérience en tant que développeur junior. Cependant, je suis ouvert à recevoir des conseils, des astuces et des suggestions pour améliorer le projet. Mon objectif principal est d'apprendre et de progresser à mon rythme, tout en maintenant le contrôle sur le développement de l'application.

Votre contribution, qu'elle soit sous forme de conseils, d'astuces ou de suggestions, sera très appréciée !

## License
Ce projet est sous licence MIT.

## Ressources Design

Les ressources de design pour ce projet sont disponibles dans Figma. Voici les liens vers les designs :

- [Charte Graphique](https://www.figma.com/design/plXFNiyaj7X5HhapRf4aQ2/PyrenExplore?node-id=150-701&t=Ba0QkOA5bNpfdSUb-1)
- [Maquettes](https://www.figma.com/design/plXFNiyaj7X5HhapRf4aQ2/PyrenExplore?node-id=149-700&t=Ba0QkOA5bNpfdSUb-1)
- [Wireframes](https://www.figma.com/design/plXFNiyaj7X5HhapRf4aQ2/PyrenExplore?node-id=26-326&t=Ba0QkOA5bNpfdSUb-1)



