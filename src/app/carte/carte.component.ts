import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css',

  ]
})
export class CarteComponent implements OnInit {
  @Input() nom='';
  @Input() prenom='';
  @Input() image:string|undefined;
  @Input() citation:string|undefined;
  @Input() description:string|undefined;
  @Input() job:string|undefined;
  @Input() motsCles:string|undefined;

  
  constructor() { }

  ngOnInit(): void {
  }

}
