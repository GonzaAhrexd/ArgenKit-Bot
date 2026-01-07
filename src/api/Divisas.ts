import { bluelyticsClient, jsdelivrClient } from './axios'

import axios from 'axios';

type values = {
    "value_avg": number,
    "value_sell": number,
    "value_buy": number
}

type DolarResponse = {
    blue: values,
    oficial: values
    oficial_euro: values
    blue_euro: values
}

type DivisasResponse = {
    [key: string]: number
}

export const getDolar = async (): Promise<DolarResponse> => {
    try {
        const response = await bluelyticsClient.get('/latest')
        return response.data

    } catch (error) {
        console.error('Error fetching Bluelytics data:', error)
        throw error 
    }
}

export const getDivisas = async (): Promise<DivisasResponse> => {
    try {
        const response = await jsdelivrClient.get('/usd.json')
        return response.data['usd']
    } catch (error) {
        console.error('Error fetching currency data:', error)
        throw error
    }
}


export const getAll = async () => {
    try {
       const [divisas, dolar] = await Promise.all([
            getDivisas(),
            getDolar()
        ]);

        return {
            divisas: divisas,
            dolar: dolar
        }   

    } catch (error) {
        console.error('Error fetching data:', error)
        throw error

    }

}