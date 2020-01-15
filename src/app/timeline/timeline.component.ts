import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  cardGuess: Card;
  cardsFounded: Card[];
  cardsUnfounded: Card[];
  // nbCardsMax: number;
  idCurrentTimeline: number;

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
    console.log('guessCard : ');
    console.log('Taille de cardsFounded avant findCard : ' + this.cardsFounded.length);
    console.log('Taille de cardsUnfounded avant findCard : ' + this.cardsUnfounded.length);
    this.cardService.findCard(card);
    this.cardsFounded = this.cardService.getCardsFounded();
    if (!this.haveNoCardInUnfounded()) {
      this.cardGuess = this.cardService.getRandomCard();
    }
    console.log('Taille de cardsFounded après findCard : ' + this.cardsFounded.length);
    console.log('Taille de cardsUnfounded après findCard : ' + this.cardsUnfounded.length);
  }

  haveNoCardInUnfounded(): boolean {
    return !(this.cardsUnfounded.length > 0);
  }
}
