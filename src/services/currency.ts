import { env } from '@/env';

async function fetchAllCurrencies(): Promise<Response> {
  try {
    const currencyURL = `${env.CURRENCY_API_URL}/currencies.json`;
    const response = await fetch(currencyURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch all currencies: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error fetching all currencies:', error);
    throw error;
  }
}

async function fetchCurrencyByCode(currency: string): Promise<Response> {
  try {
    const currencyURL = `${env.CURRENCY_API_URL}/currencies/${currency.toLowerCase()}.json`;
    const response = await fetch(currencyURL);

    if (!response.ok) {
      throw new Error(`Failed to fetch currency (${currency}): ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error(`Error fetching currency (${currency}):`, error);
    throw error;
  }
}

export { fetchAllCurrencies, fetchCurrencyByCode };