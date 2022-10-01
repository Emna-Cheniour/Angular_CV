import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  @Output() nom='';
  
  @Output() prenom='';
  @Output() image:string|undefined;
  @Output() citation:string|undefined;
  @Output() description:string|undefined;
  @Output() job:string|undefined;
  @Output() motsCles:string|undefined;

  constructor() { }

  ngOnInit(): void {
  }
  outputDetails(newnom:string, newprenom:string, newimage:string, newcitation:string, newdescription:string, newjob:string, newmotscles:string){
      this.nom=newnom;
      this.prenom=newprenom;
      this.image=newimage;
      this.citation=newcitation;
      this.description=newdescription;
      this.job=newjob;
      this.motsCles=newmotscles;
  }

}
