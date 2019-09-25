import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InstrumentalLessonsComponent } from './instrumental-lessons/instrumental-lessons.component';
import { PianoAccompanimentComponent } from './piano-accompaniment/piano-accompaniment.component';
import { SongwritingComponent } from './songwriting/songwriting.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TestimonialsComponent} from './testimonials/testimonials.component';
import { PricingComponent } from './pricing/pricing.component';
import { PianoAccompanimentHomeComponent } from './piano-accompaniment-home/piano-accompaniment-home.component';
import { InstrumentalLessonsHomeComponent } from './instrumental-lessons-home/instrumental-lessons-home.component';
import { ComposingComponent } from './composing/composing.component';
import { SongwritingHomePageComponent } from './songwriting-home-page/songwriting-home-page.component';
import { SongwritingRedasrubyComponent } from './songwriting-redasruby/songwriting-redasruby.component';
import { SongwritingAskevingtonComponent } from './songwriting-askevington/songwriting-askevington.component';

@NgModule({
  declarations: [
    AppComponent,
    InstrumentalLessonsComponent,
    TestimonialsComponent,
    PianoAccompanimentComponent,
    SongwritingComponent,
    HomePageComponent,
    PricingComponent,
    PianoAccompanimentHomeComponent,
    InstrumentalLessonsHomeComponent,
    ComposingComponent,
    SongwritingHomePageComponent,
    SongwritingRedasrubyComponent,
    SongwritingAskevingtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
