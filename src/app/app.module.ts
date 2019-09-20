import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentalLessonsComponent } from './instrumental-lessons/instrumental-lessons.component';
import { PianoAccompanimentComponent } from './piano-accompaniment/piano-accompaniment.component';
import { SongwritingComponent } from './songwriting/songwriting.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestimonialsComponent} from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentalLessonsComponent,
    TestimonialsComponent,
    PianoAccompanimentComponent,
    SongwritingComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
