import axios from 'axios'


export const bluelyticsClient = axios.create({
  baseURL: 'https://api.bluelytics.com.ar/v2',

})

export const jsdelivrClient = axios.create({
    baseURL: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies',
   
})

// 
export const coingeckoClient = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
})

export const criptoYaClient = axios.create({
    baseURL: 'https://criptoya.com/api',
})