
export interface CurrencyRates {
    [key: string]: number;
}

export interface CurrencyData {
    data: CurrencyRates;
}

export async function fetchCurrencyRates(): Promise<CurrencyData> {
    const API_KEY = 'fca_live_Hfqz9e72PupoOJ4XMnNGGWjodqdC5rvA0flmbXiU';
    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch currency rates');
    }
    const data = await response.json();
    return data;
}
