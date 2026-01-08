import { apiargenttinadatosClient } from "./axios";



type RiesgoDataResponse = {
    ultimoDato: number,
    datoAnterior: number,
    porcentajeCambio: string,
    isCambioRiesgo: string
}

export const getRiesgoPaisData = async (): Promise<RiesgoDataResponse> => {


    try {

        const response = await apiargenttinadatosClient.get('/finanzas/indices/riesgo-pais/')

        const responseImproved = {
            ultimoDato: response.data[response.data.length - 1]['valor'],
            datoAnterior: response.data[response.data.length - 2]['valor'],
            porcentajeCambio: (((response.data[response.data.length - 1]['valor'] - response.data[response.data.length - 2]['valor']) / response.data[response.data.length - 2]['valor']) * 100).toFixed(2),
            isCambioRiesgo: response.data[response.data.length - 1]['valor'] > response.data[response.data.length - 2]['valor'] ? "🔺" : response.data[response.data.length - 1]['valor'] == response.data[response.data.length - 2]['valor'] ? "⏸️" : "<:flechashaciaabajo:1210747546096369664>"
        }

        return responseImproved
    }
    catch (error) {
        throw new Error("Error al obtener los datos del Riesgo País")
    }


}