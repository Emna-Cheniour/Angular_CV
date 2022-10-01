import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() colorPere:string|undefined;
  myFavoriteColor="blue";
  constructor() { }

  @Output() colorChange= new EventEmitter();
  ngOnInit(): void {
  }
  FavColor(){
    this.colorChange.emit(this.myFavoriteColor)
  }
}
