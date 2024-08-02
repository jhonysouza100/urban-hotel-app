import User from "./user.interface";

export default interface Review {
  id: number;
  title: string;
  comment: string;
  rating: number;
  userId: number;
  user: User;
}
