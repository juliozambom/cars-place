import { CARS_API_URL, httpClient } from '..';

export const ListBrandsService = async () => {
  try {
    const response = await httpClient(`${CARS_API_URL}/carros/marcas`, {
      method: 'GET',
    });

    const json = await response.json();

    if (response.status !== 200) {
      return [json, true];
    }

    return [json, null];
  } catch (error) {
    return [null, error];
  }
};
