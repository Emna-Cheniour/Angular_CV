import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Output()exportEvent=new EventEmitter;
  cv1:CV={
    nom: "Emna",
    prenom: "Cheniour",
    image: "assets/images/emna.jpg",
    citation: "« Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. », Winston Churchill.",
    description: "Etudiante en deuxième année cycle ingénieur en Génie Logiciel à l'Institut National des Sciences Appliquées et de Technologie (INSAT)",
    job: "Etudiante",
    motsCles: "Angular, MEAN, Software Engineer",
   }
  cv2:CV={
    nom: "Moataz",
    prenom: "Hellal",
    image: "assets/images/moataz.jpg",
    citation: "« Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. », Winston Churchill.",
    description: "Etudiante en deuxième année cycle ingénieur en Génie Logiciel à l'Institut National des Sciences Appliquées et de Technologie (INSAT)",
    job: "Etudiant",
    motsCles: "Angular, MEAN, Software Engineer",}
  cv3:CV={
    nom: "Haythem",
    prenom: "Kaouech",
    image: "assets/images/haythem.jpg",
    citation: "« Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. », Winston Churchill.",
    description: "Etudiante en deuxième année cycle ingénieur en Génie Logiciel à l'Institut National des Sciences Appliquées et de Technologie (INSAT)",
    job: "Etudiant",
    motsCles: "Angular, MEAN, Software Engineer",
  }
      @Output() outputCV :CV={
        nom: "",
        prenom: "",
        image: "",
        citation: "",
        description: "",
        job: "",
        motsCles: "",
      }

  constructor() { }

  ngOnInit(): void {
  }
  export(cv:CV){
    this.exportEvent.emit(cv);
    console.log("test");
  }

}
