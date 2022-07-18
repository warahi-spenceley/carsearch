import carsData from './cars.json';

export interface car {
  Name: string;
  Miles_per_Gallon: number;
  Cylinders: number;
  Displacement: number;
  Horsepower: number;
  Weight_in_lbs: number;
  Acceleration: number;
  Year: string;
  Origin: string;
}

interface queryOptions {
  filter?: string;
}

/**
 * 
 * Mock REST API to query the car objects from './cars.json'.
 * @param carNameQuery The name of the car(s) being queried.
 * @param options The query options, optional.
 * @param options.[filter] If this value equals 'looseMatch', the query will return all cars with the query included in their name. If value is 'exactMatch' or not provided, it will only return exact matches. Default is 'exactMatch'.
 * @returns An array of matching car object(s) or an empty array.
 */
export const find = (carNameQuery: string, options: queryOptions = {
  filter: "exactMatch",
}) => {
  if (!carNameQuery) return;

  const carsFound: Array<car|null> = [];

  try {
    carsData.map((car: any) => {
      if (options.filter === 'looseMatch' && car.Name.includes(carNameQuery)) carsFound.push(car);
      else if (carNameQuery === car.Name) carsFound.push(car);
    });
  } catch (error) {
    console.error("Failed to query cars. Reason: ", error);
  }

  return carsFound;
}

/**
 * @TODO For fun and learning:
 * Move these functions into their own API repository called carsearch-api.
 * Using GitHub Actions, configure the pipelines to test & deploy to AWS Lambda with multiple environments.
 * Then call these serverless Lambda functions via HTTP request, using the functions below:
 * */

// const throwHttpError = async (response) => {
//   const error = new Error(`API failed with HTTP status "${response.status}". See network logs.`);
//   error.http = { status: response.status };
//   try {
//     error.http.response = await response.json();
//   } catch (e) {
//     console.warn(`Failed to get JSON from fail response:`, e);
//   }
//   throw error;
// };

// export const makeHttpRequest = async ({
//   method = 'get',
//   endpoint = '',
//   body
// } = {}) => {
//   let request = {
//     method,
//     mode: 'cors',
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Content-Type': 'application/json'
//     },
//   }
//   if (body) request.body = JSON.stringify(body);
  
//   const url = `${process.env.REACT_APP_CARS_API_URL}/${endpoint}`;

//   const response = await fetch(url, request);
//   if (!response.ok) await throwHttpError(response);
//   return await response.json();
// };

// /**
//  * Internal functions that should be called in unit tests only
//  */
// export const testable = {
//   throwHttpError,
// };  