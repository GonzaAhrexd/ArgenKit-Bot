import { openweathermapClient } from "./axios";
import capitales from '../variables/capitales-valores'

type WeatherData = {
    coord: {
        lon: number,
        lat: number
    },
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    base: string,
    main: {
        temp: number,
        feels_like: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number,
        sea_level: number,
        grnd_level: number
    },
    visibility: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: number,
        sunset: number
    },
    timezone: number,
    id: number,
    name: string,
    cod: number

}
// GET: /weather por ciudad
export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
    try {
        const response = await openweathermapClient.get('/weather', {
            params: {
                q: city,
                units: 'metric',
                lang: 'es'
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
};

// GET: /weather para todas las capitales de Argentina
export const getWeatherAllCapitals = async () => {
    try {
        const apiRequests = capitales.map(capital =>
            openweathermapClient.get(`/weather`, {
                params: {
                    units: 'metric',
                    lang: 'es',
                    lat: capital.latitud,
                    lon: capital.longitud
                }
            })
        );

        const responses = await Promise.all(apiRequests);

        return capitales.map((capital, index) => {
            const data = responses[index].data;
            return {
                ...capital,
                temperatura: data.main.temp,
                sensacion: data.main.feels_like,
                main: data.weather[0].main,
                estado: data.weather[0].description
            };
        });

    } catch (error) {
        console.error("Error al obtener climas:", error);
        throw error;
    }
}