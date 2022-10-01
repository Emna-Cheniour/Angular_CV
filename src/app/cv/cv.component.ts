import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  color="white";
  constructor() { }

  ngOnInit(): void {
  }
  backToDefault(){
    this.color="white"
  }
  showColor(newcolor:string){
    this.color=newcolor;
  }
}
