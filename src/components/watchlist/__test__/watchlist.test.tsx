import { render, screen, fireEvent } from '@testing-library/react'
import { Watchlist, TProps } from '../'
import { calculateChange } from '../utils'
import userEvent from '@testing-library/user-event'

const mockRemoveStock = jest.fn()

describe('Watch List Component Empty State', () => {
  it('should display an empty state if no entries', () => {
    render(<Watchlist stocks={{}} prices={{}} removeStock={mockRemoveStock} />)
    const emptyState = screen.getByText('Search stocks to add!')
    expect(emptyState).toBeInTheDocument()
  })
  it('should display toggles', () => {
    render(<Watchlist stocks={{}} prices={{}} removeStock={mockRemoveStock} />)
    const dollarToggle = screen.getByTestId('dollar_toggle')
    const percentageToggle = screen.getByTestId('percentage_toggle')
    expect(dollarToggle).toBeInTheDocument()
    expect(percentageToggle).toBeInTheDocument()
  })
})

describe('Watch List with stocks', () => {
  const mockProps: TProps = {
    removeStock: mockRemoveStock,
    stocks: { AAPL: 'Apple' },
    prices: { AAPL: { price: 110, last_close: 100 } },
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should display stock in list with price change in dollars', () => {
    render(<Watchlist {...mockProps} />)
    const stockSymbol = screen.getByText('AAPL')
    const stockName = screen.getByText('Apple')
    const stockPrice = mockProps.prices['AAPL']
    const priceChange = calculateChange(
      stockPrice.price,
      stockPrice.last_close,
      false
    )
    const priceMatcher = (_: any, node: any) => {
      const text = node?.textContent
      return text && text.replace(/\s/g, '') === `$${priceChange.toFixed(2)}`
    }

    const priceElement = screen.getByText(priceMatcher)
    expect(stockSymbol).toBeInTheDocument()
    expect(stockName).toBeInTheDocument()
    expect(priceElement).toBeInTheDocument()
  })
  it('should display sotck in list with change in percentage', () => {
    render(<Watchlist {...mockProps} />)
    const percentageToggle = screen.getByTestId('percentage_toggle')
    fireEvent.click(percentageToggle)

    const stockPrice = mockProps.prices['AAPL']
    const priceChange = calculateChange(
      stockPrice.price,
      stockPrice.last_close,
      true
    )
    const priceMatcher = (_: any, node: any) => {
      const text = node?.textContent
      return text && text.replace(/\s/g, '') === `${priceChange.toFixed(2)}%`
    }
    const priceElement = screen.getByText(priceMatcher)
    expect(priceElement).toBeInTheDocument()
  })
  it('should reveal a remove button when hovering over a stock and call removeStock when clicked', async () => {
    render(<Watchlist {...mockProps} />)
    expect(screen.queryByTestId('remove_stock_button')).not.toBeInTheDocument()

    const rowElement = screen.getByText('Apple')
    await userEvent.hover(rowElement)
    const removeStockButton = screen.getByTestId('remove_stock_button')
    expect(removeStockButton).toBeInTheDocument()
    fireEvent.click(removeStockButton)
    expect(mockRemoveStock).toHaveBeenCalled()
  })
})
