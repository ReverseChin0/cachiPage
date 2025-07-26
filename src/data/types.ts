export type NewsItem = {
  title: string;
  message: string;
  date: string;
};

export type NewsPopupProps = {
  news: NewsPropsLocalized;
  delayPassed: boolean;  
};

export type NewsPropsLocalized = {
  date:string,
  translation:{
    [language:string]:{
        title:string,
        message:string
    },
  }    
}

export type GamePropsLocalized = {
  id:number,
  title:{
    [language:string]:string,
  }  
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

export type GalleryTranslation = {
  title: string;
  subtitle: string;
  description: string;
};

export type MultiLangGalleryItem = {
  id: string;
  downloadImage: string;
  previewImage: string;
  thumbnail: string;
  translations: {
    [langCode: string]: GalleryTranslation;
  };
};

export type AboutData = {
  [langCode:string]: string[];
}
