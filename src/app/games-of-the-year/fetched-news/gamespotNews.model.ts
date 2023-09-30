export class GameSpotNew {
  constructor(
    public title: string,
    public author: string,
    public publish_date: Date,
    public image: {
      square_tiny: string;
    },
    public deck: string,
    public body: string,
    public site_detail_url: string
  ) {}
}
