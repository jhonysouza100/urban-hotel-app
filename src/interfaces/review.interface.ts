import User from "./user.interface";

export default interface Review {
  id: number;
  author: string;
  picture: string;
  nacionality: string;
  text: string;
  rating: number;
  timestamp: string;
  platformLogo: string;
  platformName: string;
  userId: number;
  user: User;
}
