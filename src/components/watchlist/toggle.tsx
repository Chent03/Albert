type TProps = {
  isPercentage: boolean
  setIsPrecentage: (value: boolean) => void
}
export const Toggle: React.FC<TProps> = ({ isPercentage, setIsPrecentage }) => {
  const onToggle = (value: string) => {
    setIsPrecentage(value === '%')
  }
  return (
    <div className="flex items-center">
      <button
        aria-label="dollar"
        data-testid="dollar_toggle"
        onClick={() => onToggle('$')}
        className={`border w-10 rounded-tl rounded-bl ${
          isPercentage ? '' : 'bg-green-400'
        }`}
      >
        $
      </button>
      <button
        aria-label="percentage"
        data-testid="percentage_toggle"
        onClick={() => onToggle('%')}
        value="%"
        className={`border w-10 rounded-tr rounded-br ${
          isPercentage ? 'bg-green-400' : ''
        }`}
      >
        %
      </button>
    </div>
  )
}
