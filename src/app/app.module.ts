import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CarteComponent } from './carte/carte.component';
import { DetailsComponent } from './details/details.component';
import { FilsComponent } from './fils/fils.component';
import { ListeComponent } from './liste/liste.component';
import { FinalCvComponent } from './final-cv/final-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CarteComponent,
    DetailsComponent,
    FilsComponent,
    ListeComponent,
    FinalCvComponent  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
