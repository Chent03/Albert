import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses } from '@fortawesome/free-solid-svg-icons'
import { TStock, TStockPrices } from 'utils/types'
import { Item } from './item'
import { useState } from 'react'
import { Toggle } from './toggle'
import { EmptyState } from './empty'

export type TProps = {
  stocks: TStock
  prices: TStockPrices
  removeStock: (symbol: string) => void
}
export const Watchlist: React.FC<TProps> = ({
  stocks,
  prices,
  removeStock,
}) => {
  const [isPercentage, setIsPrecentage] = useState(false)

  const list = Object.entries(stocks)
  const hasEntries = list.length

  return (
    <div className="border w-1/2 mt-4 rounded min-w-96">
      <div className="flex justify-between p-2">
        <div className="flex items-center text-xl">
          <FontAwesomeIcon icon={faGlasses} />
          <h3 className="ml-2 font-bold">Watchlist</h3>
        </div>
        <Toggle isPercentage={isPercentage} setIsPrecentage={setIsPrecentage} />
      </div>
      <div className="mt-3">
        <ul>
          {hasEntries ? (
            list.map(([key, value]) => (
              <Item
                symbol={key}
                name={value}
                key={key}
                price={prices[key]}
                isPercentageView={isPercentage}
                removeStock={removeStock}
              />
            ))
          ) : (
            <EmptyState />
          )}
        </ul>
      </div>
    </div>
  )
}
