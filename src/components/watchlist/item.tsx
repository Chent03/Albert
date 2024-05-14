import { TStockPrice } from 'utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Price } from './price'

type TProps = {
  symbol: string
  name: string
  price?: TStockPrice
  isPercentageView: boolean
  removeStock: (symbol: string) => void
}
export const Item: React.FC<TProps> = ({
  symbol,
  name,
  price,
  isPercentageView,
  removeStock,
}) => {
  const [isHovering, setIsHovering] = useState(false)
  return (
    <li
      className="hover:bg-slate-300 p-2 flex justify-between"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-col">
        <label className="font-bold">{symbol}</label>
        <label className="text-sm text-gray-500">{name}</label>
      </div>
      <div className="flex items-center">
        {price ? (
          <Price stock={price} isPercentageView={isPercentageView} />
        ) : (
          <FontAwesomeIcon icon={faSpinner} className="mr-3 text-yellow-400" />
        )}
        {isHovering && (
          <button
            aria-label="remove"
            data-testid="remove_stock_button"
            className="ml-4 text-red-400"
            onClick={() => removeStock(symbol)}
          >
            <FontAwesomeIcon icon={faCircleMinus} />
          </button>
        )}
      </div>
    </li>
  )
}
