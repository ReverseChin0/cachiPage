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

export type localizedFooterTerms = {
    [language:string]:{
        languageText:       string,
        illustrationBy:     string,
    }
}


export const FooterTerms: localizedFooterTerms = {
  EN:{
    languageText: "LANGUAGE",
    illustrationBy: "Illustration by VOFAN"
  },
  ES:{
    languageText:"IDIOMA",
    illustrationBy: "Ilustración de VOFAN"
  },
  FR:{
    languageText: "Langue",
    illustrationBy:"Illustration par VOFAN"

  },
  JP:{
    languageText: "言語",
    illustrationBy: "イラスト：VOFAN"
  }
}