type CountryGetProps = string

export const fetchCountries = async (country: CountryGetProps) => {
    try {
        const API_URL = `https://restcountries.com/v3.1/name/${country}?fields=name,capital,currencies,flag`

        const result: Response = await fetch(API_URL);

        if (result.status === 200) {
            return await result.json()
        }

        if (result.status === 404) {
            throw new Error('The country name is not found.')
        }

        throw new Error('Failed to fetch countries API.')
    } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch countries API.')
    }
}