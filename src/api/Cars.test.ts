import * as CarsApi from './Cars';

/** Car interface for type checking */
import { car } from './Cars';

/**
 * @TODO Write unit test for functions: makeHttpRequest & throwHttpError when implemented in Cars.ts.
 */

describe('test find', () => {

  it('should return one matching car based on a strict query', () => {

    /** Set-up */
    const query = "amc hornet sportabout (sw)"
    /** Note this data is dependant on the static data defined in ./cars.json */
    const expectedResult = [
      {
        Name: "amc hornet sportabout (sw)",
        Miles_per_Gallon: 18,
        Cylinders: 6,
        Displacement: 258,
        Horsepower: 110,
        Weight_in_lbs: 2962,
        Acceleration: 13.5,
        Year: "1971-01-01",
        Origin: "USA"
      }
    ]

    /** Call testable function */
    const response = CarsApi.find(query);

    /** Assertions */
    expect(response).toStrictEqual(expectedResult);
  });

  it('should return multiple matching cars based on a loose query', () => {

    /** Set-up */
    const query = "pontiac catalina";
    /** Note this data is dependant on the static data defined in ./cars.json */
    const expectedResult = [
      {
        Name: 'pontiac catalina',
        Miles_per_Gallon: 14,
        Cylinders: 8,
        Displacement: 455,
        Horsepower: 225,
        Weight_in_lbs: 4425,
        Acceleration: 10,
        Year: '1970-01-01',
        Origin: 'USA'
      },
      {
        Name: 'pontiac catalina brougham',
        Miles_per_Gallon: 14,
        Cylinders: 8,
        Displacement: 400,
        Horsepower: 175,
        Weight_in_lbs: 4464,
        Acceleration: 11.5,
        Year: '1971-01-01',
        Origin: 'USA'
      },
      {
        Name: 'pontiac catalina',
        Miles_per_Gallon: 14,
        Cylinders: 8,
        Displacement: 400,
        Horsepower: 175,
        Weight_in_lbs: 4385,
        Acceleration: 12,
        Year: '1972-01-01',
        Origin: 'USA'
      },
      {
        Name: 'pontiac catalina',
        Miles_per_Gallon: 16,
        Cylinders: 8,
        Displacement: 400,
        Horsepower: 170,
        Weight_in_lbs: 4668,
        Acceleration: 11.5,
        Year: '1975-01-01',
        Origin: 'USA'
      }
    ]

    /** Call testable function */
    const response = CarsApi.find(query, true);

    /** Assertions */
    expect(response).toStrictEqual(expectedResult);
  });

  it('should return the multiple matching cars based on a strict query', () => {

    /** Set-up */
    const query = "pontiac catalina";
    /** Note this data is dependant on the static data defined in ./cars.json */
    const expectedResult = [
      {
        Name: 'pontiac catalina',
        Miles_per_Gallon: 14,
        Cylinders: 8,
        Displacement: 455,
        Horsepower: 225,
        Weight_in_lbs: 4425,
        Acceleration: 10,
        Year: '1970-01-01',
        Origin: 'USA'
      },
      {
        Name: 'pontiac catalina',
        Miles_per_Gallon: 14,
        Cylinders: 8,
        Displacement: 400,
        Horsepower: 175,
        Weight_in_lbs: 4385,
        Acceleration: 12,
        Year: '1972-01-01',
        Origin: 'USA'
      },
      {
        Name: 'pontiac catalina',
        Miles_per_Gallon: 16,
        Cylinders: 8,
        Displacement: 400,
        Horsepower: 170,
        Weight_in_lbs: 4668,
        Acceleration: 11.5,
        Year: '1975-01-01',
        Origin: 'USA'
      }
    ]

    /** Call testable function */
    const response = CarsApi.find(query);

    /** Assertions */
    expect(response).toStrictEqual(expectedResult);
  });

  it('should return an empty array when no car names match the strict query', () => {

    /** Set-up */
    const query = "This query does not match any car names";
    /** Note this data is dependant on the static data defined in ./cars.json */
    const expectedResult: Array<car|undefined> = []

    /** Call testable function */
    const response = CarsApi.find(query);

    /** Assertions */
    expect(response).toStrictEqual(expectedResult);
  });

  it('should return an empty array when no car names match the loose query', () => {

    /** Set-up */
    const query = "This query does not match any car names";
    /** Note this data is dependant on the static data defined in ./cars.json */
    const expectedResult: Array<car|undefined> = []

    /** Call testable function */
    const response = CarsApi.find(query, true);

    /** Assertions */
    expect(response).toStrictEqual(expectedResult);
  });

});