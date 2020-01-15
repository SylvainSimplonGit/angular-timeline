import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @ViewChild('dateInput', {static: false}) dateInput: ElementRef;

  cardGuess: Card;
  cardsFounded: Card[];
  cardsUnfounded: Card[];
  // nbCardsMax: number;
  idCurrentTimeline: number;
  dynamicClass = '';

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idCurrentTimeline = +params.get('timelineId'); // le '+' permet de transformer une string en number
    });
    this.cardGuess = this.cardService.getRandomCard();
    this.cardsFounded = this.cardService.getCardsFounded();
    this.cardsUnfounded = this.cardService.getCardsUnfounded();
  }

  guessCard(card: Card) {
    // Converti la date de l'input en number
    const yearGuess: number = +this.dateInput.nativeElement.value;
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
      this.dateInput.nativeElement.value = '';
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
