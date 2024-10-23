import { ForecastWeatherInternal } from '../../schema/Weather';

export default function getWeatherForToday(data: ForecastWeatherInternal[]): ForecastWeatherInternal[] {
    return data.filter((value) => {
        var ts = value.dt * 1000;
        var today = new Date().setHours(0, 0, 0, 0);
        var thatDay = new Date(ts).setHours(0, 0, 0, 0);
        return today === thatDay;
    });
}
