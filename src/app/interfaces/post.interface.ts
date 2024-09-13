export interface IPost {
  title: string;
  content: string | string[];
  uid: string;
}
export interface IPostWithId extends IPost {
  _id: string;
}
