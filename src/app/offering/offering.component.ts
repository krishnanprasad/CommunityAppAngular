import { Component, OnInit } from '@angular/core';
import { PostDetailsWallService } from '../post-details-wall.service';
@Component({
  selector: 'app-offering',
  templateUrl: './offering.component.html',
  styleUrls: ['./offering.component.css']
})
export class OfferingComponent implements OnInit {
  PostDetails=[];
  constructor(private _postwalllist:PostDetailsWallService) { }

  ngOnInit() {
    
    this.PostDetails=this._postwalllist.getpostwalllistFiltered("Offering");   ;
  }

}
