import type { NewsItem } from "../data/types";

export const sortedNews = (news:NewsItem[]) => {

    return [...news].sort((a, b) => {

        const parseDate = (dateStr: string) => {
            const [day, month, year] = dateStr.split("/").map(Number);
            return new Date(year, month - 1, day); // month is 0-based
        };

        return parseDate(b.date).getTime() - parseDate(a.date).getTime(); // Descending order
    })    
} ;