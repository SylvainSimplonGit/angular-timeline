import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';
import { Timeline } from '../timeline';

@Component({
  selector: 'app-timeline-list',
  templateUrl: './timeline-list.component.html',
  styleUrls: ['./timeline-list.component.css']
})

export class TimelineListComponent implements OnInit {

  timelines;

  constructor(
    private timelineService: TimelineService
  ) { }

  ngOnInit() {
    this.timelines = this.timelineService.getTimelines();
  }

  edit(timeline) {
    console.log('Edit : ' + timeline.name);
  }

  play(timeline) {
    console.log('Play : ' + timeline.name);
  }

  addTimeline() {
    // TODO
    // Définir les caractéristiques de la nouvelle Timeline {id, name, creationDate, updateDate, category, cardList[]}
    // avant de l'ajouter via le service Timeline
    // const timeline: Timeline = {
    //   id:,
    //   name:,

    // };
    // this.timelineService.addItem(timeline);
  }
}
