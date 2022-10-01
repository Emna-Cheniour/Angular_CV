import { Component, OnInit } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-cvtheque',
  templateUrl: './cvtheque.component.html',
  styleUrls: ['./cvtheque.component.css']
})
export class CvthequeComponent implements OnInit {

  constructor() { }
  displaycv:CV={
    nom: "",
    prenom: "",
    image: "",
    citation: "",
    description: "",
    job: "",
    motsCles: "",
    }
  

  ngOnInit(): void {
  }
  exporthandler(event:CV){
    this.displaycv.nom=event.nom;
    this.displaycv.prenom=event.prenom;
    this.displaycv.image=event.image;
    this.displaycv.citation=event.citation;
    this.displaycv.description=event.description;
    this.displaycv.job=event.job;
    this.displaycv.motsCles=event.motsCles;
  }
 

}
