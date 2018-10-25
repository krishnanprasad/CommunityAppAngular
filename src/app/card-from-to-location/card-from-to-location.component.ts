import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'from-to-location',
  templateUrl: './card-from-to-location.component.html',
  styleUrls: ['./card-from-to-location.component.css']
})
export class CardFromToLocationComponent implements OnInit {
  public FromLocation;
  public ToLocation;
  @Input('FromLocation') dataFromLocation;
  @Input('ToLocation') dataToLocation;
  constructor() { }

  ngOnInit() {
    this.FromLocation=this.dataFromLocation;
    this.ToLocation=this.dataToLocation;
    console.log(this.dataToLocation);
  }

}
