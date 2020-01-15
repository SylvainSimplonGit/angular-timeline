import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { TimelineService } from '../timeline.service';

@Component({
  selector: 'app-timeline-edit',
  templateUrl: './timeline-edit.component.html',
  styleUrls: ['./timeline-edit.component.css']
})
export class TimelineEditComponent implements OnInit {

  cards: Card[];

  constructor(
    private timelinService: TimelineService,
  ) { }

  ngOnInit() {
    this.cards = this.timelinService.getTimeline().cardList;
  }

}
