import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TStock } from 'utils/types'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

type TProps = {
  watchList: TStock
  symbol: string
  name: string
  addToWatchList: (ticker: TStock) => void
  removeStock: (sym: string) => void
}
export const Item: React.FC<TProps> = ({
  symbol,
  name,
  addToWatchList,
  watchList,
  removeStock,
}) => {
  const alreadyAdded = watchList[symbol]

  const onClick = () => {
    if (!alreadyAdded) {
      addToWatchList({
        [symbol]: name,
      })
    } else {
      console.log('click click')
      removeStock(symbol)
    }
  }
  return (
    <li
      className="border border-b-gray-200 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="ml-2 mr-2 mt-1 mb-1 flex justify-between">
        <div className="flex flex-col">
          <label className="font-bold">{symbol}</label>
          <label className="text-sm text-slate-500">{name}</label>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="text-green-400 text-lg"
            aria-label={`${alreadyAdded ? 'added' : 'add'}`}
          >
            <FontAwesomeIcon
              icon={alreadyAdded ? faCheckCircle : faPlusSquare}
            />
          </button>
        </div>
      </div>
    </li>
  )
}
