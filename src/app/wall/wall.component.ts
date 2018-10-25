import { Component, OnInit,Input } from '@angular/core';
import { WallModulesNavigationBarComponent } from '../wall-modules-navigation-bar/wall-modules-navigation-bar.component';

@Component({
  selector: 'wall-data',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  public PostDetails=[];
  @Input('walldata') dataWallData;
  constructor() { }

  ngOnInit() {
    console.log("Inside Wall Data")
    this.PostDetails=this.dataWallData;
  }

}
