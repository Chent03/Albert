import { useCallback, useState } from 'react'
import { getStocks } from 'utils/api'
import { Results } from './results'
import { TStock } from 'utils/types'
import { useDebounce } from 'utils/debounce'

type TProps = {
  watchList: TStock
  addToWatchList: (ticker: TStock) => void
  removeStock: (symbol: string) => void
}
export const SearchBar: React.FC<TProps> = ({
  addToWatchList,
  watchList,
  removeStock,
}) => {
  const [results, setResults] = useState<TStock>({})
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const searchValue = event.target.value.trim()
    setSearchTerm(searchValue)
    if (searchValue !== '') {
      debouncedFetch()
    } else {
      setIsVisible(false)
    }
  }
  const addToList = (ticker: TStock) => {
    setIsVisible(false)
    setSearchTerm('')
    addToWatchList(ticker)
  }

  const debouncedFetch = useDebounce(async () => {
    try {
      const stocks = await getStocks(searchTerm)
      setResults(stocks)
      setIsVisible(true)
    } catch (error) {
      setIsVisible(false)
    }
  }, 500)

  const removeFromWatchList = (sym: string) => {
    removeStock(sym)
    setIsVisible(false)
  }

  return (
    <div>
      <input
        name="ticker"
        type="text"
        data-testid="ticker_input"
        value={searchTerm}
        placeholder="Search..."
        onChange={onChange}
        className={`pl-5 pr-5 py-2 border w-96 rounded-t-lg
        ${isVisible ? 'rounded-none' : 'rounded-b-lg'}`}
      />
      {isVisible && (
        <Results
          removeStock={removeFromWatchList}
          results={results}
          addToWatchList={addToList}
          watchList={watchList}
        />
      )}
    </div>
  )
}
