import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimelineListComponent } from '../timeline-list/timeline-list.component';

const routes: Routes = [
  { path: '', component: TimelineListComponent},
  { path: 'timeline', component: TimelineListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
