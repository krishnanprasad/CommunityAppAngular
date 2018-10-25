import { Component, OnInit } from '@angular/core';
import { CommunityListWallService } from '../community-list-wall.service';
@Component({
  selector: 'c-notify-offering',
  templateUrl: './cnotify-offering.component.html',
  styleUrls: ['./cnotify-offering.component.css']
})
export class CNotifyOfferingComponent implements OnInit {

  public ComListOffering=[];   
  constructor(private _Communitylist:CommunityListWallService) { }

  ngOnInit() {
    console.log('Comm Notify offering');        
    this.ComListOffering=this._Communitylist.getcommunitylist();   ;
  }

}
