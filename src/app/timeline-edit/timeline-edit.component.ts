import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-timeline-edit',
  templateUrl: './timeline-edit.component.html',
  styleUrls: ['./timeline-edit.component.css']
})
export class TimelineEditComponent implements OnInit {

  cards: Card[];

  constructor(
    private timelineService: TimelineService,
    private cardService: CardService,
  ) { }

  ngOnInit() {
    this.cards = this.timelineService.getTimeline().cardList;
  }

  deleteItem(ind) {
    this.cards.splice(ind, 1);
    this.cardService.setCardsUnfounded(this.cards);
  }

}
