export type NewsItem = {
  title: string;
  message: string;
  date: string;
};

export type NewsPopupProps = {
  news: NewsItem[];
  delayPassed: boolean;
  isOnMainPage?: boolean;
};

export type GameProps = {
  id:number,  
  title:string,
  images:string[],  
}

export type GalleryItem = {
  title:string,
  subtitle:string,
  downloadImage:string,
  previewImage:string,
  thumbnail:string,
  description:string
}