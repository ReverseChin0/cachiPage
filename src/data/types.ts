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

export type gameProps = {
  id:number,
  layout:number,
  title:string,
  images:string[],
  quote:string
}