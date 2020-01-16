import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // private cards = [{
  //     id: 1,
  //     name: "Facebook",
  //     date: "2004-02-03",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Facebook_New_Logo_%282015%29.svg",
  //     description: "Invention du plus célèbre réseau social"
  //   },
  //   {
  //     id: 2,
  //     name: "Twitter",
  //     date: "2006-03-20",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/fr/c/c8/Twitter_Bird.svg",
  //     description: "Le réseau social préféré de D. Trump"
  //   },
  //   {
  //     id: 3,
  //     name: "Snapchat",
  //     date: "2011-08-31",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/fr/a/ad/Logo-Snapchat.png",
  //     description: "Pour ceux qui ont peur que les photos restent ..."
  //   },
  //   {
  //     id: 4,
  //     name: "Windows",
  //     date: "1985-11-19",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Windows_1.0_screenshot.png",
  //     description: "Le premier OS de Microsoft"
  //   },
  //   {
  //     id: 5,
  //     name: "Web",
  //     date: "1989-03-12",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b2/WWW_logo_by_Robert_Cailliau.svg",
  //     description: "L'invention de Tim Berners Lee"
  //   },
  //   {
  //     id: 6,
  //     name: "Amazon",
  //     date: "1994-07-04",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  //     description: "Le commerce en ligne"
  //   },
  //   {
  //     id: 7,
  //     name: "Apple",
  //     date: "1976-03-31",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  //     description: "La marque de Steve !"
  //   },
  //   {
  //     id: 8,
  //     name: "Google",
  //     date: "1998-09-03",
  //     imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  //     description: "Le moteur de recherche le plus utilisé en Europe"
  //   }
  // ];

  private cardsFounded = [];
  private cardsUnfounded = [];

  constructor() {
    this.initCards();
  }

  getCardsFounded() {
    return this.cardsFounded;
  }

  getCardsUnfounded() {
    return this.cardsUnfounded;
  }

  setCardsFounded(cards: Card[]) {
    console.log('setCardsFounded => ');
    this.cardsFounded = [];
    for (const card of cards) {
      this.cardsFounded.push(card);
    }
    console.log(this.cardsFounded);
  }

  setCardsUnfounded(cards: Card[]) {
    console.log('setCardsUnfounded => ');
    this.cardsUnfounded = [];
    for (const card of cards) {
      this.cardsUnfounded.push(card);
    }
    console.log(this.cardsUnfounded);
  }

  getRandomCard(): Card {
    console.log('getRandomCard :');
    const index = Math.floor(Math.random() * this.cardsUnfounded.length);
    console.log('Choosen card : ');
    console.log(index);
    return this.cardsUnfounded[index];
  }

  initCards() {
    if (this.cardsUnfounded.length === 0) {
      for (const card of this.cardsFounded) {
        this.cardsUnfounded.push(card);
      }
    } else {

    }
    this.cardsFounded = [];
  }

  findCard(card: Card) {
    this.cardsFounded.push(card);
    const index = this.cardsUnfounded.indexOf(card);
    this.cardsUnfounded.splice(index, 1);
  }
}
