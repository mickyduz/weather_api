import { faker } from "@faker-js/faker";

export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
export const generateLondonWeatherDays = (): WeatherDataDays => {
  // Generate random weather data
  const generatedWeatherDataDays = {
    day1: faker.number.int({ min: -15, max: 30 }),
    day2: faker.number.int({ min: -15, max: 33 }),
    day3: faker.number.int({ min: -10, max: 32 }),
  };

  // Return weather data
  return generatedWeatherDataDays;
};

export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
export const generateDublinWeatherDays = (): WeatherDataDays => {
  // Generate random weather data
  const generatedWeatherDataDays = {
    day1: faker.number.int({ min: -15, max: 30 }),
    day2: faker.number.int({ min: -15, max: 33 }),
    day3: faker.number.int({ min: -10, max: 32 }),
  };

  // Return weather data
  return generatedWeatherDataDays;
};
export const generateBucharestWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
export const generateBucharestWeatherDays = (): WeatherDataDays => {
  // Generate random weather data
  const generatedWeatherDataDays = {
    day1: faker.number.int({ min: -15, max: 30 }),
    day2: faker.number.int({ min: -15, max: 33 }),
    day3: faker.number.int({ min: -10, max: 32 }),
  };

  // Return weather data
  return generatedWeatherDataDays;
};
export const generateMadridWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
export const generateMadridWeatherDays = (): WeatherDataDays => {
  // Generate random weather data
  const generatedWeatherDataDays = {
    day1: faker.number.int({ min: -15, max: 30 }),
    day2: faker.number.int({ min: -15, max: 33 }),
    day3: faker.number.int({ min: -10, max: 32 }),
  };

  // Return weather data
  return generatedWeatherDataDays;
};

