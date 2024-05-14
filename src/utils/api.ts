import { TStockPrices, TStock } from "./types"

const ALBERT_API_ENDPOINT = 'https://app.albert.com/casestudy/stock/v2'

export const getStocks = async(ticker: string): Promise<TStock> => {
    const resp = await fetch(`${ALBERT_API_ENDPOINT}/search?` + new URLSearchParams({
        query: ticker
    }), {
        method: 'GET',
        headers: {
            "Albert-Case-Study-API-Key": `${process.env.REACT_APP_ALBERT_API}`
        }
    })
    return await resp.json()
}

export const getStockPrices = async(tickers: string[]): Promise<TStockPrices> => {
    const resp = await fetch(`${ALBERT_API_ENDPOINT}/prices?` + new URLSearchParams({
        tickers: tickers.join(',')
    }), {
        method: 'GET',
        headers: {
            "Albert-Case-Study-API-Key": `${process.env.REACT_APP_ALBERT_API}`
        }
    })

    return await resp.json()
}
