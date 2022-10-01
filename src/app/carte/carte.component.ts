import { Component, Input, OnInit } from '@angular/core';
import { CV } from '../cv-model';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css',

  ]
})
export class CarteComponent implements OnInit {
  @Input() cv:CV={
  nom:'',
  prenom:'',
  image:"",
  citation:"",
  description:"",
  job:"",
  motsCles:"",
}

  
  constructor() { }

  ngOnInit(): void {
  }

}
