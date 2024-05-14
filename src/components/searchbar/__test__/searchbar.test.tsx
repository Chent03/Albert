import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { SearchBar } from '../'
import * as api from 'utils/api'

const mockGetStocks = api.getStocks as jest.MockedFunction<typeof api.getStocks>

const mockAddToWatchList = jest.fn()
const mockRemoveStock = jest.fn()
const mockStockData = {
  AAPL: 'Apple',
}
jest.mock('utils/api', () => ({
  getStocks: jest.fn(),
}))

describe('Search Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should call fetch endpoint for stocks when inputed AA and display in results list', async () => {
    mockGetStocks.mockResolvedValue(mockStockData)

    render(
      <SearchBar
        watchList={{}}
        addToWatchList={mockAddToWatchList}
        removeStock={mockRemoveStock}
      />
    )
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()

    const input = screen.getByTestId('ticker_input')
    fireEvent.change(input, { target: { value: 'AA' } })
    await waitFor(() => {
      expect(api.getStocks).toHaveBeenCalled()
    })
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })
})
