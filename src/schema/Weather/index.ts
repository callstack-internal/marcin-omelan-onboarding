
type Main = {
    temp: number;
    pressure: number;
    humidity: number;
    // temp_min: number;
    // temp_max: number;
}

type WeatherInternal = {
    id: number;
    main: string;
    description: string;
    icon: string;
}

type SystemInformation = {
    // type: number;
    // id: number;
    // message: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export type CurrentWeather = {
    coord: { lon: number, lat: number },
    weather: WeatherInternal[],
    base: string,
    main: Main,
    wind: { speed: number, deg: number } | undefined,
    // cloudinness in %
    clouds: { all: number } | undefined,
    rain: { '3h': number } | undefined,
    snow: { '3h': number } | undefined,
    dt: number,
    sys: SystemInformation,
    // city id
    id: number,
    // city name
    name: string,
    cod: number,
}
