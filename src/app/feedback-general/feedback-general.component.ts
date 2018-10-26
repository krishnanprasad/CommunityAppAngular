import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'feedback-general',
  templateUrl: './feedback-general.component.html',
  styleUrls: ['./feedback-general.component.css']
})
export class FeedbackGeneralComponent implements OnInit {
  public PostId;
  public PostLike;
  public PostComment;
  public PostIntrest;
  public PostDownrate;
  @Input('PostID') dataPostId;
  @Input('PostLike') dataPostLike;
  @Input('PostComment') dataPostComment;
  @Input('PostIntrest') dataPostIntrest;
  @Input('PostDownrate') dataPostDownrate;
  constructor() {

  }

  ngOnInit() {
    this.PostId = this.dataPostId;
    this.PostLike = this.dataPostLike;
    this.PostComment = this.dataPostComment;
    this.PostIntrest = this.dataPostIntrest;
    this.PostDownrate = this.dataPostDownrate;
  }
  AddLike(PostId) {
    alert('Likes Added To Post Id' + PostId);
  }

}
