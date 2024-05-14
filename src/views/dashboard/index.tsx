import { SearchBar } from 'components/searchbar'
import { Watchlist } from 'components/watchlist'
import { useEffect, useState } from 'react'
import { getStockPrices } from 'utils/api'
import { TStock, TStockPrices } from 'utils/types'
import { loadSavedWatchList, saveWatchListToLocal } from './utils'
export const Dashboard = () => {
  const [watchList, setWatchList] = useState<TStock>({})
  const [stockPrices, setStockPrices] = useState<TStockPrices>({})

  const fetchPrices = async () => {
    const tickers = Object.keys(watchList)
    if (tickers.length) {
      const prices = await getStockPrices(tickers)
      setStockPrices(prices)
    }
  }

  useEffect(() => {
    fetchPrices()

    const intervalId = setInterval(() => {
      fetchPrices()
    }, 5000)

    return () => clearInterval(intervalId)
  }, [watchList])

  useEffect(() => {
    const savedWatchList = loadSavedWatchList()
    addToWatch(savedWatchList)
  }, [])

  const addToWatch = async (ticker: TStock) => {
    const list = { ...watchList, ...ticker }
    setWatchList(list)
    saveWatchListToLocal(list)
  }

  const removeFromWatchList = (symbol: string) => {
    const list = { ...watchList }
    delete list[symbol]
    setWatchList(list)
    saveWatchListToLocal(list)
  }
  return (
    <div className="flex justify-center pt-3 flex-col items-center">
      <SearchBar
        addToWatchList={addToWatch}
        watchList={watchList}
        removeStock={removeFromWatchList}
      />
      <Watchlist
        stocks={watchList}
        prices={stockPrices}
        removeStock={removeFromWatchList}
      />
    </div>
  )
}
