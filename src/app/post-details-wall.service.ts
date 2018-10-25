import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsWallService {
  public OfferingContent = [
    { PostID: "POS0001", PostType: "Offering", Subject: "Travel", UserImage: "assets/Image/unknown1.jpg", UserName: "Krishnan", Message: "I am travelling by 8.30 am by car i can accomadate two people", CommunityFrom: "MCT 2014", ImageSrc: "", FromLocation: "Sholinganallur", ToLocation: "Velachery", postlike: 10, postcomment: 6, postintrest: 1, postdownrate: 1 ,Comment:"How Travelling is where i want to get in, How much luggange can i carry please update me as soon as possible" },
   { PostID: "POS0003", PostType: "Offering", Subject: "Ticket", UserImage: "assets/Image/employee2.jpg", UserName: "Vignesh", Message: "Hey i am having two tickets for kaala movie in Ganga Theatre", CommunityFrom: "Ceebros Imperiale", ImageSrc: "assets/Image/movieticket.jpg", FromTime: "22/10/2018 10:30", ToLocation: "Ganga Theatre", postlike: 3, postcomment: 10, postintrest: 1, postdownrate: 1 }];
  public PostDetails = [
    { PostID: "POS0001", PostType: "Offering", Subject: "Travel", UserImage: "assets/Image/unknown1.jpg", UserName: "Krishnan", Message: "I am travelling by 8.30 am by car i can accomadate two people", CommunityFrom: "MCT 2014", ImageSrc: "", FromLocation: "Sholinganallur", ToLocation: "Velachery", postlike: 10, postcomment: 6, postintrest: 1, postdownrate: 1 ,Comment:"How Travelling is where i want to get in, How much luggange can i carry please update me as soon as possible" },
    { PostID: "POS0002", PostType: "Request", Subject: "Book", UserImage: "assets/Image/unknown2.jpg", UserName: "Saravana Kumar", Message: "does any one have Sherlock Homes book by benedict i will return in a week", CommunityFrom: "SKCET", ImageSrc: "", postlike: 10, postcomment: 3, postintrest: 1, postdownrate: 9 },
    { PostID: "POS0003", PostType: "Offering", Subject: "Ticket", UserImage: "assets/Image/employee2.jpg", UserName: "Vignesh", Message: "Hey i am having two tickets for kaala movie in Ganga Theatre", CommunityFrom: "Ceebros Imperiale", ImageSrc: "assets/Image/movieticket.jpg", FromTime: "22/10/2018 10:30", ToLocation: "Ganga Theatre", postlike: 3, postcomment: 10, postintrest: 1, postdownrate: 1 }
  ]
  constructor() { }
  getpostwalllist() {   
     return this.PostDetails;  
  }
  getpostwalllistFiltered(Data) {
    if (Data == "Offering") {
      return this.OfferingContent
    }
  }

}

