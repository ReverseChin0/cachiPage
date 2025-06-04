export type NewsItem = {
  title: string;
  message: string;
  date: string;
};

export type NewsPopupProps = {
  news: NewsItem[];
  isVisible: boolean;
};