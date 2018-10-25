import { Component, OnInit, Input } from '@angular/core';
import { CommunityListWallService } from '../community-list-wall.service';

@Component({
  selector: 'community-notification-list',
  templateUrl: './community-notification-list.component.html',
  styleUrls: ['./community-notification-list.component.css']
})
export class CommunityNotificationListComponent implements OnInit {
  public ComList=[];   
  constructor(private _Communitylist:CommunityListWallService) { }

  ngOnInit() {
    console.log('Comm List');        
    this.ComList=this._Communitylist.getcommunitylist();   ;
  }

}
