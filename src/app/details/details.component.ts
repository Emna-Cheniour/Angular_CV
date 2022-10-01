import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  newnom: string = "Emna";
  newprenom: string="Cheniour";
  newimage: string="assets/images/emna.jpg";
  newcitation:string="« Le succès n'est pas final, l'échec n'est pas fatal. C'est le courage de continuer qui compte. », Winston Churchill.";
  newdescription:string="Etudiante en deuxième année cycle ingénieur en Génie Logiciel à l'Institut National des Sciences Appliquées et de Technologie (INSAT)";
  newjob: string="Etudiante";
  newmotsCles: string ="Angular, MEAN, Software Engineer";
  
  constructor() { }

  ngOnInit(): void {
  }
  

}
