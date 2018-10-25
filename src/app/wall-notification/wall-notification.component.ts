import { Component, OnInit } from '@angular/core';
import { NotificationlistService } from '../notificationlist.service';

@Component({
  selector: 'wall-notification',
  templateUrl: './wall-notification.component.html',
  styleUrls: ['./wall-notification.component.css']
})
export class WallNotificationComponent implements OnInit {
  public NotificationList = [];
  constructor(private _notificationlist: NotificationlistService) { }

  ngOnInit() {
    this.NotificationList = this._notificationlist.getnotificationlist();
    console.log(this.NotificationList)
  }



  getImageSrc(Type) {
    switch (Type) {
      case 'Offer':
        return 'assets/Image/Icons/giving.png';
      case 'Activity':
        return 'assets/Image/Icons/joining0.png';
      case 'Request':
        return 'assets/Image/Icons/like0.png';
      case 'Like':
        return 'assets/Image/Icons/like0.png';
      case 'Comment':
        return 'assets/Image/Icons/comment0.png';
      case 'Recommend':
        return 'assets/Image/Icons/megaphone.png';

    }
  }
}
