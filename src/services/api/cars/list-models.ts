import { CARS_API_URL, httpClient } from '..';

export const ListModelsService = async ({ brandId }: { brandId: number }) => {
  try {
    const response = await httpClient(
      `${CARS_API_URL}/carros/marcas/${brandId}/modelos`,
      {
        method: 'GET',
      }
    );

    const json = await response.json();

    if (response.status !== 200) {
      return [json, true];
    }

    return [json, null];
  } catch (error) {
    return [null, error];
  }
};
