import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice';

  headers = ["ID", "Date de création", "Etat", "Nom", "Prénom","Nom d'Utilisateur","Matricule","Action"];
}
