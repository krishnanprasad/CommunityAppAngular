import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'text-only-card',
  templateUrl: './text-only-card-component.component.html',
  styleUrls: ['./text-only-card-component.component.css']
})
export class TextOnlyCardComponentComponent {

  
  public CardList;
  @Input() data;
  constructor() { }

  ngOnInit() {
    //this.CardList=[{Name:"Krishnan 0",Age:10},{Name:"Krishnan A",Age:12},{Name:"Krishnan B",Age:13}];
    
    console.log(this.data);
    this.CardList = this.data;
    console.log("Text Only Card !!");
  }

  onClick() {
    //this.CardList=this.data;
    alert('Hi');
  }

  getType(Type) { 
    switch (Type) {
      case 'Offering':
        return '#00ad5d';
      case 'Request':
        return '#f5004f';
      case 'Activity':
        return '#b69001';
    }
  }

}
