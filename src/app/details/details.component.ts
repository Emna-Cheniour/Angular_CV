import { Component, OnInit } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newcv: CV = {
    nom: "Emna",
    prenom: "Cheniour",
    image: "assets/images/emna.jpg",
    citation: "« Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. », Winston Churchill.",
    description: "Etudiante en deuxième année cycle ingénieur en Génie Logiciel à l'Institut National des Sciences Appliquées et de Technologie (INSAT)",
    job: "Etudiante",
    motsCles: "Angular, MEAN, Software Engineer",
  }


  constructor() { }

  ngOnInit(): void {
  }


}
