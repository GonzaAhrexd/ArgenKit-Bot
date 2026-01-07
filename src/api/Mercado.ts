import { finnhubClient } from './axios'

type MarketStatusResponse = {
    holiday: string,
    isOpen: boolean,
    session: string
}

type stockQuoteResponse = {
    data: {
        c: number
        d: number
        dp: number
        h: number
        l: number
        o: number
        pc: number
        t: number
    }
}

type stockQuoteResponseImproved = {
    currentPrice: number
    change: number
    percentChange: number
    highPriceOfDay: number
    lowPriceOfDay: number
    openPriceOfDay: number
    previousClosePrice: number
}


export const getEstadoMercado = async (): Promise<MarketStatusResponse> => {
    try {
        const response = await finnhubClient.get('/stock/market-status?exchange=US')
        return response.data
    } catch (error) {
        console.error('Error fetching market status:', error)
        throw error
    }
}

export const getPrecioAccion = async (symbol: string): Promise<stockQuoteResponseImproved> => {
    try {

        const response: stockQuoteResponse = await finnhubClient.get(`/quote?symbol=${symbol}`)

        const improvedResponse: stockQuoteResponseImproved = {
            currentPrice: response.data.c,
            change: response.data.d,
            percentChange: response.data.dp,
            highPriceOfDay: response.data.h,
            lowPriceOfDay: response.data.l,
            openPriceOfDay: response.data.o,
            previousClosePrice: response.data.pc,
        }

        return improvedResponse
    } catch (error) {
        console.error('Error fetching stock price:', error)
        throw error
    }

}


