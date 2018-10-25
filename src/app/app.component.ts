import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { PostDetailsWallService } from './post-details-wall.service';
import { CommunityListWallService } from './community-list-wall.service';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _postwalllist:PostDetailsWallService,private _communitylist:CommunityListWallService) { }
  CommunityList=[]
  PostDetails=[];

  ngOnInit(){
    this.CommunityList=this._communitylist.getcommunitylist();
    this.PostDetails=this._postwalllist.getpostwalllist();
   
  }
  OnSetUserID(userid)
  {
    
  }
}
