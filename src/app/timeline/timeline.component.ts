import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { TimelineService } from '../timeline.service';
// import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @ViewChild('dateInput', {static: false}) dateInputRequest: ElementRef;

  cardGuess: Card;
  cardsFounded: Card[];
  cardsUnfounded: Card[];
  idCurrentTimeline: number;
  dynamicClass = '';

  constructor(
    private cardService: CardService,
    private serviceTimeline: TimelineService,
    // private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.idCurrentTimeline = +params.get('timelineId'); // le '+' permet de transformer une string en number
    // });
    // ALTERNATIVE :
    // lors du clic sur le bouton "Revenir à la liste des Timelines", le timeline est initialisé
    // (plus de cartes trouvées, elles sont toutes remises dans le tableau de cartes à trouver)
    this.cardService.initCards();

    this.idCurrentTimeline = this.serviceTimeline.getTimeline().id;
    this.cardGuess = this.cardService.getRandomCard();
    this.cardsFounded = this.cardService.getCardsFounded();
    this.cardsUnfounded = this.cardService.getCardsUnfounded();
  }

  reset() {
    this.cardService.initCards();
    this.ngOnInit();
  }

  guessCard(card: Card) {
    // Converti la date de l'input en number
    const yearGuess: number = +this.dateInputRequest.nativeElement.value;
    // Converti la date de la carte en Date
    const dateMatch: Date = new Date(card.date);
    // Récupère l'année de la date de la carte
    const yearMatch: number = dateMatch.getFullYear();
    console.log('yearGuess : ', yearGuess);
    console.log('yearMatch : ', yearMatch);

    console.log('guessCard : ');
    console.log('Taille de cardsFounded avant findCard : ' + this.cardsFounded.length);
    console.log('Taille de cardsUnfounded avant findCard : ' + this.cardsUnfounded.length);
    // Test si l'année entrée et identique à l'année de la carte
    if (yearGuess === yearMatch) {
      this.cardService.findCard(card);
      this.sortCardsFounded();
      // Pas besoin car les 2 tableaux ont été initialisés en pointant sur la même référnce
      // this.cardsFounded = this.cardService.getCardsFounded();
      if (!this.haveNoCardInUnfounded()) {
        this.cardGuess = this.cardService.getRandomCard();
      }
      this.dynamicClass = '';
      this.dateInputRequest.nativeElement.value = '';
    } else {
      this.dynamicClass = 'error';
    }
    console.log('Taille de cardsFounded après findCard : ' + this.cardsFounded.length);
    console.log('Taille de cardsUnfounded après findCard : ' + this.cardsUnfounded.length);
  }

  haveNoCardInUnfounded(): boolean {
    return !(this.cardsUnfounded.length > 0);
  }

  sortCardsFounded() {
    this.cardsFounded.sort((card1, card2) => {
      if (card1.date > card2.date) {
        return 1;
      } else if (card1.date < card2.date) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  onKeydown(event, card) {
    if (event.key === 'Enter') {
      this.guessCard(card);
    }
  }
}
