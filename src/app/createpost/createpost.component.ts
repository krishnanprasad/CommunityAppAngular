import { Component, OnInit } from '@angular/core';
import { Post } from '../class/post';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor() { }
  createpostform=new Post("","","","","","","","","","","");
  ngOnInit() {
  }
  onSubmit(){
    console.log('Submit Success');
  }
}
