import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-utilisateur',
  templateUrl: './table-utilisateur.component.html',
  styleUrls: ['./table-utilisateur.component.css']
})
export class TableUtilisateurComponent implements OnInit {

  title = 'exercice';

  headers = ["ID", "Date de création", "Etat", "Nom", "Prénom","Nom d'Utilisateur","Matricule","Action"];

   users = [
    {
      id: "123456789",
      createdDate: "2021-01-06T00:00:00.000Z",
      status: "En validation",
      firstName: "Mohamed",
      lastName: "Taha",
      userName: "mtaha",
      registrationNumber: "2584",
    },
     {
      id: "987654321",
      createdDate: "2021-07-25T00:00:00.000Z",
      status: "Validé",
      firstName: "Hamid",
      lastName: "Orrich",
      userName: "horrich",
      registrationNumber: "1594",
    },
       {
      id: "852963741",
      createdDate: "2021-09-15T00:00:00.000Z",
      status: "Rejeté",
      firstName: "Rachid",
      lastName: "Mahidi",
      userName: "rmahidi",
      registrationNumber: "3576",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
