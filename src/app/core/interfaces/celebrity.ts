export interface Celebrity {
  category?: string;
  closingTime?: string;
  description: string;
  id: number;
  imageLink: string;
  isHeader: boolean;
  moreInfoLink?: string;
  name: string;
  numberOfDislikes?: number;
  numberOfLikes?: number;
  timeInCategory?: string;
}
