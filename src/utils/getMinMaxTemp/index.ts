import { ForecastWeatherInternal } from '../../schema/Weather';

export default function getMinMaxTemp(data: ForecastWeatherInternal[]): { minTemp: number, maxTemp: number } {
    return data.reduce((acc, curr) => {
        if (curr.main.temp < acc.minTemp) {
            acc.minTemp = Math.round(curr.main.temp);
        }
        if (curr.main.temp > acc.maxTemp) {
            acc.maxTemp = Math.round(curr.main.temp);
        }
        return acc;
    }, { minTemp: Infinity, maxTemp: -Infinity });
}
