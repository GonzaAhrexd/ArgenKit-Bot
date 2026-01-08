import { apiWorldBankClient } from "./axios";

const YEAR = '2024';

type WorldBankResponse = {
    valor: number;
}

type AllWorldBankResponse = {
    PBI: number;
    PBIPerCapita: number;
}


export const getPBIData = async (): Promise<WorldBankResponse> => {
    try {
        const response = await apiWorldBankClient.get(`/country//AR/indicator/NY.GDP.MKTP.CD`, {
            params: {
                date: YEAR,
                format: 'json'
            }
        });

        const responseImproved = {
            valor: response.data[1][0].value
        }



        return responseImproved;
    } catch (error) {
        throw error;
    }
};

export const getPBIPerCapitaData = async (): Promise<WorldBankResponse> => {
    try {
        const response = await apiWorldBankClient.get(`/country/AR/indicator/NY.GDP.PCAP.CD`, {
            params: {
                date: YEAR,
                format: 'json'
            }
        });


        const responseImproved = {
            valor: response.data[1][0].value
        }

        return responseImproved;
    }

    catch(error){
        console.log(error)
        throw error;
    }
}

export const getAllPbiData = async (): Promise<AllWorldBankResponse> => {
    try{
        const [PBIData, PBIPerCapitaData] = await Promise.all([
            getPBIData(),
            getPBIPerCapitaData()
        ]);

        const responseImproved = {
            PBI: PBIData.valor,
            PBIPerCapita: PBIPerCapitaData.valor
        }

        return responseImproved;
    }catch(error){
        console.log(error)
        throw error;
    }
}