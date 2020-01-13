import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  cardGuess: Card;
  cardsFounded: Card[];
  nbCardsMax: number;

  constructor(
    private cardService: CardService,
  ) { }

  ngOnInit() {
    this.cardGuess = this.cardService.getRandomCard();
    this.cardsFounded = this.cardService.getCardsFounded();
    this.nbCardsMax = 8;

  }

  guessCard(card: Card) {
    console.log('guessCard : ');
    console.log('Taille de cardsFounded avant findCard : ' + this.cardsFounded.length);
    this.cardService.findCard(card);
    this.cardsFounded = this.cardService.getCardsFounded();
    if (this.cardsFounded.length != this.nbCardsMax) {
      this.cardGuess = this.cardService.getRandomCard();
    }
    console.log('Taille de cardsFounded après findCard : ' + this.cardsFounded.length);
  }
}
