
type Main = {
    temp: number;
    pressure: number;
    humidity: number;
    // temp_min: number;
    // temp_max: number;
}

export type OWMIcons = '01d' | '01n' | '02d' | '02n' | '03d' | '03n' | '04d' | '04n' | '09d' | '09n' | '10d' | '10n' | '11d' | '11n' | '13d' | '13n' | '50d' | '50n';

type WeatherInternal = {
    id: number;
    main: string;
    description: string;
    icon: OWMIcons;
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
