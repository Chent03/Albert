import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TStockPrice } from 'utils/types'
import { calculateChange } from './utils'

type TProps = {
  stock: TStockPrice
  isPercentageView: boolean
}
export const Price: React.FC<TProps> = ({ stock, isPercentageView }) => {
  const change = calculateChange(
    stock.price,
    stock.last_close,
    isPercentageView
  )
  const isPositive = change >= 0
  return (
    <div className="flex flex-col">
      <label className="text-right">${stock.price}</label>
      <label
        className={`text-right ${
          isPositive ? 'text-green-400' : 'text-red-400'
        }`}
      >
        <FontAwesomeIcon
          icon={isPositive ? faArrowUp : faArrowDown}
          className="mr-2"
        />
        {!isPercentageView && <span>$</span>}
        {change.toFixed(2)}
        {isPercentageView && <span>%</span>}
      </label>
    </div>
  )
}
