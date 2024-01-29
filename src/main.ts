import './style.css'
import { fetchCountries } from './api.service'

interface Country {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        common: string;
        official: string;
      }
    };
  };
  flag: string;
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput: HTMLInputElement | null = document.querySelector('#search-input');
  const searchButton = document.querySelector('#search-button');
  // const table = document.querySelector('#table');
  // const tableTbody = table?.getElementsByTagName('tbody')[0];
  const tableTbody = document.querySelector('#table-tbody');

  if (!searchInput || !searchButton) {
    return;
  }

  searchButton.addEventListener('click', async () => {
    try {
      const country = searchInput.value.trim()

      validateCountry(country)
      clearTableContent()
      const countries = await fetchCountries(country);
      showCountries(countries)
    } catch (error: any) {
      alert(error.message)
    }
  })

  const validateCountry = (country: string) => {
    if (!country) {
      throw new Error('Country name cannot be empty!')
    }
  }

  const clearTableContent = () => {
    tableTbody!.textContent = ''
  }

  const showCountries = (countries: Country[] = []) => {
    countries.forEach(insertCountry)
  }

  const insertCountry = (country: Country) => {
    const { name, capital, currencies, flag } = country

    const row = (tableTbody as HTMLTableElement).insertRow();

    const nameCell = row.insertCell(0);
    const capitalCell = row.insertCell(1);
    const currenyCell = row.insertCell(2);
    const flagCell = row.insertCell(3);

    nameCell.textContent = name.common;
    capitalCell.textContent = capital[0];
    currenyCell.textContent = Object.keys(currencies)[0];
    flagCell.textContent = flag;
  }
})