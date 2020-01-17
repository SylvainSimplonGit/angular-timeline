# Projet Angular Timeline

- [Livrables](#livrables)
- [Enoncé du brief](#enoncé-du-brief)
- [ToDo list](#todo-list)
- [Récupération de l'application](#récupération-de-l'application)
- [Installation de l'application](#installation-de-l'application)
- [Utilisation de l'application](#utilisation-de-l'application)
- [Environnement](#environnement)

Vous connaissez le jeu timeline ?

C'est un jeu de carte où il faut trouver les dates d'événements ou d'inventions arrivés dans l'histoire. Ce brief vous propose de rendre ce jeu jouable en ligne !

## Livrables

Une application angular dont le code est disponible sur un repository github.

## Enoncé du brief

Ce projet se décompose en 3 étapes :

- Créer une vue permettant d'afficher une liste de Timeline auxquels on peut jouer
- Créer une vue permettant de deviner les dates des cartes du timeline
- Créer une vue permettant d'éditer un timeline et ses cartes associées

Vous avez à votre disposition un [backend spring](https://github.com/simplonco/spring-workshop-timelineapi) que vous pouvez installer en local sur votre poste.

## ToDo list

- [x] pouvoir supprimer une carte sur l'édition des timelines
- [x] ajouter un formulaire pour ajouter une carte sur l'édition des timelines
- [ ] ajouter un formulaire pour éditer les cartes d'un timeline
- [ ] ajouter un formulaire pour ajouter un timeline
- [ ] ajouter un formulaire pour éditer les carctéristiques d'un timeline
- [x] créer un bouton 'Rejouer' pour resetter le jeu une fois gagner.
  - [x] le tableau de Card se remet à jour depuis le tableau contenu dans le card.service.ts et pas depuis le tableau modifié via le component timeline-edit
- [ ] resetter le jeu une fois gagné et quitté la page
- [ ] récupérer les timelines depuis l'API
- [ ] récupérer les cartes depuis l'API

## Bug détecté(s)

- [ ] si on commence à jouer et que l'on clique sur le bouton "Revenir à la liste des Timelines", puis que l'on clique sur le bouton "Jouer" du timeline précédent, l'ensemble des cartes du timeline est ajouté aux cartes à trouver en plus des cartes déjà trouvées.
  - [x] contournement : lors du clic sur le bouton "Revenir à la liste des Timelines", le timeline est initialisé (plus de cartes trouvées, elles sont toutes remises dans le tableau de cartes à trouver).

## Récupération de l'application

### Pré-requis

Il est necessaire d'avoir d'installé sur son poste :

- Git v2.23.0 ou supérieure

### Récupération

Dans le répertoire de votre choix, executez la commande suivante :

```bash
git clone https://github.com/SylvainSimplonGit/angular-timeline.git
```

## Installation de l'application

### Pré-requis

Il est necessaire d'avoir d'installé sur son poste :

- Npm v6.13.4 ou supérieure

### Installation

Suite à la récupération de l'application, allez dans le repertoire créé précedemment `angular-timeline` via la commande :

```bash
cd angular-timeline
```

Et enfin, executer la commande suivante :

```bash
npm install
```

## Utilisation de l'application

### Pré-requis

Il est nécessaire d'avoir [récupéré](#récupération-de-l'application) puis [installé](#installation-de-l'application) l'application

### Utilisation

Pour utiliser l'application, il faut executer la commande suivante dans le répertoire `angular-timeline` :

```bash
ng serve --open
```

Votre navigateur par défaut s'ouvrira sur la page de l'application

A vous de jouer !

## Environnement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
