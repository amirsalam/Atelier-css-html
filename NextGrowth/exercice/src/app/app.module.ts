import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableUtilisateurComponent } from './table-utilisateur/table-utilisateur.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { RouterModule,Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
       { path: "" ,
         component: TableUtilisateurComponent 
      },
       { path: "users" ,
         component: UtilisateurComponent
       },
       { path: "**" ,
         component: PageNotFoundComponent
       },
]



@NgModule({
  declarations: [
    AppComponent,
    TableUtilisateurComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
