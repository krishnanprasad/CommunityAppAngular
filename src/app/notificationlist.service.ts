import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationlistService {

  constructor() {}
   getnotificationlist(){
    return [
      {"notifyid":"not123","notifyfrom":"Saravanan","notifytype":"Offer","notifymessage":"is offering food"},
      {"notifyid":"not120","notifyfrom":"Ram","notifytype":"Request","notifymessage":"is requesting rental car"},
      {"notifyid":"not124","notifyfrom":"Guhan","notifytype":"Like","notifymessage":"liked your photo"},
      {"notifyid":"not125","notifyfrom":"Suresh","notifytype":"Activity","notifymessage":"interested in your activity"},
      {"notifyid":"not126","notifyfrom":"Raggu","notifytype":"Comment","notifymessage":"commented on your video"},
      {"notifyid":"not127","notifyfrom":"Janani","notifytype":"Like","notifymessage":"liked your photo"},
      {"notifyid":"not128","notifyfrom":"Priya","notifytype":"Like","notifymessage":"liked your Status"},
      {"notifyid":"not129","notifyfrom":"Sriram","notifytype":"Recommend","notifymessage":"is recommending SA Foods"},
      {"notifyid":"not130","notifyfrom":"Aarthi","notifytype":"Like","notifymessage":"liked your photo"},
      {"notifyid":"not131","notifyfrom":"Karthick","notifytype":"Recommend","notifymessage":"is recommending SA Foods"},
      {"notifyid":"not132","notifyfrom":"Bharath","notifytype":"Activity","notifymessage":"interested in your activity"},
      {"notifyid":"not133","notifyfrom":"Ramu","notifytype":"Like","notifymessage":"liked your photo"},
      {"notifyid":"not134","notifyfrom":"Suresh","notifytype":"Activity","notifymessage":"interested in your activity"},
    ];
  }
}
