# Projet Angular Timeline

- [Livrables](#livrables)
- [Enoncé du brief](#enoncé-du-brief)
- [ToDo list](#todo-list)
- [Récupération de l'application](#récupération-de-l'application)
- [Installation de l'application](#installation-de-l'application)
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

## Récupération de l'application

*A rédiger*

## Installation de l'application

*A rédiger*

## Environnement

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
