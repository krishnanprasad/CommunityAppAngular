import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUserBasicDetailService {

  public UserID;
  constructor() { }

  setUserID(userid){
    this.UserID=userid;
    return this.UserID;
  }

  getUserID(){
    return this.UserID;
  }
}
