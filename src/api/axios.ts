import axios from 'axios'
import dotenv from 'dotenv'
import https from 'https'

dotenv.config()

const API_TOKEN_FINNHUB = process.env.apiKeyFinnhub || ''
const API_KEY_OPENWEATHER = process.env.apiKeyOpenWeather || ''

export const bluelyticsClient = axios.create({
  baseURL: 'https://api.bluelytics.com.ar/v2',

})

export const jsdelivrClient = axios.create({
  baseURL: 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies',

})

export const coingeckoClient = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins',
})

export const criptoYaClient = axios.create({
  baseURL: 'https://criptoya.com/api',
})

export const dolarApiClient = axios.create({
  baseURL: 'https://dolarapi.com/v1',
})

export const finnhubClient = axios.create({
  baseURL: 'https://finnhub.io/api/v1',
  params: {
    token: API_TOKEN_FINNHUB
  }
});

export const openweathermapClient = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  params: {
    appid: API_KEY_OPENWEATHER
  }
})

export const apiargenttinadatosClient = axios.create({
  baseURL: 'https://api.argentinadatos.com/v1',
})

const agent = new https.Agent({
  rejectUnauthorized: false
});


export const apiBCRAClient = axios.create({
  baseURL: 'https://api.bcra.gob.ar/estadisticas/v4.0',
  httpsAgent: agent
})


export const apiWorldBankClient = axios.create({
  baseURL: 'https://api.worldbank.org/v2',
})
