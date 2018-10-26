export class Post {
    constructor(
        public PostID: string,
        public PostType: string,
        public Subject: string,
        public UserImage: string,
        public UserName: string,
        public Message: string,
        public CommunityFrom: string,
        public ImageSrc: string,
        public FromLocation: string,
        public ToLocation: string,
        public PostTime: string
    ) { }

}
