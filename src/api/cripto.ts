import exp from "constants";
import { coingeckoClient, criptoYaClient } from "./axios";

type CriptoDataYaResponse = {
  ask: number,
  totalAsk: number,
  bid: number,
  totalBid: number,
  time: number
}

type CriptoDataCoingeckoResponse = {
  prices: number,
  market_caps: number,
  total_volumes: number
}

export const getCriptoDataCoingecko = async (criptoId: string): Promise<CriptoDataCoingeckoResponse> => {
    try {
        const response = await coingeckoClient.get(`/${criptoId}/market_chart?vs_currency=usd&days=0`)
        const cleanResponse: CriptoDataCoingeckoResponse = {
            prices: response.data.prices[0][1],
            market_caps: response.data.market_caps[0][1],
            total_volumes: response.data.total_volumes[0][1]
        }
        return cleanResponse;
    } catch (error) {
        throw new Error(`Error al obtener datos de Coingecko para ${criptoId}: ${error}`);
    }
}

export const getCriptoDataCriptoYa = async (criptoSymbol: string): Promise<CriptoDataYaResponse> => {
    try {
        const response = await criptoYaClient.get(`${criptoSymbol}`)
        return response.data;
    } catch (error) {
        throw new Error(`Error al obtener datos de CriptoYa para ${criptoSymbol}: ${error}`);
    }
}

export const getAllCriptoData = async (criptoId: string, criptoSymbol: string) => {
    try {
        const [dataCoingecko, dataCriptoYa] = await Promise.all([
            getCriptoDataCoingecko(criptoId),
            getCriptoDataCriptoYa(criptoSymbol)
        ]);

        return { dataCoingecko: dataCoingecko, dataCriptoYa: dataCriptoYa };
    } catch (error) {
        throw new Error(`Error al obtener datos para ${criptoId} y ${criptoSymbol}: ${error}`);
    }
}