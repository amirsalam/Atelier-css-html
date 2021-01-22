import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './frontOffice/header/header.component';
import { HeadComponent } from './frontOffice/head/head.component';
import { ManagementComponent } from './frontOffice/management/management.component';
import { FooterComponent } from './frontOffice/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeadComponent,
    ManagementComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
