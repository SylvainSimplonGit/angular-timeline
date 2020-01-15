import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineListComponent } from '../timeline-list/timeline-list.component';
import { TimelineComponent } from '../timeline/timeline.component';
import { TimelineEditComponent } from '../timeline-edit/timeline-edit.component';

const routes: Routes = [
  { path: '', component: TimelineListComponent},
  { path: 'timeline/:timelineId', component: TimelineComponent},
  // { path: 'edit/:timelineId', component: TimelineEditComponent},
  { path: 'edit', component: TimelineEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
