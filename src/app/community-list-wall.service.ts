import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunityListWallService {

  constructor() { }
  getcommunitylist(){
    return [
      {CommunityName:"MCT 2014",CommunityId:"@mct2014",Notification:10},
      {CommunityName:"Ceebros Imperial",CommunityId:"@ceebrosimperiale",Notification:3},
      {CommunityName:"SKCET MCT Alumini",CommunityId:"@skcetalumini2010",Notification:0},
      {CommunityName:"GoPro Friends",CommunityId:"@goprofriends",Notification:6}
    ];
  }
}
