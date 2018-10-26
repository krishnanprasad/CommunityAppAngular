import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  public Username;
  public CommunityFrom;
  public UserImage;
  public Comment;
  @Input('Name') dataName
  @Input('CommunityFrom') dataCommunityFrom
  @Input('Image') dataUserImage
  @Input('Comment') dataUserComment
  constructor() { }

  ngOnInit() {

    this.Username = this.dataName;
    this.CommunityFrom = this.dataCommunityFrom;
    this.UserImage = this.dataUserImage;
    this.Comment = this.dataUserComment;
  }

}
