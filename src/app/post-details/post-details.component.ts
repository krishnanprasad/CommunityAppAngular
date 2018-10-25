import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }
  //PostDetail = {UserName: "KRISHNAN RA",UserImage: "assets/Image/unknown1.jpg",CommunityFrom: "myself",FromLocation: "Chennai",ToLocation: "Madurai",    FromTime: "11AM",    postlike: 10,    postcomment: 6,    postintrest: 1,    postdownrate: 1  }
  PostDetails = { PostID: "POS0001", PostType: "Offering", Subject: "Travel", UserImage: "assets/Image/unknown1.jpg", UserName: "Krishnan", Message: "I am travelling by 8.30 am by car i can accomadate two people", CommunityFrom: "MCT 2014", ImageSrc: "", FromLocation: "Sholinganallur", ToLocation: "Velachery", postlike: 10, postcomment: 6, postintrest: 1, postdownrate: 1,Comment:"How Travelling is where i want to get in, How much luggange can i carry please update me as soon as possible" };
  FriendsInterested = [
    { Name: "Windstorm", Time: "10:30 am", CommunityNameFrom: "MCT2014", CommunityId: "" },
    { Name: "Bombasto", Time: "10:30 am", CommunityNameFrom: "Family Banglore", CommunityId: "" },
    { Name: "Magneta", Time: "10:30 am", CommunityNameFrom: "Mechatronics", CommunityId: "" },
    { Name: "Tornado", Time: "10:30 am", CommunityNameFrom: "Ceebros", CommunityId: "" }];
  PostAvailable = [
    { CommunityName: "MCT2014", CommunityId: "" },
    { CommunityName: "Family Banglore", CommunityId: "" },
    { CommunityName: "Mechatronics", CommunityId: "" },
    { CommunityName: "Ceebros", CommunityId: "" }
  ];

  ListOfFeedback = [
    { FeedbackType: "Seen", FeedbackTypeCount: 24 },
    { FeedbackType: "Like", FeedbackTypeCount: 86 },
    { FeedbackType: "Comment", FeedbackTypeCount: 21 },
    { FeedbackType: "Downrate", FeedbackTypeCount: 4 },
  ]
  ngOnInit() {
  }

}
