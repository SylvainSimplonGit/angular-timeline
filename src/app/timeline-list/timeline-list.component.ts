import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../timeline.service';

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
    this.timelines = this.timelineService.getItems();
  }

}
