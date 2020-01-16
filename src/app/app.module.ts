import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineEditComponent } from './timeline-edit/timeline-edit.component';
import { CardDetailComponent } from './card-detail/card-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TimelineListComponent,
    TimelineComponent,
    TimelineEditComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
