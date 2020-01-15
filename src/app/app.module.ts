import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TimelineListComponent } from './timeline-list/timeline-list.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineEditComponent } from './timeline-edit/timeline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TimelineListComponent,
    TimelineComponent,
    TimelineEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
