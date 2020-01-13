import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineListComponent } from '../timeline-list/timeline-list.component';
import { TimelineComponent } from '../timeline/timeline.component';

const routes: Routes = [
  { path: '', component: TimelineListComponent},
  { path: 'timeline', component: TimelineComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
