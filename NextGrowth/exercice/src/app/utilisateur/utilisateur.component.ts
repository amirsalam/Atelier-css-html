import { NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
  
  stringType = ''

  users   = [
    {
      id:  "123456789",
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


  constructor(stringType : string) { 
    
  }

  ngOnInit(): void {
  }

  enregistrerUser(event :any){
    this.users.forEach( (index) => {
      this.stringType   = Math.floor(Math.random() * 10000000001) 
        index.id   = this.stringType 
        index.createdDate = event.target.date.value
        index.status = event.target.etat.value
        index.firstName = event.target.nom.value
        index.lastName = event.target.prenom.value
        index.userName = event.target.user.value
        index.registrationNumber = event.target.matricule.value
         this.users.push(index.id,
                                index.createdDate,
                                index.status,
                                index.firstName,
                                index.lastName,
                                index.userName,
                                index.registrationNumber)
    });

    // this.users.id = Math.floor(Math.random() * 10000000001)
    // this.users.createdDate = event.target.date.value
    // this.users.status = event.target.etat.value
    // this.users.firstName = event.target.nom.value
    // this.users.lastName = event.target.prenom.value
    // this.users.userName = event.target.user.value
    // this.users.registrationNumber = event.target.matricule.value

    // return this.users.push(this.users.id,
    //   this.users.createdDate,
    //   this.users.status,
    //   this.users.firstName,
    //   this.users.lastName,
    //   this.users.userName,
    //   this.users.registrationNumber)


  }

}
