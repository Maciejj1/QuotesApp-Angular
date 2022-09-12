import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddQuoteComponent,
    QuotesComponent,
    RankingComponent,
    FormComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
