import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryService } from './shared/country.service';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
