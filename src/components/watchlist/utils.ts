export const calculateChange = (price: number, lastPrice: number, inPercentage: boolean): number => {
    if(inPercentage) {
        return ((price - lastPrice) / lastPrice) * 100
    } else {
        return price - lastPrice
    }
}