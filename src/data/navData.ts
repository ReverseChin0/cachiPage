export type localizedNavTitles = {
    [language:string]:{
        news:       string,
        games:      string,
        about:      string,
        gallery:    string,
        store:      string,
    }
}

export const navTitles:localizedNavTitles = 
{
  EN:{
  news: "NEWS",
  games: "GAMES",
  about: "ABOUT US",
  gallery: "GALLERY",
  store: "STORE"
  },
  ES:{
    news: "NOTICIAS",
    games: "JUEGOS",
    about: "SOBRE NOSOTROS",
    gallery: "GALERÍA",
    store: "TIENDA"
  },
  FR:{
    news: "ACTUALITÉS",
    games: "JEUX",
    about: "À PROPOS",
    gallery: "GALERIE",
    store: "BOUTIQUE"
  },
  JP:{
    news: "ニュース",
    games: "ゲーム",
    about: "私たちについて",
    gallery: "ギャラリー",
    store: "ストア"
  }
}