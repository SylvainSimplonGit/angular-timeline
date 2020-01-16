import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TimelineService } from '../timeline.service';
import { Card } from '../card';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  cardForm;
  private cards: Card[];

  constructor(
    private timelinService: TimelineService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.cards = this.timelinService.getTimeline().cardList;
    console.log(this.timelinService.getMaxId());
    this.cardForm = this.formBuilder.group({
      id: this.timelinService.getMaxId(),
      name: '',
      date: '',
      imageUrl: '',
      description: ''
    });
  }

  onSubmit(item: Card) {
    console.log(item);
    console.log('add : ' + item.name);
    this.cards.push(item);
    this.ngOnInit();
  }
}
