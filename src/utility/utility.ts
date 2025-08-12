import { useLocation } from "react-router-dom";
import type { MultiLangGalleryItem, NewsPropsLocalized } from "../data/types";

export function sortedNews(news:NewsPropsLocalized[]){

    return [...news].sort((a, b) => {

        const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split("/").map(Number);
            return new Date(year, month - 1, day); // month is 0-based
        };

        return parseDate(b.date).getTime() - parseDate(a.date).getTime(); // Descending order
    })    
};

export function getCurrentLanguage() {
    const location = useLocation();
    const segments = location.pathname.split("/").filter(Boolean);
    const lang = segments[0]?.toUpperCase();

    const validLangs = ["EN", "JP", "ES", "FR"];
    const currentLang = validLangs.includes(lang) ? lang : "EN";
    return currentLang;
}

export function IsOnMain(){
    const location = useLocation();

    const segments = location.pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length-1];

    return ["EN", "JP", "ES", "FR"].includes(lastSegment); //this determines if its on main
}

export function GetGalleryFromLanguage(originalGallery:MultiLangGalleryItem[], language:string){

     return originalGallery.map(item => {
        const translation = item.translations[language];

        return {
        title: translation?.title ?? "",
        subtitle: translation?.subtitle ?? "",
        description: translation?.description ?? "",
        downloadImage: item.downloadImage,
        previewImage: item.previewImage,
        thumbnail: item.thumbnail,
        };
    });
}

export function hideNavbar() {
    const interNavbar = document.getElementById("interactable-navbar");
    interNavbar?.classList.remove("show-navbar");
}