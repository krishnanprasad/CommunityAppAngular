import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { PostDetailsWallService } from '../post-details-wall.service';



@Component({
  selector: 'wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.css']
})
export class WallPageComponent {
  constructor(private _postwalllist: PostDetailsWallService) { }

  PostDetails = [];

  ngOnInit() {

    this.PostDetails = this._postwalllist.getpostwalllist();
    console.log(this.PostDetails);

  }
  OnSetUserID(userid) {

  }
}
