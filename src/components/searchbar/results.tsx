import { TStock } from 'utils/types'
import { Item } from './item'

type TProps = {
  watchList: TStock
  results: TStock
  addToWatchList: (ticker: TStock) => void
  removeStock: (sym: string) => void
}
export const Results: React.FC<TProps> = ({
  results,
  addToWatchList,
  watchList,
  removeStock,
}) => {
  return (
    <div className="absolute z-1 bg-white border w-96 rounded-b-lg max-h-40 overflow-auto">
      <ul>
        {Object.entries(results).map(([key, value]) => (
          <Item
            removeStock={removeStock}
            watchList={watchList}
            symbol={key}
            key={key}
            name={value}
            addToWatchList={addToWatchList}
          />
        ))}
      </ul>
    </div>
  )
}
