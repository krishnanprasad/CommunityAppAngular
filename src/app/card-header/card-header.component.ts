import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent {
  public Username;
  public CommunityFrom;
  public UserImage;
  @Input('Name') dataName;
  @Input('CommunityFrom') dataCommunityFrom;
  @Input('Image') dataUserImage;
  constructor() { }

  ngOnInit() {

    this.Username = this.dataName;
    this.CommunityFrom = this.dataCommunityFrom;
    this.UserImage = this.dataUserImage;

  }

}
