export const httpClient = async (url: string, props: RequestInit) => {
  return await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...props,
  });
};

export const AUTH_API_URL = 'https://test-api-y04b.onrender.com';
export const CARS_API_URL = 'https://parallelum.com.br/fipe/api/v1';
