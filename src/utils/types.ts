export type TStock = {
    [key: string]: string
}
export type TStockPrices = {
    [key: string]: TStockPrice
}

export type TStockPrice = {
    price: number,
    last_close: number
}
