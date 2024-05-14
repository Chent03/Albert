import { TStock } from "utils/types";

export const saveWatchListToLocal = (stocks: TStock) => {
    localStorage.setItem('albertWatchList', JSON.stringify(stocks))
}

export const loadSavedWatchList = () => {
   return JSON.parse(localStorage.getItem('albertWatchList') || '{}')
}