import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { FormateToUsnumberDirective } from './formate-to-usnumber.directive';



@NgModule({
  declarations: [
    AppComponent,
    FormateToUsnumberDirective,
  
  ],
  imports: [
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
